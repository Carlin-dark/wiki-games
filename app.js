function createSlug(text) {
    return String(text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

const ADMIN_EMAIL = 'konozuba1k@gmail.com';
let favoriteRoutes = [];
let favoritesLoadedFor = null;

function logFirebaseError(context, error) {
    console.error(`[Firebase] ${context}`, error);
}

async function getFirestoreDocumentWithRetry(services, documentReference, attempts = 3) {
    let lastError;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
        try {
            return await services.getDocFromServer(documentReference);
        } catch (error) {
            lastError = error;
            if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, 500 * attempt));
        }
    }
    try {
        console.warn('[Firebase] Servidor indisponível; tentando dados em cache.', lastError);
        return await services.getDoc(documentReference);
    } catch (cacheError) {
        cacheError.cause = lastError;
        throw cacheError;
    }
}

async function getFirestoreDocumentFast(services, documentReference, timeout = 8000) {
    return Promise.race([
        services.getDoc(documentReference),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Firestore demorou para responder')), timeout))
    ]);
}

async function ensureUserProfile(user) {
    const services = window.firebaseServices;
    if (!services?.rtdb || !user) return;
    const profileReference = services.ref(services.rtdb, `users/${user.uid}`);
    try {
        const existingSnapshot = await services.get(profileReference);
        const existingProfile = existingSnapshot.val() || {};
        const username = user.displayName || existingProfile.username || 'Usuário';
        await services.set(profileReference, {
            ...existingProfile,
            username,
            name: existingProfile.name || username,
            email: user.email || existingProfile.email || '',
            photoURL: user.photoURL || existingProfile.photoURL || ''
        });
        console.log('Perfil salvo com sucesso no Realtime Database');
    } catch (error) {
        logFirebaseError(`Falha ao criar/verificar perfil ${user.uid}`, error);
    }
}

window.addEventListener('firebase-error', event => {
    logFirebaseError('Serviços indisponíveis', event.detail);
});

function isAdminUser(user) {
    return String(user?.email || '').trim().toLowerCase() === ADMIN_EMAIL;
}

function getFavorites() {
    return favoriteRoutes;
}

function isFavorite(route) {
    return getFavorites().includes(route);
}

function favoriteButton(route, compact = false) {
    const active = isFavorite(route);
    return `<button class="favorite-btn${compact ? ' favorite-btn-compact' : ''}${active ? ' is-favorite' : ''}" type="button" data-favorite-route="${route}" aria-label="${active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}" aria-pressed="${active}"><i class="fa-${active ? 'solid' : 'regular'} fa-heart"></i>${compact ? '' : `<span>${active ? 'Favoritado' : 'Favoritar'}</span>`}</button>`;
}

