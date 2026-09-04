function createSlug(text) {
    return String(text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
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
        const match = String(article.trailerUrl).match(/(?:v=|be\/|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        if (match && match[1]) {
            return {
                id: match[1],
                embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0`,
                watchUrl: article.trailerUrl,
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
                <a href="/${key}" class="all-game-card">
                    <img class="zoomable-image" src="${game.infobox ? game.infobox.image : ''}" alt="${game.title}" loading="lazy">
                    <div class="all-game-card-content">
                        <h3>${game.title}</h3>
                        <p>${game.summary}</p>
                    </div>
                </a>
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
                    <div class="mod-tags">${mod.genres.map(genre => `<span>${genre}</span>`).join('')}</div>
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
                    <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-download"></i> Download para ${mod.platform}</a>
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
                        <div class="mod-tags">${mod.genres.map(genre => `<span>${genre}</span>`).join('')}</div>
                        <dl class="mod-meta">
                            <div><dt>Comprimento</dt><dd>${mod.length}</dd></div>
                            <div><dt>Status</dt><dd>${mod.status}</dd></div>
                            <div><dt>Lançado</dt><dd>${mod.releaseDate}</dd></div>
                            <div><dt>Plataforma</dt><dd>${mod.platform}</dd></div>
                        </dl>
                        <p>${mod.description}</p>
                        <div class="mod-gallery">${mod.screenshots.map((image, index) => `<img src="${image}" alt="Screenshot ${index + 1} de ${mod.title}" loading="lazy">`).join('')}</div>
                        <a href="${mod.downloadUrl}" target="_blank" rel="noopener noreferrer" class="mod-download"><i class="fa-solid fa-download"></i> Download para ${mod.platform}</a>
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

        let htmlContent = `<h1>${article.title}</h1>`;

        if (article.infobox) {
            htmlContent += `<div class="infobox">
                <div class="infobox-title">${article.title}</div>
                    <img class="zoomable-image" src="${article.infobox.image}" alt="Capa" loading="lazy">
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

        const isGamePage = route !== 'home' && route !== 'sobre' && route !== 'all' && !route.startsWith('categoria/');
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
                    ` : ''}
                    <div class="trailer-actions">
                        ${trailerData.watchUrl ? `<a href="${trailerData.watchUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> Abrir trailer</a>` : ''}
                    </div>
                </div>
            `;
        }

        if (article.categories) {
            htmlContent += `<hr style="margin: 30px 0 15px;"><p style="font-size:13px;"><i class="fa-solid fa-tags"></i> <strong>Categorias:</strong> `;
            const catLinks = article.categories.map(cat => `<a href="/?route=categoria/${createSlug(cat)}">${cat}</a>`);
            htmlContent += catLinks.join(' | ') + `</p>`;
        }

        htmlContent += `
            <div class="article-actions">
                <button id="sharePageBtn" class="share-page-btn" type="button">
                    <i class="fa-solid fa-share-nodes"></i> Compartilhar página
                </button>
            </div>
        `;

        container.innerHTML = htmlContent;

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
            <img class="image-lightbox-preview" alt="">
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', event => {
            if (event.target === lightbox || event.target.closest('.image-lightbox-close')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const preview = lightbox.querySelector('.image-lightbox-preview');
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt || 'Imagem ampliada';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

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
    const image = e.target.closest('#article-container img');
    if (!image) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    openImageLightbox(image);
}, true);

searchInput.addEventListener('input', function () {
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
    if (!searchInput.contains(e.target)) searchResults.style.display = 'none';

    const clickedLink = e.target.closest('a');
    if (!clickedLink) return;

    const href = clickedLink.getAttribute('href');
    if (!href || !isInternalAppLink(href)) return;

    if (clickedLink.target === '_blank') return;

    e.preventDefault();

    const url = new URL(href, window.location.origin);
    const route = url.searchParams.get('route') || url.pathname.replace(/^\/+|\/+$/g, '') || 'home';
    navigateToRoute(route);
});

document.getElementById('randomPageBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const keys = Object.keys(articlesDatabase).filter(k => k !== 'home');
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    updateRoute(randomKey);
});

window.addEventListener('hashchange', renderPage);
window.addEventListener('popstate', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);

const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('menuOverlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function openMenu() {
    sidebar.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sidebar.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

hamburgerBtn.addEventListener('click', openMenu);
hamburgerBtn.addEventListener('touchstart', function (event) {
    event.preventDefault();
    openMenu();
}, { passive: false });
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
menuOverlay.addEventListener('touchstart', function (event) {
    event.preventDefault();
    closeMenu();
}, { passive: false });

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeMenu();
        }
    });
});
