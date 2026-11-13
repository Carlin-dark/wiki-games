const communityKindLabels = {
    discussion: 'Comentário',
    bug: 'Relato de erro',
    translation: 'Pedido de tradução',
    'game-request': 'Sugestão de jogo'
};

const communityComposer = document.getElementById('community-composer');
const communityLoginGate = document.getElementById('community-login-gate');
const communityFeedback = document.getElementById('community-feedback');
const communityFormFeedback = document.getElementById('community-form-feedback');
const communityForm = document.getElementById('community-form');
const communityFeed = document.getElementById('community-posts');
const communityFeedStatus = document.getElementById('community-feed-status');
const communityGameSelect = document.getElementById('community-game');
const communityFilter = document.getElementById('community-filter');
const communityMediaInput = document.getElementById('community-media-url');
const communityMediaPreview = document.getElementById('community-media-preview');
const gifPanel = document.getElementById('gif-picker-panel');
const gifPanelToggle = document.getElementById('gif-panel-toggle');
const gifSearchInput = document.getElementById('gif-search');
const gifSearchButton = document.getElementById('gif-search-button');
const gifSearchStatus = document.getElementById('gif-search-status');
const gifSearchResults = document.getElementById('gif-search-results');
const initialGameId = new URLSearchParams(window.location.search).get('game') || '';

let communityServices = null;
let currentCommunityUser = null;
let communityPosts = [];
let communityFeedLoaded = false;
let gifSearchAbortController = null;
let gifSearchTimeout = 0;
let gifSearchRequestId = 0;

function escapeCommunityHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    })[character]);
}

function setCommunityFeedback(message, isError = false) {
    communityFeedback.textContent = message;
    communityFeedback.classList.toggle('is-error', isError);
}

function setCommunityFormFeedback(message, isError = false) {
    communityFormFeedback.textContent = message;
    communityFormFeedback.classList.toggle('is-error', isError);
}

function populateCommunityGames() {
    if (typeof articlesDatabase === 'undefined') return;
    const games = Object.entries(articlesDatabase)
        .filter(([, game]) => game.infobox?.data)
        .sort((first, second) => first[1].title.localeCompare(second[1].title));
    games.forEach(([route, game]) => {
        const option = document.createElement('option');
        option.value = route;
        option.textContent = game.title;
        communityGameSelect.append(option);
    });

    if (games.some(([route]) => route === initialGameId)) {
        communityGameSelect.value = initialGameId;
        const game = articlesDatabase[initialGameId];
        const context = document.getElementById('community-game-context');
        context.textContent = `Você veio da página de ${game.title}. O jogo foi selecionado no formulário.`;
        context.hidden = false;
    }
}

function getYoutubeVideoId(url) {
    const hostname = url.hostname.toLowerCase();
    let videoId = '';
    if (hostname === 'youtu.be') {
        videoId = url.pathname.split('/').filter(Boolean)[0] || '';
    } else if (hostname === 'youtube.com' || hostname.endsWith('.youtube.com')) {
        videoId = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] || '';
    } else if (hostname === 'youtube-nocookie.com' || hostname.endsWith('.youtube-nocookie.com')) {
        videoId = url.pathname.match(/^\/embed\/([^/]+)/)?.[1] || '';
    }
    return /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : '';
}

function getGifEmbedUrl(url) {
    const hostname = url.hostname.toLowerCase();
    const path = url.pathname.replace(/\/+$/, '');
    if (hostname === 'tenor.com' || hostname.endsWith('.tenor.com')) {
        const id = path.match(/-(\d+)$/)?.[1] || path.match(/^\/embed\/(\d+)$/)?.[1];
        return id ? `https://tenor.com/embed/${id}` : '';
    }
    if (hostname === 'giphy.com' || hostname.endsWith('.giphy.com')) {
        const id = path.match(/^\/embed\/([A-Za-z0-9]+)$/)?.[1] || path.split('/').pop()?.match(/-([A-Za-z0-9]+)$/)?.[1];
        return id ? `https://giphy.com/embed/${id}` : '';
    }
    return '';
}