async function toggleFavorite(route) {
    const services = window.firebaseServices;
    const user = services?.auth.currentUser;
    if (!user) return;
    const favorites = getFavorites();
    const nextFavorites = favorites.includes(route) ? favorites.filter(item => item !== route) : [...favorites, route];
    const profileReference = services.ref(services.rtdb, `users/${user.uid}`);
    const profileSnapshot = await services.get(profileReference);
    await services.set(profileReference, { ...(profileSnapshot.val() || {}), favorites: nextFavorites });
    favoriteRoutes = nextFavorites;
    document.querySelectorAll(`[data-favorite-route="${route}"]`).forEach(button => {
        const active = nextFavorites.includes(route);
        button.classList.toggle('is-favorite', active);
        button.setAttribute('aria-pressed', active);
        button.setAttribute('aria-label', active ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
        const icon = button.querySelector('i');
        if (icon) icon.className = `fa-${active ? 'solid' : 'regular'} fa-heart`;
        const label = button.querySelector('span');
        if (label) label.textContent = active ? 'Favoritado' : 'Favoritar';
    });
}

async function loadFavorites(user) {
    const services = window.firebaseServices;
    if (!services || !user) {
        favoriteRoutes = [];
        favoritesLoadedFor = null;
        return;
    }
    const snapshot = await services.get(services.ref(services.rtdb, `users/${user.uid}`));
    favoriteRoutes = Array.isArray(snapshot.val()?.favorites) ? snapshot.val().favorites : [];
    favoritesLoadedFor = user.uid;
}

function renderMyListPage() {
    setPageBackground(null);
    const container = document.getElementById('article-container');
    const user = window.firebaseServices?.auth.currentUser;
    if (!user) {
        container.innerHTML = '<h1><i class="fa-solid fa-heart"></i> Minha Lista</h1><p>Entre na sua conta para acessar sua lista global.</p>';
        return;
    }
    if (favoritesLoadedFor !== user.uid) {
        container.innerHTML = '<h1><i class="fa-solid fa-heart"></i> Minha Lista</h1><p>Carregando sua lista...</p>';
        return;
    }
    const favorites = getFavorites();
    const games = favorites.map(route => ({ route, game: articlesDatabase[route] })).filter(item => item.game);
    document.title = 'Minha Lista - WikiGames';
    container.innerHTML = `
        <h1><i class="fa-solid fa-heart"></i> Minha Lista</h1>
        <p class="list-intro">Sua lista é sincronizada com sua conta em todos os dispositivos.</p>
        <div class="all-games-grid my-list-grid">
            ${games.length ? games.map(({ route, game }) => `
                <article class="all-game-card">
                    <a href="/${route}" class="game-card-image-link">${gameCoverMarkup(route, game)}</a>
                    <div class="all-game-card-content"><div class="game-card-heading"><h3><a href="/${route}">${game.title}</a></h3>${favoriteButton(route, true)}</div><p>${game.summary || ''}</p></div>
                </article>`).join('') : '<div class="all-games-empty">Você ainda não favoritou nenhum jogo.</div>'}
        </div>
    `;
    window.scrollTo(0, 0);
}

async function renderProfilePage() {
    const container = document.getElementById('article-container');
    const services = window.firebaseServices;
    const user = services?.auth.currentUser;
    const targetUid = new URLSearchParams(window.location.search).get('uid') || user?.uid;
    if (!user) {
        container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Meu perfil</h1><p>Carregando sua sessão...</p>';
        return;
    }
    container.innerHTML = `<h1><i class="fa-solid fa-id-card"></i> Meu perfil</h1><form id="profileForm" class="profile-form"><label>Nome<input name="name" value="${escapeHtml(user.displayName || user.email?.split('@')[0] || '')}" maxlength="60" required></label><label>URL do avatar<input name="photoURL" type="url" value="${escapeHtml(user.photoURL || '')}" placeholder="https://..." maxlength="500"></label><label>Biografia<textarea name="bio" maxlength="280" placeholder="Carregando dados do perfil..."></textarea></label><label>Redes sociais<input name="socials" maxlength="300" placeholder="Carregando dados do perfil..."></label><button class="share-page-btn" type="submit"><i class="fa-solid fa-floppy-disk"></i> Salvar perfil</button><p id="profileMessage" role="status"></p></form><section class="profile-ratings"><h2>Jogos Avaliados</h2><div id="profileRatings"><p>Carregando avaliações...</p></div></section><section class="profile-lists"><h2>Listas Criadas</h2><div id="profileLists"><p>Carregando listas...</p></div></section>`;
    const profileForm = document.getElementById('profileForm');
    if (!profileForm) return;
    const profileFields = profileForm.elements;
    services.get(services.ref(services.rtdb, `users/${user.uid}`)).then(snapshot => {
        const profile = snapshot.val();
        if (!profile) return;
        profileFields.name.value = profile.name || profile.username || profileFields.name.value;
        profileFields.photoURL.value = profile.photoURL || user.photoURL || '';
        profileFields.bio.value = profile.bio || '';
        profileFields.socials.value = profile.socials || '';
        profileFields.bio.placeholder = 'Conte um pouco sobre você';
        profileFields.socials.placeholder = 'https://...';
    }).catch(error => logFirebaseError('Falha ao carregar dados complementares do perfil', error));
    const ratedGames = await getRatedGamesMarkup(services, targetUid);
    const ratingsSection = document.getElementById('profileRatings');
    if (ratingsSection) ratingsSection.innerHTML = ratedGames;
    const createdLists = await getCreatedListsMarkup(services, targetUid);
    const listsSection = document.getElementById('profileLists');
    if (listsSection) listsSection.innerHTML = createdLists;
    profileForm.addEventListener('submit', async event => {
        event.preventDefault();
        const form = event.currentTarget;
        const message = document.getElementById('profileMessage');
        try {
            await services.updateProfile(user, { displayName: form.name.value.trim(), photoURL: form.photoURL.value.trim() || null });
            const profileReference = services.ref(services.rtdb, `users/${user.uid}`);
            const profileSnapshot = await services.get(profileReference);
            await services.set(profileReference, { ...(profileSnapshot.val() || {}), name: form.name.value.trim(), username: form.name.value.trim(), email: user.email || '', photoURL: form.photoURL.value.trim(), bio: form.bio.value.trim(), socials: form.socials.value.trim() });
            message.textContent = 'Perfil salvo.';
        } catch (error) {
            logFirebaseError('Falha ao salvar o perfil', error);
            message.textContent = 'Não foi possível salvar o perfil.';
        }
    });
}

async function getRatedGamesMarkup(services, targetUid) {
    if (!services?.get || !targetUid) {
        return '<p>Não foi possível carregar os jogos avaliados.</p>';
    }

    try {
        const snapshot = await services.get(services.ref(services.rtdb, 'avaliar'));
        const ratingsByGame = snapshot.val() || {};
        const ratings = Object.entries(ratingsByGame)
            .map(([gameId, ratingsByUser]) => ({ gameId, ...(ratingsByUser?.[targetUid] || {}) }))
            .filter(rating => rating.userId === targetUid)
            .filter(rating => Number(rating.rating) >= 1 && Number(rating.rating) <= 5)
            .sort((first, second) => String(first.gameId).localeCompare(String(second.gameId)));

        if (!ratings.length) return '<p>Este usuário ainda não avaliou nenhum jogo.</p>';

        return `<div class="profile-ratings-list">${ratings.map(rating => {
            const gameId = String(rating.gameId || '');
            const game = articlesDatabase[gameId];
            const gameName = game?.title || gameId || 'Jogo desconhecido';
            const value = Number(rating.rating);
            const stars = Array.from({ length: 5 }, (_, index) => `<i class="fa-${index < value ? 'solid' : 'regular'} fa-star"></i>`).join('');
            return `<div class="profile-rating-item"><a href="/?route=${encodeURIComponent(gameId)}">${escapeHtml(gameName)}</a><span class="profile-rating-stars" aria-label="Nota ${value} de 5">${stars}</span><strong>${value}/5</strong></div>`;
        }).join('')}</div>`;
    } catch (error) {
        logFirebaseError(`Falha ao carregar avaliações do perfil ${targetUid}`, error);
        return '<p>Não foi possível carregar os jogos avaliados.</p>';
    }
}

async function getCreatedListsMarkup(services, targetUid) {
    if (!services?.get || !targetUid) return '<p>Não foi possível carregar as listas.</p>';

    try {
        const snapshot = await services.get(services.ref(services.rtdb, 'lists'));
        const lists = Object.entries(snapshot.val() || {})
            .map(([id, list]) => ({ id, ...list }))
            .filter(list => list.authorId === targetUid)
            .sort((first, second) => Number(second.createdAt || 0) - Number(first.createdAt || 0));

        if (!lists.length) return '<p>Este usuário ainda não criou nenhuma lista.</p>';
        return lists.map(list => renderPublicListCard(list)).join('');
    } catch (error) {
        logFirebaseError(`Falha ao carregar listas do perfil ${targetUid}`, error);
        return '<p>Não foi possível carregar as listas.</p>';
    }
}

async function renderPublicProfilePage(userId) {
    const container = document.getElementById('article-container');
    const services = window.firebaseServices;
    if (!userId) {
        container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>Perfil indisponível.</p>';
        return;
    }
    if (!services) {
        container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>Conectando ao Firebase...</p>';
        window.addEventListener('firebase-ready', () => renderPublicProfilePage(userId), { once: true });
        window.addEventListener('firebase-error', () => {
            container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>O Firebase não está disponível agora.</p>';
        }, { once: true });
        return;
    }
    container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>Carregando perfil...</p>';
    try {
        const snapshot = await services.get(services.ref(services.rtdb, `users/${userId}`));
        if (!snapshot.exists()) {
            container.innerHTML = '<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>Este perfil ainda não foi preenchido.</p>';
            return;
        }
        const profile = snapshot.val();
        const name = profile.name || 'Usuário WikiGames';
        const avatar = profile.photoURL ? `<img class="public-profile-avatar" src="${escapeHtml(profile.photoURL)}" alt="Avatar de ${escapeHtml(name)}">` : '<div class="public-profile-avatar public-profile-avatar-placeholder"><i class="fa-solid fa-user"></i></div>';
        const socials = profile.socials ? `<p><i class="fa-solid fa-link"></i> <a href="${escapeHtml(profile.socials)}" target="_blank" rel="noopener noreferrer">Rede social</a></p>` : '';
        const ratedGames = await getRatedGamesMarkup(services, userId);
        const createdLists = await getCreatedListsMarkup(services, userId);
        container.innerHTML = `<section class="public-profile"><div class="public-profile-heading">${avatar}<div><h1>${escapeHtml(name)}</h1><p>Perfil da comunidade WikiGames</p></div></div><div class="public-profile-bio"><h2>Sobre</h2><p>${escapeHtml(profile.bio || 'Este usuário ainda não adicionou uma biografia.')}</p>${socials}<h2>Jogos Avaliados</h2><div id="profileRatings">${ratedGames}</div><h2>Listas Criadas</h2><div id="profileLists">${createdLists}</div></div></section>`;
        document.title = `${name} - WikiGames`;
    } catch (error) {
        logFirebaseError(`Falha ao carregar perfil ${userId}`, error);
        const errorCode = error?.code ? ` (${escapeHtml(error.code)})` : '';
        container.innerHTML = `<h1><i class="fa-solid fa-id-card"></i> Perfil</h1><p>Não foi possível carregar este perfil agora${errorCode}.</p>`;
    }
}

function escapeHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function gameCoverMarkup(route, game, className = '') {
    const imageUrl = game?.infobox?.image || '';
    const trailerData = getTrailerData(game);
    return `<img class="game-cover${className ? ` ${className}` : ''}" src="${escapeHtml(imageUrl)}" alt="Capa de ${escapeHtml(game?.title || '')}" loading="lazy" data-game-id="${escapeHtml(route)}" data-game-title="${escapeHtml(game?.title || '')}" data-game-url="${escapeHtml(new URL(`/${route}`, window.location.origin).href)}" data-highres-cover="${escapeHtml(imageUrl)}"${trailerData?.watchUrl ? ` data-trailer-url="${escapeHtml(trailerData.watchUrl)}"` : ''}>`;
}

function enhanceGameCovers(root = document) {
    root.querySelectorAll('a[href] img:not(.game-cover)').forEach(image => {
        const link = image.closest('a');
        if (!link) return;
        const url = new URL(link.href, window.location.origin);
        const route = url.searchParams.get('route') || url.pathname.replace(/^\/+|\/+$/g, '');
        const game = articlesDatabase[route];
        if (!game?.infobox?.image) return;
        image.classList.add('game-cover');
        image.dataset.gameId = route;
        image.dataset.gameTitle = game.title;
        image.dataset.gameUrl = new URL(`/${route}`, window.location.origin).href;
        image.dataset.highresCover = game.infobox.image;
        const trailerData = getTrailerData(game);
        if (trailerData?.watchUrl) image.dataset.trailerUrl = trailerData.watchUrl;
    });
}

function getHomeGames() {
    return Object.entries(articlesDatabase)
        .filter(([route, game]) => route !== 'home' && route !== 'sobre' && game.infobox?.image)
        .map(([route, game]) => ({ route, game }));
}

function renderHomeGameCard(route, game, extra = '') {
    return `<article class="home-game-item"><a href="/${route}" class="home-card">${gameCoverMarkup(route, game)}<span>${escapeHtml(game.title)}</span></a>${extra ? `<small>${extra}</small>` : ''}</article>`;
}

function renderHomeSection(title, icon, items, emptyMessage, sectionClass = '') {
    const iconClass = icon.includes(' ') ? icon : `fa-solid ${icon}`;
    return `<section class="home-section${sectionClass ? ` ${sectionClass}` : ''}"><h3><i class="${iconClass}"></i> ${title}</h3><div class="home-grid">${items.length ? items.join('') : `<p class="home-empty">${emptyMessage}</p>`}</div></section>`;
}

function renderRecentHomeSection() {
    const currentTime = Date.now();
    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const recentGames = getHomeGames()
        .filter(({ game }) => {
            const timestamp = getGameTimestamp(game);
            return Number.isFinite(timestamp) && currentTime - timestamp >= 0 && currentTime - timestamp <= weekInMilliseconds;
        })
        .sort((first, second) => getGameTimestamp(second.game) - getGameTimestamp(first.game));
    return renderHomeSection('Adicionado recentemente', 'fa-clock', recentGames.map(({ route, game }) => renderHomeGameCard(route, game)), 'Nenhum jogo foi adicionado nos últimos 7 dias.');
}

function getGameTimestamp(game) {
    const value = game?.addedAt || game?.createdAt;
    if (typeof value === 'number') return value < 100000000000 ? value * 1000 : value;
    const timestamp = Date.parse(value || '');
    return Number.isFinite(timestamp) ? timestamp : NaN;
}

function renderHomeSections() {
    const games = getHomeGames();
    const androidGames = games.filter(({ game }) => /android/i.test(game.infobox.data?.Plataformas || ''));
    const androidSection = renderHomeSection('Para Android', 'fa-brands fa-android', androidGames.map(({ route, game }) => renderHomeGameCard(route, game)), 'Nenhum jogo com versão para Android foi catalogado ainda.');
    const popularSection = renderHomeSection('Mais Curtido', 'fa-heart', [], 'Carregando as notas da comunidade...', 'home-popular-section');
    return `${androidSection}${popularSection}${renderRecentHomeSection()}`;
}

function loadPopularHomeSection() {
    const section = document.querySelector('.home-popular-section');
    const services = window.firebaseServices;
    if (!section || !services?.rtdb) {
        if (section) section.innerHTML = renderHomeSection('Mais Curtido', 'fa-heart', [], 'As notas da comunidade estarão disponíveis após conectar ao Firebase.');
        if (!services) window.addEventListener('firebase-ready', loadPopularHomeSection, { once: true });
        return;
    }
    services.onValue(services.ref(services.rtdb, 'avaliar'), snapshot => {
        const ratings = snapshot.val() || {};
        const popularGames = getHomeGames().map(({ route, game }) => {
            const values = Object.values(ratings[route] || {}).map(item => Number(item.rating)).filter(value => value >= 1 && value <= 5);
            return { route, game, average: values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0, votes: values.length };
        }).filter(item => item.votes).sort((first, second) => second.average - first.average || second.votes - first.votes).slice(0, 8);
        const replacement = document.createElement('div');
        replacement.innerHTML = renderHomeSection('Mais Curtido', 'fa-heart', popularGames.map(({ route, game, average, votes }) => renderHomeGameCard(route, game, `${average.toFixed(1)}/5 (${votes} ${votes === 1 ? 'nota' : 'notas'})`)), 'Nenhum jogo recebeu notas ainda.', 'home-popular-section');
        const currentSection = document.querySelector('.home-popular-section');
        if (currentSection && replacement.firstElementChild) {
            currentSection.replaceWith(replacement.firstElementChild);
            enhanceGameCovers(document.querySelector('.home-popular-section'));
        }
    });
}

function markArticleGalleryImages(container) {
    container.querySelectorAll('h2#galeria + div img').forEach(image => image.classList.add('gallery-image'));
}

function renderListsPage() {
    setPageBackground(null);
    const container = document.getElementById('article-container');
    document.title = 'Listas públicas - WikiGames';
    const games = Object.entries(articlesDatabase).filter(([route]) => route !== 'home' && route !== 'sobre');
    container.innerHTML = `<h1><i class="fa-solid fa-list"></i> Listas públicas</h1><p class="list-intro">Crie coleções de jogos e compartilhe o link com a comunidade.</p><form id="publicListForm" class="public-list-form"><input name="title" placeholder="Nome da sua lista" maxlength="80" required><textarea name="description" placeholder="Descrição da lista" maxlength="300"></textarea><div class="list-game-picker">${games.map(([route, game]) => `<label><input type="checkbox" name="games" value="${route}"> ${game.title}</label>`).join('')}</div><button class="share-page-btn" type="submit"><i class="fa-solid fa-plus"></i> Criar lista</button><span id="listMessage"></span></form><div id="publicLists" class="public-lists"><p>Carregando listas...</p></div>`;
    const services = window.firebaseServices;
    const selectedListId = new URLSearchParams(window.location.search).get('list');
    const listMessage = document.getElementById('listMessage');
    const publicListForm = document.getElementById('publicListForm');
    const publicLists = document.getElementById('publicLists');
    if (!publicListForm || !publicLists) return;
    publicListForm.addEventListener('submit', async event => {
        event.preventDefault();
        if (!services?.auth.currentUser) { listMessage.textContent = 'Entre para criar uma lista.'; return; }
        const form = event.currentTarget;
        const selectedGames = [...form.querySelectorAll('input[name="games"]:checked')].map(input => input.value);
        if (!selectedGames.length) { listMessage.textContent = 'Escolha pelo menos um jogo.'; return; }
        try {
            const user = services.auth.currentUser;
            await services.push(services.ref(services.rtdb, 'lists'), { title: form.title.value.trim(), description: form.description.value.trim(), games: selectedGames, authorId: user.uid, authorName: user.displayName || 'Usuário', createdAt: Date.now() });
            form.reset(); listMessage.textContent = 'Lista publicada.';
        } catch (error) {
            logFirebaseError('Falha ao publicar a lista', error);
            listMessage.textContent = 'Não foi possível publicar a lista.';
        }
    });
    if (!services?.rtdb) {
        publicLists.innerHTML = '<p>Conectando ao Firebase...</p>';
        window.addEventListener('firebase-ready', () => renderListsPage(), { once: true });
        return;
    }
    try {
        services.onValue(services.ref(services.rtdb, 'lists'), snapshot => {
            const allLists = Object.entries(snapshot.val() || {}).map(([id, list]) => ({ id, ...list }));
            const lists = selectedListId ? allLists.filter(list => list.id === selectedListId) : allLists;
            publicLists.innerHTML = lists.length ? lists.map(renderPublicListCard).join('') : '<p>Nenhuma lista publicada ainda.</p>';
        }, error => {
            logFirebaseError('Falha ao carregar listas', error);
            publicLists.innerHTML = '<p>Não foi possível carregar as listas agora.</p>';
        });
    } catch (error) {
        logFirebaseError('Falha ao registrar o listener de listas', error);
        publicLists.innerHTML = '<p>Não foi possível carregar as listas agora.</p>';
    }
    publicLists.addEventListener('click', async event => {
        const copyButton = event.target.closest('[data-list-url]');
        if (!copyButton) return;
        try {
            await navigator.clipboard?.writeText(copyButton.dataset.listUrl);
            copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Link copiado';
        } catch (error) {
            logFirebaseError('Falha ao copiar link da lista', error);
        }
    });
}

function renderPublicListCard(list) {
    const games = Array.isArray(list.games) ? list.games : (list.gameRoutes || []);
    const authorId = escapeHtml(list.authorId || '');
    const authorName = escapeHtml(list.authorName || list.ownerName || 'Usuário');
    return `<article class="public-list-card"><h2>${escapeHtml(list.title || 'Lista sem título')}</h2><p>${games.length} jogo${games.length === 1 ? '' : 's'} · Por <a href="/?route=perfil&uid=${encodeURIComponent(list.authorId || '')}">${authorName}</a></p>${list.description ? `<p>${escapeHtml(list.description)}</p>` : ''}<div>${games.map(route => articlesDatabase[route] ? `<a href="/${route}">${escapeHtml(articlesDatabase[route].title)}</a>` : '').join('')}</div><button class="copy-list-btn" type="button" data-list-url="${window.location.origin}/?route=listas&list=${encodeURIComponent(list.id)}"><i class="fa-solid fa-link"></i> Copiar link</button></article>`;
}

function setupChat(route, container) {
    const services = window.firebaseServices;
    if (!services) {
        window.addEventListener('firebase-ready', () => setupChat(route, container), { once: true });
        return;
    }
    const panel = document.createElement('section');
    panel.className = 'chat-panel';
    panel.dataset.chatRoute = route;
    panel.innerHTML = `<h2><i class="fa-solid fa-comments"></i> Chat da rota</h2><p>Converse sobre este jogo em uma sala separada.</p><div class="chat-messages"><span>Carregando mensagens...</span></div><form class="chat-form"><input name="message" maxlength="300" placeholder="Escreva uma mensagem..." required><button type="submit" aria-label="Enviar mensagem"><i class="fa-solid fa-paper-plane"></i></button></form>`;
    container.appendChild(panel);
    const messagesRef = services.ref(services.realtimeDb, `chats/${route}`);
    const messages = panel.querySelector('.chat-messages');
    services.onValue(messagesRef, snapshot => {
        const values = Object.values(snapshot.val() || {}).sort((first, second) => (first.timestamp || 0) - (second.timestamp || 0)).slice(-50);
        messages.innerHTML = values.length ? values.map(item => {
            const profileId = item.userId || item.uid;
            const author = escapeHtml(item.author || 'Usuário');
            const authorMarkup = profileId ? `<a class="chat-author" href="/?route=perfil&uid=${encodeURIComponent(profileId)}">${author}</a>` : `<strong>${author}</strong>`;
            return `<p>${authorMarkup} ${escapeHtml(item.text)}</p>`;
        }).join('') : '<span>Nenhuma mensagem ainda.</span>';
        messages.scrollTop = messages.scrollHeight;
    }, error => {
        logFirebaseError(`Falha ao carregar chat ${route}`, error);
        messages.innerHTML = '<span>Não foi possível carregar as mensagens.</span>';
    });
    panel.querySelector('form').addEventListener('submit', async event => {
        event.preventDefault();
        const user = services.auth.currentUser;
        const input = event.currentTarget.message;
        if (!user) { input.value = ''; input.placeholder = 'Entre para participar do chat'; return; }
        const text = input.value.trim();
        if (!text) return;
        try {
            await services.push(messagesRef, { text, userId: user.uid, author: user.displayName || user.email, timestamp: services.realtimeTimestamp() });
            input.value = '';
        } catch (error) {
            logFirebaseError(`Falha ao enviar mensagem no chat ${route}`, error);
            input.placeholder = 'Não foi possível enviar a mensagem';
        }
    });
}

function setupAccount() {
    const area = document.getElementById('accountArea');
    const button = document.getElementById('accountBtn');
    const menu = document.getElementById('accountMenu');
    if (!area || !button || !menu) return;

    function renderUser(user) {
        if (!user) {
            favoriteRoutes = [];
            favoritesLoadedFor = null;
            button.innerHTML = '<i class="fa-solid fa-user"></i><span>Entrar</span>';
            menu.innerHTML = '<strong>Entre na WikiGames</strong><button data-auth-action="google"><i class="fa-brands fa-google"></i> Entrar com Google</button><form id="emailAuthForm"><input type="email" name="email" placeholder="Seu e-mail" required><input type="password" name="password" placeholder="Sua senha" minlength="6" required><div><button type="submit" data-auth-action="login">Entrar</button><button type="button" data-auth-action="signup">Criar conta</button></div></form><small id="authMessage"></small>';
            return;
        }
        ensureUserProfile(user);
        const avatar = user.photoURL ? `<img src="${user.photoURL}" alt="">` : '<i class="fa-solid fa-user"></i>';
        const adminBadge = isAdminUser(user) ? '<i class="fa-solid fa-crown admin-crown" title="Administrador do site" aria-label="Administrador do site"></i>' : '';
        button.innerHTML = `${avatar}<span>${user.displayName || user.email.split('@')[0]}</span>${adminBadge}`;
        menu.innerHTML = `<strong>${user.displayName || user.email} ${adminBadge}</strong><a href="/?route=perfil"><i class="fa-solid fa-id-card"></i> Meu perfil</a><a href="/?route=minha-lista"><i class="fa-solid fa-heart"></i> Minha Lista</a><button data-auth-action="logout"><i class="fa-solid fa-right-from-bracket"></i> Sair</button>`;
        loadFavorites(user).then(() => {
            if (getRouteInfo().route === 'minha-lista') renderMyListPage();
        }).catch(() => { favoritesLoadedFor = user.uid; favoriteRoutes = []; });
    }

    function showMenu() { menu.hidden = false; button.setAttribute('aria-expanded', 'true'); }
    button.addEventListener('click', () => menu.hidden ? showMenu() : (menu.hidden = true, button.setAttribute('aria-expanded', 'false')));
    document.addEventListener('click', event => { if (!area.contains(event.target)) menu.hidden = true; });
    area.addEventListener('click', async event => {
        const action = event.target.closest('[data-auth-action]')?.dataset.authAction;
        if (!action || !window.firebaseServices) return;
        const services = window.firebaseServices;
        const message = document.getElementById('authMessage');
        try {
            if (action === 'google') {
                const result = await services.signInWithPopup(services.auth, new services.GoogleAuthProvider());
                ensureUserProfile(result.user);
            }
            if (action === 'logout') await services.signOut(services.auth);
            if (action === 'login' || action === 'signup') {
                event.preventDefault();
                const form = document.getElementById('emailAuthForm');
                const email = form.email.value;
                const password = form.password.value;
                let result;
                if (action === 'login') result = await services.signInWithEmailAndPassword(services.auth, email, password);
                else result = await services.createUserWithEmailAndPassword(services.auth, email, password);
                ensureUserProfile(result.user);
            }
        } catch (error) {
            logFirebaseError('Falha no fluxo de autenticação', error);
            const errorCode = error?.code ? ` (${error.code})` : '';
            if (message) message.textContent = `Não foi possível concluir o acesso${errorCode}. Verifique os dados.`;
        }
    });

    function connectFirebase() {
        const services = window.firebaseServices;
        if (!services) return;
        services.onAuthStateChanged(services.auth, user => {
            renderUser(user);
            const currentRoute = getRouteInfo().route;
            const profileId = new URLSearchParams(window.location.search).get('uid');
            if (currentRoute === 'perfil' && !profileId) {
                renderProfilePage();
            }
        });
    }
    window.addEventListener('firebase-ready', connectFirebase, { once: true });
    connectFirebase();
    renderUser(null);
}

function getRouteInfo() {
    const hashValue = window.location.hash || '';
    const pathnameValue = decodeURIComponent(window.location.pathname || '/');
    const searchParams = new URLSearchParams(window.location.search || '');

    let routeFromHash = '';
    if (hashValue.startsWith('#/')) {
        routeFromHash = hashValue.substring(2);
    } else if (hashValue.startsWith('#')) {
        routeFromHash = hashValue.substring(1);
    }

    const routeFromQuery = searchParams.get('route') || '';

    const normalizedPath = pathnameValue.endsWith('/index.html') || pathnameValue.endsWith('index.html') || pathnameValue === '/'
        ? 'home'
        : pathnameValue.replace(/^\/+|\/+$/g, '');

    const rawRoute = routeFromHash || routeFromQuery || normalizedPath || 'home';
    const [route, anchor] = rawRoute.split('#');

    return {
        route: route && route !== '' ? route : 'home',
        anchor: anchor || ''
    };
}

function buildRoutePath(route) {
    const cleanRoute = String(route || 'home').replace(/^\/+|\/+$/g, '');
    if (!cleanRoute || cleanRoute === 'home') {
        return '/';
    }
    return '/' + cleanRoute;
}

function navigateToRoute(route) {
    const nextPath = buildRoutePath(route);
    history.pushState({}, '', nextPath);
    renderPage();
}

function isInternalAppLink(href) {
    if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return false;
    }

    if (href.startsWith('#')) {
        return false;
    }

    try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return false;

        const cleanPath = url.pathname.replace(/^\/+|\/+$/g, '');
        const cleanQuery = url.searchParams.get('route');

        if (cleanQuery) return true;
        return cleanPath === '' || cleanPath === 'home' || cleanPath === 'all' || cleanPath === 'mods' || cleanPath.startsWith('categoria/') || cleanPath.startsWith('mods/') || Object.prototype.hasOwnProperty.call(articlesDatabase, cleanPath);
    } catch (error) {
        return false;
    }
}

