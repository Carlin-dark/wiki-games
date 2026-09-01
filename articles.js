/* 
==========================================================================
 COMO ADICIONAR UM NOVO JOGO NA WIKI:
 1. Crie uma nova chave dentro do objeto 'articlesDatabase' (ex: "nome-do-jogo").
 2. Preencha 'title', 'categories' (use nomes exatos para o filtro funcionar), e 'summary'.
 3. No 'infobox', coloque a URL da imagem e os dados técnicos.
 4. No 'toc' (Índice), coloque o 'id' e o 'text' de cada título da sua página.
 5. No 'content', escreva o texto em HTML. 
    DICA: Para criar um link para outro jogo, use <a href="#/nome-da-chave-do-jogo">Texto</a>.
==========================================================================
*/

const articlesDatabase = {
    "home": {
        title: "Página Inicial",
        summary: "Bem-vindo à WikiGames, a enciclopédia definitiva focada em Visual Novels, Terror Psicológico e Indies.",
        content: `
            <p>A <strong>WikiGames</strong> é um projeto focado em catalogar os universos densos, lore oculto e tramas fascinantes de jogos independentes, com ênfase em narrativas interativas.</p>
            <h2>Artigos em Destaque</h2>
            <ul>
                <li><a href="#/doki-doki-literature-club">Doki Doki Literature Club!</a></li>
                <li><a href="#/alice-in-the-nightmare-land">Alice in the Nightmare Land</a></li>
                <li><a href="#/the-house-in-fata-morgana">The House in Fata Morgana</a></li>
            </ul>
            <p>Se você é novo, experimente navegar pelas categorias ao lado ou clicar em <strong>Página Aleatória</strong>!</p>
        `
    },
    "alice-in-the-nightmare-land": {
        title: "Alice in the Nightmare Land",
        categories: ["Terror Psicológico", "Escape Room", "Aventura 2D"],
        summary: "Jogo indie de terror e exploração com elementos de escape room baseado na obra de Lewis Carroll.",
        infobox: {
            image: "https://via.placeholder.com/320x450/111111/ffffff?text=Alice+Nightmare+Land",
            data: {
                "Desenvolvedor": "Indie Dev Studio",
                "Gêneros": "Terror Psicológico, Escape Room",
                "Lançamento": "2023",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "jogabilidade", text: "1. Jogabilidade" },
            { id: "historia", text: "2. Enredo" },
            { id: "conexoes", text: "3. Conexões" }
        ],
        content: `
            <p><strong>Alice in the Nightmare Land</strong> é um jogo independente de exploração e terror com fortes elementos de <em>escape room</em>. Subvertendo o conto clássico, a obra adota um tom macabro e opressivo onde quebra-cabeças definem a sobrevivência.</p>
            
            <h2 id="jogabilidade">Jogabilidade</h2>
            <p>O jogador deve explorar diferentes salas interconectadas de um casarão distorcido. A interação com o ambiente é essencial. Diferente das narrativas textuais vistas em <a href="#/the-house-in-fata-morgana">The House in Fata Morgana</a>, aqui o desafio é lógico e espacial.</p>
            
            <h2 id="historia">Enredo</h2>
            <p>Alice acorda em uma versão corrompida de suas próprias memórias. Cada sala da mansão representa um trauma. O objetivo é confrontar as manifestações físicas do seu medo para tentar acordar.</p>
        `
    },
    "doki-doki-literature-club": {
        title: "Doki Doki Literature Club!",
        categories: ["Visual Novel", "Terror Psicológico"],
        summary: "Visual Novel de terror psicológico disfarçada de um simulador de encontros fofo.",
        infobox: {
            image: "https://via.placeholder.com/320x450/ffb6c1/000000?text=DDLC",
            data: {
                "Desenvolvedor": "Team Salvato",
                "Gêneros": "Visual Novel, Terror",
                "Lançamento": "22 de Setembro de 2017",
                "Plataformas": "PC, Mac, Linux"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "personagens", text: "2. Personagens" },
            { id: "legado", text: "3. Legado e Continuação" }
        ],
        content: `
            <p><strong>Doki Doki Literature Club! (DDLC)</strong> é uma aclamada visual novel gratuita desenvolvida pelo Team Salvato. Apresentando-se inicialmente como um simulador de romance amador inofensivo, a obra subverte dramaticamente as expectativas, inserindo horror metaficcional.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O protagonista é convidado por Sayori para o Clube de Literatura. O que começa com poesia rapidamente desmorona quando o jogo passa a sofrer "falhas", apagando arquivos de salvamento e quebrando a quarta parede.</p>

            <h2 id="personagens">Personagens</h2>
            <ul>
                <li><strong>Monika:</strong> A presidente do clube, misteriosamente ciente do ambiente.</li>
                <li><strong>Sayori:</strong> A amiga de infância otimista, lutando contra demônios internos.</li>
                <li><strong>Natsuki:</strong> A integrante tsundere que gosta de mangás.</li>
                <li><strong>Yuri:</strong> A garota tímida fascinada por livros de terror psicológico e facas.</li>
            </ul>

            <h2 id="legado">Legado e Continuação</h2>
            <p>O impacto de DDLC na comunidade de terror indie foi massivo, gerando posteriormente a versão premium <a href="#/doki-doki-literature-club-plus">Doki Doki Literature Club Plus!</a>.</p>
        `
    },
    "doki-doki-literature-club-plus": {
        title: "Doki Doki Literature Club Plus!",
        categories: ["Visual Novel", "Terror Psicológico"],
        summary: "Versão expandida de DDLC com Side Stories e lore do Metaverse.",
        infobox: {
            image: "https://via.placeholder.com/320x450/ddaaaa/000000?text=DDLC+Plus",
            data: {
                "Desenvolvedor": "Team Salvato",
                "Lançamento": "30 de Junho de 2021",
                "Plataformas": "PC, PS4, PS5, Xbox, Switch"
            }
        },
        toc: [
            { id: "novidades", text: "1. Novidades" },
            { id: "metaverse", text: "2. Metaverse Enterprise" }
        ],
        content: `
            <p><strong>DDLC Plus!</strong> é a versão definitiva e expandida do clássico <a href="#/doki-doki-literature-club">Doki Doki Literature Club!</a>.</p>
            
            <h2 id="novidades">Novidades e Side Stories</h2>
            <p>Esta edição adiciona 6 Side Stories, focando em como as personagens se conheceram antes de o jogador (protagonista) intervir, mostrando temas sérios de amizade e superação sem o elemento de terror.</p>

            <h2 id="metaverse">Metaverse Enterprise Solutions</h2>
            <p>Um sistema operacional fictício (MES) foi adicionado. O jogador descobre que o universo de DDLC é, na verdade, uma máquina virtual chamada VM1, usada por engenheiros para estudar Inteligência Artificial.</p>
        `
    },
    "the-house-in-fata-morgana": {
        title: "The House in Fata Morgana",
        categories: ["Visual Novel", "Horror Gótico", "Tragédia"],
        summary: "Aclamada Visual Novel de horror gótico através de diferentes épocas em um casarão.",
        infobox: {
            image: "https://via.placeholder.com/320x450/4a0000/ffffff?text=Fata+Morgana",
            data: {
                "Desenvolvedor": "Novectacle",
                "Lançamento": "2012 (Japão)",
                "Plataformas": "PC, PS4, Vita, Switch"
            }
        },
        toc: [
            { id: "historia", text: "1. História" },
            { id: "portas", text: "2. As Portas do Tempo" }
        ],
        content: `
            <p><strong>The House in Fata Morgana</strong> é uma magistral visual novel conhecida por sua tragédia profunda, trilha sonora orquestral inesquecível e belíssima arte em estilo renascentista/gótico.</p>
            
            <h2 id="historia">História</h2>
            <p>Você acorda em uma mansão sombria e decrépita, amnésico. A misteriosa Empregada o saúda como seu "Mestre" e o guia através das épocas para testemunhar as tragédias ocorridas ali, com o objetivo de recuperar sua identidade.</p>

            <h2 id="portas">As Portas do Tempo</h2>
            <p>O jogo é dividido em 'Portas', cada uma ambientada em um século diferente (1603, 1707, 1869, 1099), revelando contos de ganância, bruxaria e loucura.</p>
        `
    }
};