function getCommunityMediaDetails(value) {
    const rawUrl = String(value || '').trim();
    if (!rawUrl) return { type: 'none', url: '' };
    let url;
    try {
        url = new URL(rawUrl);
    } catch (error) {
        throw new Error('Insira uma URL HTTPS válida.');
    }
    if (url.protocol !== 'https:' || url.username || url.password) {
        throw new Error('Use uma URL HTTPS sem usuário ou senha.');
    }

    const youtubeId = getYoutubeVideoId(url);
    const hostname = url.hostname.toLowerCase();
    if (youtubeId) return { type: 'youtube', url: `https://youtu.be/${youtubeId}` };
    if (hostname.includes('youtube')) throw new Error('Não reconheci esse link do YouTube.');

    const isGifFile = /\.gif$/i.test(url.pathname);
    const gifEmbedUrl = getGifEmbedUrl(url);
    const isGifProvider = hostname === 'tenor.com' || hostname.endsWith('.tenor.com') || hostname === 'giphy.com' || hostname.endsWith('.giphy.com');
    if (isGifProvider && !isGifFile && !gifEmbedUrl) {
        throw new Error('Use o link direto do GIF ou um link de publicação do Tenor/GIPHY.');
    }
    return { type: isGifFile || isGifProvider ? 'gif' : 'image', url: url.href };
}

