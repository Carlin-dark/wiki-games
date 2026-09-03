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
        return cleanPath === '' || cleanPath === 'home' || cleanPath === 'all' || cleanPath.startsWith('categoria/') || Object.prototype.hasOwnProperty.call(articlesDatabase, cleanPath);
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
                    <img src="${game.infobox ? game.infobox.image : ''}" alt="${game.title}" loading="lazy">
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

function renderPage() {
    const { route, anchor } = getRouteInfo();
    const container = document.getElementById('article-container');

    setPageBackground(null);

    if (route === 'all') {
        renderAllGamesPage();
        return;
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
                <img src="${article.infobox.image}" alt="Capa" loading="lazy">
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
