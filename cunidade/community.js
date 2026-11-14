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
const COMMUNITY_ADMIN_UID = 'gC8d3SOP3ChsBRHq79SwOUn2Bdy1';

let communityServices = null;
let currentCommunityUser = null;
let communityPosts = [];
let communityFeedLoaded = false;
let communityReportAnchorPending = Boolean(window.location.hash);
let gifSearchAbortController = null;
let gifSearchTimeout = 0;
let gifSearchRequestId = 0;

function isCommunityAdmin(user = currentCommunityUser) {
    return user?.uid === COMMUNITY_ADMIN_UID;
}

function isCommunityAdminAuthor(authorId) {
    return Boolean(currentCommunityUser && currentCommunityUser.uid === authorId && isCommunityAdmin());
}

function escapeCommunityHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    })[character]);
}

function getCommunityReportUrl(anchorId) {
    const url = new URL(window.location.href);
    url.hash = anchorId;
    return url.href;
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
        return `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" title="Vídeo do YouTube" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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
    const date = timestamp?.toDate
        ? timestamp.toDate()
        : timestamp instanceof Date
            ? timestamp
            : typeof timestamp === 'number'
                ? new Date(timestamp)
                : null;
    if (!date || Number.isNaN(date.getTime())) return 'Agora';
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(date);
}

function renderCommunityPost(post) {
    const likes = post.likes && typeof post.likes === 'object' ? post.likes : {};
    const likeCount = Object.values(likes).filter(value => value === true).length;
    const likedByCurrentUser = Boolean(currentCommunityUser && likes[currentCommunityUser.uid] === true);
    const authorName = post.authorName || 'Usuário WikiGames';
    const authorId = String(post.authorId || '');
    const canManagePost = Boolean(currentCommunityUser
        && (currentCommunityUser.uid === authorId || isCommunityAdmin()));
    const safePhotoURL = post.authorPhoto && /^https:\/\/[^\s]+$/i.test(post.authorPhoto) ? post.authorPhoto : '';
    const authorAvatar = safePhotoURL
        ? `<span class="community-author-avatar"><img src="${escapeCommunityHtml(safePhotoURL)}" alt="" loading="lazy" referrerpolicy="no-referrer"></span>`
        : '<span class="community-author-avatar"><i class="fa-solid fa-user"></i></span>';
    const authorLink = authorId
        ? `<a href="../?route=perfil&amp;uid=${encodeURIComponent(authorId)}">${escapeCommunityHtml(authorName)}</a>${post.authorIsAdmin === true || isCommunityAdminAuthor(authorId) ? ' <i class="fa-solid fa-crown community-admin-crown" title="Administrador do site" aria-label="Administrador do site"></i>' : ''}`
        : `<strong>${escapeCommunityHtml(authorName)}</strong>`;
    const kind = communityKindLabels[post.kind] || communityKindLabels.discussion;
    const game = typeof articlesDatabase !== 'undefined' ? articlesDatabase[post.gameId] : null;
    const gameMarkup = post.gameId
        ? `<a class="community-game-tag" href="../?route=${encodeURIComponent(post.gameId)}">${escapeCommunityHtml(game?.title || post.gameId)}</a>`
        : '';
    const text = escapeCommunityHtml(post.text || '').replace(/\n/g, '<br>');
    const media = renderCommunityMedia(post.mediaType, post.mediaUrl, authorName);
    const comments = post.comments && typeof post.comments === 'object' ? post.comments : {};
    const commentList = Object.entries(comments)
        .filter(([, comment]) => comment && typeof comment === 'object')
        .map(([id, comment]) => ({ id, ...comment }));
    const commentsMarkup = renderCommunityComments(post.id, commentList);
    const postAnchorId = `community-post-${post.id}`;
    return `<article id="${escapeCommunityHtml(postAnchorId)}" class="community-post-card" data-post-id="${escapeCommunityHtml(post.id)}">
        <header class="community-post-header">${authorAvatar}<div class="community-author-info">${authorLink}<div class="community-post-meta"><span class="community-post-tag">${escapeCommunityHtml(kind)}</span>${gameMarkup ? `<span>·</span>${gameMarkup}` : ''}<time>${escapeCommunityHtml(formatCommunityDate(post.createdAt))}</time></div></div></header>
        ${text ? `<p class="community-post-text">${text}</p>` : ''}
        ${media ? `<div class="community-post-media">${media}</div>` : ''}
        <div class="community-post-actions">
            <button class="community-like-button" type="button" data-community-like="${escapeCommunityHtml(post.id)}" aria-pressed="${likedByCurrentUser}" aria-label="${likedByCurrentUser ? 'Descurtir' : 'Curtir'} comentário"><i class="fa-${likedByCurrentUser ? 'solid' : 'regular'} fa-heart"></i><span>${likeCount}</span><span>Curtir</span></button>
            ${canManagePost ? `<button class="community-text-button" type="button" data-community-post-edit="${escapeCommunityHtml(post.id)}">${isCommunityAdmin() && currentCommunityUser.uid !== authorId ? 'Editar (admin)' : 'Editar'}</button><button class="community-text-button community-delete-button" type="button" data-community-post-delete="${escapeCommunityHtml(post.id)}">${isCommunityAdmin() && currentCommunityUser.uid !== authorId ? 'Excluir (admin)' : 'Excluir'}</button>` : ''}
            <button class="report-button community-report-button" type="button" data-open-report data-report-type="community_post" data-report-id="${escapeCommunityHtml(post.id)}" data-report-url="${escapeCommunityHtml(getCommunityReportUrl(postAnchorId))}" data-reported-user="${escapeCommunityHtml(authorName)}"><i class="fa-solid fa-flag" aria-hidden="true"></i> Denunciar</button>
        </div>
        ${canManagePost ? `<form class="community-comment-form community-post-edit-form" data-community-post-edit-form data-post-id="${escapeCommunityHtml(post.id)}" hidden>
            <label>Editar publicação</label>
            <textarea name="text" maxlength="1200" rows="3">${escapeCommunityHtml(post.text || '')}</textarea>
            <div class="community-post-edit-actions">
                <button class="community-button community-button-secondary" type="submit"><i class="fa-solid fa-floppy-disk"></i> Salvar</button>
                <button class="community-text-button" type="button" data-community-post-edit-cancel>Cancelar</button>
            </div>
        </form>` : ''}
        <section class="community-comments" aria-label="Comentários">
            <h3>Comentários <span>${commentList.length}</span></h3>
            ${commentsMarkup || '<p class="community-empty">Ainda não há comentários. Seja o primeiro a responder.</p>'}
            ${currentCommunityUser ? `<form class="community-comment-form community-root-comment-form" data-community-comment-form data-post-id="${escapeCommunityHtml(post.id)}">
                <label for="community-comment-${escapeCommunityHtml(post.id)}">Adicionar comentário</label>
                <textarea id="community-comment-${escapeCommunityHtml(post.id)}" name="text" maxlength="1200" rows="2" placeholder="Escreva um comentário..." required></textarea>
                <button class="community-button community-button-secondary" type="submit"><i class="fa-solid fa-reply"></i> Comentar</button>
            </form>` : ''}
        </section>
    </article>`;
}

function renderCommunityComments(postId, comments) {
    const commentsById = new Map(comments.map(comment => [comment.id, comment]));
    const childrenByParentId = new Map();
    comments.forEach(comment => {
        const parentId = comment.parentCommentId && commentsById.has(comment.parentCommentId)
            ? comment.parentCommentId
            : '';
        const children = childrenByParentId.get(parentId) || [];
        children.push(comment);
        childrenByParentId.set(parentId, children);
    });
    const renderBranch = (parentId, ancestors = new Set()) => (childrenByParentId.get(parentId) || [])
        .map(comment => {
            if (ancestors.has(comment.id)) return '';
            const nextAncestors = new Set(ancestors);
            nextAncestors.add(comment.id);
            return renderCommunityComment(comment, postId, renderBranch(comment.id, nextAncestors));
        })
        .join('');
    return renderBranch('');
}

function renderCommunityComment(comment, postId, childrenMarkup) {
    const authorId = String(comment.authorId || '');
    const authorName = String(comment.authorName || 'Usuário WikiGames');
    const safePhotoURL = comment.authorPhoto && /^https:\/\/[^\s]+$/i.test(comment.authorPhoto) ? comment.authorPhoto : '';
    const avatar = safePhotoURL
        ? `<span class="community-author-avatar community-comment-avatar"><img src="${escapeCommunityHtml(safePhotoURL)}" alt="" loading="lazy" referrerpolicy="no-referrer"></span>`
        : '<span class="community-author-avatar community-comment-avatar"><i class="fa-solid fa-user"></i></span>';
    const authorLink = authorId
        ? `<a href="../?route=perfil&amp;uid=${encodeURIComponent(authorId)}">${escapeCommunityHtml(authorName)}</a>`
        : `<strong>${escapeCommunityHtml(authorName)}</strong>`;
    const adminBadge = comment.authorIsAdmin === true || isCommunityAdminAuthor(authorId)
        ? ' <i class="fa-solid fa-crown community-admin-crown" title="Administrador do site" aria-label="Administrador do site"></i>'
        : '';
    const replyLabel = comment.replyToName
        ? `<span class="community-comment-reply-target">respondendo a ${escapeCommunityHtml(comment.replyToName)}</span>`
        : '';
    const isCommentOwner = Boolean(currentCommunityUser && currentCommunityUser.uid === authorId);
    const canEdit = isCommentOwner || isCommunityAdmin();
    const canDelete = canEdit;
    const text = escapeCommunityHtml(comment.text || '').replace(/\n/g, '<br>');
    const commentId = escapeCommunityHtml(comment.id);
    const escapedPostId = escapeCommunityHtml(postId);
    const commentAnchorId = `community-comment-${postId}-${comment.id}`;
    return `<article id="${escapeCommunityHtml(commentAnchorId)}" class="community-comment" data-comment-id="${commentId}">
        <div class="community-comment-main">${avatar}<div class="community-comment-content">
            <header class="community-comment-header">${authorLink}${adminBadge}<time>${escapeCommunityHtml(formatCommunityDate(comment.createdAt))}</time></header>
            ${replyLabel}<p class="community-comment-text">${text}</p>
            <div class="community-comment-actions">
                ${currentCommunityUser ? `<button class="community-text-button" type="button" data-community-reply="${commentId}">Responder</button>` : ''}
                ${canEdit ? `<button class="community-text-button" type="button" data-community-edit="${commentId}">${isCommunityAdmin() && !isCommentOwner ? 'Editar (admin)' : 'Editar'}</button>` : ''}
                ${canDelete ? `<button class="community-text-button community-delete-button" type="button" data-community-delete="${commentId}">${isCommunityAdmin() && !isCommentOwner ? 'Excluir (admin)' : 'Excluir'}</button>` : ''}
                ${!currentCommunityUser || currentCommunityUser.uid !== authorId ? `<button class="community-text-button community-report-button" type="button" data-open-report data-report-type="comment" data-report-id="${escapeCommunityHtml(`${postId}/${comment.id}`)}" data-report-url="${escapeCommunityHtml(getCommunityReportUrl(commentAnchorId))}" data-reported-user="${escapeCommunityHtml(authorName)}"><i class="fa-solid fa-flag" aria-hidden="true"></i> Denunciar</button>` : ''}
            </div>
            <form class="community-comment-form community-inline-comment-form" data-community-comment-form data-post-id="${escapedPostId}" data-parent-id="${commentId}" hidden>
                <label>Responder a ${escapeCommunityHtml(authorName)}</label>
                <textarea name="text" maxlength="1200" rows="2" placeholder="Escreva sua resposta..." required></textarea>
                <button class="community-button community-button-secondary" type="submit"><i class="fa-solid fa-reply"></i> Responder</button>
            </form>
            ${canEdit ? `<form class="community-comment-form community-inline-comment-form" data-community-comment-form data-post-id="${escapedPostId}" data-comment-id="${commentId}" hidden>
                <label>${isCommunityAdmin() && !isCommentOwner ? 'Editar comentário (admin)' : 'Editar seu comentário'}</label>
                <textarea name="text" maxlength="1200" rows="2" required>${escapeCommunityHtml(comment.text || '')}</textarea>
                <button class="community-button community-button-secondary" type="submit"><i class="fa-solid fa-floppy-disk"></i> Salvar</button>
            </form>` : ''}
        </div></div>
        ${childrenMarkup ? `<div class="community-comment-children">${childrenMarkup}</div>` : ''}
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
    if (communityReportAnchorPending && window.location.hash) {
        const targetId = window.location.hash.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            communityReportAnchorPending = false;
            window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
        }
    }
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

    const postsQuery = communityServices.realtimeQuery(
        communityServices.ref(communityServices.rtdb, 'communityPosts'),
        communityServices.orderByChild('createdAt'),
        communityServices.limitToLast(60)
    );
    const feedLoadTimeout = window.setTimeout(() => {
        if (communityFeedLoaded) return;
        communityFeedStatus.classList.add('is-error');
        communityFeedStatus.textContent = 'A comunidade está demorando para responder. Tente novamente e confira as regras do Realtime Database.';
    }, 12000);
    communityServices.onValue(postsQuery, snapshot => {
        const latestPosts = [];
        snapshot.forEach(postSnapshot => {
            const post = postSnapshot.val();
            if (post && typeof post === 'object') latestPosts.push({ id: postSnapshot.key, ...post });
        });
        communityPosts = latestPosts.reverse();
        communityFeedLoaded = true;
        window.clearTimeout(feedLoadTimeout);
        communityFeedStatus.classList.remove('is-error');
        renderCommunityFeed();
    }, error => {
        window.clearTimeout(feedLoadTimeout);
        console.error('[Comunidade] Falha ao carregar publicações:', error);
        communityFeedStatus.classList.add('is-error');
        communityFeedStatus.textContent = `Não foi possível carregar a comunidade${error.code ? ` (${error.code})` : ''}. Confira se as regras do Realtime Database foram publicadas.`;
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
        const postReference = communityServices.push(communityServices.ref(communityServices.rtdb, 'communityPosts'));
        await communityServices.set(postReference, {
            authorId: user.uid,
            authorName,
            authorPhoto,
            authorIsAdmin: isCommunityAdmin(user),
            kind: form.elements.kind.value,
            gameId: form.elements.gameId.value,
            text,
            mediaUrl: media.url,
            mediaType: media.type,
            createdAt: communityServices.realtimeTimestamp()
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
        setCommunityFormFeedback(`Não foi possível publicar${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database e tente novamente.`, true);
    } finally {
        submitButton.disabled = false;
    }
});

communityFeed.addEventListener('submit', async event => {
    const postEditForm = event.target.closest('form[data-community-post-edit-form]');
    if (postEditForm) {
        event.preventDefault();
        const user = currentCommunityUser;
        const post = communityPosts.find(item => item.id === postEditForm.dataset.postId);
        const submitButton = postEditForm.querySelector('button[type="submit"]');
        if (!user || !communityServices || !post
            || (post.authorId !== user.uid && !isCommunityAdmin(user))) {
            setCommunityFeedback('Você só pode editar suas próprias publicações.', true);
            return;
        }

        const text = postEditForm.elements.text.value.trim();
        if (text.length > 1200 || (!text && post.mediaType === 'none')) {
            setCommunityFeedback('A publicação precisa ter texto ou mídia e pode ter até 1200 caracteres.', true);
            return;
        }

        submitButton.disabled = true;
        try {
            await communityServices.set(
                communityServices.ref(communityServices.rtdb, `communityPosts/${post.id}/text`),
                text
            );
            postEditForm.hidden = true;
            setCommunityFeedback('Publicação atualizada.');
        } catch (error) {
            console.error('[Comunidade] Falha ao editar publicação:', error);
            setCommunityFeedback(`Não foi possível editar a publicação${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database e tente novamente.`, true);
        } finally {
            submitButton.disabled = false;
        }
        return;
    }

    const form = event.target.closest('form[data-community-comment-form]');
    if (!form) return;
    event.preventDefault();
    const user = currentCommunityUser;
    if (!user || !communityServices) {
        setCommunityFeedback('Entre na sua conta WikiGames para comentar ou responder.', true);
        return;
    }

    const text = form.elements.text.value.trim();
    if (!text || text.length > 1200) {
        setCommunityFeedback('O comentário deve ter entre 1 e 1200 caracteres.', true);
        return;
    }
    const post = communityPosts.find(item => item.id === form.dataset.postId);
    if (!post) {
        setCommunityFeedback('Esta publicação não está mais disponível. Atualize a página e tente novamente.', true);
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    try {
        const commentId = form.dataset.commentId;
        if (commentId) {
            const existingComment = post.comments?.[commentId];
            if (!existingComment || (existingComment.authorId !== user.uid && !isCommunityAdmin(user))) {
                setCommunityFeedback('Você só pode editar seus próprios comentários.', true);
                return;
            }
            await communityServices.set(
                communityServices.ref(communityServices.rtdb, `communityPosts/${post.id}/comments/${commentId}`),
                { ...existingComment, text, updatedAt: communityServices.realtimeTimestamp() }
            );
            setCommunityFeedback('Comentário atualizado.');
        } else {
            const parentCommentId = form.dataset.parentId || '';
            const parentComment = parentCommentId ? post.comments?.[parentCommentId] : null;
            if (parentCommentId && !parentComment) {
                setCommunityFeedback('O comentário respondido não está mais disponível. Atualize a página e tente novamente.', true);
                return;
            }
            const authorPhoto = user.photoURL && /^https:\/\/[^\s]+$/i.test(user.photoURL) ? user.photoURL : '';
            const commentReference = communityServices.push(
                communityServices.ref(communityServices.rtdb, `communityPosts/${post.id}/comments`)
            );
            await communityServices.set(commentReference, {
                authorId: user.uid,
                authorName: (user.displayName || 'Usuário').slice(0, 60),
                authorPhoto,
                authorIsAdmin: isCommunityAdmin(user),
                text,
                parentCommentId,
                replyToName: parentComment ? String(parentComment.authorName || 'Usuário WikiGames').slice(0, 60) : '',
                createdAt: communityServices.realtimeTimestamp()
            });
            setCommunityFeedback(parentComment ? 'Resposta enviada.' : 'Comentário enviado.');
        }
        form.reset();
        if (form.classList.contains('community-inline-comment-form')) form.hidden = true;
    } catch (error) {
        console.error('[Comunidade] Falha ao salvar comentário:', error);
        setCommunityFeedback(`Não foi possível salvar o comentário${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database e tente novamente.`, true);
    } finally {
        submitButton.disabled = false;
    }
});

communityFeed.addEventListener('click', async event => {
    const postEditButton = event.target.closest('[data-community-post-edit]');
    if (postEditButton) {
        if (!currentCommunityUser || !communityServices) {
            setCommunityFeedback('Entre na sua conta WikiGames para editar publicações.', true);
            return;
        }
        const form = postEditButton.closest('[data-post-id]')?.querySelector('[data-community-post-edit-form]');
        if (form) {
            form.hidden = !form.hidden;
            if (!form.hidden) form.elements.text.focus();
        }
        return;
    }

    const postEditCancel = event.target.closest('[data-community-post-edit-cancel]');
    if (postEditCancel) {
        const form = postEditCancel.closest('[data-community-post-edit-form]');
        if (form) {
            form.reset();
            form.hidden = true;
        }
        return;
    }

    const postDeleteButton = event.target.closest('[data-community-post-delete]');
    if (postDeleteButton) {
        const post = communityPosts.find(item => item.id === postDeleteButton.dataset.communityPostDelete);
        const canDelete = post && currentCommunityUser
            && (post.authorId === currentCommunityUser.uid || isCommunityAdmin());
        if (!canDelete) {
            setCommunityFeedback('Você só pode excluir suas próprias publicações.', true);
            return;
        }
        if (!window.confirm('Tem certeza de que deseja excluir esta publicação?')) return;
        postDeleteButton.disabled = true;
        try {
            await communityServices.remove(
                communityServices.ref(communityServices.rtdb, `communityPosts/${post.id}`)
            );
            setCommunityFeedback('Publicação excluída.');
        } catch (error) {
            console.error('[Comunidade] Falha ao excluir publicação:', error);
            setCommunityFeedback(`Não foi possível excluir a publicação${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database e tente novamente.`, true);
        } finally {
            postDeleteButton.disabled = false;
        }
        return;
    }

    const replyButton = event.target.closest('[data-community-reply]');
    const editButton = event.target.closest('[data-community-edit]');
    if (replyButton || editButton) {
        if (!currentCommunityUser || !communityServices) {
            setCommunityFeedback('Entre na sua conta WikiGames para comentar ou responder.', true);
            return;
        }
        const commentId = (replyButton || editButton).dataset[replyButton ? 'communityReply' : 'communityEdit'];
        const formSelector = replyButton
            ? `form[data-parent-id="${commentId}"]`
            : `form[data-comment-id="${commentId}"]`;
        const form = (replyButton || editButton).closest('.community-comment-content')?.querySelector(formSelector);
        if (form) {
            form.hidden = !form.hidden;
            if (!form.hidden) form.elements.text.focus();
        }
        return;
    }

    const deleteButton = event.target.closest('[data-community-delete]');
    if (deleteButton) {
        const post = communityPosts.find(item => item.id === deleteButton.closest('[data-post-id]')?.dataset.postId);
        const commentId = deleteButton.dataset.communityDelete;
        const comment = post?.comments?.[commentId];
        const canDelete = comment && currentCommunityUser
            && (comment.authorId === currentCommunityUser.uid || isCommunityAdmin());
        if (!canDelete) {
            setCommunityFeedback('Você só pode excluir seus próprios comentários.', true);
            return;
        }
        if (!window.confirm('Tem certeza de que deseja excluir este comentário?')) return;
        deleteButton.disabled = true;
        try {
            await communityServices.remove(
                communityServices.ref(communityServices.rtdb, `communityPosts/${post.id}/comments/${commentId}`)
            );
            setCommunityFeedback('Comentário excluído.');
        } catch (error) {
            console.error('[Comunidade] Falha ao excluir comentário:', error);
            setCommunityFeedback(`Não foi possível excluir o comentário${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database e tente novamente.`, true);
        } finally {
            deleteButton.disabled = false;
        }
        return;
    }

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
        const likeReference = communityServices.ref(
            communityServices.rtdb,
            `communityPosts/${post.id}/likes/${currentCommunityUser.uid}`
        );
        if (liked) await communityServices.remove(likeReference);
        else await communityServices.set(likeReference, true);
        setCommunityFeedback('');
    } catch (error) {
        console.error('[Comunidade] Falha ao curtir publicação:', error);
        setCommunityFeedback(`Não foi possível atualizar a curtida${error.code ? ` (${error.code})` : ''}. Confira as regras do Realtime Database.`, true);
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