function renderCommunityMedia(mediaType, mediaUrl, authorName = '') {
    if (!mediaUrl || mediaType === 'none') return '';
    let url;
    try {
        url = new URL(mediaUrl);
    } catch (error) {
        return '<span class="community-media-unavailable">Mídia indisponível.</span>';
    }
    if (url.protocol !== 'https:') return '<span class="community-media-unavailable">Mídia indisponível.</span>';
    if (mediaType === 'youtube') {
        const videoId = getYoutubeVideoId(url);
        if (!videoId) return '<span class="community-media-unavailable">Vídeo indisponível.</span>';
        return `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" title="Vídeo do YouTube" loading="lazy" referrerpolicy="no-referrer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
    if (mediaType === 'gif') {
        const embedUrl = getGifEmbedUrl(url);
        if (embedUrl) {
            return `<iframe class="community-gif-frame" src="${escapeCommunityHtml(embedUrl)}" title="GIF compartilhado por ${escapeCommunityHtml(authorName)}" loading="lazy" referrerpolicy="no-referrer" allowfullscreen></iframe>`;
        }
    }
    return `<img src="${escapeCommunityHtml(url.href)}" alt="Imagem compartilhada por ${escapeCommunityHtml(authorName)}" loading="lazy" referrerpolicy="no-referrer">`;
}

function formatCommunityDate(timestamp) {
    const date = timestamp?.toDate ? timestamp.toDate() : timestamp instanceof Date ? timestamp : null;
    if (!date || Number.isNaN(date.getTime())) return 'Agora';
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date);
}

function renderCommunityPost(post) {
    const likes = post.likes && typeof post.likes === 'object' ? post.likes : {};
    const likeCount = Object.values(likes).filter(value => value === true).length;
    const likedByCurrentUser = Boolean(currentCommunityUser && likes[currentCommunityUser.uid] === true);
    const authorName = post.authorName || 'Usuário WikiGames';
    const authorId = String(post.authorId || '');
    const safePhotoURL = post.authorPhoto && /^https:\/\/[^\s]+$/i.test(post.authorPhoto) ? post.authorPhoto : '';
    const authorAvatar = safePhotoURL
        ? `<span class="community-author-avatar"><img src="${escapeCommunityHtml(safePhotoURL)}" alt="" loading="lazy" referrerpolicy="no-referrer"></span>`
        : '<span class="community-author-avatar"><i class="fa-solid fa-user"></i></span>';
    const authorLink = authorId
        ? `<a href="../?route=perfil&amp;uid=${encodeURIComponent(authorId)}">${escapeCommunityHtml(authorName)}</a>`
        : `<strong>${escapeCommunityHtml(authorName)}</strong>`;
    const kind = communityKindLabels[post.kind] || communityKindLabels.discussion;
    const game = typeof articlesDatabase !== 'undefined' ? articlesDatabase[post.gameId] : null;
    const gameMarkup = post.gameId
        ? `<a class="community-game-tag" href="../?route=${encodeURIComponent(post.gameId)}">${escapeCommunityHtml(game?.title || post.gameId)}</a>`
        : '';
    const text = escapeCommunityHtml(post.text || '').replace(/\n/g, '<br>');
    const media = renderCommunityMedia(post.mediaType, post.mediaUrl, authorName);
    return `<article class="community-post-card" data-post-id="${escapeCommunityHtml(post.id)}">
        <header class="community-post-header">${authorAvatar}<div class="community-author-info">${authorLink}<div class="community-post-meta"><span class="community-post-tag">${escapeCommunityHtml(kind)}</span>${gameMarkup ? `<span>·</span>${gameMarkup}` : ''}<time>${escapeCommunityHtml(formatCommunityDate(post.createdAt))}</time></div></div></header>
        ${text ? `<p class="community-post-text">${text}</p>` : ''}
        ${media ? `<div class="community-post-media">${media}</div>` : ''}
        <div class="community-post-actions"><button class="community-like-button" type="button" data-community-like="${escapeCommunityHtml(post.id)}" aria-pressed="${likedByCurrentUser}" aria-label="${likedByCurrentUser ? 'Descurtir' : 'Curtir'} comentário"><i class="fa-${likedByCurrentUser ? 'solid' : 'regular'} fa-heart"></i><span>${likeCount}</span><span>Curtir</span></button></div>
    </article>`;
}

function renderCommunityFeed() {
    const selectedKind = communityFilter.value;
    const posts = selectedKind ? communityPosts.filter(post => post.kind === selectedKind) : communityPosts;
    if (!posts.length) {
        communityFeed.innerHTML = '';
        communityFeedStatus.textContent = communityFeedLoaded ? 'Ainda não há publicações neste filtro.' : 'Carregando publicações...';
        return;
    }
    communityFeedStatus.textContent = '';
    communityFeed.innerHTML = posts.map(renderCommunityPost).join('');
    communityFeed.querySelectorAll('.community-post-media img').forEach(image => {
        image.addEventListener('error', () => {
            const unavailable = document.createElement('span');
            unavailable.className = 'community-media-unavailable';
            unavailable.textContent = 'Não foi possível carregar esta imagem.';
            image.replaceWith(unavailable);
        }, { once: true });
    });
}

function renderGifSearchResults(gifs) {
    gifSearchResults.replaceChildren();
    let resultCount = 0;

    gifs.forEach(gif => {
        const previewUrl = gif.images?.fixed_width_small?.url || gif.images?.fixed_width?.url || gif.images?.preview_gif?.url;
        const gifUrl = gif.images?.fixed_width?.url || gif.images?.original?.url;
        let safePreviewUrl;
        let safeGifUrl;
        try {
            safePreviewUrl = new URL(previewUrl);
            safeGifUrl = new URL(gifUrl);
        } catch (error) {
            return;
        }

        const isGiphyHost = hostname => hostname === 'giphy.com' || hostname.endsWith('.giphy.com');
        if (safePreviewUrl.protocol !== 'https:' || !isGiphyHost(safePreviewUrl.hostname)
            || safeGifUrl.protocol !== 'https:' || !isGiphyHost(safeGifUrl.hostname)
            || !/\.gif$/i.test(safeGifUrl.pathname)) {
            return;
        }

        const title = String(gif.title || 'GIF').trim() || 'GIF';
        const button = document.createElement('button');
        button.className = 'gif-picker-result';
        button.type = 'button';
        button.setAttribute('role', 'listitem');
        button.setAttribute('aria-label', `Escolher GIF: ${title}`);
        const image = document.createElement('img');
        image.src = safePreviewUrl.href;
        image.alt = title;
        image.loading = 'lazy';
        image.referrerPolicy = 'no-referrer';
        const label = document.createElement('span');
        label.textContent = title;
        button.append(image, label);
        button.addEventListener('click', () => {
            const media = getCommunityMediaDetails(safeGifUrl.href);
            communityMediaInput.value = media.url;
            updateCommunityMediaPreview();
            gifPanel.hidden = true;
            gifPanelToggle.setAttribute('aria-expanded', 'false');
            gifPanelToggle.focus();
            setCommunityFormFeedback('GIF selecionado para a publicação.');
        });
        gifSearchResults.append(button);
        resultCount += 1;
    });

    return resultCount;
}

async function searchGifResults(searchTerm = '') {
    const normalizedTerm = searchTerm.trim();
    if (normalizedTerm.length === 1) {
        gifSearchResults.replaceChildren();
        gifSearchStatus.textContent = 'Digite pelo menos 2 caracteres para pesquisar.';
        return;
    }

    const apiKey = window.WIKIGAMES_COMMUNITY_CONFIG?.giphyApiKey;
    if (!apiKey) {
        gifSearchResults.replaceChildren();
        gifSearchStatus.textContent = 'A busca de GIFs não está configurada.';
        return;
    }

    if (gifSearchAbortController) gifSearchAbortController.abort();
    const controller = new AbortController();
    gifSearchAbortController = controller;
    const requestId = ++gifSearchRequestId;
    const endpoint = normalizedTerm ? 'search' : 'trending';
    const apiUrl = new URL(`https://api.giphy.com/v1/gifs/${endpoint}`);
    apiUrl.searchParams.set('api_key', apiKey);
    apiUrl.searchParams.set('limit', '18');
    apiUrl.searchParams.set('rating', 'pg');
    apiUrl.searchParams.set('lang', 'pt');
    if (normalizedTerm) apiUrl.searchParams.set('q', normalizedTerm);

    gifSearchStatus.textContent = normalizedTerm ? 'Pesquisando GIFs...' : 'Carregando GIFs populares...';
    gifSearchResults.replaceChildren();
    gifSearchResults.setAttribute('aria-busy', 'true');

    try {
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`Resposta GIPHY: ${response.status}`);
        const payload = await response.json();
        if (requestId !== gifSearchRequestId) return;
        const resultCount = renderGifSearchResults(Array.isArray(payload.data) ? payload.data : []);
        gifSearchStatus.textContent = resultCount
            ? `${resultCount} GIFs encontrados. Selecione um para adicionar à publicação.`
            : 'Nenhum GIF encontrado. Tente outra pesquisa.';
    } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('[Comunidade] Falha ao buscar GIFs:', error.message);
        if (requestId === gifSearchRequestId) {
            gifSearchStatus.textContent = 'Não foi possível buscar GIFs. Confira a conexão e o acesso à GIPHY API.';
        }
    } finally {
        if (requestId === gifSearchRequestId) gifSearchResults.setAttribute('aria-busy', 'false');
    }
}

