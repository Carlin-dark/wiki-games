// Utilitário para transformar texto em "slug" (Ex: "Terror Psicológico" vira "terror-psicologico")
function createSlug(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
}

// Renderiza o conteúdo principal baseado na URL (#)
function renderPage() {
    const hashData = window.location.hash.substring(2); // Remove o "#/"
    const container = document.getElementById("article-container");
    
    // 1. ROTA: Lista de Todos os Jogos
    if (hashData === "all") {
        document.title = "Todos os Jogos - WikiGames";
        let html = `<h1><i class="fa-solid fa-list"></i> Todos os Artigos</h1><ul class="all-games-list">`;
        
        // Pega todos, exclui a home, ordena por ordem alfabética
        const games = Object.keys(articlesDatabase).filter(k => k !== "home").sort();
        games.forEach(key => {
            const game = articlesDatabase[key];
            html += `<li><a href="#/${key}"><h3>${game.title}</h3></a><p>${game.summary}</p></li>`;
        });
        html += `</ul>`;
        container.innerHTML = html;
        window.scrollTo(0,0);
        return;
    }

    // 2. ROTA: Categorias (Ex: #/categoria/terror-psicologico)
    if (hashData.startsWith("categoria/")) {
        const catSlug = hashData.split("/")[1];
        let foundGames = [];
        let catNameDisplay = "Categoria";

        for (const key in articlesDatabase) {
            const game = articlesDatabase[key];
            if (game.categories) {
                game.categories.forEach(cat => {
                    if (createSlug(cat) === catSlug) {
                        foundGames.push({ key, title: game.title, summary: game.summary });
                        catNameDisplay = cat; // Pega o nome original formatado
                    }
                });
            }
        }

        document.title = `Categoria: ${catNameDisplay} - WikiGames`;
        let html = `<h1><i class="fa-solid fa-tag"></i> Categoria: ${catNameDisplay}</h1>`;
        
        if (foundGames.length > 0) {
            html += `<ul class="category-list">`;
            foundGames.forEach(g => {
                html += `<li><a href="#/${g.key}"><h3>${g.title}</h3></a><p>${g.summary}</p></li>`;
            });
            html += `</ul>`;
        } else {
            html += `<p>Nenhum jogo encontrado nesta categoria.</p>`;
        }
        
        container.innerHTML = html;
        window.scrollTo(0,0);
        return;
    }

    // 3. ROTA: Artigo Específico (Jogo)
    const route = hashData.split('#')[0] || "home"; // Lida com âncoras na mesma pag
    const article = articlesDatabase[route];

    if (article) {
        document.title = `${article.title} - WikiGames`;
        document.querySelector('meta[name="description"]').setAttribute("content", article.summary);
        
        let htmlContent = `<h1>${article.title}</h1>`;
        
        // Infobox
        if (article.infobox) {
            htmlContent += `<div class="infobox">
                <div class="infobox-title">${article.title}</div>
                <img src="${article.infobox.image}" alt="Capa">
                <table>`;
            for (const [key, value] of Object.entries(article.infobox.data)) {
                htmlContent += `<tr><th>${key}</th><td>${value}</td></tr>`;
            }
            htmlContent += `</table></div>`;
        }

        // Índice (TOC)
        if (article.toc && article.toc.length > 0) {
            htmlContent += `<div class="toc"><div class="toc-title">Índice</div><ul>`;
            article.toc.forEach(item => {
                // Link aponta pra propria rota + âncora
                htmlContent += `<li><a href="#/${route}#${item.id}">${item.text}</a></li>`;
            });
            htmlContent += `</ul></div>`;
        }

        // Texto do Artigo
        htmlContent += `<div class="article-text">${article.content}</div>`;
        
        // Links de Categorias no final
        if(article.categories) {
            htmlContent += `<hr style="margin: 30px 0 15px;"><p style="font-size:13px;"><i class="fa-solid fa-tags"></i> <strong>Categorias:</strong> `;
            const catLinks = article.categories.map(cat => `<a href="#/categoria/${createSlug(cat)}">${cat}</a>`);
            htmlContent += catLinks.join(' | ') + `</p>`;
        }

        container.innerHTML = htmlContent;

        // Controle de Scroll (Vai pro topo ou pra ancora clicada no indice)
        const anchor = hashData.split('#')[1];
        if(anchor) {
            setTimeout(() => {
                const targetElement = document.getElementById(anchor);
                if(targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }

    } else {
        // Erro 404 Virtual
        document.title = `Página não encontrada - WikiGames`;
        container.innerHTML = `
            <h1><i class="fa-solid fa-triangle-exclamation"></i> Erro 404 - Artigo não encontrado</h1>
            <p>O artigo que você tentou acessar não existe na nossa base de dados.</p>
            <p>Volte para a <a href="#/home">Página Inicial</a> ou use a barra de busca acima.</p>
        `;
    }
}

// Funcionalidade: Barra de Pesquisa
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = '';
    
    if(query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    let results = [];
    for(const key in articlesDatabase) {
        if(key !== "home" && articlesDatabase[key].title.toLowerCase().includes(query)) {
            results.push({ key, title: articlesDatabase[key].title });
        }
    }

    if(results.length > 0) {
        results.forEach(res => {
            const a = document.createElement('a');
            a.href = `#/${res.key}`;
            a.innerHTML = `<i class="fa-solid fa-gamepad"></i> ${res.title}`;
            a.onclick = () => { searchResults.style.display = 'none'; searchInput.value = ''; };
            searchResults.appendChild(a);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<span style="display:block; padding:10px; color:#666;">Nenhum jogo encontrado.</span>';
        searchResults.style.display = 'block';
    }
});

// Fecha pesquisa ao clicar fora
document.addEventListener('click', function(e) {
    if(!searchInput.contains(e.target)) searchResults.style.display = 'none';
});

// Funcionalidade: Página Aleatória
document.getElementById('randomPageBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const keys = Object.keys(articlesDatabase).filter(k => k !== "home");
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    window.location.hash = `#/${randomKey}`;
});

// Inicia os Listeners de Rota
window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);

/* ====================================================
   LÓGICA DO MENU HAMBURGER (MOBILE)
==================================================== */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('menuOverlay');
const sidebarLinks = sidebar.querySelectorAll('a'); // Todos os links do menu

// Função para abrir menu
function openMenu() {
    sidebar.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
}

// Função para fechar menu
function closeMenu() {
    sidebar.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Destrava o scroll
}

// Eventos de clique
hamburgerBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// Fecha o menu automaticamente quando o usuário clica em qualquer link do menu no celular
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeMenu();
        }
    });
});