function updateRoute(route, preserveScroll = false) {
    const nextPath = buildRoutePath(route);
    const currentPath = window.location.pathname;

    if (currentPath !== nextPath) {
        window.history.pushState({}, '', nextPath);
    }

    if (!preserveScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderPage();
}

function setPageBackground(article) {
    const backgroundWrapper = document.querySelector('.vndb-bg-wrapper');
    if (!backgroundWrapper) return;

    const imageUrl = article && article.infobox && article.infobox.image;
    if (imageUrl) {
        backgroundWrapper.style.setProperty('--game-background-image', `url("${imageUrl}")`);
        backgroundWrapper.classList.add('game-background-active');
    } else {
        backgroundWrapper.classList.remove('game-background-active');
        backgroundWrapper.style.removeProperty('--game-background-image');
    }
}

function getTrailerData(article) {
    if (!article) return null;

    const videoId = article.youtubeId || article.trailerId || article.trailer || null;
    if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(String(videoId).trim())) {
        return {
            id: String(videoId).trim(),
            embedUrl: `https://www.youtube-nocookie.com/embed/${String(videoId).trim()}?rel=0`,
            watchUrl: `https://www.youtube.com/watch?v=${String(videoId).trim()}`,
            searchUrl: null
        };
    }

    if (article.trailerUrl) {
        if (/\.mp4(?:$|[?#])/i.test(String(article.trailerUrl))) {
            return {
                id: null,
                embedUrl: null,
                watchUrl: article.trailerUrl,
                directUrl: article.trailerUrl,
                searchUrl: null
            };
        }
        const match = String(article.trailerUrl).match(/(?:v=|be\/|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        if (match && match[1]) {
            return {
                id: match[1],
                embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0`,
                watchUrl: article.trailerUrl,
                directUrl: null,
                searchUrl: null
            };
        }
    }

    return null;
}

function renderDownloadWarning() {
    return `
        <div class="download-warning">
            <h3><i class="fa-solid fa-triangle-exclamation"></i> Aviso Importante sobre Downloads</h3>
            <p>Os links de downloads disponibilizados para <em>ports</em>, <em>patches</em> de tradução e modificações são conteúdos encontrados e compartilhados pela comunidade da internet.</p>
            <p>Por questões de segurança, <strong>recomendamos fortemente</strong> que você faça o escaneamento do arquivo ou do link no site do <a href="https://www.virustotal.com/gui/home/upload" target="_blank" rel="noopener noreferrer">VirusTotal</a> antes de realizar o download ou a instalação no seu dispositivo.</p>
            <p><em>O Wiki Games não hospedará arquivos e não se responsabiliza por eventuais problemas causados por arquivos de terceiros.</em></p>
        </div>
    `;
}

function renderAllGamesPage() {
    setPageBackground(null);
    const container = document.getElementById('article-container');
    const allGames = Object.keys(articlesDatabase).filter(key => key !== 'home');
    const categories = [...new Set(allGames.flatMap(key => articlesDatabase[key].categories || []))].sort((a, b) => a.localeCompare(b));

    document.title = 'Todos os Jogos - WikiGames';
    container.innerHTML = `
        <h1><i class="fa-solid fa-list"></i> Todos os Jogos</h1>
        <div class="advanced-filters">
            <div class="filter-row">
                <label class="filter-field">
                    <span>Buscar</span>
                    <input type="text" id="allGamesSearch" placeholder="Nome do jogo...">
                </label>
                <label class="filter-field">
                    <span>Categoria</span>
                    <select id="allGamesCategory">
                        <option value="all">Todas</option>
                        ${categories.map(cat => `<option value="${createSlug(cat)}">${cat}</option>`).join('')}
                    </select>
                </label>
                <label class="filter-field">
                    <span>Ordenar</span>
                    <select id="allGamesSort">
                        <option value="title-asc">Título A-Z</option>
                        <option value="title-desc">Título Z-A</option>
                        <option value="category">Categoria</option>
                    </select>
                </label>
            </div>
        </div>
        <div id="allGamesResults" class="all-games-grid"></div>
    `;

    const searchInputEl = document.getElementById('allGamesSearch');
    const categorySelectEl = document.getElementById('allGamesCategory');
    const sortSelectEl = document.getElementById('allGamesSort');
    const resultsContainer = document.getElementById('allGamesResults');

    function renderResults() {
        const query = (searchInputEl.value || '').toLowerCase().trim();
        const selectedCategory = categorySelectEl.value;
        const selectedSort = sortSelectEl.value;

        let filteredGames = allGames.filter(key => {
            const game = articlesDatabase[key];
            const matchesQuery = !query || game.title.toLowerCase().includes(query) || (game.summary || '').toLowerCase().includes(query);
            const matchesCategory = selectedCategory === 'all' || (game.categories || []).some(cat => createSlug(cat) === selectedCategory);
            return matchesQuery && matchesCategory;
        });

        if (selectedSort === 'title-desc') {
            filteredGames.sort((a, b) => articlesDatabase[b].title.localeCompare(articlesDatabase[a].title));
        } else if (selectedSort === 'category') {
            filteredGames.sort((a, b) => {
                const catA = (articlesDatabase[a].categories || [])[0] || '';
                const catB = (articlesDatabase[b].categories || [])[0] || '';
                const byCategory = catA.localeCompare(catB);
                return byCategory !== 0 ? byCategory : articlesDatabase[a].title.localeCompare(articlesDatabase[b].title);
            });
        } else {
            filteredGames.sort((a, b) => articlesDatabase[a].title.localeCompare(articlesDatabase[b].title));
        }

        if (!filteredGames.length) {
            resultsContainer.innerHTML = '<div class="all-games-empty">Nenhum jogo encontrado com esses filtros.</div>';
            return;
        }

        resultsContainer.innerHTML = filteredGames.map(key => {
            const game = articlesDatabase[key];
            return `
                <article class="all-game-card">
                    <a href="/${key}" class="game-card-image-link">${gameCoverMarkup(key, game)}</a>
                    <div class="all-game-card-content">
                        <div class="game-card-heading"><h3><a href="/${key}">${game.title}</a></h3>${favoriteButton(key, true)}</div>
                        <p>${game.summary}</p>
                    </div>
                </article>
            `;
        }).join('');
    }

    searchInputEl.addEventListener('input', renderResults);
    categorySelectEl.addEventListener('change', renderResults);
    sortSelectEl.addEventListener('change', renderResults);
    renderResults();
    window.scrollTo(0, 0);
}

function renderModsPage(gameKey) {
    const modsPage = modsDatabase[gameKey];
    const container = document.getElementById('article-container');

    if (!modsPage) return false;

    setPageBackground(null);
    document.title = `Mods de ${modsPage.gameTitle} - WikiGames`;
    const genres = [...new Set(modsPage.mods.flatMap(mod => mod.genres))].sort((a, b) => a.localeCompare(b));

    container.innerHTML = `
        <h1><i class="fa-solid fa-puzzle-piece"></i> Mods de ${modsPage.gameTitle}</h1>
        <p class="mods-intro">Mods reunidos para <a href="/${modsPage.gameRoute}">${modsPage.gameTitle}</a>. Pesquise somente nesta coleção ou filtre por gênero.</p>
        <div class="advanced-filters mods-filters">
            <div class="filter-row">
                <label class="filter-field">
                    <span>Pesquisar mods</span>
                    <input type="text" id="modsSearch" placeholder="Nome, autor ou descrição...">
                </label>
                <label class="filter-field">
                    <span>Gênero</span>
                    <select id="modsGenre">
                        <option value="all">Todos os gêneros</option>
                        ${genres.map(genre => `<option value="${createSlug(genre)}">${genre}</option>`).join('')}
                    </select>
                </label>
            </div>
        </div>
        <div id="modsResults" class="mods-grid"></div>
        <div class="mods-request-box">
            <h2><i class="fa-brands fa-discord"></i> MOD não disponível?</h2>
            <p>Não encontrou o MOD que procura no site? Solicite sua adição através do nosso servidor oficial no Discord.</p>
            <p>Nossa equipe analisará sua solicitação e, quando possível, providenciará a disponibilização do MOD na plataforma.</p>
            <a href="https://discord.gg/T2gZfXMCAm" target="_blank" rel="noopener noreferrer" class="discord-btn"><i class="fa-brands fa-discord"></i> Enviar solicitação no Discord</a>
        </div>
    `;

    const searchInputEl = document.getElementById('modsSearch');
    const genreSelectEl = document.getElementById('modsGenre');
    const resultsContainer = document.getElementById('modsResults');

    function renderResults() {
        const query = searchInputEl.value.toLowerCase().trim();
        const selectedGenre = genreSelectEl.value;
        const filteredMods = modsPage.mods.filter(mod => {
            const searchableText = [mod.title, mod.author, mod.description, ...mod.genres].join(' ').toLowerCase();
            const matchesQuery = !query || searchableText.includes(query);
            const matchesGenre = selectedGenre === 'all' || mod.genres.some(genre => createSlug(genre) === selectedGenre);
            return matchesQuery && matchesGenre;
        });

        if (!filteredMods.length) {
            resultsContainer.innerHTML = '<div class="all-games-empty">Nenhum mod encontrado com esses filtros.</div>';
            return;
        }

        resultsContainer.innerHTML = filteredMods.map(mod => `
            <article class="mod-card">
                <img class="zoomable-image" src="${mod.cover}" alt="Capa de ${mod.title}" loading="lazy">
                <div class="mod-card-content">
                    <h2>${mod.title}</h2>
                    <p class="mod-author">Criado por: <strong>${mod.author}</strong></p>
                    <div class="mod-tags"><span>${mod.type || 'Mod de jogo'}</span>${mod.genres.map(genre => `<span>${genre}</span>`).join('')}</div>
                    <dl class="mod-meta">
                        <div><dt>Comprimento</dt><dd>${mod.length}</dd></div>
                        <div><dt>Status</dt><dd>${mod.status}</dd></div>
                        <div><dt>Lançado</dt><dd>${mod.releaseDate}</dd></div>
                        <div><dt>Plataforma</dt><dd>${mod.platform}</dd></div>
                    </dl>
                    <p>${mod.description}</p>
                    <div class="mod-gallery">
                        ${mod.screenshots.map((image, index) => `<img src="${image}" alt="Screenshot ${index + 1} de ${mod.title}" loading="lazy">`).join('')}
                    </div>
                    <div class="mod-links">
                        <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-download"></i> Download para ${mod.platform}</a>
                        ${mod.alternativeDownloadUrl ? `<a href="${mod.alternativeDownloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-server"></i> Servidor alternativo</a>` : ''}
                        ${mod.officialUrl ? `<a href="${mod.officialUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-globe"></i> Site oficial</a>` : ''}
                    </div>
                </div>
            </article>
        `).join('');
    }

    searchInputEl.addEventListener('input', renderResults);
    genreSelectEl.addEventListener('change', renderResults);
    renderResults();
    window.scrollTo(0, 0);
    return true;
}

function renderAllModsPage() {
    setPageBackground(null);
    const container = document.getElementById('article-container');
    const allMods = Object.entries(modsDatabase).flatMap(([gameKey, modsPage]) => modsPage.mods.map(mod => ({
        ...mod,
        gameKey,
        gameTitle: modsPage.gameTitle,
        gameRoute: modsPage.gameRoute
    })));
    const genres = [...new Set(allMods.flatMap(mod => mod.genres))].sort((a, b) => a.localeCompare(b));
    const games = [...new Map(allMods.map(mod => [mod.gameKey, mod.gameTitle]))].sort((a, b) => a[1].localeCompare(b[1]));

    document.title = 'Todos os Mods - WikiGames';
    container.innerHTML = `
        <h1><i class="fa-solid fa-puzzle-piece"></i> Todos os Mods</h1>
        <p class="mods-intro">Uma coleção com todos os mods disponíveis na WikiGames.</p>
        <div class="advanced-filters mods-filters">
            <div class="filter-row">
                <label class="filter-field">
                    <span>Pesquisar mods</span>
                    <input type="text" id="allModsSearch" placeholder="Nome, autor ou descrição...">
                </label>
                <label class="filter-field">
                    <span>Gênero</span>
                    <select id="allModsGenre">
                        <option value="all">Todos os gêneros</option>
                        ${genres.map(genre => `<option value="${createSlug(genre)}">${genre}</option>`).join('')}
                    </select>
                </label>
                <label class="filter-field">
                    <span>Jogo</span>
                    <select id="allModsGame">
                        <option value="all">Todos os jogos</option>
                        ${games.map(([key, title]) => `<option value="${key}">${title}</option>`).join('')}
                    </select>
                </label>
            </div>
        </div>
        <div id="allModsResults" class="mods-grid"></div>
    `;

    const searchInputEl = document.getElementById('allModsSearch');
    const genreSelectEl = document.getElementById('allModsGenre');
    const gameSelectEl = document.getElementById('allModsGame');
    const resultsContainer = document.getElementById('allModsResults');

    function renderResults() {
        const query = searchInputEl.value.toLowerCase().trim();
        const selectedGenre = genreSelectEl.value;
        const selectedGame = gameSelectEl.value;
        const filteredMods = allMods.filter(mod => {
            const searchableText = [mod.title, mod.author, mod.description, mod.gameTitle, ...mod.genres].join(' ').toLowerCase();
            return (!query || searchableText.includes(query)) &&
                (selectedGenre === 'all' || mod.genres.some(genre => createSlug(genre) === selectedGenre)) &&
                (selectedGame === 'all' || mod.gameKey === selectedGame);
        });

        resultsContainer.innerHTML = filteredMods.length
            ? filteredMods.map(mod => `
                <article class="mod-card">
                    <img class="zoomable-image" src="${mod.cover}" alt="Capa de ${mod.title}" loading="lazy">
                    <div class="mod-card-content">
                        <p class="mod-game-link"><i class="fa-solid fa-gamepad"></i> <a href="/${mod.gameRoute}">${mod.gameTitle}</a></p>
                        <h2>${mod.title}</h2>
                        <p class="mod-author">Criado por: <strong>${mod.author}</strong></p>
                        <div class="mod-tags"><span>${mod.type || 'Mod de jogo'}</span>${mod.genres.map(genre => `<span>${genre}</span>`).join('')}</div>
                        <dl class="mod-meta">
                            <div><dt>Comprimento</dt><dd>${mod.length}</dd></div>
                            <div><dt>Status</dt><dd>${mod.status}</dd></div>
                            <div><dt>Lançado</dt><dd>${mod.releaseDate}</dd></div>
                            <div><dt>Plataforma</dt><dd>${mod.platform}</dd></div>
                        </dl>
                        <p>${mod.description}</p>
                        <div class="mod-gallery">${mod.screenshots.map((image, index) => `<img src="${image}" alt="Screenshot ${index + 1} de ${mod.title}" loading="lazy">`).join('')}</div>
                        <div class="mod-links">
                            <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-download"></i> Download para ${mod.platform}</a>
                            ${mod.alternativeDownloadUrl ? `<a href="${mod.alternativeDownloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-server"></i> Servidor alternativo</a>` : ''}
                            ${mod.officialUrl ? `<a href="${mod.officialUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-globe"></i> Site oficial</a>` : ''}
                        </div>
                    </div>
                </article>
            `).join('')
            : '<div class="all-games-empty">Nenhum mod encontrado com esses filtros.</div>';
    }

    searchInputEl.addEventListener('input', renderResults);
    genreSelectEl.addEventListener('change', renderResults);
    gameSelectEl.addEventListener('change', renderResults);
    renderResults();
    window.scrollTo(0, 0);
}

function setupRating(route, panel) {
    const services = window.firebaseServices;
    const average = panel.querySelector('#ratingAverage');
    const stars = [...panel.querySelectorAll('[data-rating]')];
    
    const drawStars = value => stars.forEach(star => {
        const isSelected = Number(star.dataset.rating) <= value;
        star.classList.toggle('selected', isSelected);
        star.querySelector('i').className = `fa-${isSelected ? 'solid' : 'regular'} fa-star`;
    });

    if (!services?.rtdb) {
        average.textContent = 'Disponível após conectar ao Firebase';
        window.addEventListener('firebase-ready', () => setupRating(route, panel), { once: true });
        return;
    }

    const ratingRef = services.ref(services.rtdb, `avaliar/${route}`);

    // Escuta atualizações no Firestore em tempo real
    try {
        services.onValue(ratingRef, snapshot => {
            const ratings = snapshot.val() || {};
            const user = services.auth?.currentUser;
            const values = [];

            Object.values(ratings).forEach(data => {
                const val = Number(data.rating) || 0;
                if (val >= 1 && val <= 5) {
                    values.push(val);
                }
                if (data.userId === user?.uid) {
                    drawStars(data.rating);
                }
            });

            // Exibe a média geral do jogo
            const result = values.length 
                ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1) 
                : 'Ainda sem notas';
            average.textContent = values.length ? `${result}/5 (${values.length})` : result;
        }, error => {
            logFirebaseError(`Falha ao carregar avaliações de ${route}`, error);
            average.textContent = 'Avaliações indisponíveis';
        });
    } catch (error) {
        logFirebaseError(`Falha ao registrar listener de ${route}`, error);
        average.textContent = 'Avaliações indisponíveis';
    }

    if (services.onAuthStateChanged) {
        services.onAuthStateChanged(services.auth, user => {
            services.get(ratingRef).then(snapshot => {
                const currentRating = snapshot.val()?.[user?.uid];
                drawStars(Number(currentRating?.rating) || 0);
            }).catch(error => logFirebaseError(`Falha ao carregar nota do usuário em ${route}`, error));
        });
    }

    // Salva a nota no Firestore
    const saveRating = async value => {
        const user = services.auth?.currentUser;
        if (!user) {
            average.textContent = 'Faça login para avaliar';
            throw new Error('Usuário não autenticado');
        }

        const ratingId = `${route}__${user.uid}`;
        const ratingReference = services.ref(services.rtdb, `avaliar/${route}/${user.uid}`);
        const ratingData = {
            userId: user.uid,
            rating: Number(value),
            updatedAt: Date.now()
        };

        try {
            await services.set(ratingReference, ratingData);
            console.log('[Firebase] Avaliação salva com sucesso:', ratingId);
        } catch (error) {
            console.error('[Realtime Database Rating Error]', error);
            logFirebaseError(`Falha ao salvar avaliação de ${route}`, error);
            average.textContent = 'Erro ao salvar nota no servidor';
            throw error;
        }
    };

    // Eventos de clique nas estrelas
    stars.forEach(star => star.addEventListener('click', async () => {
        if (!services.auth?.currentUser) {
            average.textContent = 'Faça login para avaliar';
            return;
        }

        const value = Number(star.dataset.rating);
        stars.forEach(button => { button.disabled = true; });
        average.textContent = 'Salvando nota...';

        try {
            await saveRating(value);
            drawStars(value);
            average.textContent = 'Sua nota foi salva!';
        } catch (error) {
            average.textContent = 'Erro ao salvar nota no servidor';
        } finally {
            stars.forEach(button => { button.disabled = false; });
        }
    }));
}

function renderPage() {
    const { route, anchor } = getRouteInfo();
    const container = document.getElementById('article-container');

    setPageBackground(null);

    if (route === 'all') {
        renderAllGamesPage();
        return;
    }

    if (route === 'mods') {
        renderAllModsPage();
        return;
    }

    if (route === 'minha-lista') {
        renderMyListPage();
        return;
    }

    if (route === 'perfil') {
        setPageBackground(null);
        const profileId = new URLSearchParams(window.location.search).get('uid');
        if (profileId) {
            renderPublicProfilePage(profileId);
        } else {
            document.title = 'Meu perfil - WikiGames';
            renderProfilePage();
        }
        return;
    }

    if (route === 'listas') {
        renderListsPage();
        return;
    }

    if (route.startsWith('mods/')) {
        if (renderModsPage(route.split('/')[1])) return;
    }

    if (route.startsWith('categoria/')) {
        const catSlug = route.split('/')[1];
        let foundGames = [];
        let catNameDisplay = 'Categoria';

        for (const key in articlesDatabase) {
            const game = articlesDatabase[key];
            if (game.categories) {
                game.categories.forEach(cat => {
                    if (createSlug(cat) === catSlug) {
                        foundGames.push({ key, title: game.title, summary: game.summary });
                        catNameDisplay = cat;
                    }
                });
            }
        }

        document.title = `Categoria: ${catNameDisplay} - WikiGames`;
        let html = `<h1><i class="fa-solid fa-tag"></i> Categoria: ${catNameDisplay}</h1>`;

        if (foundGames.length > 0) {
            html += `<ul class="category-list">`;
            foundGames.forEach(g => {
                html += `<li><a href="/${g.key}"><h3>${g.title}</h3></a><p>${g.summary}</p></li>`;
            });
            html += `</ul>`;
        } else {
            html += '<p>Nenhum jogo encontrado nesta categoria.</p>';
        }

        container.innerHTML = html;
        window.scrollTo(0, 0);
        return;
    }

    const article = articlesDatabase[route];

    if (article) {
        setPageBackground(article);
        document.title = `${article.title} - WikiGames`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', article.summary);
        }

        const isGamePage = route !== 'home' && route !== 'sobre' && route !== 'all' && !route.startsWith('categoria/');
        let htmlContent = route === 'home'
            ? renderHomeSections()
            : `<div class="article-title-row"><h1>${article.title}</h1>${isGamePage ? favoriteButton(route) : ''}</div>`;

        if (route !== 'home' && article.infobox) {
            htmlContent += `<div class="infobox">
                <div class="infobox-title">${article.title}</div>
                    ${gameCoverMarkup(route, article, 'zoomable-image')}
                <table>`;
            for (const [key, value] of Object.entries(article.infobox.data)) {
                htmlContent += `<tr><th>${key}</th><td>${value}</td></tr>`;
            }
            htmlContent += `</table></div>`;
        }

        if (article.toc && article.toc.length > 0) {
            htmlContent += `<div class="toc"><div class="toc-title">Índice</div><ul>`;
            article.toc.forEach(item => {
                htmlContent += `<li><a href="/${route}#${item.id}">${item.text}</a></li>`;
            });
            htmlContent += `</ul></div>`;
        }

        htmlContent += `<div class="article-text">${article.content}</div>`;

        if (isGamePage) {
            htmlContent += renderDownloadWarning();
        }

        const trailerData = route !== 'home' && !route.startsWith('categoria/') ? getTrailerData(article) : null;
        if (trailerData) {
            htmlContent += `
                <div class="trailer-panel">
                    <div class="trailer-header"><i class="fa-brands fa-youtube"></i> Trailer e vídeo do jogo</div>
                    ${trailerData.id ? `
                        <div class="video-frame">
                            <iframe src="${trailerData.embedUrl}" title="Trailer de ${article.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    ` : trailerData.directUrl ? `
                        <div class="video-frame">
                            <video src="${escapeHtml(trailerData.directUrl)}" title="Trailer de ${escapeHtml(article.title)}" controls preload="metadata"></video>
                        </div>
                    ` : ''}
                    <div class="trailer-actions">
                        ${trailerData.watchUrl ? `<a href="${trailerData.watchUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir trailer</a>` : ''}
                    </div>
                </div>
            `;
        }

        if (article.categories) {
            htmlContent += `<hr style="margin: 30px 0 15px;"><p style="font-size:13px;"><i class="fa-solid fa-tags"></i> <strong>Categorias:</strong> `;
            const catLinks = article.categories.map(cat => `<a href="/?route=categoria/${createSlug(cat)}">${cat}</a>`);
            htmlContent += catLinks.join(' | ') + `</p>`;
        }

        if (route !== 'home') {
            htmlContent += `
                <div class="article-actions">
                    <button id="sharePageBtn" class="share-page-btn" type="button">
                        <i class="fa-solid fa-share-nodes"></i> Compartilhar página
                    </button>
                </div>
            `;
        }

        container.innerHTML = htmlContent;
        markArticleGalleryImages(container);
        if (route === 'home') loadPopularHomeSection();

        if (isGamePage) {
            const ratingPanel = document.createElement('section');
            ratingPanel.className = 'rating-panel';
            ratingPanel.innerHTML = `<div><strong>Avaliação da comunidade</strong><span id="ratingAverage">Carregando...</span></div><div class="rating-stars" role="group" aria-label="Avaliar de 1 a 5 estrelas">${[1, 2, 3, 4, 5].map(value => `<button type="button" data-rating="${value}" aria-label="${value} estrela${value > 1 ? 's' : ''}"><i class="fa-regular fa-star"></i></button>`).join('')}</div>`;
            container.querySelector('.article-actions')?.before(ratingPanel);
            setupRating(route, ratingPanel);
            setupChat(route, container);
        }

        const sharePageBtn = document.getElementById('sharePageBtn');
        if (sharePageBtn) {
            sharePageBtn.addEventListener('click', async function () {
                const shareUrl = window.location.href;
                const shareTitle = document.title;

                try {
                    if (navigator.share) {
                        await navigator.share({
                            title: shareTitle,
                            text: `Confira ${article.title} na WikiGames`,
                            url: shareUrl
                        });
                    } else if (navigator.clipboard) {
                        await navigator.clipboard.writeText(shareUrl);
                        sharePageBtn.innerHTML = '<i class="fa-solid fa-check"></i> Link copiado';
                    } else {
                        window.prompt('Copie este link:', shareUrl);
                    }
                } catch (error) {
                    if (navigator.clipboard) {
                        await navigator.clipboard.writeText(shareUrl);
                        sharePageBtn.innerHTML = '<i class="fa-solid fa-check"></i> Link copiado';
                    }
                }
            });
        }

        if (anchor) {
            setTimeout(() => {
                const targetElement = document.getElementById(anchor);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);
        } else {
            window.scrollTo(0, 0);
        }

    } else {
        document.title = 'Página não encontrada - WikiGames';
        container.innerHTML = `
            <h1><i class="fa-solid fa-triangle-exclamation"></i> Erro 404 - Artigo não encontrado</h1>
            <p>O artigo que você tentou acessar não existe na nossa base de dados.</p>
            <p>Volte para a <a href="/?route=home">Página Inicial</a> ou use a barra de busca acima.</p>
        `;
    }
}

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function openImageLightbox(image) {
    let lightbox = document.getElementById('imageLightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'imageLightbox';
        lightbox.className = 'image-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.innerHTML = `
            <button class="image-lightbox-close" type="button" aria-label="Fechar imagem"><i class="fa-solid fa-xmark"></i></button>
            <div class="image-lightbox-toolbar" role="toolbar" aria-label="Controles da imagem">
                <button type="button" data-lightbox-action="zoom-out" aria-label="Diminuir zoom"><i class="fa-solid fa-minus"></i></button>
                <span data-lightbox-zoom>100%</span>
                <button type="button" data-lightbox-action="zoom-in" aria-label="Aumentar zoom"><i class="fa-solid fa-plus"></i></button>
                <button type="button" data-lightbox-action="fullscreen" aria-label="Tela cheia"><i class="fa-solid fa-expand"></i></button>
            </div>
            <img class="image-lightbox-preview" alt="">
        `;
        document.body.appendChild(lightbox);
        lightbox.dataset.zoom = '1';
        lightbox.querySelector('[data-lightbox-action="zoom-in"]').addEventListener('click', () => updateLightboxZoom(lightbox, 0.25));
        lightbox.querySelector('[data-lightbox-action="zoom-out"]').addEventListener('click', () => updateLightboxZoom(lightbox, -0.25));
        lightbox.querySelector('[data-lightbox-action="fullscreen"]').addEventListener('click', () => lightbox.requestFullscreen?.());
        lightbox.querySelector('.image-lightbox-preview').addEventListener('dblclick', () => updateLightboxZoom(lightbox, 0.5));
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox || event.target.closest('.image-lightbox-close')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const preview = lightbox.querySelector('.image-lightbox-preview');
    preview.src = image.dataset.highresCover || image.currentSrc || image.src;
    preview.alt = image.alt || 'Imagem ampliada';
    lightbox.dataset.zoom = '1';
    preview.style.transform = 'scale(1)';
    lightbox.querySelector('[data-lightbox-zoom]').textContent = '100%';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxZoom(lightbox, amount) {
    const preview = lightbox.querySelector('.image-lightbox-preview');
    const currentZoom = Number(lightbox.dataset.zoom || 1);
    const nextZoom = Math.min(3, Math.max(1, currentZoom + amount));
    lightbox.dataset.zoom = String(nextZoom);
    preview.style.transform = `scale(${nextZoom})`;
    lightbox.querySelector('[data-lightbox-zoom]').textContent = `${Math.round(nextZoom * 100)}%`;
}

function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'appToast';
        toast.className = 'app-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('active');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('active'), 2800);
}

function closeContextMenu() {
    document.getElementById('gameContextMenu')?.remove();
}

function openTrailerModal(image) {
    const trailerUrl = image.dataset.trailerUrl || '';
    const match = trailerUrl.match(/(?:v=|be\/|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if (!match) {
        showToast('Trailer não disponível para este jogo.');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'game-media-modal active';
    modal.innerHTML = `<div class="game-media-dialog" role="dialog" aria-modal="true" aria-label="Trailer de ${escapeHtml(image.dataset.gameTitle)}"><button class="game-media-close" type="button" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0" title="Trailer de ${escapeHtml(image.dataset.gameTitle)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div></div>`;
    document.body.appendChild(modal);
    const close = () => modal.remove();
    modal.addEventListener('click', event => { if (event.target === modal || event.target.closest('.game-media-close')) close(); });
}

async function downloadGameCover(image) {
    const imageUrl = image.dataset.highresCover || image.currentSrc || image.src;
    try {
        const response = await fetch(imageUrl, { mode: 'cors' });
        if (!response.ok) throw new Error('download failed');
        const blobUrl = URL.createObjectURL(await response.blob());
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `${createSlug(image.dataset.gameTitle || 'capa')}.jpg`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${createSlug(image.dataset.gameTitle || 'capa')}.jpg`;
        link.target = '_blank';
        link.rel = 'noopener';
        link.click();
    }
}

async function setProfileBackground(image) {
    const imageUrl = image.dataset.highresCover || image.currentSrc || image.src;
    localStorage.setItem('wikigames-profile-background', imageUrl);
    applyProfileBackground(imageUrl);
    const services = window.firebaseServices;
    const user = services?.auth.currentUser;
    if (services?.rtdb && user) {
        try {
            const reference = services.ref(services.rtdb, `users/${user.uid}`);
            const snapshot = await services.get(reference);
            await services.set(reference, { ...(snapshot.val() || {}), profileBackground: imageUrl });
        } catch (error) {
            logFirebaseError('Falha ao salvar fundo do perfil', error);
        }
    }
    showToast('Imagem definida como fundo do perfil!');
}

function applyProfileBackground(imageUrl) {
    const wrapper = document.querySelector('.vndb-bg-wrapper');
    if (!wrapper || !imageUrl) return;
    wrapper.style.setProperty('--profile-background-image', `url("${imageUrl}")`);
    wrapper.classList.add('profile-background-set');
}

async function copyGameLink(image) {
    const gameUrl = image.dataset.gameUrl || window.location.href;
    try {
        await navigator.clipboard.writeText(gameUrl);
        showToast('Link do jogo copiado!');
    } catch (error) {
        window.prompt('Copie o link do jogo:', gameUrl);
    }
}

function openShareMenu(image) {
    const url = image.dataset.gameUrl || window.location.href;
    const title = image.dataset.gameTitle || 'jogo';
    const message = `Confira ${title} na WikiGames: ${url}`;
    if (navigator.share) {
        navigator.share({ title, text: message, url }).catch(() => {});
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'share-modal active';
    modal.innerHTML = `<div class="share-dialog" role="dialog" aria-modal="true" aria-label="Compartilhar jogo"><button class="game-media-close" type="button" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button><h2>Compartilhar jogo</h2><div class="share-options"><a href="https://discord.com/channels/@me?text=${encodeURIComponent(message)}" target="_blank" rel="noopener"><i class="fa-brands fa-discord"></i> Discord</a><a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i> X</a><a href="https://wa.me/?text=${encodeURIComponent(message)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a><button type="button" data-copy-share><i class="fa-solid fa-copy"></i> Copiar mensagem</button></div></div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.closest('.game-media-close')) modal.remove();
        if (event.target.closest('[data-copy-share]')) { navigator.clipboard?.writeText(message); showToast('Mensagem copiada!'); modal.remove(); }
    });
}

function openGameContextMenu(image, x, y) {
    closeContextMenu();
    const menu = document.createElement('div');
    menu.id = 'gameContextMenu';
    menu.className = 'game-context-menu';
    menu.innerHTML = `<div class="game-context-heading">${escapeHtml(image.dataset.gameTitle || 'Jogo')}</div><button type="button" data-context-action="download"><i class="fa-solid fa-download"></i> Descarregar pôster / capa</button><button type="button" data-context-action="view"><i class="fa-solid fa-expand"></i> Ver capa em alta resolução</button><button type="button" data-context-action="trailer"><i class="fa-solid fa-play"></i> Assistir abertura / trailer</button><button type="button" data-context-action="profile"><i class="fa-solid fa-image"></i> Usar como fundo do perfil</button><button type="button" data-context-action="copy"><i class="fa-solid fa-link"></i> Copiar link do jogo</button><button type="button" data-context-action="share"><i class="fa-solid fa-share-nodes"></i> Partilhar no Discord / redes</button><button type="button" class="game-context-native" data-context-action="native"><i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir menu padrão do navegador</button>`;
    document.body.appendChild(menu);
    const width = menu.offsetWidth;
    const height = menu.offsetHeight;
    menu.style.left = `${Math.max(8, Math.min(x, window.innerWidth - width - 8))}px`;
    menu.style.top = `${Math.max(8, Math.min(y, window.innerHeight - height - 8))}px`;
    menu.addEventListener('click', event => {
        const action = event.target.closest('[data-context-action]')?.dataset.contextAction;
        if (!action) return;
        closeContextMenu();
        if (action === 'download') downloadGameCover(image);
        if (action === 'view') openImageLightbox(image);
        if (action === 'trailer') openTrailerModal(image);
        if (action === 'profile') setProfileBackground(image);
        if (action === 'copy') copyGameLink(image);
        if (action === 'share') openShareMenu(image);
        if (action === 'native') {
            image.dataset.allowNativeContextMenu = 'true';
            image.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, clientX: x, clientY: y }));
        }
    });
}

let coverLongPressTimer;
document.addEventListener('contextmenu', event => {
    const image = event.target.closest('img.game-cover');
    if (!image) return;
    if (image.dataset.allowNativeContextMenu === 'true') {
        delete image.dataset.allowNativeContextMenu;
        return;
    }
    event.preventDefault();
    openGameContextMenu(image, event.clientX, event.clientY);
});
document.addEventListener('pointerdown', event => {
    const image = event.target.closest('img.game-cover');
    if (!image || event.pointerType !== 'touch') return;
    coverLongPressTimer = setTimeout(() => openGameContextMenu(image, event.clientX, event.clientY), 600);
});
document.addEventListener('pointerup', () => clearTimeout(coverLongPressTimer));
document.addEventListener('pointercancel', () => clearTimeout(coverLongPressTimer));
document.addEventListener('click', event => {
    if (!event.target.closest('#gameContextMenu')) closeContextMenu();
});
window.addEventListener('scroll', closeContextMenu, { passive: true });
applyProfileBackground(localStorage.getItem('wikigames-profile-background'));
const articleObserver = new MutationObserver(() => enhanceGameCovers(document.getElementById('article-container') || document));
articleObserver.observe(document.getElementById('article-container') || document.body, { childList: true, subtree: true });
enhanceGameCovers();

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        const lightbox = document.getElementById('imageLightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

document.addEventListener('click', function (e) {
    const favorite = e.target.closest('[data-favorite-route]');
    if (favorite) {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(favorite.dataset.favoriteRoute).catch(() => {
            favorite.setAttribute('aria-label', 'Não foi possível atualizar os favoritos');
        });
        return;
    }
    const image = e.target.closest('#article-container .image-gallery img, #article-container .mod-gallery img, #article-container img.gallery-image');
    if (!image) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    openImageLightbox(image);
}, true);

if (searchInput && searchResults) searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    let results = [];
    for (const key in articlesDatabase) {
        if (key !== 'home' && articlesDatabase[key].title.toLowerCase().includes(query)) {
            results.push({ key, title: articlesDatabase[key].title });
        }
    }

    if (results.length > 0) {
        results.forEach(res => {
            const a = document.createElement('a');
            a.href = `/${res.key}`;
            a.innerHTML = `<i class="fa-solid fa-gamepad"></i> ${res.title}`;
            a.onclick = () => {
                searchResults.style.display = 'none';
                searchInput.value = '';
            };
            searchResults.appendChild(a);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<span style="display:block; padding:10px; color:#666;">Nenhum jogo encontrado.</span>';
        searchResults.style.display = 'block';
    }
});

document.addEventListener('click', function (e) {
    if (searchInput && searchResults && !searchInput.contains(e.target)) searchResults.style.display = 'none';

    const clickedLink = e.target.closest('a');
    if (!clickedLink) return;

    const href = clickedLink.getAttribute('href');
    if (!href || !isInternalAppLink(href)) return;

    if (clickedLink.target === '_blank') return;

    e.preventDefault();

    const url = new URL(href, window.location.origin);
    const route = url.searchParams.get('route') || url.pathname.replace(/^\/+|\/+$/g, '') || 'home';
    const profileId = url.searchParams.get('uid');
    if (profileId) {
        history.pushState({}, '', `/?route=${encodeURIComponent(route)}&uid=${encodeURIComponent(profileId)}`);
        renderPage();
    } else {
        navigateToRoute(route);
    }
});

const randomPageBtn = document.getElementById('randomPageBtn');
if (randomPageBtn) randomPageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const keys = Object.keys(articlesDatabase).filter(k => k !== 'home');
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    updateRoute(randomKey);
});

window.addEventListener('hashchange', renderPage);
window.addEventListener('popstate', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);
setupAccount();

const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('menuOverlay');
const sidebarLinks = sidebar ? sidebar.querySelectorAll('a') : [];

function openMenu() {
    if (!sidebar || !menuOverlay) return;
    sidebar.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (!sidebar || !menuOverlay) return;
    sidebar.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMenu);
    hamburgerBtn.addEventListener('touchstart', function (event) {
        event.preventDefault();
        openMenu();
    }, { passive: false });
}
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('touchstart', function (event) {
        event.preventDefault();
        closeMenu();
    }, { passive: false });
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeMenu();
        }
    });
});