function updateCommunityMediaPreview() {
    const mediaUrl = communityMediaInput.value.trim();
    if (!mediaUrl) {
        communityMediaPreview.hidden = true;
        communityMediaPreview.innerHTML = '';
        return;
    }
    try {
        const media = getCommunityMediaDetails(mediaUrl);
        communityMediaPreview.innerHTML = renderCommunityMedia(media.type, media.url, 'você');
        communityMediaPreview.hidden = false;
    } catch (error) {
        communityMediaPreview.hidden = true;
        communityMediaPreview.innerHTML = '';
    }
}

function initializeCommunityPage() {
    if (communityServices || !window.firebaseServices) return;
    communityServices = window.firebaseServices;
    communityServices.onAuthStateChanged(communityServices.auth, user => {
        currentCommunityUser = user;
        communityComposer.hidden = !user;
        communityLoginGate.hidden = Boolean(user);
        renderCommunityFeed();
    });

    const postsQuery = communityServices.query(
        communityServices.collection(communityServices.db, 'communityPosts'),
        communityServices.orderBy('createdAt', 'desc'),
        communityServices.limit(60)
    );
    const feedLoadTimeout = window.setTimeout(() => {
        if (communityFeedLoaded) return;
        communityFeedStatus.classList.add('is-error');
        communityFeedStatus.textContent = 'A comunidade está demorando para responder. Tente novamente e confira as regras do Firestore.';
    }, 12000);
    communityServices.onSnapshot(postsQuery, snapshot => {
        communityPosts = snapshot.docs.map(documentSnapshot => ({ id: documentSnapshot.id, ...documentSnapshot.data() }));
        communityFeedLoaded = true;
        window.clearTimeout(feedLoadTimeout);
        communityFeedStatus.classList.remove('is-error');
        renderCommunityFeed();
    }, error => {
        window.clearTimeout(feedLoadTimeout);
        console.error('[Comunidade] Falha ao carregar publicações:', error);
        communityFeedStatus.classList.add('is-error');
        communityFeedStatus.textContent = `Não foi possível carregar a comunidade${error.code ? ` (${error.code})` : ''}. Confira se as regras do Firestore foram publicadas.`;
    });
}

populateCommunityGames();
communityFilter.addEventListener('change', renderCommunityFeed);
communityMediaInput.addEventListener('input', updateCommunityMediaPreview);
gifSearchInput.addEventListener('input', () => {
    window.clearTimeout(gifSearchTimeout);
    const searchTerm = gifSearchInput.value.trim();
    if (searchTerm.length === 1) {
        if (gifSearchAbortController) gifSearchAbortController.abort();
        gifSearchRequestId += 1;
        gifSearchStatus.textContent = 'Digite pelo menos 2 caracteres para pesquisar.';
        gifSearchResults.replaceChildren();
        gifSearchResults.setAttribute('aria-busy', 'false');
        return;
    }
    gifSearchTimeout = window.setTimeout(() => searchGifResults(searchTerm), 450);
});
gifSearchInput.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    window.clearTimeout(gifSearchTimeout);
    searchGifResults(gifSearchInput.value);
});
gifSearchButton.addEventListener('click', () => {
    window.clearTimeout(gifSearchTimeout);
    searchGifResults(gifSearchInput.value);
});
gifPanelToggle.addEventListener('click', () => {
    gifPanel.hidden = !gifPanel.hidden;
    gifPanelToggle.setAttribute('aria-expanded', String(!gifPanel.hidden));
    if (!gifPanel.hidden) {
        gifSearchInput.focus();
        if (!gifSearchResults.childElementCount) searchGifResults(gifSearchInput.value);
    }
});
document.getElementById('gif-panel-close').addEventListener('click', () => {
    gifPanel.hidden = true;
    gifPanelToggle.setAttribute('aria-expanded', 'false');
});

communityForm.addEventListener('submit', async event => {
    event.preventDefault();
    const user = currentCommunityUser;
    if (!user || !communityServices) {
        setCommunityFeedback('Entre na sua conta WikiGames para publicar e curtir comentários.', true);
        return;
    }
    const form = event.currentTarget;
    const text = form.elements.text.value.trim();
    let media;
    try {
        media = getCommunityMediaDetails(form.elements.mediaUrl.value);
    } catch (error) {
        setCommunityFormFeedback(error.message, true);
        return;
    }
    if (!text && media.type === 'none') {
        setCommunityFormFeedback('Escreva uma mensagem ou adicione uma imagem, GIF ou vídeo.', true);
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    setCommunityFormFeedback('Publicando...');
    const authorName = (user.displayName || 'Usuário').slice(0, 60);
    const authorPhoto = user.photoURL && /^https:\/\/[^\s]+$/i.test(user.photoURL) ? user.photoURL : '';
    try {
        await communityServices.addDoc(communityServices.collection(communityServices.db, 'communityPosts'), {
            authorId: user.uid,
            authorName,
            authorPhoto,
            kind: form.elements.kind.value,
            gameId: form.elements.gameId.value,
            text,
            mediaUrl: media.url,
            mediaType: media.type,
            createdAt: communityServices.serverTimestamp(),
            likes: {}
        });
        form.reset();
        if (initialGameId && articlesDatabase?.[initialGameId]) communityGameSelect.value = initialGameId;
        communityMediaPreview.hidden = true;
        communityMediaPreview.innerHTML = '';
        gifPanel.hidden = true;
        gifPanelToggle.setAttribute('aria-expanded', 'false');
        setCommunityFormFeedback('Publicação enviada.');
        setCommunityFeedback('');
    } catch (error) {
        console.error('[Comunidade] Falha ao publicar:', error);
        setCommunityFormFeedback(`Não foi possível publicar${error.code ? ` (${error.code})` : ''}. Confira as regras do Firestore e tente novamente.`, true);
    } finally {
        submitButton.disabled = false;
    }
});

communityFeed.addEventListener('click', async event => {
    const button = event.target.closest('[data-community-like]');
    if (!button) return;
    if (!currentCommunityUser || !communityServices) {
        setCommunityFeedback('Entre na sua conta WikiGames para curtir comentários.', true);
        return;
    }
    const post = communityPosts.find(item => item.id === button.dataset.communityLike);
    if (!post) return;
    const liked = post.likes?.[currentCommunityUser.uid] === true;
    button.disabled = true;
    try {
        await communityServices.updateDoc(
            communityServices.doc(communityServices.db, 'communityPosts', post.id),
            new communityServices.FieldPath('likes', currentCommunityUser.uid),
            liked ? communityServices.deleteField() : true
        );
        setCommunityFeedback('');
    } catch (error) {
        console.error('[Comunidade] Falha ao curtir publicação:', error);
        setCommunityFeedback(`Não foi possível atualizar a curtida${error.code ? ` (${error.code})` : ''}. Confira as regras do Firestore.`, true);
    } finally {
        button.disabled = false;
    }
});

window.addEventListener('firebase-ready', initializeCommunityPage, { once: true });
window.addEventListener('firebase-error', event => {
    console.error('[Comunidade] Firebase indisponível:', event.detail);
    communityFeedStatus.classList.add('is-error');
    communityFeedStatus.textContent = 'Não foi possível conectar ao Firebase.';
}, { once: true });
initializeCommunityPage();
