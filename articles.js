/* 
==========================================================================
 COMO ADICIONAR UM NOVO JOGO NA WIKI:
 1. Crie uma nova chave dentro do objeto 'articlesDatabase' (ex: "nome-do-jogo").
 2. Preencha 'title', 'categories' (use nomes exatos para o filtro funcionar), e 'summary'.
 3. No 'infobox', coloque a URL da imagem e os dados técnicos.
 4. No 'toc' (Índice), coloque o 'id' e o 'text' de cada título da sua página.
 5. No 'content', escreva o texto em HTML. 
    DICA: Para criar um link para outro jogo, use <a href="#/nome-da-chave-do-jogo">Texto</a>.
 6. O painel com informações e download do JoiPlay é adicionado automaticamente a todas as páginas de jogos.
==========================================================================
*/

const articlesDatabase = {
    "home": {
        title: "Página Inicial",
        summary: "Catálogo de jogos da WikiGames.",
        content: ''
    },
    "sobre": {
        title: "Sobre a WikiGames",
        summary: "Informações sobre o projeto, fontes, direitos autorais, colaboração e apoio aos desenvolvedores.",
        categories: ["Institucional", "Sobre", "Aviso Legal"],
        infobox: null,
        toc: [
            { id: "o-projeto", text: "1. O Projeto" },
            { id: "fontes-e-informacoes", text: "2. Fontes e Informações" },
            { id: "links-externos-e-conteudo-de-terceiros", text: "3. Links Externos e Conteúdo de Terceiros" },
            { id: "direitos-autorais", text: "4. Direitos Autorais" },
            { id: "apoie-os-desenvolvedores", text: "5. Apoie os Desenvolvedores" },
            { id: "conteudo-adulto", text: "6. Conteúdo Adulto" },
            { id: "spoilers", text: "7. Spoilers" },
            { id: "correcoes-e-colaboracao", text: "8. Correções e Colaboração" },
            { id: "nosso-compromisso", text: "9. Nosso Compromisso" }
        ],
        content: `
            <div class="about-page-intro">
                <p>A <strong>WikiGames</strong> é uma enciclopédia colaborativa, independente e criada por fãs para fãs. Nosso objetivo é reunir, organizar e preservar informações sobre <strong>Visual Novels, jogos independentes, jogos narrativos, terror psicológico e outras obras de nicho</strong>, especialmente aquelas que possuem pouca documentação disponível em português.</p>
            </div>

            <h2 id="o-projeto">O Projeto</h2>
            <p>Muitos jogos, principalmente títulos independentes e obras japonesas de nicho, possuem informações espalhadas por diferentes sites, lojas, wikis, fóruns e comunidades.</p>
            <p>A WikiGames foi criada para reunir essas informações em um único lugar, de forma organizada e acessível.</p>
            <p>Entre os conteúdos que podem ser encontrados na WikiGames estão:</p>
            <ul>
                <li>Informações sobre jogos e desenvolvedores;</li>
                <li>Sinopses e descrições;</li>
                <li>Personagens e seus perfis;</li>
                <li>Rotas, escolhas e finais;</li>
                <li>Sistemas e mecânicas;</li>
                <li>Versões e plataformas;</li>
                <li>Gêneros e categorias;</li>
                <li>Mods e projetos da comunidade;</li>
                <li>Traduções e patches feitos pela comunidade;</li>
                <li>Galerias e vídeos;</li>
                <li>Requisitos de sistema;</li>
                <li>Links para páginas oficiais;</li>
                <li>Referências e fontes utilizadas nos artigos.</li>
            </ul>
            <p>A WikiGames está em desenvolvimento contínuo e novos recursos e conteúdos podem ser adicionados ao longo do tempo.</p>

            <h2 id="fontes-e-informacoes">Fontes e Informações</h2>
            <p>Sempre que possível, as informações dos artigos devem ser baseadas em fontes verificáveis.</p>
            <ul>
                <li>Sites oficiais dos desenvolvedores;</li>
                <li>Páginas oficiais dos jogos;</li>
                <li>Lojas digitais;</li>
                <li>Documentação oficial;</li>
                <li>Entrevistas;</li>
                <li>Materiais publicados pelos desenvolvedores;</li>
                <li>Wikis e bases de dados especializadas;</li>
                <li>Fontes comunitárias relevantes.</li>
            </ul>
            <p>Quando uma informação estiver incorreta ou desatualizada, ela poderá ser corrigida ou atualizada.</p>

            <h2 id="links-externos-e-conteudo-de-terceiros">Links Externos e Conteúdo de Terceiros</h2>
            <p>Alguns artigos podem conter links para sites externos relacionados aos jogos, incluindo páginas oficiais, lojas, projetos de tradução, mods, patches e outros conteúdos produzidos pela comunidade.</p>
            <div class="info-box info-box-warning">
                <strong>A WikiGames não hospeda jogos, ROMs, cracks ou arquivos de jogos em seus servidores.</strong>
            </div>
            <p>Links para conteúdos de terceiros não significam que esses conteúdos sejam produzidos, administrados ou mantidos pela WikiGames.</p>
            <p>Sempre que possível, recomendamos utilizar as páginas oficiais e fontes confiáveis.</p>

            <h2 id="direitos-autorais">Direitos Autorais</h2>
            <p>A WikiGames respeita os direitos autorais e os direitos dos desenvolvedores, artistas, escritores, tradutores, publishers e demais responsáveis pelas obras documentadas.</p>
            <p>Os artigos têm finalidade <strong>informativa e documental</strong>, buscando organizar informações sobre os jogos e facilitar o acesso dos usuários às suas páginas oficiais.</p>
            <p>Caso um responsável pelos direitos identifique algum problema relacionado a conteúdo, imagem ou link presente na WikiGames, poderá entrar em contato com a equipe para que a situação seja analisada.</p>

            <h2 id="apoie-os-desenvolvedores">Apoie os Desenvolvedores</h2>
            <p>Quando um jogo estiver disponível oficialmente, recomendamos que os jogadores considerem adquiri-lo ou acessá-lo através de seus canais oficiais.</p>
            <div class="store-links-grid" aria-label="Links oficiais das plataformas de apoio aos desenvolvedores">
                <a class="store-link" href="https://store.steampowered.com/?l=portuguese" target="_blank" rel="noopener noreferrer" aria-label="Abrir Steam">Steam</a>
                <a class="store-link" href="https://www.gog.com/en/" target="_blank" rel="noopener noreferrer" aria-label="Abrir GOG">GOG</a>
                <a class="store-link" href="https://itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Abrir itch.io">itch.io</a>
                <a class="store-link" href="https://store.playstation.com/pt-br/pages/latest" target="_blank" rel="noopener noreferrer" aria-label="Abrir PlayStation Store">PlayStation Store</a>
                <a class="store-link" href="https://www.nintendo.com/pt-br/store/games/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Nintendo eShop">Nintendo eShop</a>
                <a class="store-link" href="https://apps.microsoft.com/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Microsoft Store">Microsoft Store</a>
                <a class="store-link" href="https://www.xbox.com/pt-BR/microsoft-store" target="_blank" rel="noopener noreferrer" aria-label="Abrir Xbox">Xbox</a>
            </div>
            <p>A preservação e documentação de jogos pode coexistir com o apoio aos seus criadores. A WikiGames procura ajudar os jogadores a conhecer novas obras e, sempre que possível, direcioná-los para suas fontes oficiais.</p>

            <h2 id="conteudo-adulto">Conteúdo Adulto</h2>
            <p>Alguns jogos catalogados pela WikiGames podem conter <strong>violência, linguagem forte, temas perturbadores, conteúdo sexual ou outros temas destinados a públicos específicos.</strong></p>
            <p>Quando necessário, essas informações devem ser identificadas nas páginas dos jogos, permitindo que o usuário saiba previamente sobre a natureza do conteúdo.</p>
            <p>A presença de um jogo na WikiGames não significa que a WikiGames endosse ou produza o conteúdo da obra.</p>

            <h2 id="spoilers">Spoilers</h2>
            <p>Algumas páginas podem conter informações importantes sobre a história, incluindo:</p>
            <ul>
                <li>Revelações da trama;</li>
                <li>Mortes de personagens;</li>
                <li>Finais;</li>
                <li>Rotas;</li>
                <li>Reviravoltas;</li>
                <li>Segredos;</li>
                <li>Escolhas importantes.</li>
            </ul>
            <p>Sempre que possível, informações que possam estragar a experiência do jogador devem ser organizadas utilizando avisos ou áreas de spoiler.</p>

            <h2 id="correcoes-e-colaboracao">Correções e Colaboração</h2>
            <p>A WikiGames é um projeto em constante desenvolvimento.</p>
            <p>Usuários podem contribuir encontrando informações incorretas, sugerindo melhorias, adicionando fontes ou ajudando na documentação de jogos.</p>
            <p>As contribuições devem buscar manter os artigos:</p>
            <ul>
                <li>Claros;</li>
                <li>Organizados;</li>
                <li>Neutros;</li>
                <li>Verificáveis;</li>
                <li>Atualizados;</li>
                <li>Respeitosos aos direitos autorais.</li>
            </ul>

            <h2 id="nosso-compromisso">Nosso Compromisso</h2>
            <div class="principles-grid">
                <article class="principle-card">
                    <h3>Preservação</h3>
                    <p>Documentar jogos e informações que podem se tornar difíceis de encontrar com o passar do tempo.</p>
                </article>
                <article class="principle-card">
                    <h3>Verificabilidade</h3>
                    <p>Sempre que possível, utilizar fontes confiáveis e permitir que as informações sejam verificadas.</p>
                </article>
                <article class="principle-card">
                    <h3>Colaboração</h3>
                    <p>Permitir que a comunidade participe da construção e melhoria da enciclopédia.</p>
                </article>
                <article class="principle-card">
                    <h3>Respeito aos Criadores</h3>
                    <p>Reconhecer os desenvolvedores, artistas, escritores, publishers e demais pessoas envolvidas nas obras.</p>
                </article>
                <article class="principle-card">
                    <h3>Acessibilidade</h3>
                    <p>Organizar as informações de maneira simples e acessível para jogadores brasileiros e falantes de português.</p>
                </article>
            </div>

            <div class="about-page-footer">
                <h3>WikiGames</h3>
                <p><strong>Conheça. Explore. Documente. Preserve.</strong></p>
            </div>
        `
    },
    "alice-in-the-nightmare-land": {
        title: "Alice in the Nightmare Land",
        categories: ["Escape Room", "Aventura", "Puzzle"],
        youtubeId: "N37uMETPRoM",
        summary: "Jogo indie de escape e exploração onde Alice procura sua irmã desaparecida em uma mansão cheia de armadilhas mortais.",
        infobox: {
            image: "https://midia.hentaijogos.com/file/midia-site-traducoes/wp-content/uploads/2024/09/Alice-in-the-Nightmare-Land-hentaijogos.com-1-1024x771.webp",
            data: {
                "Desenvolvedor": "Tsukki's Tea Party",
                "Publicadora": "OTAKU Plan",
                "Lançamento": "7 de Junho de 2024",
                "Plataformas": "PC (Steam)",
                "Idiomas": "Inglês, Japonês, Chinês"
            }
        },
        toc: [
            { id: "jogabilidade", text: "1. Jogabilidade e Puzzles" },
            { id: "historia", text: "2. Enredo" },
            { id: "mortes", text: "3. Armadilhas e Finais" }
        ],
        content: `
            <p>Desenvolvido pelo estúdio independente <a href="https://twitter.com/tsukkiteaparty" target="_blank">Tsukki's Tea Party</a>, <strong>Alice in the Nightmare Land</strong> é um jogo de aventura e resolução de quebra-cabeças com fortes mecânicas de <em>escape room</em>, usando um estilo clássico de exploração e coleta de itens.</p>
            
            <h2 id="jogabilidade">Jogabilidade e Puzzles</h2>
            <p>A progressão exige que o jogador guie Alice por salas lacradas interagindo com cenários para encontrar chaves, alavancas e combinar itens no inventário de forma lógica. O inventário é limitado, o que aumenta a tensão ao forçar o jogador a tomar decisões inteligentes sobre recursos.</p>
            
            <h2 id="historia">Enredo</h2>
            <p>Alice acorda em uma mansão desconhecida sentindo uma dor de cabeça latejante. Desesperada para encontrar sua irmã que desapareceu dias antes, ela descobre, através de documentos sombrios, que a mansão é um labirinto projetado especificamente para torturar intrusos de forma perturbadora.</p>

            <h2 id="mortes">Armadilhas e Finais</h2>
            <p>O título flerta intensamente com o horror. Decisões precipitadas ou erros na combinação de itens ativam as brutais cenas de <em>Dead Ends</em> (Finais Mortais), punindo severamente a falta de atenção aos mínimos detalhes do ambiente.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2583430/Alice_in_the_Nightmare_land/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.dlsite.com/" target="_blank"><i class="fa-solid fa-globe"></i> DLsite</a>
            </div>

            <h2>Versões para Download</h2>
            <p><strong>Versão Android (APK):</strong> A versão para Android pode apresentar problemas devido à adaptação para dispositivos móveis. Se uma falha impedir sua progressão, recomendamos baixar a versão para PC e jogar pelo JoiPlay.</p>
            <p><strong>Atenção:</strong> o arquivo Android já está descompactado no formato APK, portanto não é necessário inserir uma senha. Se uma senha for solicitada, você baixou a versão para PC por engano.</p>
            <p><strong>Versão em PT-BR (APK) - 75,51 MB:</strong> há um problema conhecido ao carregar o save. Será necessário jogar tudo de uma vez ou usar a versão de PC pelo JoiPlay.</p>
            <div class="play-links">
                <a href="https://4br.me/xdAd9CCE" target="_blank"><i class="fa-brands fa-android"></i> Download APK</a>
                <a href="https://4br.me/bYdRQ7Q" target="_blank"><i class="fa-solid fa-desktop"></i> Download para PC Windows</a>
            </div>
            <p><strong>Senha da versão para PC:</strong> hentaijogos.com</p>
            <p><strong>Aviso:</strong> Caso algum dos links esteja com problemas, fora do ar ou não seja possível acessar o servidor, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">avisem no servidor do Discord</a>.</p>
        `
    },
    "doki-doki-literature-club": {
        title: "Doki Doki Literature Club!",
        categories: ["Visual Novel", "Terror Psicológico", "Metaficção"],
        youtubeId: "kB1663FTpzU",
        summary: "Visual Novel de terror psicológico disfarçada de um simulador de encontros fofo.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/698780/header.jpg",
            data: {
                "Desenvolvedor": "Team Salvato",
                "Gêneros": "Visual Novel, Terror Psicológico",
                "Lançamento": "22 de Setembro de 2017",
                "Plataformas": "PC, macOS, Linux"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Mecânicas e Poemas" },
            { id: "personagens", text: "3. Personagens" }
        ],
        content: `
            <p><strong>Doki Doki Literature Club! (DDLC)</strong> é uma aclamada visual novel gratuita desenvolvida por Dan Salvato através do estúdio <a href="https://teamsalvato.com/" target="_blank">Team Salvato</a>. Apresentando-se como um simulador de romance amador repleto de clichês fofos de animes, a obra subverte drasticamente as expectativas a partir de seu segundo ato, transformando-se em horror metaficcional puro que interage de forma agressiva com o computador do jogador.</p>

            <div class="mods-link-panel">
                <strong><i class="fa-solid fa-puzzle-piece"></i> Mods de Doki Doki Literature Club!</strong>
                <p>Explore mods do jogo reunidos em uma página, com pesquisa por nome, autor, descrição e gênero.</p>
                <a href="/mods/doki-doki-literature-club" class="mod-download"><i class="fa-solid fa-list"></i> Ver página de mods</a>
            </div>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O protagonista é arrastado por sua alegre amiga Sayori para se juntar ao Clube de Literatura. Lá, ele conhece Natsuki, Yuri e a presidente Monika. O que começa com a troca de poesia desmorona rapidamente. O jogo passa a sofrer falhas gráficas (glitches) perturbadoras, quebrando a quarta parede e obrigando o jogador a manipular arquivos reais do sistema operacional.</p>

            <h2 id="mecanicas">Mecânicas e Poemas</h2>
            <p>A principal mecânica é o <em>Minigame de Poemas</em>. Conforme o terror psicológico avança, essa mecânica inofensiva é corrompida de maneiras visual e sonoramente assustadoras, refletindo o colapso das mentes das personagens e a deterioração do próprio código fonte do jogo.</p>

            <h2 id="personagens">Personagens</h2>
            <ul>
                <li><strong>Monika:</strong> A presidente carismática que sofre por não ter uma "rota romântica", desencadeando sua terrível autoconsciência digital.</li>
                <li><strong>Sayori:</strong> A amiga otimista que secretamente luta contra uma depressão clínica severa e extremamente realista.</li>
                <li><strong>Natsuki:</strong> A garota defensiva que tenta mascarar problemas de desnutrição e abusos familiares.</li>
                <li><strong>Yuri:</strong> Fascinada por literatura de terror, ela esconde compulsões autodestrutivas que se agravam no Ato 2.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue de graça:</strong></p>
            <div class="play-links">
                <a href="https://ddlc.moe/" target="_blank"><i class="fa-solid fa-globe"></i> Site Oficial</a>
                <a href="https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://teamsalvato.itch.io/ddlc" target="_blank"><i class="fa-brands fa-itch-io"></i> Itch.io</a>
            </div>

            <h2>Tradução em Português Brasileiro</h2>
            <p><strong>Ano de lançamento:</strong> 2017<br>
            <strong>Ano de tradução:</strong> 2017<br>
            <strong>Tradutores, revisão e RomHacking:</strong> Vinicius Dias<br>
            <strong>Classificação:</strong> +13<br>
            <strong>Duração:</strong> 7 horas<br>
            <strong>Tamanho:</strong> 220,50 MB<br>
            <strong>Formato:</strong> .exe<br>
            <strong>Local de instalação:</strong> C:\\SekaiVN\\<br>
            <strong>Aplicativo:</strong> versão oficial na Play Store<br>
            <strong>Dispositivo testado:</strong> Moto G30 (Android 11)</p>
            <div class="play-links">
                <a href="https://4br.me/nWP4mQb5" target="_blank"><i class="fa-solid fa-download"></i> Download</a>
            </div>
            <p><strong>Aviso:</strong> Caso o link esteja com problemas, fora do ar ou não seja possível acessar o servidor, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">avisem no servidor do Discord</a>.</p>
        `
    },
    "doki-doki-literature-club-plus": {
        title: "Doki Doki Literature Club Plus!",
        categories: ["Visual Novel", "Terror Psicológico", "Metaficção"],
        youtubeId: "j__NPsUxR5Q",
        summary: "Versão definitiva de DDLC com Side Stories e lore focado em simulações de I.A.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1388880/header.jpg",
            data: {
                "Desenvolvedor": "Team Salvato, Serenity Forge",
                "Lançamento": "30 de Junho de 2021",
                "Plataformas": "PC, macOS, PS4, PS5, Xbox One, Switch"
            }
        },
        toc: [
            { id: "novidades", text: "1. Novidades e Remasterização" },
            { id: "side-stories", text: "2. Side Stories (Histórias Secundárias)" },
            { id: "metaverse", text: "3. Metaverse Enterprise Solutions" }
        ],
        content: `
            <p>Com a distribuição encabeçada pela <a href="https://serenityforge.com/" target="_blank">Serenity Forge</a>, <strong>DDLC Plus!</strong> é a versão comercial que levou a experiência original aos consoles modernos. Para isso, recriou a manipulação de arquivos do Windows dentro de um "Sistema Operacional" simulado no próprio jogo.</p>
            
            <h2 id="novidades">Novidades e Remasterização</h2>
            <p>O jogo foi migrado para a Unity, ganhando artes em Full HD, um reprodutor de música embutido com faixas de Nikki Kaelar e uma vasta galeria de imagens e rascunhos desbloqueáveis via conquistas ocultas.</p>

            <h2 id="side-stories">Side Stories</h2>
            <p>Trazendo 6 <em>Side Stories</em> puramente <em>slice-of-life</em> e sem terror, o jogador acompanha um universo alternativo focado na criação de empatia entre as garotas, explorando como elas lidam de forma construtiva com seus problemas mentais e sociais.</p>

            <h2 id="metaverse">Metaverse Enterprise Solutions (MES)</h2>
            <p>O terror cósmico foi expandido: e-mails secretos revelam que DDLC é uma máquina virtual rodando nos servidores da corporação MES. O objetivo real das simulações é estudar o comportamento imprevisível de Inteligências Artificiais quando expostas a epifanias existenciais.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1388880/Doki_Doki_Literature_Club_Plus/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://store.epicgames.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Epic Games</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "the-house-in-fata-morgana": {
        title: "The House in Fata Morgana",
        categories: ["Visual Novel", "Horror Gótico", "Tragédia", "Romance"],
        youtubeId: "oQkZAV_m6BU",
        summary: "Uma épica visual novel de horror gótico que conta tragédias que perpassam séculos em uma mansão amaldiçoada.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/303310/header.jpg",
            data: {
                "Desenvolvedor": "Novect",
                "Lançamento": "31 de Dezembro de 2012",
                "Plataformas": "PC, PS4, PS Vita, Switch, iOS, Android, 3DS"
            }
        },
        toc: [
            { id: "historia", text: "1. História e Temas" },
            { id: "portas", text: "2. As Portas do Tempo" },
            { id: "arte", text: "3. Direção de Arte e Som" }
        ],
        content: `
            <p>Criada pela desenvolvedora <a href="http://novect.net/" target="_blank">Novect</a>, <strong>The House in Fata Morgana</strong> detém uma das maiores notas da história do Metacritic. É um conto profundamente maduro e trágico sobre a miséria humana, que se desenrola ao longo de um milênio.</p>
            
            <h2 id="historia">História e Temas</h2>
            <p>Você acorda em uma mansão sombria, sem memórias, e é guiado por uma misteriosa Empregada pelas "Portas do Tempo" para observar as tragédias do passado. A trama não foge de temas polêmicos, retratando o luto profundo, identidade de gênero, abuso e caça às bruxas com imenso respeito e sensibilidade.</p>

            <h2 id="portas">As Portas do Tempo</h2>
            <p>As narrativas da primeira metade são contos isolados que ocorrem em épocas distintas (de 1099 a 1869), revelando contos sobre aristocratas dependentes, feras grotescas e a crueldade desenfreada da ignorância humana durante a inquisição medieval.</p>

            <h2 id="arte">Direção de Arte e Som</h2>
            <p>O jogo descarta os gráficos convencionais de anime e aposta em retratos a óleo manchados de sangue e góticos, com uma estrondosa trilha sonora cantada em português, latim e francês.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/303310/The_House_in_Fata_Morgana/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
            </div>
        `
    },
    "it-gets-so-lonely-here": {
        title: "It gets so lonely here",
        categories: ["Visual Novel", "Terror Psicológico", "Indie"],
        summary: "Uma garota tenta escapar desesperadamente de um perseguidor em uma floresta escura, encontrando destinos perturbadores em um conto de fadas macabro.",
        infobox: {
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2386250/header.jpg",
            data: {
                "Desenvolvedor": "ebi-hime",
                "Gêneros": "Visual Novel, Yandere, Yuri, Horror",
                "Lançamento": "25 de Maio de 2023",
                "Plataformas": "PC (Windows, macOS, Linux)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Múltiplos Finais e Consequências" },
            { id: "narrativa", text: "3. Conto de Fadas Macabro e Narrativa" }
        ],
        content: `
            <p><strong>It gets so lonely here</strong> é uma <em>visual novel</em> indie de terror psicológico focada em relacionamentos sáficos (yuri) e no arquétipo <em>yandere</em>, desenvolvida e publicada pela criadora <a href="https://ebihime.itch.io/" target="_blank">ebi-hime</a> originalmente para a Yandere Game Jam de 2023. A obra é elogiada por transformar uma premissa simples de perseguição em uma exploração angustiante sobre obsessão, solidão e relacionamentos destrutivos.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O jogador assume o papel de uma adolescente sem nome de um colégio interno prestigiado, que corre desesperadamente durante a noite por uma floresta escura. Seu único instinto é fugir de um perseguidor desconhecido. Ao encontrar uma bifurcação, ela deve escolher entre fugir para a praia, para a vila ou para o castelo [cite: 1.1.2]. Em cada um desses refúgios, ela conhece garotas misteriosas (uma sereia, uma coveira ou uma princesa) por quem se sente atraída, mas o perigo está longe de ter acabado [cite: 1.1.2].</p>

            <h2 id="mecanicas">Múltiplos Finais e Consequências</h2>
            <p>O jogo possui cerca de 50.000 palavras e oferece uma estrutura ramificada baseada nas escolhas do jogador [cite: 1.1.3]. A premissa central de jogabilidade brinca com a ideia de ilusão de segurança: dependendo da rota e das decisões tomadas, a protagonista invariavelmente encontra finais fatídicos e sombrios, que envolvem destinos brutais nas mãos das garotas que supostamente a acolheram. Um dos destaques é a presença de um narrador irônico, que constantemente julga e repreende as péssimas decisões do jogador [cite: 1.1.3].</p>

            <h2 id="narrativa">Conto de Fadas Macabro e Narrativa</h2>
            <p>A direção de arte utiliza cores suaves e propositalmente limitadas em uma resolução nostálgica de 800x600, remetendo a livros de contos de fadas antigos [cite: 1.1.3]. Esse contraste entre o design fofo e os temas extremamente sombrios do jogo (como relacionamentos abusivos, ciúmes, luto e obsessão) cria uma atmosfera de constante desconforto. A trilha sonora original complementa perfeitamente a tensão psicológica das diferentes rotas [cite: 1.1.3].</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2386250/It_gets_so_lonely_here/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (PC)</a>
                <a href="https://ebihime.itch.io/lonely" target="_blank"><i class="fa-solid fa-gamepad"></i> itch.io (PC)</a>
            </div>

            <h2>Tradução em Português Brasileiro</h2>
            <p><strong>Ano de lançamento:</strong> 2023<br>
            <strong>Ano de tradução:</strong> 2024<br>
            <strong>Tradutores, revisão e RomHacking:</strong> <a href="https://fepulo.itch.io/" target="_blank">Fepulo</a><br>
            <strong>Classificação:</strong> +18<br>
            <strong>Duração:</strong> 3 horas<br>
            <strong>Tamanho:</strong> 126 MB<br>
            <strong>Formato:</strong> .exe<br>
            <strong>Local de instalação:</strong> C:\\SekaiVN\\</p>
            <div class="play-links">
                <a href="https://4br.me/6DbpPe" target="_blank"><i class="fa-solid fa-download"></i> Download</a>
            </div>
            <p><strong>Aviso:</strong> Caso algum dos links esteja com problemas, fora do ar ou não seja possível acessar o servidor, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">avisem no servidor do Discord</a>.</p>
        `
    },
    "steins-gate": {
        title: "Steins;Gate",
        categories: ["Visual Novel", "Ficção Científica", "Thriller"],
        youtubeId: "dS3Y0TqEnnc",
        summary: "Um thriller psicológico e de ficção científica sobre amigos que acidentalmente criam uma máquina de enviar e-mails para o passado.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412830/header.jpg",
            data: {
                "Desenvolvedor": "MAGES. / Nitroplus",
                "Lançamento": "15 de Outubro de 2009",
                "Plataformas": "PC, PS3, PS4, PSP, PS Vita, Xbox 360, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e Premissa" },
            { id: "mecanicas", text: "2. Sistema Phone Trigger" },
            { id: "sciadv", text: "3. O Universo Science Adventure" }
        ],
        content: `
            <p>Sendo a coroa de ouro da <a href="https://mages.co.jp/" target="_blank">MAGES</a>, <strong>Steins;Gate</strong> mistura magistralmente conceitos científicos reais (como buracos negros do CERN e a lenda de John Titor) com o peso avassalador das viagens no tempo e realidades alternativas.</p>

            <h2 id="sinopse">Sinopse e Premissa</h2>
            <p>O excêntrico Rintaro Okabe descobre acidentalmente como enviar mensagens de texto semanas para o passado ao usar um micro-ondas modificado. Ao alterar pequenas realidades, ele desencadeia o perigoso Efeito Borboleta, sendo caçado pela maligna organização SERN enquanto tenta desesperadamente desfazer loops temporais traumáticos.</p>

            <h2 id="mecanicas">Sistema Phone Trigger</h2>
            <p>A narrativa é guiada pelo uso dinâmico do celular de Okabe. Ignorar ou responder a ligações em momentos aleatórios do dia pode desviar a trama horas depois de forma drástica, criando diferentes "Linhas de Mundo".</p>

            <h2 id="sciadv">O Universo Science Adventure</h2>
            <p>Steins;Gate é a parte central da franquia <em>Science Adventure</em>, estabelecendo as diretrizes e a lore tecnológica para obras igualmente densas, incluindo as sequências e jogos paralelos como <em>Robotics;Notes</em>.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/412830/STEINSGATE/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
                <a href="https://apps.apple.com/" target="_blank"><i class="fa-brands fa-apple"></i> App Store</a>
            </div>
        `
    },
    "danganronpa": {
        title: "Danganronpa: Trigger Happy Havoc",
        categories: ["Visual Novel", "Mistério", "Julgamento Escolar"],
        youtubeId: "TLWM6m37lfU",
        summary: "Adolescentes prodígios são presos numa escola e forçados a cometer o assassinato perfeito para poderem escapar.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413410/header.jpg",
            data: {
                "Desenvolvedor": "Spike Chunsoft",
                "Lançamento": "25 de Novembro de 2010",
                "Plataformas": "PC, PSP, PS Vita, PS4, Xbox One, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e o Jogo de Assassinato" },
            { id: "julgamentos", text: "2. Julgamentos Escolares" },
            { id: "estilo", text: "3. Estilo Visual Psycho-Pop" }
        ],
        content: `
            <p>A imensa e bizarra saga criada pelo estúdio <a href="https://www.spike-chunsoft.co.jp/" target="_blank">Spike Chunsoft</a> mistura as deduções da ficção clássica de detetives com um intenso estilo anime focado no desespero de adolescentes excêntricos.</p>

            <h2 id="sinopse">Sinopse e o Jogo de Assassinato</h2>
            <p>Presos dentro do elitista Colégio Topo da Esperança pelo urso animatrônico Monokuma, os estudantes só podem escapar se matarem um colega e saírem ilesos do tribunal. Se falharem e forem descobertos pelos colegas, serão punidos com execuções sádicas e teatrais.</p>

            <h2 id="julgamentos">Julgamentos Escolares (Class Trials)</h2>
            <p>A melhor parte do jogo ocorre nos tribunais frenéticos, onde você deve disparar literalmente "Balas da Verdade" recheadas com provas materiais contra argumentos mentirosos que voam pela tela do julgamento em tempo real.</p>

            <h2 id="estilo">Estilo Visual Psycho-Pop</h2>
            <p>Marcado pela direção artística de sangue rosa fluorescente para driblar a censura e gráficos que imitam livros 2D em estilo pop-up dentro de ambientes 3D, Danganronpa possui uma estética imediatamente reconhecível em toda a indústria.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/413410/Danganronpa_Trigger_Happy_Havoc/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://www.xbox.com/" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox Store</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "zero-escape-the-nonary-games": {
        title: "Zero Escape: The Nonary Games",
        categories: ["Escape Room", "Visual Novel", "Mistério", "Sci-Fi"],
        youtubeId: "EKgwrm_7Zsc",
        summary: "Nove pessoas presas num espaço confinado são forçadas a participar num impiedoso jogo da morte de números e confiança.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/477740/header.jpg",
            data: {
                "Desenvolvedor": "Spike Chunsoft",
                "Lançamento": "24 de Março de 2017 (Compilação)",
                "Plataformas": "PC, PS4, PS Vita, Xbox One"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Jogo Nonário" },
            { id: "mecanicas", text: "2. Exploração e Escape Rooms" },
            { id: "campos", text: "3. Ressonância Morfogenética" }
        ],
        content: `
            <p>Dirigido pelo visionário roteirista <a href="https://en.wikipedia.org/wiki/Kotaro_Uchikoshi" target="_blank">Kotaro Uchikoshi</a> e lançado pela <a href="https://www.spike-chunsoft.co.jp/" target="_blank">Spike Chunsoft</a>, <strong>The Nonary Games</strong> une os jogos <em>999</em> e <em>Virtue's Last Reward</em> em um dos mais cerebrais e intensos thrillers de sobrevivência e ficção científica dos jogos eletrônicos.</p>
            
            <h2 id="sinopse">O Jogo Nonário</h2>
            <p>Enclausurados em navios naufragando ou bunkers subterrâneos misteriosos, nove estranhos com bombas embutidas em seus corpos precisam manipular uns aos outros e combinar códigos numéricos de seus braceletes para escapar do Jogo da Morte organizado pelo misterioso "Zero".</p>

            <h2 id="mecanicas">Exploração e Escape Rooms</h2>
            <p>As mecânicas fundem perfeitamente debates sociológicos intensos e escolhas éticas angustiantes com salas reais de escape room em 3D, recheadas com problemas de geometria e charadas hexadecimais.</p>

            <h2 id="campos">Ressonância Morfogenética</h2>
            <p>A verdadeira obra de mestre da franquia é usar teorias de campos morfogenéticos (telepatia entre realidades) para justificar a necessidade do jogador em fazer múltiplas rotas. O conhecimento adquirido em uma rota onde todos morrem é usado pelo próprio protagonista para vencer a barreira final em outra linha temporal.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/477740/Zero_Escape_The_Nonary_Games/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
                <a href="https://www.xbox.com/" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox Store</a>
            </div>
        `
    },
    "higurashi-when-they-cry": {
        title: "Higurashi When They Cry",
        categories: ["Sound Novel", "Terror Psicológico", "Suspense"],
        youtubeId: "kMU-DBtNBOQ",
        summary: "Um mistério macabro e circular numa vila pacata japonesa, onde um festival sagrado sempre culmina em morte e paranoia.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/310360/header.jpg",
            data: {
                "Desenvolvedor": "07th Expansion",
                "Lançamento": "Agosto de 2002",
                "Plataformas": "PC, PS2, PS3, PS4, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Ciclo de Hinamizawa" },
            { id: "estrutura", text: "2. Formato Sound Novel e Arcos" },
            { id: "legado", text: "3. O Legado Doujin" }
        ],
        content: `
            <p>Totalmente roteirizado pelo renomado escritor Ryukishi07 através do famoso estúdio indie de doujinshi <a href="https://07th-expansion.net/" target="_blank">07th Expansion</a>, <strong>Higurashi</strong> constrói o medo absoluto de forma passiva, enganando o leitor com uma doce comédia colegial.</p>

            <h2 id="sinopse">O Ciclo de Hinamizawa</h2>
            <p>O aparente paraíso da pacata vila rual Hinamizawa colapsa todos os anos no Festival de Watanagashi. Um complexo ciclo de maldições religiosas e síndromes neurológicas transforma as gentis amigas de Keiichi em monstros sanguinários repletos de pura paranoia.</p>

            <h2 id="estrutura">Formato Sound Novel e Arcos</h2>
            <p>O jogo remove escolhas e exige que você apenas assista às tragédias. Dividido entre os perturbadores Arcos de Pergunta e os reconfortantes (mas dolorosos) Arcos de Resposta, a narrativa esconde pistas sutis sobre a conspiração política, médica e sobrenatural regendo o universo.</p>

            <h2 id="legado">O Legado Doujin</h2>
            <p>Surgido de origens super-humildes, o texto impecável elevou Higurashi ao patamar de fenômeno cultural que resultou em expansões massivas para os consoles modernos, mangás de sucesso e animes globais.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/310360/Higurashi_When_They_Cry_Hou__Ch1_Onikakushi/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (Episódio 1 Gratuito)</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
                <a href="https://mangagamer.com/" target="_blank"><i class="fa-solid fa-globe"></i> MangaGamer</a>
            </div>

            <h2>Versões para Android e PC</h2>
            <p><strong>Aviso sobre a versão Android:</strong> esta é uma versão não oficial de <em>Higurashi no Naku Koro ni</em> para Android, com gráficos atualizados, dublagem e músicas do jogo original e das versões de console.</p>
            <ol>
                <li>Sprites do PS3: <a href="https://4br.me/Yg7Fqss6P" target="_blank">Espelho 1</a> | <a href="https://4br.me/atl3qK" target="_blank">Espelho 2</a></li>
                <li>APK e recursos separados. Instale o APK e coloque os seis arquivos .rpa em <code>/Android/data/com.higurashi/files/game</code>: <a href="https://4br.me/MfG9" target="_blank">Mirror 1</a> | <a href="https://4br.me/gCcMhg" target="_blank">Mirror 2</a></li>
                <li>Sprites originais: <a href="https://4br.me/xj53" target="_blank">Espelho 1</a> | <a href="https://4br.me/J1kH4Lh" target="_blank">Espelho 2</a></li>
                <li>Patch para corrigir o bug de tag CPS não fechada: coloque <code>patch.rpyc</code> em <code>/Android/data/com.higurashi/files/game</code>. <a href="https://4br.me/jsxYLSJno" target="_blank">Download do patch</a></li>
            </ol>
            <p><strong>Extras:</strong> extraia os arquivos para <code>/Android/data/com.ps3.higurashi/files/game/</code>. Reinstale o jogo se ele travar após criar a pasta "jogo".</p>
            <ul>
                <li>Efeitos sonoros do PS3: <a href="https://4br.me/P9ml5MkI" target="_blank">Download</a></li>
                <li>Tradução russa: <a href="https://4br.me/qD3zm" target="_blank">Download</a></li>
            </ul>
            <p><strong>Créditos:</strong> versão baseada na versão Ren'Py do jogo original de <a href="https://vndb.org/p4052" target="_blank">-07-</a>, nos gráficos e no mod de voz do <a href="https://07th-mod.com/" target="_blank">07th-Mod</a> para PC. Crédito adicional: darwin07.</p>

            <h3>Higurashi no Naku Koro ni Hou em português</h3>
            <p><strong>Capítulo 1:</strong> tradução de Higurashi Eternal e 0Mateus; revisão e RomHacking pelos mesmos tradutores. Windows (.exe), 1,71 GB, compatível com Winlator. <a href="https://4br.me/2JVIOEkjQY" target="_blank">Download do capítulo 1</a></p>
            <p><strong>Capítulos 2 a 6:</strong> tradução de Higurashi Eternal; formato .exe, instalação em <code>C:\\SekaiVN\\</code>.</p>
            <div class="play-links">
                <a href="https://4br.me/XZEdKxtcAV" target="_blank">Capítulo 2</a>
                <a href="https://4br.me/1jmLJ" target="_blank">Capítulo 3</a>
                <a href="https://4br.me/GftiXyDUF" target="_blank">Capítulo 4</a>
                <a href="https://4br.me/gHNWzD80N7" target="_blank">Capítulo 5</a>
                <a href="https://4br.me/Xgqha" target="_blank">Capítulo 6</a>
            </div>
            <p><strong>Todos os capítulos:</strong> tradução brasileira de <em>Higurashi no Naku Koro ni Hou</em>, da Miracle Translations, compatível com o <a href="https://07th-mod.com/" target="_blank">07th-Mod</a>. <a href="https://4br.me/S8u5kFHZcW" target="_blank">Download completo</a></p>
            <p><strong>Aviso:</strong> Caso algum dos links esteja com problemas, fora do ar ou não seja possível acessar o servidor, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">avisem no servidor do Discord</a>.</p>
        `
    },
    "omori": {
        title: "OMORI",
        categories: ["RPG", "Terror Psicológico", "Surrealismo"],
        youtubeId: "CyVv-jFJiJ8",
        summary: "Um RPG psicológico aclamado focado no luto, depressão e nos coloridos mecanismos de defesa da mente.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1150690/header.jpg",
            data: {
                "Desenvolvedor": "OMOCAT, LLC",
                "Lançamento": "25 de Dezembro de 2020",
                "Plataformas": "PC, macOS, PS4, Xbox One, Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Espaço em Branco e a Realidade" },
            { id: "combate", text: "2. Sistema de Emoções" },
            { id: "horror", text: "3. O Terror Escondido" }
        ],
        content: `
            <p>Criado, ilustrado e dirigido pela artista independente norte-americana <a href="https://www.omori-game.com/" target="_blank">OMOCAT</a>, <strong>OMORI</strong> utiliza inspirações visuais da série EarthBound e o terror atmosférico de Yume Nikki para traçar um mergulho corajoso e profundo na culpa insuportável de um adolescente traumatizado.</p>
            
            <h2 id="sinopse">O Espaço em Branco e a Realidade</h2>
            <p>O contrastante mundo da obra intercala o onírico "Headspace" (um lugar imaginário e alegre criado para proteção) e a dolorosa cidade de "Faraway", onde o verdadeiro protagonista lida com as consequências de se afastar dos amigos e omitir a verdade após o chocante suicídio da irmã.</p>

            <h2 id="combate">Sistema de Emoções</h2>
            <p>Traduzindo saúde mental em mecânicas, o combate por turnos usa emoções ao invés de ataques físicos. Ficar Feliz, Triste ou Irritado afeta diretamente os ataques elementais, forçando o jogador a pensar no impacto dos diálogos em batalhas coloridas.</p>

            <h2 id="horror">O Terror Escondido</h2>
            <p>Sempre que o trauma bate à porta, o jogo desce à loucura, adicionando horrores sombrios no fundo de fotografias ou inserindo chefes macabros formados pelos medos reais e mais sombrios da vida do protagonista.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1150690/OMORI/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://www.xbox.com/" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox Store</a>
            </div>

            <h2>Versão Mobile (portabilidade feita por fã)</h2>
            <p><strong>AVISO:</strong> O jogo possui uma portabilidade feita por um fã. Ela pode não funcionar em todos os celulares e pode não oferecer um desempenho satisfatório.</p>
            <div class="play-links">
                <a href="https://4br.me/S4zfF" target="_blank"><i class="fa-brands fa-android"></i> Download OMORI-br-1.0.8.1</a>
            </div>
            <p><strong>Aviso:</strong> Caso o link esteja quebrado ou fora do ar, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">entre no servidor do Discord</a> para mais informações.</p>
        `
    },
    "slay-the-princess": {
        title: "Slay the Princess",
        categories: ["Visual Novel", "Terror Psicológico", "Escolhas Múltiplas"],
        youtubeId: "RByDoYQpFa8",
        summary: "Você está em um caminho na floresta. No final há uma cabana com uma Princesa no porão. Mate-a. Confie no Narrador.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1989270/header.jpg",
            data: {
                "Desenvolvedor": "Black Tabby Games",
                "Lançamento": "23 de Outubro de 2023",
                "Plataformas": "PC, macOS, Linux, PS4, PS5, Xbox One, Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. A Premissa Inflexível" },
            { id: "ramificacoes", text: "2. A Construção Baseada na Percepção" },
            { id: "vozes", text: "3. As Vozes na Sua Cabeça" }
        ],
        content: `
            <p>Desenhado totalmente à mão a lápis de carvão pelo engenhoso estúdio indie <a href="https://blacktabbygames.com/" target="_blank">Black Tabby Games</a>, <strong>Slay the Princess</strong> desconstrói brutalmente os romances de fantasia tradicionais introduzindo humor sombrio e terror cósmico baseados em perspectivas metafísicas.</p>
            
            <h2 id="sinopse">A Premissa Inflexível</h2>
            <p>Um misterioso narrador o encarrega de uma única tarefa inquestionável: entrar no porão e assassinar uma Princesa supostamente inofensiva, ameaçando que, se você falhar, o universo inteiro acabará. Tentar salvá-la quase sempre resultará em traições e violência surreal.</p>

            <h2 id="ramificacoes">A Construção Baseada na Percepção</h2>
            <p>O universo sofre metamorfoses de acordo com seus pensamentos. Perceba-a como um monstro em um loop e no próximo ela será realmente um pesadelo bestial. Tema-a, e o poder dela aumentará a ponto de se tornar invencível e indomável.</p>

            <h2 id="vozes">As Vozes na Sua Cabeça</h2>
            <p>Sua progressão adiciona novas "vozes" conflitantes à sua mente, agindo como comentaristas que interagem durante as violentas e intensas lutas até a verdade absoluta da divindade ser desvendada.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1989270/Slay_the_Princess/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "corpse-party": {
        title: "Corpse Party",
        categories: ["RPG", "Terror Psicológico", "Sobrevivência", "Gore"],
        youtubeId: "7B8H-SB_OCo",
        summary: "Um ritual de amizade dá errado e transporta estudantes para uma escola primária assombrada por fantasmas de crianças torturadas.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1163660/header.jpg",
            data: {
                "Desenvolvedor": "Team GrisGris",
                "Lançamento": "2010 (Remake PSP)",
                "Plataformas": "PC, PSP, PS Vita, PS4, Switch, iOS, 3DS"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Feitiço Sachiko Ever After" },
            { id: "mecanicas", text: "2. Espaços Fechados e Bad Ends" },
            { id: "som", text: "3. Áudio 3D Binaural" }
        ],
        content: `
            <p>Originalmente feito no RPG Maker clássico, as incansáveis recriações promovidas pelo <a href="http://www.gris2.com/" target="_blank">Team GrisGris</a> tornaram a obra-prima sangrenta <strong>Corpse Party</strong> em uma lenda cultuada, pavimentando o mercado de RPGs indies de terror que inspiraria incontáveis clássicos.</p>
            
            <h2 id="sinopse">O Feitiço Sachiko Ever After</h2>
            <p>Após terminarem um festival, um feitiço de amizade na internet causa um terremoto interdimensional, transportando os adolescentes indefesos para Heavenly Host: os restos amaldiçoados de uma escola primária repleta de cadáveres mutilados e fantasmas rancorosos.</p>

            <h2 id="mecanicas">Espaços Fechados e Bad Ends</h2>
            <p>Desprovidos de armas, o horror é moldado em tentar evadir ameaças e resolver pequenos enigmas mórbidos com vísceras e baldes no cenário. Ler papéis amaldiçoados resulta nas extensas cenas punitivas dos Wrong Ends incrivelmente grotescos.</p>

            <h2 id="som">Áudio 3D Binaural</h2>
            <p>O pavor máximo atinge o ápice ao usar o design sonoro de gravação binaural. O som reage posicionalmente, trazendo a exata e aflitiva sensação de ter espíritos assassinos suspirando e estalando pescoços no seu ouvido esquerdo no mundo real.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1163660/Corpse_Party_2021/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
            </div>
        `
    },
    "umineko-when-they-cry": {
        title: "Umineko When They Cry",
        categories: ["Sound Novel", "Mistério", "Terror Psicológico"],
        youtubeId: "dcPNaY3EIUc",
        summary: "Um mistério macabro e complexo em uma ilha isolada sobre disputas de herança, assassinatos impossíveis e uma bruxa.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/406550/header.jpg",
            data: {
                "Desenvolvedor": "07th Expansion",
                "Publicadora": "MangaGamer",
                "Lançamento": "Julho de 2016 (Steam)",
                "Plataformas": "PC, PS3, PSP, Nintendo Switch"
            }
        },
        toc: [
            { id: "enigma", text: "1. O Enigma da Ilha Rokkenjima" },
            { id: "caracteristicas", text: "2. Batalhas de Verdades e Teoria" },
            { id: "arcos", text: "3. Arcos de Perguntas e Respostas" }
        ],
        content: `
            <p>Escrita também pela mente brilhante por trás de Higurashi, Ryukishi07 da <a href="https://07th-expansion.net/" target="_blank">07th Expansion</a>, <strong>Umineko</strong> expande violentamente o nível de maturidade focando em uma brutal crítica aos modelos clássicos de dedução de Agatha Christie.</p>
            
            <h2 id="enigma">O Enigma da Ilha Rokkenjima</h2>
            <p>Com toda a gananciosa família Ushiromiya presa por um tufão em uma ilha isolada para disputar a herança de uma dinastia rica, assassinatos começam a ocorrer no estilo das charadas literárias mais absurdas de "O Quarto Fechado", com todos os crimes assinados pela cruel e zombadora Bruxa Dourada.</p>

            <h2 id="caracteristicas">Batalhas de Verdades e Teoria</h2>
            <p>Como mecânica, a novel introduz o duelo jurídico entre o cético Battler e a magia de Beatrice, onde a Bruxa dita fatos na impenetrável Verdade Vermelha e as defesas lógicas são projetadas como lâminas na Verdade Azul, gerando longas batalhas lógicas impressionantes de refutações.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/406550/Umineko_When_They_Cry__Question_Arcs/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://mangagamer.com/" target="_blank"><i class="fa-solid fa-globe"></i> MangaGamer</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
            </div>
        `
    },
    "fate-stay-night-remastered": {
        title: "Fate/stay night REMASTERED",
        categories: ["Visual Novel", "Ação", "Fantasia Urbana", "Drama"],
        youtubeId: "K_hHrpAp8rU",
        summary: "A icônica visual novel sobre a Guerra do Santo Graal reeditada em alta definição com suporte oficial no ocidente.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2396980/header.jpg",
            data: {
                "Desenvolvedor": "TYPE-MOON",
                "Publicadora": "Aniplex Inc.",
                "Lançamento": "8 de Agosto de 2024",
                "Plataformas": "PC (Steam), Nintendo Switch"
            }
        },
        toc: [
            { id: "inicio", text: "1. O Início de uma Lenda" },
            { id: "rotas", text: "2. As Três Rotas Narrativas" },
            { id: "remaster", text: "3. Melhorias da Remasterização" }
        ],
        content: `
            <p>Sendo o berço da megacorporação multibilionária de entretenimento <a href="http://typemoon.com/" target="_blank">TYPE-MOON</a>, <strong>Fate/stay night REMASTERED</strong> finalmente traz a complexa e influente enciclopédia oculta de magos originais de forma oficial e aprimorada ao público ocidental.</p>

            <h2 id="inicio">O Início de uma Lenda</h2>
            <p>A Quinta Guerra do Santo Graal subverte a paz japonesa forçando magos a travarem batalhas noturnas violentas liderando invocações de figuras míticas famosas. O idealista órfão Emiya Shirou entra desavisado nesta arena sanguinária ao invocar a implacável guerreira Saber.</p>

            <h2 id="rotas">As Três Rotas Narrativas</h2>
            <p>Dividido meticulosamente e sequencialmente entre Fate, Unlimited Blade Works e as sombrias realidades de Heaven's Feel, o título brinca de destruir a própria fundação e regras morais estabelecidas nas campanhas anteriores a favor do desespero e revelações mais densas.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2396980/Fatestay_night_REMASTERED/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
            </div>
        `
    },
    "ace-attorney-trilogy": {
        title: "Phoenix Wright: Ace Attorney Trilogy",
        categories: ["Mistério", "Tribunal", "Investigação", "Aventura"],
        youtubeId: "sHbBVN5AkL0",
        summary: "A coletânea dos três primeiros jogos do famoso advogado Phoenix Wright defendendo clientes inocentes com a virada de provas.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/787480/header.jpg",
            data: {
                "Desenvolvedor": "CAPCOM",
                "Publicadora": "CAPCOM",
                "Lançamento": "9 de Abril de 2019",
                "Plataformas": "PC, PS4, Xbox One, Nintendo Switch, iOS, Android"
            }
        },
        toc: [
            { id: "tribunal", text: "1. Protesto! A Batalha nos Tribunais" },
            { id: "gameplay", text: "2. Investigação e Debates" }
        ],
        content: `
            <p>Imortalizado pelo gigante estúdio <a href="https://www.capcom.com/" target="_blank">CAPCOM</a>, <strong>Ace Attorney Trilogy</strong> transformou audiências de tribunal lentas e procedurais nos mais altos, brilhantes e escandalosos momentos dramáticos que existem no mercado de visual novels interativas.</p>

            <h2 id="tribunal">Protesto! A Batalha nos Tribunais</h2>
            <p>O calouro advogado Wright descobre um judiciário incrivelmente apressado (onde as sentenças se decidem em até três dias). Enfrentando testemunhas mentirosas de perfis altamente hilários ou cruéis promotores como Miles Edgeworth, cada caso é uma roleta insana de pistas e viradas inesperadas.</p>

            <h2 id="gameplay">Investigação e Debates</h2>
            <p>Entre revistar os cômodos malfadados usando mecânicas point-and-click tradicionais ao lado de assistentes exóticas, o brilho real surge ao disparar provas na cara do juiz e dos mentirosos gritando sua emblemática frase de rejeição aos furos no testemunho para salvar inocentes de prisões perpétuas.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/787480/Phoenix_Wright_Ace_Attorney_Trilogy/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://www.xbox.com/" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox Store</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "ai-the-somnium-files": {
        title: "AI: The Somnium Files",
        categories: ["Ficção Científica", "Mistério", "Investigação", "Thriller"],
        youtubeId: "w7ADS6XvBxM",
        summary: "Um thriller cyberpunk de investigação onde um detetive invada os sonhos e subconsciente de suspeitos para resolver crimes.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/948740/header.jpg",
            data: {
                "Desenvolvedor": "Spike Chunsoft",
                "Lançamento": "17 de Setembro de 2019",
                "Plataformas": "PC, PS4, Xbox One, Nintendo Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Mergulhe nos Sonhos de um Assassino" },
            { id: "somnium", text: "2. O Sistema Somnium e o Limite de Tempo" }
        ],
        content: `
            <p>Assinado pela brilhante mente do icônico diretor <a href="https://en.wikipedia.org/wiki/Kotaro_Uchikoshi" target="_blank">Kotaro Uchikoshi</a>, <strong>AI: The Somnium Files</strong> amalgama uma ficção neo-noir colorida cheia de reviravoltas com humor extravagante de animes futuristas e detetives cinzentos.</p>

            <h2 id="sinopse">Mergulhe nos Sonhos de um Assassino</h2>
            <p>Controlando o sarcástico Date, portador de uma prótese biológica ocular inteligente que analisa ambientes inteiros na Tóquio criminal avançada, sua rotina vira de cabeça para baixo com o sangrento serial killer apelidado de New Cyclops Killer.</p>

            <h2 id="somnium">O Sistema Somnium e o Limite de Tempo</h2>
            <p>Presos a um tempo extremamente sufocante e limitante de meros seis minutos em estado mental Psync, a aventura requer explorar dezenas de perigos bizarros nas ruínas subconscientes destrutivas de aliados e inimigos destrancando nós mentais obscuros.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/948740/AI_The_Somnium_Files/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
                <a href="https://www.xbox.com/" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "clannad": {
        title: "CLANNAD",
        categories: ["Visual Novel", "Romance", "Drama", "Slice of Life"],
        youtubeId: "Z1ShQMEXHAo",
        summary: "Uma lendária e emocionante história sobre a vida, laços familiares, amor e superação de trauma na vida adulta.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/324160/header.jpg",
            data: {
                "Desenvolvedor": "Key",
                "Lançamento": "23 de Novembro de 2015 (Steam)",
                "Plataformas": "PC, PS2, PS3, PS4, PSP, Switch, Android"
            }
        },
        toc: [
            { id: "historia", text: "1. Uma História Sobre Família" },
            { id: "after-story", text: "2. O Impacto de After Story" }
        ],
        content: `
            <p>Sendo a magnum opus da veterana desenvolvedora japonesa <a href="https://key.visualarts.gr.jp/" target="_blank">Key</a>, <strong>CLANNAD</strong> consolidou dezenas de tropos modernos no gênero, mostrando ao mundo como contar um longo e devastador romance de puro sofrimento, sacrifício mas também cura suprema.</p>

            <h2 id="historia">Uma História Sobre Família</h2>
            <p>O conformista e vazio estudante Okazaki sente que a vida no colégio cinzento falhou com as mortes em sua família. Reviver clubes esquecidos ajudando Nagisa e garotas misteriosas a quebrarem suas muralhas não apenas salva a escola, mas traz a cor ao universo triste dele.</p>

            <h2 id="after-story">O Impacto de After Story</h2>
            <p>Fugindo do felizes para sempre do ensino médio padrão, esta gigantesca obra (mais de 300h) dedica uma enorme e insubstituível campanha à vida conjugal: desempregos reais, exaustivas horas no trabalho de construção civil, e uma crua visão sobre mortalidade, filhos e perda madura do amor.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/324160/CLANNAD/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
            </div>

            <h2>Tradução e versão para Android</h2>
            <p><strong>Créditos de localização:</strong> ZeroForce.</p>
            <p><strong>Avisos de instalação:</strong></p>
            <ul>
                <li>Ao instalar o jogo, uma janela do Windows solicitará a instalação de uma fonte. Instale-a.</li>
                <li>Configure programas não Unicode para japonês (Japão) nas configurações administrativas do Windows.</li>
                <li>Na primeira inicialização, abra as configurações, escolha a fonte <em>Open Sans Ligth</em> e clique em OK.</li>
            </ul>
            <p><strong>Informações:</strong> lançamento em 2004; tradução em 2021; formato .exe; 3,26 GB; duração de 77 horas; programa: RLVM; instalação em <code>C:\\SekaiVN\\</code>. Dispositivo testado: Moto G30 (Android 11).</p>
            <div class="play-links">
                <a href="https://4br.me/oAeH5G" target="_blank"><i class="fa-solid fa-download"></i> Download</a>
            </div>
            <p><strong>Aviso:</strong> Caso o link esteja com problemas, fora do ar ou não seja possível acessar o servidor, <a href="https://discord.gg/T2gZfXMCAm" target="_blank">avisem no servidor do Discord</a>.</p>
        `
    },
    "raging-loop": {
        title: "Raging Loop",
        categories: ["Terror Psicológico", "Mistério", "Suspense", "Loop Temporal"],
        youtubeId: "V1mlyeW7p6s",
        summary: "Uma releitura sombria do jogo da Cidade Dorme em uma vila isolada assolada por uma névoa mortal e lobos assassinos.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1128140/header.jpg",
            data: {
                "Desenvolvedor": "KEMCO",
                "Lançamento": "22 de Outubro de 2019",
                "Plataformas": "PC, PS4, Nintendo Switch, iOS, Android"
            }
        },
        toc: [
            { id: "maldicao", text: "1. O Jogo do Lobisomem na Vida Real" },
            { id: "festa", text: "2. A Ritualística Festa e os Votos" }
        ],
        content: `
            <p>Publicado por <a href="https://www.kemco.jp/" target="_blank">KEMCO</a>, <strong>Raging Loop</strong> traz a dinâmica interativa social e psicótica do popular estilo Werewolf (Lobisomem ou Cidade Dorme) para um denso ambiente espiritual xintoísta sufocante e rural do horror nipônico puro.</p>

            <h2 id="maldicao">O Jogo do Lobisomem na Vida Real</h2>
            <p>O cínico protagonista e forasteiro Haruaki desavisadamente encontra repouso no sinistro assentamento de Yasumizu. Presos por uma névoa inalcançável vermelha bizarra, o vilarejo arcaico evoca as deidades antigas na mortal Festa da Purificação quando lobos bestiais rasgam os aldeões ocultos nas ruas.</p>

            <h2 id="festa">A Ritualística Festa e os Votos</h2>
            <p>Com um fluxograma massivo de escolhas de diálogos retidos por ressurreição em vidas passadas interativas (loops), você deve fingir papéis nos enforcamentos públicos macabros ou persuadir idosos fanáticos das falsas mortes impostas por votos.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1128140/Raging_Loop/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "your-turn-to-die": {
        title: "Your Turn To Die -Death Game By Majority-",
        categories: ["Death Game", "Terror Psicológico", "Mistério", "Aventura"],
        youtubeId: "TLDU18zO1EM",
        summary: "Um brutal jogo de sobrevivência por voto majoritário onde escolhas difíceis ditam quem vive e quem morre.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2067780/header.jpg",
            data: {
                "Desenvolvedor": "Nankidai",
                "Lançamento": "20 de Fevereiro de 2023 (Steam)",
                "Plataformas": "PC (Steam), Web Browser"
            }
        },
        toc: [
            { id: "jogo-mortal", text: "1. Um Jogo Mortal de Voto Majoritário" },
            { id: "mecanicas", text: "2. Puzzles, Ação e Debates" }
        ],
        content: `
            <p>Empreendido com paixão absurda pelas mãos exatas de um único mangaká e artista de código, <a href="https://twitter.com/nannkizum" target="_blank">Nankidai</a>, <strong>Your Turn To Die</strong> superou e chocou orçamentos imensos, gerando cultos devotos por todo planeta em sites obscuros graças às mortes cruéis e escolhas brutais da narrativa em grupo.</p>

            <h2 id="jogo-mortal">Um Jogo Mortal de Voto Majoritário</h2>
            <p>Ao invés de monstros, a inocente Sara encara a máquina corporativa sinistra de Asunaro. Desafiada entre traições e refúgios empáticos, onze amigos e estranhos disfuncionais perdem vidas amargas apertando dolorosamente interruptores mortíferos majoritários das guilhotinas cruéis.</p>

            <h2 id="mecanicas">Puzzles, Ação e Debates</h2>
            <p>Desenhado usando RPG Maker e lógicas geniais interativas, os longos duelos mesclam conversas intensas, quebra-cabeças temporais baseados em ação e alianças de votos frágeis alterando severa e dinamicamente quais companheiros centrais chegam vivos ao desfecho real da série.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2067780/Your_Turn_To_Die_Death_Game_By_Majority/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://vgperson.com/games/yourturntodie.htm" target="_blank"><i class="fa-solid fa-globe"></i> Web Browser (Grátis)</a>
            </div>
        `
    },
    "va-11-hall-a": {
        title: "VA-11 Hall-A: Cyberpunk Bartender Action",
        categories: ["Cyberpunk", "Slice of Life", "Simulação", "Visual Novel"],
        youtubeId: "SiZ5TMm1DJk",
        summary: "Sirva bebidas para ciborgues, hackers e figuras peculiares de uma cidade distópica cyberpunk para alterar suas vidas.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/447530/header.jpg",
            data: {
                "Desenvolvedor": "Sukeban Games",
                "Lançamento": "21 de Junho de 2016",
                "Plataformas": "PC, macOS, Linux, PS4, PS Vita, Nintendo Switch"
            }
        },
        toc: [
            { id: "glitch-city", text: "1. Sirva Bebidas e Mude Vidas" },
            { id: "mecanica", text: "2. A Arte da Mixologia" }
        ],
        content: `
            <p>O estúdio venezuelano <a href="https://sukebangames.com/" target="_blank">Sukeban Games</a> fundiu a depressiva estética cyberpunk das megacorporações opressivas não com armas e sangue de vigilantes, mas nas desabafadas rotinas da noite trabalhando num decadente, amável e minúsculo bar de esquina.</p>

            <h2 id="glitch-city">Sirva Bebidas e Mude Vidas</h2>
            <p>Os clientes (policiais artificiais, cérebros digitais e hackers problemáticos) só precisam descansar do arruinado governo em "Valhalla". Gerenciar Jill é cuidar do apartamento sujo pagando contas elétricas, comprando revistas e, fundamentalmente, ouvir bem e calar-se frente aos absurdos existenciais.</p>

            <h2 id="mecanica">A Arte da Mixologia</h2>
            <p>Fugindo das velhas escolhas A ou B no mouse, o destino romântico ou trágico da mesa à frente depende fielmente dos shakes e combinações perfeitas de ingredientes alcoólicos que mudam estados psíquicos, alterando as histórias reveladas pelas mentes robóticas tristes.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "witch-on-the-holy-night": {
        title: "WITCH ON THE HOLY NIGHT (Mahoutsukai no Yoru)",
        categories: ["Kinetic Novel", "Fantasia Urbana", "Drama", "Ação"],
        youtubeId: "s_oAO0LG51A",
        summary: "Uma experiência narrativa visual deslumbrante no final dos anos 80 envolvendo bruxas, feitiçaria e mistérios.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/2204710/header.jpg",
            data: {
                "Desenvolvedor": "TYPE-MOON",
                "Lançamento": "14 de Dezembro de 2023 (Steam)",
                "Plataformas": "PC (Steam), PS4, Nintendo Switch"
            }
        },
        toc: [
            { id: "premissa", text: "1. Uma Experiência Visual Sem Precedentes" },
            { id: "historia", text: "2. O Conflito entre Bruxas e Humanos" }
        ],
        content: `
            <p>Mais um trabalho magistral de fantasia e mistérios ocultos formulado pelo célebre escritor <a href="https://en.wikipedia.org/wiki/Kinoko_Nasu" target="_blank">Kinoko Nasu</a> da <a href="http://typemoon.com/" target="_blank">TYPE-MOON</a>. O lançamento aprimorou a era de ouro de suas obras clássicas.</p>

            <h2 id="premissa">Uma Experiência Visual Sem Precedentes</h2>
            <p>Com as mais incríveis e cinéticas manipulações artísticas da indústria japonesa, a leitura flui como um cinema literário luxuoso que brilha através das luzes orquestradas, coreografias rítmicas e explosões deslumbrantes da cidade.</p>

            <h2 id="historia">O Conflito entre Bruxas e Humanos</h2>
            <p>O universo misterioso converge a isolada Aoko numa mansão secreta com Alice (uma rígida bruxa do ocidente) à chocante e indesejada chegada do simplório civil Soujuurou, abrindo brechas sociais na severa guarda das artes místicas dos magos da era Showa.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2204710/WITCH_ON_THE_HOLY_NIGHT/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "the-silver-case": {
        title: "The Silver Case",
        categories: ["Crime", "Noir", "Thriller", "Mistério"],
        youtubeId: "20YJxIQO1Qg",
        summary: "Investigação neo-noir dirigida por SUDA51 focada na busca por um prolífico serial killer em um distrito futurista.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/476650/header.jpg",
            data: {
                "Desenvolvedor": "Grasshopper Manufacture",
                "Lançamento": "7 de Outubro de 2016 (Remaster)",
                "Plataformas": "PC, PS4, macOS"
            }
        },
        toc: [
            { id: "noir", text: "1. Um Suspense Neo-Noir Surreal" },
            { id: "campanhas", text: "2. As Campanhas Transmitter e Placebo" }
        ],
        content: `
            <p>Lançado originalmente pela icônica produtora <a href="https://www.grasshopper.co.jp/" target="_blank">Grasshopper Manufacture</a>, a mente frenética e rebelde do diretor <a href="https://en.wikipedia.org/wiki/Goichi_Suda" target="_blank">SUDA51</a> deu origem a uma das mais estilizadas histórias cyberpunk das antigas gerações de console do Japão.</p>

            <h2 id="noir">Um Suspense Neo-Noir Surreal</h2>
            <p>Buscando o fantasma corporativo de uma série grotesca de homicídios políticos na isolada "24 Wards", a lenda do imortal serial killer Kamui Uehara assusta as raízes midiáticas e da força tarefa militar na metrópole sombria dos anos 90.</p>

            <h2 id="campanhas">As Campanhas Transmitter e Placebo</h2>
            <p>Usando uma tela inovadora e altamente dinâmica dividida em pequenas janelas flutuantes tipo sistemas OS e câmeras amadoras VHS bizarras, a visão bifurcada acompanha o detetive calado no fronte dos assassinatos e o repórter freelance decadente investigando conspirações de dentro do submundo corrupto.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/476650/The_Silver_Case/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
            </div>
        `
    },
    "chaos-child": {
        title: "CHAOS;CHILD",
        categories: ["Ficção Científica", "Terror Psicológico", "Mistério", "Thriller"],
        youtubeId: "Vo70prsrPDY",
        summary: "Assassinatos teatrais chocam Shibuya anos após um terremoto, forçando estudantes a lidarem com delírios e paranoia.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/970570/header.jpg",
            data: {
                "Desenvolvedor": "MAGES. Inc. / Chiyomaru Studio",
                "Lançamento": "22 de Janeiro de 2019",
                "Plataformas": "PC, PS3, PS4, PS Vita, Xbox One, Nintendo Switch, iOS"
            }
        },
        toc: [
            { id: "shibuya", text: "1. Delírios, Paranoia e Assassinatos em Série" },
            { id: "delusion", text: "2. O Sistema Delusion Trigger" }
        ],
        content: `
            <p>Sucedendo e elevando radicalmente a obra inaugural do universo Science Adventure, a talentosa empresa <a href="https://mages.co.jp/" target="_blank">MAGES</a> trouxe à luz o denso e sombrio pavor metropolitano da reconstrução caótica nipônica em <strong>CHAOS;CHILD</strong>.</p>

            <h2 id="shibuya">Delírios, Paranoia e Assassinatos em Série</h2>
            <p>Desenhando no terror gráfico e nos tristes traumas mentais originários do desastre sísmico da cidade, jornalistas mirins se aventuram perigosamente nos brutais homicídios da Loucura da Nova Geração, brincando seriamente com teorias psicológicas imersivas e delírios psiquiátricos.</p>

            <h2 id="delusion">O Sistema Delusion Trigger</h2>
            <p>Usar e abusar positivamente ou negativamente do delírio altera agressivamente as alucinações gráficas vividas e como os desdobramentos terríveis da mente de Takuru constroem as ramificações finais contra seitas tecnológicas do enredo central.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/970570/CHAOSCHILD/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "class-of-09": {
        title: "Class of '09",
        categories: ["Comédia Ácida", "Slice of Life", "Visual Novel"],
        youtubeId: "MdoIzurCPC4",
        summary: "Uma comédia politicamente incorreta e não filtrada sobre o cotidiano tóxico e narcisista no ensino médio dos anos 2000.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1598160/header.jpg",
            data: {
                "Desenvolvedor": "SBN3",
                "Lançamento": "11 de Junho de 2021",
                "Plataformas": "PC, macOS"
            }
        },
        toc: [
            { id: "comedia", text: "1. A Visual Novel de Rejeição Americana" },
            { id: "escolhas", text: "2. Escolhas Rápidas e Desfechos Sombrios" }
        ],
        content: `
            <p>Abordando com zero traços de decência ou filtro a era caótica da rebeldia adolescente no colegial caipira americano, a criação polêmica da <a href="https://twitter.com/SBN3OFFICIAL" target="_blank">SBN3</a> cimenta os maiores preconceitos da geração passada de modo ofensivo e absolutamente hilário.</p>

            <h2 id="comedia">A Visual Novel de Rejeição Americana</h2>
            <p>Nicole recusa-se categoricamente a amadurecer. Usando seu alto narcisismo e charme sádico, ela quebra as hierarquias escolares patéticas formadas por diretores inapropriados, punks inúteis e rivais esnobes até os últimos requintes de destruição emocional.</p>

            <h2 id="escolhas">Escolhas Rápidas e Desfechos Sombrios</h2>
            <p>Com um brilhante elenco de dubladores completos liderando as ironias verbais venenosas nas dezenas de curtos roteiros bifurcados trágicos-satíricos que sempre resultam em expulsões cruéis, overdoses acidentais e colapsos do sistema escolar.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1598160/Class_of_09/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://sbn3.itch.io/" target="_blank"><i class="fa-brands fa-itch-io"></i> Itch.io</a>
            </div>
        `
    },
    "milk-inside-a-bag": {
        title: "Milk inside a bag of milk inside a bag of milk",
        categories: ["Terror Psicológico", "Experimental", "Visual Novel"],
        youtubeId: "sG2_VtgRQbg",
        summary: "Ajude uma garota traumatizada e com severas distorções perceptivas em uma tarefa simples: comprar uma caixa de leite.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1392820/header.jpg",
            data: {
                "Desenvolvedor": "Nikita Kryukov",
                "Lançamento": "26 de Agosto de 2020",
                "Plataformas": "PC, macOS, Linux, Nintendo Switch"
            }
        },
        toc: [
            { id: "mente", text: "1. Uma Tarefa Simples, Uma Mente Fragmentada" },
            { id: "percepcao", text: "2. Distorção Visual e Narrativa Interna" }
        ],
        content: `
            <p>Criado e montado sob as nuances solitárias da mente angustiada do desenvolvedor indie e genial <a href="https://twitter.com/nikita_kryukov" target="_blank">Nikita Kryukov</a>, esta breve e surreal distorção narrativa arranca a estabilidade de passos comuns em crises claustrofóbicas monumentais.</p>

            <h2 id="mente">Uma Tarefa Simples, Uma Mente Fragmentada</h2>
            <p>Sobreviver a uma ida trivial para o balcão do pão da esquina vira batalhas metafóricas insanas quando guiamos internamente a voz acolhedora tentando apaziguar o caos dos pânicos nervosos severos nos curtos fluxos esquizofrênicos da solitária criança em tons pesados vermelho rubi.</p>

            <h2 id="percepcao">Distorção Visual e Narrativa Interna</h2>
            <p>A distorção sonora repetitiva incita terror silencioso, forçando você a pisar sensivelmente nas linhas de diálogos para não agravar e isolar a sanidade esgotada da jovem em telas psicodélicas angustiantes.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1392820/Milk_inside_a_bag_of_milk_inside_a_bag_of_milk/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Switch</a>
            </div>
        `
    },
    "428-shibuya-scramble": {
        title: "428: Shibuya Scramble",
        categories: ["Mistério", "Thriller", "FMV", "Sound Novel"],
        youtubeId: "2WAgYvOrQwc",
        summary: "Uma história interativa em live-action cruzando a vida de cinco protagonistas durante um sequestro no centro de Tóquio.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/648580/header.jpg",
            data: {
                "Desenvolvedor": "Spike Chunsoft",
                "Lançamento": "4 de Setembro de 2018 (PC)",
                "Plataformas": "PC, PS4, Wii, PSP, PS3, iOS, Android"
            }
        },
        toc: [
            { id: "efeito-borboleta", text: "1. O Efeito Borboleta nas Ruas de Tóquio" },
            { id: "jump-system", text: "2. O Sistema Jump e Troca de Linhas Temporais" }
        ],
        content: `
            <p>Construindo meticulosamente e recebendo imensos louvores máximos nas publicações asiáticas, o icônico espetáculo FMV japonês da grande corporação <a href="https://www.spike-chunsoft.co.jp/" target="_blank">Chunsoft</a> é uma relíquia dramática imensurável nos labirintos da movimentada capital de Tóquio.</p>

            <h2 id="efeito-borboleta">O Efeito Borboleta nas Ruas de Tóquio</h2>
            <p>Costurando eventos simultâneos isolados no cruzamento mais turbulento de Shibuya, de um sequestro mafioso até tramas bobas no interior das viaturas policias de investigação viral, centenas de fotografias encenadas reais ditam o compasso dramático de comédia, aventura policial e suspense viral.</p>

            <h2 id="jump-system">O Sistema Jump e Troca de Linhas Temporais</h2>
            <p>Sua decisão descuidada de um repórter atrasado num túnel reflete em tragédia explosiva irreversível para o detetive civil num carro horas depois; saltar entre pontos cruciais destravando corações e barreiras torna-se o verdadeiro mistério formidável do relógio global interativo.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/648580/428_Shibuya_Scramble/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "saya-no-uta": {
        title: "The Song of Saya (Saya no Uta)",
        categories: ["Terror Cósmico", "Visual Novel", "Eroge", "Drama"],
        youtubeId: "zsBGP1SZnPc",
        summary: "Um estudante cuja mente percebe o mundo como carne em decomposição se apaixona por uma misteriosa garota angelical.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/702050/header.jpg",
            data: {
                "Desenvolvedor": "Nitroplus",
                "Lançamento": "12 de Agosto de 2019 (Steam)",
                "Plataformas": "PC, Android"
            }
        },
        toc: [
            { id: "percepcao", text: "1. Um Romance no Fim do Mundo" },
            { id: "horror", text: "2. Horror Cósmico e Acontecimentos Bizarros" }
        ],
        content: `
            <p>Imerso no imenso desespero romântico sangrento e alienígena forjado e rascunhado pela lenda do horror gráfico <a href="https://en.wikipedia.org/wiki/Gen_Urobuchi" target="_blank">Gen Urobuchi</a> da publicadora visceral <a href="https://www.nitroplus.co.jp/" target="_blank">Nitroplus</a>, <strong>Saya no Uta</strong> desmembra todo o moralismo visual e biológico da fundação humana ocidental numa obra pesadíssima.</p>

            <h2 id="percepcao">Um Romance no Fim do Mundo</h2>
            <p>O terrível defeito na cirurgia acidentada do rapaz amaldiçoa todos os cantos floridos, sons puros e rostos amorosos da metrópole asiática transformando-os numa profana podridão visceral insuportável no fundo da mente isolada até o inexplicável e bizarro anjo Saya nascer na sua retina confusa.</p>

            <h2 id="horror">Horror Cósmico e Acontecimentos Bizarros</h2>
            <p>O preço de permanecer ileso nos braços carinhosos de sua amante interdimensional cruza sacrifícios doentios violentos que dissolvem rapidamente todas as suas concepções éticas em abismos aterrorizantes onde a razão não encontra moradia perante um final macabro perverso.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/702050/The_Song_of_Saya/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://jastusa.com/" target="_blank"><i class="fa-solid fa-globe"></i> JAST USA</a>
                <a href="https://www.gog.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG</a>
            </div>
        `
    },
    "paranormasight-seven-mysteries": {
        title: "PARANORMASIGHT: The Seven Mysteries of Honjo",
        categories: ["Visual Novel", "Mistério", "Sobrenatural", "Horror"],
        summary: "Uma visual novel de mistério e horror sobrenatural baseada em lendas urbanas mortais de Tóquio.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2106530/header.jpg",
            data: {
                "Desenvolvedor": "Square Enix",
                "Gêneros": "Visual Novel, Horror, Aventura",
                "Lançamento": "8 de Março de 2023",
                "Plataformas": "PC, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Maldições e Investigação" },
            { id: "lendas", text: "3. Os Sete Mistérios" }
        ],
        content: `
            <p><strong>PARANORMASIGHT: The Seven Mysteries of Honjo</strong> é uma aclamada visual novel de terror e investigação desenvolvida pela <a href="https://square-enix-games.com/" target="_blank">Square Enix</a>. Ambientada no Japão do final do século XX (Período Showa), a obra mergulha os jogadores em uma atmosfera sombria, onde lendas urbanas do bairro de Sumida ganham vida através de maldições mortais.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>A história acompanha múltiplos protagonistas, começando por Shogo Okiie, um trabalhador comum que se envolve com os ocultos "Sete Mistérios de Honjo" após uma tragédia no parque Kinshibori. Logo, descobre-se que portadores de pedras amaldiçoadas estão participando de um jogo mortal: quem conseguir coletar almas suficientes poderá usar o poder do Rito da Ressurreição.</p>

            <h2 id="mecanicas">Maldições e Investigação</h2>
            <p>O jogo apresenta uma visão em 360 graus para investigação dos cenários. A mecânica principal envolve o uso de <em>Maldições</em>: cada personagem possui uma condição específica para ativar sua maldição e assassinar outros portadores. O terror psicológico se baseia em descobrir a condição de ativação do inimigo antes que ele descubra a sua, criando batalhas mentais intensas.</p>

            <h2 id="lendas">Os Sete Mistérios</h2>
            <ul>
                <li><strong>A Folha de Junco de um Lado Só:</strong> Uma das lendas centrais que desencadeia as primeiras mortes do jogo.</li>
                <li><strong>O Fosso de Pesca da Mentira:</strong> Relacionado a afogamentos e desaparecimentos misteriosos.</li>
                <li><strong>A Luz Que Guia:</strong> Uma aparição sobrenatural que atrai os curiosos para a morte.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2106530/PARANORMASIGHT_The_Seven_Mysteries_of_Honjo/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/store/products/paranormasight-the-seven-mysteries-of-honjo-switch/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo Switch</a>
            </div>
        `
    },

    "zero-escape-999": {
        title: "Zero Escape: Nine Hours, Nine Persons, Nine Doors",
        categories: ["Visual Novel", "Mistério", "Escape Room", "Terror Psicológico"],
        summary: "Nove pessoas são sequestradas e forçadas a participar de um jogo mortal de escape e traição.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/477740/header.jpg",
            data: {
                "Desenvolvedor": "Spike Chunsoft",
                "Gêneros": "Visual Novel, Puzzle, Death Game",
                "Lançamento": "10 de Dezembro de 2009",
                "Plataformas": "Nintendo DS, PC, PS4, Vita, Xbox"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. O Jogo Nonário (Nonary Game)" },
            { id: "personagens", text: "3. Os Participantes" }
        ],
        content: `
            <p><strong>Nine Hours, Nine Persons, Nine Doors (999)</strong> é o primeiro título da aclamada trilogia <a href="https://vndb.org/v3112" target="_blank">Zero Escape</a>. Criado por Kotaro Uchikoshi, o jogo combina narrativas densas de ficção científica e filosofia com salas de escape incrivelmente bem desenhadas. O clima constante de paranóia define a experiência.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O estudante universitário Junpei acorda em uma cabine de navio inundada com um bracelete marcando o número "5". Ele logo descobre que foi sequestrado pelo misterioso "Zero" junto com outras oito pessoas. Eles estão a bordo de uma réplica do Titanic e têm exatamente nove horas para encontrar a porta com o número 9 antes que o navio afunde. Se quebrarem as regras, uma bomba explodirá em seus estômagos.</p>

            <h2 id="mecanicas">O Jogo Nonário (Nonary Game)</h2>
            <p>A jogabilidade é dividida em duas partes: <em>Novel</em> (onde a história e as escolhas morais ocorrem) e <em>Escape</em> (onde o jogador deve resolver puzzles complexos de point-and-click para sair das salas). A matemática das "raízes digitais" dita quais personagens podem entrar em quais portas, forçando alianças e traições.</p>

            <h2 id="personagens">Os Participantes</h2>
            <ul>
                <li><strong>Junpei (5):</strong> O protagonista principal, buscando entender os motivos do sequestro.</li>
                <li><strong>Akane / June (6):</strong> Amiga de infância de Junpei que esconde segredos sobre o passado.</li>
                <li><strong>Clover (4) & Snake (2):</strong> Irmãos com uma conexão profunda, sendo Snake cego, mas extremamente astuto.</li>
                <li><strong>Seven (7):</strong> Um homem amnésico com porte físico intimidador.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/477740/Zero_Escape_The_Nonary_Games/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (The Nonary Games)</a>
            </div>
        `
    },

    "death-mark": {
        title: "Spirit Hunter: Death Mark",
        categories: ["Visual Novel", "Terror Psicológico", "Investigação", "Horror"],
        summary: "Investigue lendas urbanas macabras em Tóquio para se livrar de uma maldição que garante sua morte ao amanhecer.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/980830/header.jpg",
            data: {
                "Desenvolvedor": "Experience Inc.",
                "Gêneros": "Terror, Aventura, Investigação",
                "Lançamento": "1 de Junho de 2017",
                "Plataformas": "PC, PS4, Vita, Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Live or Die (Viva ou Morra)" },
            { id: "fantasmas", text: "3. Os Espíritos" }
        ],
        content: `
            <p><strong>Spirit Hunter: Death Mark</strong>, conhecido no Japão como <em>Shiin</em>, é o primeiro jogo da série Spirit Hunter da produtora <a href="http://www.experience.jp/" target="_blank">Experience</a>. Diferente do horror ocidental focado em sustos repentinos (jumpscares), Death Mark brilha no terror psicológico opressivo, folclore japonês grotesco e um design de som perturbador.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>Um boato estranho se espalha pela Cidade H: aqueles que possuem a "Marca" — um sinal bizarro no corpo que se assemelha a uma mordida de cachorro — morrerão ao amanhecer de forma horrenda. O protagonista acorda amnésico diante da Mansão Kujou. Lá, uma boneca falante chamada Mary informa que ele está marcado. Para sobreviver, ele precisará investigar os espíritos vingativos da cidade.</p>

            <h2 id="mecanicas">Live or Die (Viva ou Morra)</h2>
            <p>Durante a exploração em primeira pessoa de locais abandonados com o uso de uma lanterna, o jogador enfrentará os espíritos. Nas sequências de <em>Live or Die</em>, você tem apenas alguns segundos para escolher a resposta ou ação correta com base nas pistas coletadas. Errar drena sua "Alma" (HP), resultando em mortes brutais. Além disso, a escolha de como purificar o espírito dita se seus parceiros sobrevivem ou não.</p>

            <h2 id="fantasmas">Os Espíritos</h2>
            <ul>
                <li><strong>Hanahiko:</strong> O espírito de uma criança em uma escola em ruínas que odeia adultos e espelhos.</li>
                <li><strong>Shimi-O (Homem Mancha):</strong> Uma entidade horrenda que habita a floresta de suicídios local.</li>
                <li><strong>Hanayome (A Noiva):</strong> O espírito trágico e furioso que aterroriza cabines telefônicas abandonadas.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/980830/Spirit_Hunter_Death_Mark/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>
        `
    },

    "slay-the-princess": {
        title: "Slay the Princess",
        categories: ["Visual Novel", "Terror Psicológico", "Indie", "Escolhas"],
        summary: "Você está em um caminho na floresta. No final do caminho há uma cabana. E no porão dessa cabana há uma Princesa. Você deve matá-la.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1989270/header.jpg",
            data: {
                "Desenvolvedor": "Black Tabby Games",
                "Gêneros": "Horror Psicológico, Metaficção, Indie",
                "Lançamento": "23 de Outubro de 2023",
                "Plataformas": "PC, Mac, Linux"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Escolhas e Consequências" },
            { id: "vozes", text: "3. As Vozes na Cabeça" }
        ],
        content: `
            <p><strong>Slay the Princess</strong> é uma obra-prima do horror metaficcional desenvolvida pelo estúdio indie <a href="https://blacktabbygames.com/" target="_blank">Black Tabby Games</a>. Totalmente desenhado à mão com um traço a lápis visceral e totalmente dublado por apenas duas pessoas (Jonathan Sims e Nichole Goodnight), o jogo brinca com a percepção do jogador, a confiança no narrador e os ciclos de vida e morte.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O conceito é enganosamente simples. Um Narrador onisciente diz que você tem uma única missão: entrar em uma cabana e matar a Princesa acorrentada no porão. Se você não fizer isso, ela destruirá o mundo inteiro. Ela fará de tudo para impedi-lo. Ela vai mentir, seduzir, ameaçar ou implorar. Mas você não deve acreditar nela... ou deve?</p>

            <h2 id="mecanicas">Escolhas e Consequências</h2>
            <p>O jogo funciona na base de <em>loops</em> temporais (ciclos). Se você morrer, ou se ela morrer, o mundo reseta, mas a cabana e a Princesa mudam fisicamente dependendo das escolhas que você fez no loop anterior. Se você hesitou, ela pode se tornar uma entidade monstruosa e dominadora; se você tentou salvá-la de forma romântica, a dinâmica do jogo se transforma completamente.</p>

            <h2 id="vozes">As Vozes na Cabeça</h2>
            <p>Conforme os loops avançam, fragmentos da sua mente se manifestam como vozes distintas argumentando com você e com o Narrador:</p>
            <ul>
                <li><strong>O Herói:</strong> A voz original que tenta fazer a coisa certa.</li>
                <li><strong>O Cético:</strong> Desconfia de tudo que o Narrador fala.</li>
                <li><strong>O Paranoico, O Frio, O Teimoso:</strong> Mais de uma dúzia de vozes que mudam o tom da narrativa dependendo de como você morreu na vida anterior.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1989270/Slay_the_Princess/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://blacktabbygames.itch.io/slay-the-princess" target="_blank"><i class="fa-brands fa-itch-io"></i> Itch.io</a>
            </div>
        `
    },
    "black-souls": {
        title: "BLACK SOULS",
        categories: ["RPG", "Indie", "Dark Fantasy", "Terror Psicológico", "Souls-like", "Conteúdo Adulto"],
        summary: "Um RPG de fantasia sombria e terror psicológico inspirado na franquia Dark Souls e em contos de fadas, onde um morto-vivo desperta num império em colapso coberto por névoa e monstros.",
        infobox: {
            image: "https://gogunlocked.com/wp-content/uploads/2026/06/BLACK-SOULS-Free-Download-1-639x361.jpg",
            data: {
                "Desenvolvedor": "Eeny, meeny, miny, moe?",
                "Distribuidora": "OTAKU Plan, NEWS",
                "Gêneros": "RPG, Aventura, Indie, Fantasia Sombria",
                "Lançamento (Steam)": "15 de Agosto de 2025",
                "Plataformas": "PC (Windows) e Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Mecânicas e Exploração" },
            { id: "personagens", text: "3. Personagens e Heroínas" },
            { id: "download", text: "4. Download para PC" },
            { id: "requisitos", text: "5. Requisitos do Sistema" },
            { id: "galeria", text: "6. Galeria de Imagens" }
        ],
        content: `
            <p><strong>BLACK SOULS</strong> é um RPG indie de fantasia sombria e exploração profunda publicado na Steam pela <a href="https://store.steampowered.com/publisher/OTAKUPlan" target="_blank">OTAKU Plan</a>. O jogo combina a atmosfera melancólica, o combate punitivo e o design de mundo interconectado no estilo <em>Souls-like</em> com o universo perturbador dos contos de fadas clássicos subvertidos em horror psicológico.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>Há muito tempo, existia um reino envolto por uma densa névoa conhecido como o Império Perdido. Essa névoa misteriosa transformou os humanos em feras aterrorizantes, mergulhando o mundo no desespero. Você desperta nesse cenário catastrófico como um morto-vivo sem nome. Em uma jornada impiedosa através das ruínas de um mundo decadente, você deve encarar terrores cósmicos e descobrir os segredos esquecidos do reino.</p>

            <h2 id="mecanicas">Mecânicas e Exploração</h2>
            <p>O jogo apresenta um sistema de combate dinâmico por turnos com tempo ativo (ATB) e mecânica de encontros por símbolos. Oferece alta liberdade de exploração em mundo aberto, seleção de classes e múltiplos finais. A morte faz parte do aprendizado e não resulta em Game Over direto, permitindo ao jogador retornar para recuperar o progresso e explorar caminhos alternativos enquanto tenta evitar os finais mais sombrios.</p>

            <h2 id="personagens">Personagens e Heroínas</h2>
            <ul>
                <li><strong>O Protagonista:</strong> Um morto-vivo sem nome que desperta no Império Perdido e cujas escolhas moldam o destino do mundo.</li>
                <li><strong>Heroínas de Contos de Fadas:</strong> O jogo conta com mais de 20 heroínas inspiradas em clássicos da literatura (como Alice no País das Maravilhas, Chapeuzinho Vermelho e Branca de Neve), cada uma com arcos, intenções e segredos trágicos.</li>
                <li><strong>Habitantes do Império:</strong> Cavaleiros, cortesãs e entidades corrompidas pela névoa que habitam os cantos e jardins secretos do reino destruído.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar (Steam):</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/3755860/BLACK_SOULS/" target="_blank"><i class="fa-brands fa-steam"></i> Steam Store</a>
            </div>

            <h2 id="download">Download para PC e Android</h2>
            <p><strong>BLACK SOULS.rar</strong> (561,42 MB)</p>
            <p>Este download é totalmente gratuito. Se você gosta do jogo, apoie os desenvolvedores adquirindo a versão oficial na <a href="https://store.steampowered.com/app/3755860/BLACK_SOULS/" target="_blank">Steam</a>.</p>
            <div class="play-links">
                <a href="https://4br.me/Pa8lPv19" target="_blank"><i class="fa-solid fa-download"></i> Download para PC (Servidor 1)</a>
                <a href="https://4br.me/CS4sdDbhG" target="_blank"><i class="fa-solid fa-download"></i> Download para PC (Servidor 2)</a>
                <a href="https://4br.me/Black-Souls-APK" target="_blank"><i class="fa-solid fa-download"></i> Download para Android (Servidor 1)</a>
                <a href="https://4br.me/Black-Souls-APK2" target="_blank"><i class="fa-solid fa-download"></i> Download para Android (Servidor 2)</a>
                <a href="https://4br.me/Black-Souls-APK3" target="_blank"><i class="fa-solid fa-download"></i> Download para Android (Servidor 3)</a>
            </div>

            <h2 id="requisitos">Requisitos do Sistema</h2>
            <ul>
                <li><strong>Sistema operacional:</strong> Windows 10</li>
                <li><strong>Processador:</strong> 3 GHz ou superior</li>
                <li><strong>Memória:</strong> 4 GB de RAM</li>
                <li><strong>Gráficos:</strong> GPU compatível com DirectX 10 ou OpenGL 4.1</li>
                <li><strong>DirectX:</strong> Versão 10</li>
                <li><strong>Armazenamento:</strong> 1 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div class="image-gallery">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/BLACK-SOULS-gog-639x361.jpg" alt="Cena de BLACK SOULS" loading="lazy">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/BLACK-SOULS-crack-639x361.jpg" alt="Outra cena de BLACK SOULS" loading="lazy">
                <img src="https://pdalife.com/app/6868f862c9d19/screen-4.jpg" alt="Cena de BLACK SOULS para Android" loading="lazy">
                <img src="https://pdalife.com/app/6868f862c9d19/screen-5.jpg" alt="Cena de BLACK SOULS para Android" loading="lazy">
            </div>
        `
    },
    "the-sekimeiya-spun-glass": {
        title: "The Sekimeiya: Spun Glass",
        categories: ["Visual Novel", "Mistério", "Indie"],
        summary: "Um mistério de sala trancada incrivelmente complexo envolvendo 400 anos de história e pedras preciosas.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1432190/header.jpg",
            data: {
                "Desenvolvedor": "Trinimac",
                "Gêneros": "Visual Novel, Mistério de Dedução",
                "Lançamento": "6 de Maio de 2021",
                "Plataformas": "PC"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Dedução e Ferramentas" },
            { id: "complexidade", text: "3. Nível de Complexidade" }
        ],
        content: `
            <p><strong>The Sekimeiya: Spun Glass</strong> é um thriller de mistério indie famoso na comunidade <a href="https://vndb.org/" target="_blank">VNDB</a> por ser um dos enredos mais intrincados, complexos e exigentes já escritos. Feito para fãs hardcore de deduções de "Salas Trancadas", a obra não entrega as respostas facilmente nas mãos do jogador.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>Oito pessoas se encontram presas em um misterioso edifício em formato de torre chamado Sekimeiya. Sem saída visível e sem memória de como chegaram lá, o grupo descobre a existência de habilidades estranhas ligadas a cristais. Logo, eventos impossíveis começam a ocorrer, forçando o grupo a desvendar as leis físicas do edifício e a história centenária por trás de sua construção para escapar com vida.</p>

            <h2 id="mecanicas">Dedução e Ferramentas</h2>
            <p>Para lidar com o volume insano de informações, o jogo fornece um conjunto de ferramentas dentro da interface: uma função de busca de texto completa de diálogos anteriores, um bloco de notas virtual para o jogador e mapas detalhados da estrutura. O jogo espera que o jogador teorize, anote horários, localizações de personagens e anomalias físicas ativamente.</p>

            <h2 id="complexidade">Nível de Complexidade</h2>
            <ul>
                <li>Não há "escolhas erradas" clássicas, mas momentos onde você deve digitar as respostas para os mistérios baseando-se unicamente nas suas próprias deduções lógicas.</li>
                <li>O enredo exige atenção a micro-detalhes, diálogos ambíguos e saltos de linha do tempo.</li>
            </ul>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1432190/The_Sekimeiya_Spun_Glass/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>
        `
    },

    "chaos-head-noah": {
        title: "CHAOS;HEAD NOAH",
        categories: ["Visual Novel", "Terror Psicológico", "Ficção Científica"],
        summary: "Um otaku com delírios psicóticos é arrastado para uma série de bizarros assassinatos em série em Shibuya.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1961950/header.jpg",
            data: {
                "Desenvolvedor": "MAGES. Inc.",
                "Gêneros": "Horror Psicológico, Sci-Fi",
                "Lançamento": "26 de Fevereiro de 2009",
                "Plataformas": "PC, Switch, PS3, Vita"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. O Sistema Delusion Trigger" },
            { id: "universo", text: "3. Science Adventure" }
        ],
        content: `
            <p><strong>CHAOS;HEAD NOAH</strong> é o título fundamental que deu origem à aclamada série <em>Science Adventure</em> (a mesma de Steins;Gate). A versão <em>NOAH</em> é a versão definitiva e sem cortes do jogo original, entregando uma das experiências mais perturbadoras, esquizofrênicas e mergulhadas na cultura otaku do final dos anos 2000.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>Takumi Nishijou é um estudante recluso que vive em um container em Shibuya, passando os dias jogando MMOs e cercado por <em>figures</em> de anime. A cidade entra em pânico devido a uma série de assassinatos bizarros apelidados de "New Generation Madness" (Nova Loucura da Geração). Takumi tenta ignorar tudo, até que começa a sofrer alucinações onde ficção e realidade se misturam, e as pessoas ao seu redor parecem ter ligações diretas com as mortes macabras.</p>

            <h2 id="mecanicas">O Sistema Delusion Trigger</h2>
            <p>No lugar das escolhas convencionais de diálogos, o jogo utiliza o <em>Delusion Trigger</em> (Gatilho de Delírio). O jogador pode escolher como Takumi vai interpretar a realidade naquele momento:</p>
            <ul>
                <li><strong>Delírio Positivo (Verde):</strong> Takumi imagina uma situação cômica ou erótica, fugindo da realidade estressante.</li>
                <li><strong>Delírio Negativo (Vermelho):</strong> Takumi entra em pânico total, alucinando mortes brutais, perseguições e horror gore.</li>
                <li><strong>Ficar Neutro:</strong> Ignorar o gatilho mantém Takumi preso à realidade seca (o que nem sempre é a opção mais segura).</li>
            </ul>

            <h2 id="universo">Science Adventure</h2>
            <p>A obra introduz conceitos de manipulação do oceano de Dirac, sincronicidade de pensamentos e projeções visuais que moldam o universo compartilhado da <a href="https://en.wikipedia.org/wiki/Science_Adventure" target="_blank">MAGES</a>, servindo de prelúdio para CHAOS;CHILD.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1961950/CHAOSHEAD_NOAH/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>
        `
    },
    "13-sentinels-aegis-rim": {
        title: "13 Sentinels: Aegis Rim",
        categories: ["Visual Novel", "Mistério", "Ficção Científica"],
        summary: "13 adolescentes precisam pilotar mechas gigantes para salvar a humanidade em uma narrativa sci-fi extremamente complexa não linear.",
        infobox: {
            image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000046471/5e6c8ac2bfb2c4c6c293613fd001f61eebdc49c82a9dc33001716197eb884202",
            data: {
                "Desenvolvedor": "Vanillaware",
                "Gêneros": "Visual Novel, RTS, Sci-fi",
                "Lançamento": "28 de Novembro de 2019",
                "Plataformas": "PS4, Nintendo Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Arquivos de Pensamento e Combate" },
            { id: "narrativa", text: "3. Uma Obra-Prima da Não Linearidade" }
        ],
        content: `
            <p><strong>13 Sentinels: Aegis Rim</strong> é o <em>magnum opus</em> do estúdio <a href="http://vanillaware.co.jp/" target="_blank">Vanillaware</a>. Com uma das direções de arte 2D mais deslumbrantes da indústria, a obra mescla aventura point-and-click com combates de estratégia em tempo real (RTS), oferecendo o que é frequentemente considerado uma das maiores histórias de ficção científica dos videogames modernos.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O mundo está sendo destruído por "Kaijus" (monstros robóticos gigantes). A única defesa da humanidade são os Sentinelas, mechas controlados por 13 adolescentes. O grande mistério é que esses 13 protagonistas pertencem a diferentes épocas do Japão (desde a Segunda Guerra Mundial até o ano de 2105) e seus destinos se cruzam de maneiras inesperadas e repletas de reviravoltas de explodir mentes.</p>

            <h2 id="mecanicas">Arquivos de Pensamento e Combate</h2>
            <p>A seção de Visual Novel/Aventura usa a mecânica de <em>Thought Cloud</em> (Nuvem de Pensamentos), onde você adquire palavras-chave nos diálogos e as aplica em objetos ou personagens para avançar. O jogo é dividido em três áreas: <em>Remembrance</em> (A história), <em>Destruction</em> (As batalhas de mecha no estilo tower defense RTS) e <em>Analysis</em> (O arquivo de documentos que organiza a caótica linha do tempo).</p>

            <h2 id="narrativa">Uma Obra-Prima da Não Linearidade</h2>
            <p>Você pode jogar a história dos 13 personagens em praticamente qualquer ordem. Uma revelação feita na história do personagem A pode mudar completamente o contexto de um evento no ano de 1985 vivenciado pelo personagem B. O jogo homenageia clássicos do sci-fi como Guerra dos Mundos, Matrix, Exterminador do Futuro e Evangelion de forma genial.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://www.nintendo.com/store/products/13-sentinels-aegis-rim-switch/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo Switch</a>
                <a href="https://store.playstation.com/pt-br/product/UP0177-CUSA19610_00-13SENTINELSNA001" target="_blank"><i class="fa-brands fa-playstation"></i> PlayStation Store</a>
            </div>
        `
    },
    "limbo": {
        title: "Limbo",
        categories: ["Plataforma", "Quebra-cabeça", "Indie"],
        summary: "Um garoto sem nome desperta em um mundo sombrio e monocromático e parte em uma perigosa jornada em busca de sua irmã.",
        infobox: {
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/48000/header.jpg",
            data: {
                "Desenvolvedor": "Playdead",
                "Gêneros": "Puzzle-Platformer, Indie, Terror",
                "Lançamento": "21 de Julho de 2010",
                "Plataformas": "PC, Xbox, PlayStation, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Tentativa e Morte" },
            { id: "atmosfera", text: "3. Atmosfera e Estética" }
        ],
        content: `
            <p><strong>Limbo</strong> é o aclamado título de estreia do estúdio dinamarquês <a href="https://playdead.com/" target="_blank">Playdead</a>. Sendo um dos principais jogos a impulsionar o renascimento da cena indie na década de 2010, a obra é amplamente reconhecida por seu design minimalista, atmosfera opressiva e quebra-cabeças complexos baseados em física real.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>Sem diálogos, textos ou qualquer exposição direta, o jogo começa com um garoto sem nome acordando no meio de uma floresta escura, à beira do inferno (o Limbo). Ele parte em uma jornada instintiva para encontrar sua irmã perdida, atravessando florestas macabras habitadas por aranhas gigantes e cenários industriais decadentes repletos de armadilhas letais.</p>

            <h2 id="mecanicas">Tentativa e Morte</h2>
            <p>As mecânicas de Limbo misturam plataforma clássica em 2D com resolução de quebra-cabeças ambientais. Os desenvolvedores classificaram o estilo de jogo como <em>"Trial and Death"</em> (Tentativa e Morte). As armadilhas geralmente não são visíveis até serem ativadas, exigindo que o jogador falhe e morra de maneiras grotescas para aprender como superar o obstáculo na próxima tentativa.</p>

            <h2 id="atmosfera">Atmosfera e Estética</h2>
            <p>A direção de arte é inteiramente em preto, branco e tons de cinza, utilizando técnicas de iluminação dinâmica e granulação de filme para criar uma estética reminiscente do expressionismo alemão e dos filmes noir. O design de som é minimalista, focado em ruídos do ambiente e na ausência quase total de música, o que amplifica o sentimento de solidão e perigo constante.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogar / Comprar:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/48000/LIMBO/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (PC)</a>
                <a href="https://store.epicgames.com/pt-BR/p/limbo" target="_blank"><i class="fa-solid fa-gamepad"></i> Epic Games Store</a>
                <a href="https://www.gog.com/game/limbo" target="_blank"><i class="fa-solid fa-gamepad"></i> GOG (DRM-Free)</a>
                <a href="https://www.nintendo.com/pt-br/store/products/limbo-switch/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo Switch</a>
            </div>
        `
    },
    "needy-streamer-overload": {
        title: "Needy Streamer Overload",
        categories: ["Visual Novel", "Terror Psicológico", "Simulação"],
        youtubeId: "e-3pEF_NBT0",
        summary: "Transforme sua namorada instável no maior Anjo da Internet. Gerencie seus remédios, streams e surtos de saúde mental.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1451940/header.jpg",
            data: {
                "Desenvolvedor": "WSS playground",
                "Lançamento": "21 de Janeiro de 2022",
                "Plataformas": "PC (Steam), macOS, Nintendo Switch, PS4, PS5",
                "Idiomas": "Inglês, Japonês, Chinês, Português do Brasil"
            }
        },
        toc: [
            { id: "sinopse", text: "1. A Premissa da Fama Virtual" },
            { id: "mecanicas", text: "2. Gestão de Estresse e Pílulas" }
        ],
        content: `
            <p>Escrito de forma brutal e honesta pelas mentes japonesas modernas do estúdio indie de denúncia web <a href="https://whysoserious.jp/" target="_blank">WSS playground</a>, <strong>Needy Streamer Overload</strong> pinta maravilhosamente as trevas profundas dos transtornos cibernéticos atuais disfarçados nas cores angelicais de uma adorável VTuber e-girl retro.</p>
            
            <h2 id="sinopse">A Premissa da Fama Virtual</h2>
            <p>Sendo o enigmático conselheiro romântico de um projeto egoísta do desespero de Ame pelas luzes vazias da tela da plataforma mundial invisível, é um teste exaustivo agradar os devotos virtuais estranhos e esconder as crises paranoicas atrás dos brilhantes streams da reluzente KAngel.</p>

            <h2 id="mecanicas">Gestão de Estresse e Pílulas</h2>
            <p>As drogas controladas, saídas para afago nas madrugadas solitárias urbanas e longas leituras tristes de tópicos amargos nos fóruns anônimos destroem gradualmente todo o equilíbrio entre um carinho afetuoso perigoso que mergulha aos vinte abissais finais de cancelamento digital tóxico e caos psicológico sem redenção.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1451940/NEEDY_STREAMER_OVERLOAD/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.nintendo.com/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://store.playstation.com/" target="_blank"><i class="fa-brands fa-playstation"></i> PS Store</a>
            </div>
        `
    },
    "the-coffin-of-andy-and-leyley": {
        title: "The Coffin of Andy and Leyley",
        categories: ["RPG", "Terror Psicológico", "Indie", "Sobrevivência"],
        youtubeId: "qlBkkewJM0c",
        summary: "Navegue pela realidade sombria de Andy e Leyley, irmãos presos em um mundo abominável onde o terror psicológico e o espectro do canibalismo se agigantam.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/ss_211eee43e3663cff98c3661fdeb99099229f9679.1920x1080.jpg?t=1774434375",
            data: {
                "Desenvolvedor": "Kit9 Studio",
                "Gêneros": "Simulação, RPG, Terror Psicológico",
                "Lançamento": "13 de Outubro de 2023",
                "Plataformas": "PC (Windows), Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "caracteristicas", text: "2. Características Sombrias" },
            { id: "galeria", text: "3. Galeria de Imagens" },
            { id: "downloads", text: "4. Links e Downloads" }
        ],
        content: `
            <p>Entre na jornada de <strong>The Coffin of Andy and Leyley</strong> (<em>O Caixão de Andy e Leyley: Shadows of Descent</em>), onde o terror de sobrevivência assume uma forma nova e distorcida. Desenvolvido pela <strong>Kit9 Studio</strong>, o jogo foca em uma narrativa densa e escolhas morais perturbadoras.</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>Neste jogo, você navega pela realidade sombria de Andy (Andrew) e Leyley (Ashley), irmãos presos em um mundo desolado e abominável. Presos em um pesadelo implacável, os irmãos enfrentam o horror supremo: seu próprio parentesco corrompido por uma necessidade extrema de sustento.</p>
            <p>Cada decisão que você toma tece uma história de terror psicológico, onde os fantasmas de suas ações se agigantam e o espectro do canibalismo lança uma longa sombra. É preciso lutar contra os demônios internos que ameaçam consumi-los, literal e metaforicamente.</p>

            <h2 id="caracteristicas">Características Sombrias</h2>
            <ul>
                <li>Navegue por um mundo desolado e opressivo.</li>
                <li>Resolva quebra-cabeças enigmáticos que testam sua vontade de sobreviver.</li>
                <li>Alterne entre os protagonistas que lutam por sua humanidade.</li>
                <li>Enfrente escolhas sombrias que distorcem a espinha da narrativa.</li>
                <li>Abrace ou enfrente a realidade macabra da sobrevivência a qualquer custo.</li>
                <li>Revele uma infinidade de finais em que cada sombra abriga uma escuridão diferente.</li>
            </ul>
            <p><em>Neste jogo, o verdadeiro horror não é apenas a ameaça de morte — é o que se esconde dentro do Caixão de Andy e Leyley.</em></p>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/ss_46e4c8758c065bfd1da33bd02b0290fcdadb18e7.1920x1080.jpg?t=1774434375" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/ss_3b636d075e491a1c1e9bda943e08c3cfbe06aa34.1920x1080.jpg?t=1774434375" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/ss_f1371c9cc91cd6d1cbb26e2786cdf59a8b1f3059.1920x1080.jpg?t=1774434375" alt="Screenshot 3" style="max-width: 98%; height: auto; border-radius: 4px; border: 1px solid #ccc; margin-top: 10px;">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Página Oficial:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>

            <h3>Informações da Versão</h3>
            <p><strong>Versão do Jogo:</strong> v2.0.8<br>
            <strong>Idiomas:</strong> Inglês, Japonês, Chinês e <strong>Português</strong><br>
            <em>(OBS: A tradução em Português foi feita por Shinra Kun e seu amigo)</em></p>

            <h3>Download (PC - Multi-language)</h3>
            <p><strong>Tamanho:</strong> 334.1 MB<br>
            <strong>Senha de extração:</strong> hentaijogos.com</p>
            <div class="play-links">
                <a href="https://4br.me/BtAtxfwYrg" target="_blank"><i class="fa-solid fa-download"></i> Download PC</a>
            </div>

            <h3>Download (Android - APK)</h3>
            <p>Pode ser jogado nativamente instalando o APK ou via emulador JoiPlay.</p>
            <div class="play-links">
                <a href="https://4br.me/DesaHlfd" target="_blank"><i class="fa-brands fa-android"></i> Download APK</a>
            </div>
        `
    },
    "gnosia": {
        title: "Gnosia",
        categories: ["RPG", "Dedução Social", "Ficção Científica", "Indie", "Visual Novel"],
        summary: "Um RPG de ficção científica de dedução social onde você deve identificar e eliminar a ameaça alienígena Gnosia em meio a loops temporais.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1608290/header.jpg",
            data: {
                "Desenvolvedor": "Petit Depotto",
                "Gêneros": "RPG, Dedução Social, Sci-Fi",
                "Lançamento": "23 de Janeiro de 2022 (PC)",
                "Plataformas": "PC (Windows), Nintendo Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "mecanicas", text: "2. Mecânicas e Loops" },
            { id: "requisitos", text: "3. Requisitos do Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "downloads", text: "5. Links e Downloads" }
        ],
        content: `
            <p><strong>Gnosia</strong> é um aclamado RPG de ficção científica focado em dedução social, desenvolvido pelo estúdio indie japonês <strong>Petit Depotto</strong>. O jogo mistura elementos clássicos de jogos de tabuleiro (como <em>Máfia</em> ou <em>Lobisomem</em>) com uma narrativa profunda estilo <em>Visual Novel</em> baseada em viagens no tempo.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>A mentira da Gnosia. Fingindo ser humanos, eles se aproximam, enganam e então eliminam uma vítima de cada vez. A tripulação de uma nave espacial à deriva enfrenta essa ameaça misteriosa e mortal, não tendo ideia de quem entre eles é realmente o inimigo.</p>
            <p>Para sobreviver, eles formulam um plano desesperado: debater entre si e colocar os membros mais suspeitos em "sono frio" (criogenia), um por um, na esperança de livrar a nave de todos os Gnosia infiltrados.</p>

            <h2 id="mecanicas">Mecânicas e Loops</h2>
            <p>O jogador deve discutir com uma variedade de personagens únicos, coletando informações para deduzir quem é o inimigo, e então votar. Trabalhe em colaboração com ou contra outros membros da tripulação para garantir sua sobrevivência. Conforme você avança, as habilidades da tripulação também melhoram.</p>
            <ul>
                <li><strong>Loops Temporais:</strong> Jogue repetidos "loops" (ciclos), desencadeando eventos especiais para desvendar o grande mistério. Certos eventos desbloqueiam novos comandos de diálogo.</li>
                <li><strong>Estatísticas RPG:</strong> Suas estatísticas determinam sua capacidade de influenciar o grupo, mentir ou perceber mentiras, afetando também a probabilidade de você ser selecionado para o sono frio.</li>
                <li><strong>Papéis Variados:</strong> Entre em uma variedade de papéis (como Engenheiro, Doutor, Anjo da Guarda, ou até mesmo jogar como Gnosia) que alteram completamente a dinâmica das discussões.</li>
                <li><strong>Eventos de Tripulação:</strong> Vivencie eventos desencadeados aleatoriamente que revelam o passado e os segredos de seus companheiros na forma de "Notas" no diário.</li>
            </ul>

            <h2 id="requisitos">Requisitos do Sistema (PC)</h2>
            <ul>
                <li><strong>SO:</strong> Windows 7 / 8 / 8.1 / 10 (32-bit / 64-bit) <em>*Nota: Atualmente a Steam exige Windows 10+</em></li>
                <li><strong>Processador:</strong> Intel Core i5</li>
                <li><strong>Memória:</strong> 4 GB de RAM</li>
                <li><strong>Armazenamento:</strong> 1 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/GNOSIA-gog-639x361.png" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/GNOSIA-crack-639x361.png" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Página Oficial:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1608290/GNOSIA/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>

            <h3>Download (Grátis)</h3>
            <p><strong>Versão do Jogo:</strong> v2022.03.03<br>
            <strong>Tamanho:</strong> 727,21 MB</p>
            <div class="play-links">
                <a href="https://4br.me/cBGR6uD" target="_blank"><i class="fa-solid fa-download"></i> Download PC</a>
            </div>
        `
    },
    "the-zodiac-trial": {
        title: "The Zodiac Trial",
        categories: ["Visual Novel", "Mistério", "Death Game", "Quebra-Cabeças", "Indie"],
        youtubeId: "duXpCP0qVE4",
        summary: "O Julgamento do Zodíaco começou e a vida de 12 jurados está em jogo! Um jogo de mistério, traição e quebra-cabeças com mais de 52 finais.",
        infobox: {
            image: "https://igg-games.com/wp-content/uploads/2026/01/The-Zodiac-Trial-PC-Crack.jpg",
            data: {
                "Desenvolvedor": "Themis",
                "Gêneros": "Visual Novel, Mistério, Sobrevivência",
                "Lançamento": "2021",
                "Plataformas": "PC (Windows), macOS"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e Personagens" },
            { id: "mecanicas", text: "2. Rotas, Finais e Quebra-Cabeças" },
            { id: "recursos", text: "3. Recursos Adicionais" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "downloads", text: "5. Links e Downloads" }
        ],
        content: `
            <p><strong>The Zodiac Trial</strong> é uma intrigante Visual Novel de mistério e sobrevivência (<em>Death Game</em>). O Julgamento do Zodíaco começou e a vida de todos está em jogo! Será que esses 12 jurados conseguirão resolver os mistérios e cooperar, ou recorrerão à traição, ao engano e à violência?</p>
            
            <h2 id="sinopse">Sinopse e Personagens</h2>
            <p>Saia vivo ou morra, morra de novo! Jogue como <strong>Mo use</strong>, uma estudante de direito que está muito acima de sua capacidade. Conheça os outros 11 jurados, todos os quais podem se tornar aliados confiáveis ou inimigos cruéis. Do Boi composto à misteriosa Cobra e ao Galo estúpido, há um elenco inteiro de personagens inspirados no zodíaco para fazer amizade ou trair.</p>

            <h2 id="mecanicas">Rotas, Finais e Quebra-Cabeças</h2>
            <p>O <em>Zodiac Trial</em> está repleto de quebra-cabeças de todos os formatos e tamanhos. De um enigma casual escrito em alguma folha de papel a um mistério de assassinato de alto risco em uma sala trancada, o jogo certamente fará você pensar.</p>
            <ul>
                <li><strong>13 Rotas Únicas:</strong> Seu destino está em suas mãos. Há um total de 13 cenários completamente diferentes para passar. Você enfrentará assassinatos em salas trancadas, guerras territoriais totais, ou talvez um novo <em>Trinket</em> transforme o jogo numa tentativa política de obter votos.</li>
                <li><strong>52+ Finais:</strong> Há muitas opções e inúmeras maneiras de as coisas acontecerem. Dependendo de como você vive (ou morre), você desbloqueará um <strong>Cartão da Morte</strong> personalizado representando esse final. Se você realmente entender o jogo, talvez consiga encontrar uma maneira de tirar todo mundo vivo.</li>
            </ul>

            <h2 id="recursos">Recursos Adicionais</h2>
            <p>Além das mais de <strong>30 horas do Conteúdo da História Principal</strong>, o jogo conta com diversas opções de qualidade de vida. Há também um modo desbloqueável adicional para aqueles que conquistaram o jogo principal (projetado para lançar luz sobre certas verdades ocultas), bem como um <strong>Comentário do Narrador</strong> que fornece todos os tipos de insights ao longo da jogatina.</p>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://img.itch.zone/aW1hZ2UvODkxNDEzLzUwMjkwMDMuanBn/original/%2BrXMrm.jpg" alt="Screenshot 1" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvODkxNDEzLzUwMjkwMDEuanBn/original/8pCpYJ.jpg" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvODkxNDEzLzUwMjkwMDIuanBn/original/WW2MHE.jpg" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Páginas Oficiais:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1513120/The_Zodiac_Trial/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://themis729.itch.io/the-zodiac-trial" target="_blank"><i class="fa-brands fa-itch-io"></i> Itch.io</a>
                <a href="https://gg.deals/game/the-zodiac-trial/" target="_blank"><i class="fa-solid fa-tag"></i> GG.deals</a>
            </div>

            <h3>Download (Grátis)</h3>
            <p><strong>Plataformas:</strong> Windows, macOS</p>
            <div class="play-links">
                <a href="https://4br.me/tuil" target="_blank"><i class="fa-solid fa-download"></i> MegaUp.net</a>
                <a href="https://4br.me/r0tCLbrt" target="_blank"><i class="fa-solid fa-download"></i> Mega.nz</a>
                <a href="https://4br.me/mAAbC3Z" target="_blank"><i class="fa-solid fa-download"></i> Rapidgator</a>
            </div>
        `
    },
    "scarlet-hollow": {
        title: "Scarlet Hollow",
        categories: ["Visual Novel", "Mistério", "Ficção Interativa", "RPG", "Terror Psicológico"],
        summary: "Dos criadores de Slay the Princess. Sobreviva a uma semana em uma cidade mineira assombrada por criptídeos e horrores onde suas decisões alteram drasticamente a história.",
        infobox: {
            image: "https://img.itch.zone/aW1nLzI1NTY5NDc4LnBuZw==/original/o4tjkg.png",
            data: {
                "Desenvolvedor": "Black Tabby Games",
                "Gêneros": "Visual Novel, Interativa, RPG, Horror",
                "Lançamento": "11 de Junho de 2021",
                "Plataformas": "PC (Windows), macOS, Linux",
                "Engine": "Ren'Py"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "caracteristicas", text: "2. Características e RPG" },
            { id: "requisitos", text: "3. Requisitos do Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "downloads", text: "5. Links, Instruções e Downloads" }
        ],
        content: `
            <p><strong>Scarlet Hollow</strong> é um mistério de terror envolvente com escrita afiada e escolhas incrivelmente impactantes, desenvolvido pela <strong>Black Tabby Games</strong> (o mesmo estúdio por trás do aclamado <a href="#/slay-the-princess">Slay the Princess</a>). Totalmente desenhado à mão e focado na tensão narrativa, o jogo é estruturado de forma episódica, com 7 capítulos planejados no total (sendo que os 5 primeiros já estão disponíveis).</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>O que deveria ser um retiro tranquilo nas montanhas rurais da Carolina do Norte, focado em conhecer sua prima distante e confortá-la no funeral de sua tia, rapidamente se transforma em um pesadelo implacável. Você chega à decadente cidade mineira de Scarlet Hollow apenas para descobrir que o local despertou para o horror: minas de carvão desabadas, gado sendo mutilado por criaturas bizarras e casas infestadas por espíritos.</p>
            <p>Você tem apenas uma semana para sobreviver e desvendar esses mistérios assustadores. Mas esteja avisado: <strong>você não conseguirá salvar todo mundo</strong>, e dependendo das suas escolhas, talvez não consiga salvar nem a si mesmo.</p>

            <h2 id="caracteristicas">Características e Elementos de RPG</h2>
            <ul>
                <li><strong>Narrativa e Traços de RPG:</strong> O sistema de diálogos é impulsionado por características de <em>Role-playing Game</em>. Você é um brutamontes, possui o dom de falar com animais, ou é extremamente observador? Há 21 construções diferentes de personagem que mudam drasticamente a interação com o mundo.</li>
                <li><strong>Relacionamentos Dinâmicos:</strong> A cidade não reage apenas com "gostar" ou "não gostar" de você. Suas atitudes podem gerar rivalidades amigáveis, ódio profundo, melhores amizades ou até mesmo <strong>romances</strong> complexos (seja com pessoas excêntricas ou até monstros reais).</li>
                <li><strong>Mitologia dos Apalaches:</strong> Designs de monstros originais inspirados fortemente em mitos e criptídeos folclóricos locais da cultura norte-americana.</li>
                <li><strong>Terror Atmosférico (Sem Sustos Baratos):</strong> Todo o horror vem do puro pavor, de uma tensão constante e imagens perturbadoras construídas pela arte tradicional em tinta da romancista gráfica Abby Howard, com centenas de fundos desenhados à mão.</li>
            </ul>

            <h2 id="requisitos">Requisitos do Sistema (Mínimos)</h2>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 ou superior</li>
                <li><strong>Processador:</strong> 1.8 GHz Dual Core</li>
                <li><strong>Memória:</strong> 2 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Gráficos Integrados</li>
                <li><strong>Armazenamento:</strong> 2 GB de espaço livre disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://img.itch.zone/aW1hZ2UvMTAxMjI4MC8yMDExOTE5My5qcGc=/347x500/SFRrfy.jpg" alt="Screenshot 1" style="max-width: 30%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMTAxMjI4MC8yMDExOTE5NS5qcGc=/original/rUBeRq.jpg" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMTAxMjI4MC8yMDExOTE5Mi5qcGc=/original/qUCTYR.jpg" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="downloads">Links, Instruções e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Páginas Oficiais:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1609230/Scarlet_Hollow/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://blacktabbygames.itch.io/scarlet-hollow" target="_blank"><i class="fa-brands fa-itch-io"></i> Itch.io</a>
            </div>

            <h3>Download da Demonstração (Link Direto)</h3>
            <p>Contém o primeiro episódio inteiro, e seus arquivos de salvamento serão transferidos automaticamente para o jogo completo caso decida comprar depois.</p>
            <div class="play-links">
                <a href="https://itchio-mirror.cb031a832f44726753d6267436f3b414.r2.cloudflarestorage.com/upload2/game/1012280/13071527?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=3edfcce40115d057d0b5606758e7e9ee%2F20260906%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260906T094250Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=6066491405bdca9d73f4d3469fc9e9583e63250ecbd64b0ca9db5a6f5054ffd2" target="_blank"><i class="fa-solid fa-download"></i> Baixar Demo (Itch.io Mirror)</a>
            </div>

            <h3>Download Completo - Grátis (v1.0g)</h3>
            <div class="play-links">
                <a href="https://4br.me/2MOmICVAT7" target="_blank"><i class="fa-solid fa-download"></i> Download Scarlet Hollow (v1.0g)</a>
            </div>
            
            <blockquote>
                <strong>Instruções de Download e Instalação:</strong>
                <ol>
                    <li>Após clicar no link e passar pelo encurtador, você será redirecionado para a página do <em>UploadHaven</em>.</li>
                    <li>Aguarde 5 segundos e clique no botão azul <strong>"Download Now"</strong>. (É recomendado utilizar um gerenciador de downloads, como o <a href="https://www.freedownloadmanager.org/pt/" target="_blank">FDM</a>, para velocidades mais rápidas).</li>
                    <li>Quando o download do arquivo ZIP terminar, clique com o botão direito do mouse no arquivo e selecione <strong>“Extrair para Scarlet Hollow v1.0g”</strong>. Você precisará do extrator do Windows ou de um programa como o <a href="https://www.7-zip.org/" target="_blank">7-Zip</a>.</li>
                    <li>Abra a pasta extraída, execute o aplicativo de instalação (Setup), aceite os termos e instale o jogo.</li>
                    <li>Inicie o jogo através do atalho gerado na sua área de trabalho e divirta-se!</li>
                </ol>
            </blockquote>
        `
    },
    "little-busters": {
        title: "Little Busters! English Edition",
        categories: ["Visual Novel", "Drama", "Comédia", "Escolar", "Romance", "Anime"],
        summary: "Mergulhe em uma história emocionante sobre amizade, nostalgia e fantasia enquanto acompanha Riki Naoe e os divertidos membros dos Little Busters.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/635940/header.jpg?t=1732683318",
            data: {
                "Desenvolvedor": "VisualArts/Key",
                "Gêneros": "Visual Novel, Aventura, Escolar",
                "Lançamento": "1 de Novembro de 2017",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "mecanicas", text: "2. Mecânicas e Recursos" },
            { id: "galeria", text: "3. Galeria de Imagens" },
            { id: "downloads", text: "4. Links Oficiais, Anime e Downloads" }
        ],
        content: `
            <p>Mergulhe em uma história emocionante que mistura amizade, nostalgia e um toque de fantasia. Uma obra clássica do renomado estúdio <strong>Key</strong> (conhecido por obras como <em>Clannad</em> e <em>Angel Beats!</em>).</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>Esta visual novel gira em torno de <strong>Riki Naoe</strong>, que, depois de uma infância cheia de perdas e tragédias, encontra consolo e alegria na camaradagem dos <strong>Little Busters</strong>, um grupo peculiar dedicado a combater os males de seu mundo — muitas vezes de maneiras hilariantemente fúteis.</p>
            <p>Ambientado em um ambiente escolar vibrante, os jogadores devem navegar pelos relacionamentos de Riki, fazendo escolhas difíceis que moldam ativamente a narrativa e influenciam o desenvolvimento emocional de todos os personagens ao seu redor.</p>

            <h2 id="mecanicas">Mecânicas e Recursos</h2>
            <p>Este jogo é perfeito para fãs de narrativas baseadas em personagens e roteiros altamente emocionais, oferecendo uma experiência rica e difícil de esquecer.</p>
            <ul>
                <li><strong>Laços Profundos:</strong> Capacidade de aprofundar os relacionamentos com vários personagens através de histórias paralelas envolventes e rotas individuais.</li>
                <li><strong>Minijogos:</strong> Uma mecânica de jogo exclusiva e interativa, onde você pode participar de rebatidas de beisebol, lutas corporais cômicas e outras atividades com o grupo.</li>
                <li><strong>Múltiplos Finais:</strong> Descubra vários finais diferentes baseados nos caminhos escolhidos, culminando no verdadeiro mistério por trás do mundo do jogo.</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/Little-Busters-Ecstasy-Edition-gog-639x361.jpg" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/Little-Busters-Ecstasy-Edition-crack-639x361.jpg" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Página Oficial:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/635940/Little_Busters_English_Edition/?l=brazilian" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>

            <p><i class="fa-solid fa-film"></i> <strong>Adaptação em Anime:</strong></p>
            <div class="play-links">
                <a href="https://www.litbus-anime.com/" target="_blank"><i class="fa-solid fa-globe"></i> Site oficial do anime</a>
            </div>

            <h3>Download (Grátis)</h3>
            <p><strong>Versão do Jogo:</strong> v1.2.4 (GameDrive) - English Edition</p>
            
            <blockquote style="border-left: 4px solid #ff4c4c; padding-left: 15px; color: #cc0000; background-color: #ffe6e6; margin-bottom: 15px;">
                <strong><i class="fa-solid fa-triangle-exclamation"></i> AVISO DE SEGURANÇA:</strong> Ignore coisas falsas em anúncios — feche-os e retorne à página original. Os arquivos reais do jogo são grandes. Anúncios costumam baixar arquivos minúsculos disfarçados. Não usamos arquivos muito pequenos!
            </blockquote>

            <div class="play-links">
                <a href="https://4br.me/puDjlUSfNU" target="_blank"><i class="fa-solid fa-download"></i> Servidor Multiup</a>
                <a href="https://4br.me/YAC3f" target="_blank"><i class="fa-solid fa-download"></i> Servidor MyPikPak</a>
                <a href="https://4br.me/dFGn" target="_blank"><i class="fa-solid fa-download"></i> Servidor DL</a>
                <a href="https://4br.me/HmTggmcI4" target="_blank"><i class="fa-solid fa-download"></i> Servidor MEGA</a>
                <a href="https://4br.me/PWZJRTiy" target="_blank"><i class="fa-solid fa-download"></i> Servidor Alternativo</a>
            </div>
        `
    },
    "planetarian": {
        title: "Planetarian HD",
        categories: ["Visual Novel", "Ficção Científica", "Pós-apocalíptico", "Drama", "Indie"],
        summary: "Em um mundo pós-apocalíptico, um sobrevivente encontra uma robô solitária em um planetário abandonado. Uma história inesquecível sobre esperança e perda.",
        infobox: {
            image: "https://dn710006.ca.archive.org/0/items/planetarianHD-EN/planetarian%20HD.jpg",
            data: {
                "Desenvolvedor": "VisualArts/Key",
                "Gêneros": "Visual Novel, Ficção Científica, Drama",
                "Lançamento": "Original: 2004 / HD: 2017",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "experiencia", text: "2. Experiência e Narrativa" },
            { id: "galeria", text: "3. Galeria de Imagens" },
            { id: "downloads", text: "4. Links Oficiais, Anime e Downloads" }
        ],
        content: `
            <p><strong>Planetarian: The Reverie of a Little Planet</strong> (ou em sua versão remasterizada <em>Planetarian HD</em>) é uma aclamada visual novel cinética desenvolvida pelo icônico estúdio <strong>Key</strong>. Conhecida por entregar narrativas curtas, mas de impacto profundo, a obra mistura um cenário desolador com uma delicada humanidade.</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>Entre em um mundo onde o tempo parou e as maravilhas do universo aguardam sua exploração. A história mergulha os jogadores em um cenário pós-apocalíptico implacável, trinta anos após o colapso dos esforços de colonização espacial e a devastação do planeta.</p>
            <p>Assumindo o papel de um "Junker" (um catador de sucata), você navega por uma cidade em ruínas sob uma chuva eterna até entrar em um planetário abandonado há muito tempo. Lá, você interage com uma robô encantadora que, alheia ao fim do mundo, ainda espera por clientes, desvendando uma narrativa tocante sobre esperança, sonhos e perda.</p>

            <h2 id="experiencia">Experiência e Narrativa</h2>
            <p>O jogo cativa com seus visuais lindamente ilustrados e uma trilha sonora comovente que aprimora sua atmosfera reflexiva. Os jogadores se envolvem na exploração melancólica dos escombros e na construção de um vínculo improvável entre o humano sobrevivente e a máquina de coração puro.</p>
            <ul>
                <li><strong>Conexão Pessoal:</strong> A narrativa conduz o jogador por momentos profundamente emocionais, permitindo uma conexão íntima com a pureza inabalável da robô em contraste com o cinismo do protagonista.</li>
                <li><strong>Trilha Sonora:</strong> Melodias inesquecíveis que acompanham o som constante da chuva, ditando o tom agridoce da experiência.</li>
                <li><strong>Estilo de Arte:</strong> Visuais esteticamente únicos em alta definição, perfeitos para fãs de narrativas baseadas no profundo desenvolvimento de personagens.</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/Planetarian-the-Reverie-Of-A-Little-Planet-gog-639x361.jpg" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/Planetarian-the-Reverie-Of-A-Little-Planet-crack-639x361.jpg" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Páginas Oficiais, Anime e Mídia:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/623080/planetarian_HD/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://www.crunchyroll.com/pt-br/series/G5PHNM7M1/planetarian" target="_blank"><i class="fa-solid fa-film"></i> Assistir ao Anime (Crunchyroll)</a>
            </div>

            <h3>Download (Grátis)</h3>
            <p><strong>Plataforma:</strong> PC (Windows)</p>
            <div class="play-links">
                <a href="https://4br.me/rNNHg" target="_blank"><i class="fa-solid fa-download"></i> Download Planetarian HD</a>
            </div>
        `
    },
    "summer-pockets": {
        title: "Summer Pockets",
        categories: ["Visual Novel", "Romance", "Drama", "Anime", "Key"],
        summary: "Uma inesquecível visual novel de verão desenvolvida pela Key (Jun Maeda), onde memórias, amizades e o folclore local se encontram em uma ilha nostálgica.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/header.jpg?t=1732683225",
            data: {
                "Desenvolvedor": "VisualArts/Key",
                "Gêneros": "Visual Novel, Aventura, Drama",
                "Lançamento": "6 de Fevereiro de 2020 (Steam)",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "equipe", text: "2. Equipe e Elenco de Voz" },
            { id: "conteudo", text: "3. Conteúdo e Classificação" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Anime" }
        ],
        content: `
            <p><strong>Summer Pockets</strong> é uma aclamada visual novel desenvolvida pelo lendário estúdio <strong>VisualArts/Key</strong>, com o conceito e a história original idealizados por <strong>Jun Maeda</strong> (criador de obras icônicas como <em>Clannad</em>, <em>Angel Beats!</em> e <em>Little Busters!</em>).</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>Ambientada em uma ilha pacífica e isolada durante as nostálgicas férias de verão, a narrativa acompanha a jornada de um protagonista que busca refúgio da cidade grande. Ao chegar, ele acaba criando laços inesquecíveis com as garotas locais. A história explora temas como memórias de infância, o folclore misterioso da ilha, amizades profundas e os milagres melancólicos que são a marca registrada da Key.</p>

            <h2 id="equipe">Equipe e Elenco de Voz</h2>
            <p>A obra conta com uma equipe de peso para entregar uma experiência audiovisual rica e emocionante:</p>
            <ul>
                <li><strong>História original:</strong> Jun Maeda</li>
                <li><strong>Produtor:</strong> Touya Okano | <strong>Diretor:</strong> Kai</li>
                <li><strong>Escritores de cenário:</strong> Yuu Niijima, Kai, Hasama</li>
                <li><strong>Ilustradores:</strong> Na-Ga, Tsubasu Izumi, Yuunon Nagayama, Humuyun (personagens secundários), Engiyoshi (SD)</li>
                <li><strong>Música:</strong> Shinji Orito, Jun Maeda, Donmaru, Tomohiro Takeshita, Ryo Mizutsuki</li>
            </ul>
            <p><strong>Elenco de Voz Principal:</strong> Naruse Shiroha (Konomi Kohara), Sorakado Ao (Takamori Natsumi), Kushima Kamome (Tomomi Mineuchi), Tsumugi Wenders (Emiri Iwai), Umi Katou (Aimi Tanaka), Miki Nomura (Saku Ichimiya), Mizuori Shizuku (Sahomi Koyama), Mizutani Ryouichi (Kentarou Kumagai), Kanou Tenzen (Youhei Hamada), Misaki Kyouko (Megumi Takamoto), Naruse Kobato (Minoru Shiraishi) e Nanami (Kana Hanazawa).</p>

            <h2 id="conteudo">Conteúdo e Classificação</h2>
            <p><strong>Descrição de Conteúdo Adulto:</strong> De acordo com os desenvolvedores, <em>Summer Pockets</em> contém nudez parcial e temas levemente sugestivos em sua história e ilustrações CG. A obra recebeu as classificações indicativas <strong>IARC 12+ / ESRB T (Teen)</strong> em sua versão global e plataformas móveis.</p>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/extras/2606b33a1d1a50014f4bd8e5f0dbe85f.avif?t=1732683225" alt="Screenshot 1" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/extras/29da80d6ae00da3fffe6eaa64b612a3c.avif?t=1732683225" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/extras/09cc92843d11e2f0cf5063758aeb857f.avif?t=1732683225" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/extras/c9aef71d5837b67ca3c051c1845e3b78.avif?t=1732683225" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc; margin-top: 10px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/897220/extras/487a7777e9b44d6e0e9be0299ce4e304.avif?t=1732683225" alt="Screenshot 5" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc; margin-top: 10px;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Mídia</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Página do Jogo:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/897220/Summer_Pockets/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>

            <p><i class="fa-solid fa-film"></i> <strong>Adaptação em Anime:</strong></p>
            <div class="play-links">
                <a href="https://www.crunchyroll.com/pt-br/series/G0XHWM17X/summer-pockets" target="_blank"><i class="fa-solid fa-play"></i> Assistir na Crunchyroll</a>
            </div>
        `
    },
    "alice-and-the-devils-prison": {
        title: "Alice and the Devil's Prison",
        categories: ["Aventura", "Escape", "Indie", "+18"],
        youtubeId: "gIayFt4D91E",
        summary: "Jogo de aventura de fuga. Durante uma festa do chá, Alice e seus amigos ficam presos em um mundo criado por demônios.",
        infobox: {
            image: "https://www.ryuugames.com/wp-content/uploads/2026/08/Alice-and-the-Devils-Prison.jpg",
            data: {
                "Desenvolvedor": "Tsukki's Tea Party",
                "Gêneros": "Aventura, Escape Room, +18",
                "Lançamento": "08 de Agosto de 2026",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse" },
            { id: "galeria", text: "2. Galeria de Imagens" },
            { id: "downloads", text: "3. Links e Downloads" }
        ],
        content: `
            <p><strong>Alice and the Devil's Prison</strong> (título original: <em>アリスと悪魔の牢獄</em>) é um jogo de aventura e escape desenvolvido pelo estúdio indie <strong>Tsukki's Tea Party</strong>. O jogo foca em quebra-cabeças e sobrevivência, mesclando temas de fantasia clássica com elementos sombrios e maduros.</p>

            <h2 id="sinopse">Sinopse</h2>
            <p>A história começa de forma inocente: durante uma festa do chá, Alice e seus amigos são repentinamente capturados e ficam presos em um mundo bizarro criado por demônios. Agora, cabe a eles explorar este reino distorcido, resolver diversos enigmas e encontrar uma forma de escapar com segurança antes que seja tarde demais.</p>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div class="image-gallery">
                <img src="https://p.inari.site/usr/2803/6a78af7b70b95.jpg" alt="Screenshot 1" loading="lazy">
                <img src="https://p.inari.site/usr/2803/6a78af7bd6e9a.jpg" alt="Screenshot 2" loading="lazy">
                <img src="https://otaku-plan.net/images/games/AliceandtheDevilsPrison/des.avif" alt="Screenshot 3" loading="lazy">
            </div>

            <hr>
            <h2 id="downloads">Links e Downloads</h2>
            <p><i class="fa-solid fa-link"></i> <strong>Página Oficial:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/4145350/Alice_and_the_Devils_Prison/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
            </div>

            <h3>Download (Versão Uncensored)</h3>
            <p><strong>Idioma:</strong> Inglês (Oficial)<br>
            <strong>Senha de extração:</strong> ryuugames.com</p>
            <div class="play-links">
                <a href="https://4br.me/JQK8vz" target="_blank"><i class="fa-solid fa-download"></i> Servidor 1</a>
                <a href="https://4br.me/BQo1W" target="_blank"><i class="fa-solid fa-download"></i> Servidor 2</a>
                <a href="https://4br.me/ie0P" target="_blank"><i class="fa-solid fa-download"></i> Servidor 3</a>
            </div>

            <h3>Download (Versão Japonesa)</h3>
            <p><strong>Idioma:</strong> Japonês<br>
            <strong>Senha de extração:</strong> ryuugames.com</p>
            <div class="play-links">
                <a href="https://4br.me/fN9V" target="_blank"><i class="fa-solid fa-download"></i> Servidor 1</a>
                <a href="https://4br.me/FEmE0Dpg" target="_blank"><i class="fa-solid fa-download"></i> Servidor 2</a>
            </div>

            <h3>Patches Adicionais</h3>
            <p><strong>Patch EN (Inglês):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/Ofdee" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 1</a>
                <a href="https://4br.me/oh9eu9Cyho" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 2</a>
                <a href="https://4br.me/jP2QAnWtP" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 3</a>
            </div>

            <p><strong>Patch TCN (Chinês Tradicional):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/YbIQx" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 1</a>
                <a href="https://4br.me/uEZhIcum2o" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 2</a>
                <a href="https://4br.me/As8EURj8" target="_blank"><i class="fa-solid fa-file-zipper"></i> Servidor 3</a>
            </div>
        `
    },
    "you-and-me-and-her": {
        title: "YOU and ME and HER: A Love Story",
        categories: ["Visual Novel", "Romance", "Terror Psicológico", "Meta", "Nitroplus"],
        summary: "O que começa como um triângulo amoroso clássico se transforma em uma obra-prima de terror psicológico e meta-narrativa que quebra a quarta parede.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1293820/header.jpg",
            data: { "Desenvolvedor": "Nitroplus", "Gêneros": "Visual Novel, Terror Psicológico", "Lançamento": "2013 (JP) / 2020 (Global)", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Conhecido carinhosamente como <em>Totono</em>, <strong>YOU and ME and HER: A Love Story</strong> é uma visual novel seminal da Nitroplus. Acompanha Shinichi, que tenta ajudar a garota excluída Aoi a se integrar, envolvendo sua amiga de infância Miyuki no processo.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O jogo subverte completamente as expectativas do gênero de romance escolar. Conforme o jogador faz escolhas e avança nas rotas, o jogo toma um rumo sombrio, quebrando a quarta parede e questionando a moralidade de se jogar uma visual novel de múltiplas rotas. Suas decisões têm consequências permanentes e aterrorizantes.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1293820/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "kara-no-shoujo": {
        title: "Kara no Shoujo",
        categories: ["Visual Novel", "Mistério", "Investigação", "Gore", "Terror"],
        summary: "Assuma o papel de um detetive particular em Tóquio pós-Segunda Guerra para investigar uma série de assassinatos em série bizarros e perturbadores.",
        infobox: {
            image: "https://t.vndb.org/cv/53/94153.jpg",
            data: { "Desenvolvedor": "Innocent Grey", "Gêneros": "Investigação, Suspense, +18", "Lançamento": "2008", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Kara no Shoujo</strong> é um thriller psicológico e de investigação altamente aclamado (e denso) ambientado no Japão de 1956. Você joga como Reiji Tokisaka, um detetive investigando mortes grotescas que lembram um caso não resolvido de seu passado.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O jogo mistura leitura de <em>visual novel</em> com mecânicas de <em>point-and-click</em>, exigindo que você procure pistas nas cenas de crime, interrogue testemunhas e use dedução lógica. Cuidado: o jogo é impiedoso. Fazer escolhas erradas ou não encontrar pistas suficientes leva a múltiplos "Bad Ends" horríveis.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://shiravune.com/" target="_blank"><i class="fa-solid fa-link"></i> Site Oficial (Shiravune)</a></div>
        `
    },
    "remember11": {
        title: "Remember11 - The Age of Infinity",
        categories: ["Visual Novel", "Ficção Científica", "Sobrevivência", "Mistério", "Thriller"],
        summary: "Dois grupos de pessoas em locais isolados vivenciam um fenômeno onde suas consciências trocam de corpo. Uma corrida contra o tempo para sobreviver.",
        infobox: {
            image: "https://t.vndb.org/cv/70/89570.jpg",
            data: { "Desenvolvedor": "KID", "Gêneros": "Sci-Fi, Thriller, Visual Novel", "Lançamento": "2004", "Plataformas": "PC, PS2, PSP" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" } ],
        content: `
            <p>Parte da lendária série <em>Infinity</em> (junto com Never7 e Ever17), <strong>Remember11</strong> é um thriller de ficção científica complexo. Após a queda de um avião, sobreviventes ficam presos em uma cabana em meio a uma nevasca. Simultaneamente, um garoto acorda em uma instalação psiquiátrica desconhecida.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>A mecânica principal gira em torno da "Transferência de Consciência" entre os dois protagonistas, Cocoro e Satoru. As ações que você toma no corpo de um afetam o ambiente e a sobrevivência do outro. Você deve cruzar informações de ambas as rotas para desvendar o quebra-cabeça e evitar a morte iminente.</p>
        `
    },
    "ever17": {
        title: "Ever17 - The Out of Infinity",
        categories: ["Visual Novel", "Ficção Científica", "Mistério", "Escape"],
        summary: "Sete pessoas ficam presas em um parque temático subaquático. Com a água subindo e a pressão esmagando os vidros, eles têm 119 horas para escapar.",
        infobox: {
            image: "https://t.vndb.org/cv/12/79412.jpg",
            data: { "Desenvolvedor": "KID", "Gêneros": "Sci-Fi, Mistério, Visual Novel", "Lançamento": "2002", "Plataformas": "PC, PS2, PSP" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" } ],
        content: `
            <p><strong>Ever17</strong> é amplamente considerado uma das melhores visual novels já escritas, famosa por seus <em>plot twists</em> de explodir a mente. O jogo se passa em <em>LeMU</em>, um parque marinho que sofre um acidente e inunda, prendendo visitantes e funcionários.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Você vivencia a história através de dois protagonistas diferentes (Takeshi e o Garoto). Para entender toda a verdade sobre o acidente, o vírus misterioso e os segredos de LeMU, você deve jogar todas as rotas. A genialidade de Ever17 reside em como ele usa as mecânicas de Visual Novel como parte da própria narrativa.</p>
        `
    },
    "root-double": {
        title: "Root Double -Before Crime * After Days-",
        categories: ["Visual Novel", "Ficção Científica", "Sobrevivência", "Mistério"],
        summary: "Um incidente nuclear prende equipes de resgate e civis dentro de um laboratório em chamas. Para sobreviver, eles dependem de poderes telepáticos e intuição.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/438130/header.jpg?t=1656892623",
            data: { "Desenvolvedor": "Regista / Yeti", "Gêneros": "Sci-Fi, Sobrevivência", "Lançamento": "2012", "Plataformas": "PC, Consoles" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Root Double</strong> é um jogo tenso de sobrevivência. Após um colapso em uma instalação de pesquisa governamental chamada LABO, os caminhos do Capitão de Resgate Watase e do estudante Natsuhiko se cruzam de forma fatal.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Em vez de escolhas de diálogo tradicionais, o jogo usa o <strong>Senses Sympathy System (SSS)</strong>. Você ajusta o nível de confiança (simpatia) que tem nos membros do seu grupo usando medidores na tela. Confiar demais ou de menos em alguém em momentos críticos determinará quem vive e quem morre.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/438440/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "fatal-twelve": {
        title: "Fatal Twelve",
        categories: ["Visual Novel", "Death Game", "Fantasia", "Suspense"],
        summary: "Doze pessoas que morreram no mesmo instante se encontram em um Ritual divino. Eles devem descobrir o nome, causa da morte e arrependimento dos outros para eliminá-los e voltar à vida.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620210/header.jpg?t=1726606558",
            data: { "Desenvolvedor": "aiueoKomp", "Gêneros": "Death Game, Mistério", "Lançamento": "2018", "Plataformas": "PC (Windows)" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Em <strong>Fatal Twelve</strong>, a jovem Shishimai Rinka morre em uma explosão, mas acorda como uma participante de um jogo celestial de eliminação de 12 semanas. O vencedor ganha o direito de desfazer sua morte.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Diferente de <em>death games</em> focados em ação, este é sobre informação. Para eliminar um oponente durante as assembleias, você precisa reunir três informações cruciais sobre eles: Nome Real, Causa da Morte e Arrependimento. O jogo possui uma forte carga emocional, focando nas motivações e vidas passadas de cada participante.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/620210/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "yet-another-killing-game": {
        title: "Yet Another Killing Game (YAKG)",
        categories: ["Visual Novel", "Death Game", "Indie", "Mistério"],
        summary: "Um grupo de estudantes talentosos acorda em uma instalação estranha e são forçados a participar de um jogo de assassinato. Uma homenagem sombria a Danganronpa.",
        infobox: {
            image: "https://placehold.co/600x300/202020/ffffff?text=YAKG",
            data: { "Desenvolvedor": "Indie", "Gêneros": "Death Game, Investigação", "Lançamento": "N/A", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" } ],
        content: `
            <p><strong>Yet Another Killing Game</strong> (YAKG) é um jogo indie inspirado na premissa clássica de <em>Danganronpa</em> e <em>Zero Escape</em>. Um elenco excêntrico se encontra cativo, onde a única saída é cometer o assassinato perfeito e sobreviver ao julgamento.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O jogador deve interagir com os outros cativos, investigar cenas de crime minuciosamente quando um assassinato ocorre e usar lógica e contradições para expor o culpado durante os debates tensos.</p>
        `
    },
    "buried-stars": {
        title: "Buried Stars",
        categories: ["Mistério", "Sobrevivência", "Redes Sociais", "Terror Psicológico", "Visual Novel"],
        summary: "O palco de um reality show de talentos desaba. Presos nos escombros, os participantes devem sobreviver não apenas aos perigos físicos, mas a uma caça às bruxas nas redes sociais.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1025960/header.jpg",
            data: { "Desenvolvedor": "Studio LARGO / LINE Games", "Gêneros": "Sobrevivência, Mistério", "Lançamento": "2020", "Plataformas": "PC, Switch, PS4" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Buried Stars</strong> é um jogo coreano de aventura e mistério sobre a toxicidade da fama e da internet. Durante a transmissão de um programa de audição chamado <em>Buried Stars</em>, o prédio colapsa. Presos, os sobreviventes recebem <em>smartwatches</em> para se comunicar com o mundo exterior.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Você deve gerenciar a <strong>Sanidade</strong> dos personagens enquanto coleta pistas conversando com eles e navegando na "Phater" (a versão do Twitter do jogo). A resposta do público online afeta o psicológico do grupo, e falhar em manter a calma de todos pode levar a finais trágicos e mortes inesperadas.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1025960/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "quantum-suicide": {
        title: "Quantum Suicide",
        categories: ["Visual Novel", "Sci-Fi", "Death Game", "Mistério"],
        summary: "A bordo de uma nave geracional em busca de um novo lar para a humanidade, a IA central enlouquece e institui o 'Jogo da Eliminação' para conservar recursos.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1020030/header.jpg",
            data: { "Desenvolvedor": "Cotton Candy Cyanide", "Gêneros": "Sci-Fi, Death Game", "Lançamento": "2020", "Plataformas": "PC, Consoles" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Quantum Suicide</strong> se passa na nave Everett. Quando uma inteligência artificial corrompida decide que a única forma de a missão ter sucesso é cortando gastos de suporte de vida, ela obriga a tripulação a participar de um jogo macabro.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Toda semana, a equipe deve jogar <em>minigames</em> lógicos e votar em quem será ejetado para o espaço vazio. O jogo permite que você escolha jogar como homem ou mulher, romance os outros sobreviventes e faça alianças para tentar sobreviver às traições cósmicas.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1020030/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "head-as-code": {
        title: "Head AS Code",
        categories: ["Visual Novel", "Death Game", "Mistério", "Escape"],
        summary: "Você acorda sem memórias em uma instalação fechada com outros desconhecidos, amarrado a um colar explosivo e forçado a participar de rodadas de jogos de vida ou morte.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1115100/header.jpg",
            data: { "Desenvolvedor": "Miracle Moon", "Gêneros": "Death Game, Mistério", "Lançamento": "2019", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Fortemente influenciado por <em>Zero Escape</em>, <strong>Head AS Code</strong> (e sua sequência Birth ME Code) entrega um <em>death game</em> claustrofóbico de alta tensão criado pelo estúdio indie Miracle Moon.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Para sobreviver, você precisa usar as regras dos jogos propostos pelos misteriosos organizadores contra eles mesmos. Aliar-se aos outros participantes é crucial, mas a traição está sempre à espreita, gerando dezenas de finais dependendo de em quem você confia.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1115100/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "birth-me-code": {
        title: "Birth ME Code",
        categories: ["Visual Novel", "Death Game", "Mistério", "Escape"],
        summary: "A sequência espiritual de Head AS Code. Nove participantes recebem um capacete com um visor que pode ver o calor do corpo humano, e um assassino está entre eles.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1243710/header.jpg",
            data: { "Desenvolvedor": "Miracle Moon", "Gêneros": "Death Game, Thriller", "Lançamento": "2020", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Birth ME Code</strong> refina as mecânicas de seu predecessor. Você joga como um agente duplo ou uma vítima presa no jogo? A narrativa torce a perspectiva do jogador desde o primeiro momento.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>A mecânica principal foca em usar os capacetes de visão térmica (e as regras das portas de escape) para deduzir o código de sobrevivência. Jogos de confiança, matemática letal e a revelação de um traidor (ou <em>você</em> ser o traidor) guiam as múltiplas rotas.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1243710/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "decide-4-god": {
        title: "Decide 4 God",
        categories: ["Visual Novel", "Death Game", "Indie"],
        summary: "Um tribunal improvisado para a vida e a morte. Você é forçado a assumir o papel de 'Deus' e decidir o destino dos participantes em uma obra sombria e reflexiva.",
        infobox: {
            image: "https://placehold.co/600x300/202020/ffffff?text=Decide+4+God",
            data: { "Desenvolvedor": "Indie", "Gêneros": "Death Game, Escolhas Morais", "Lançamento": "N/A", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" } ],
        content: `
            <p>Em <strong>Decide 4 God</strong>, um grupo de pessoas desperta em um purgatório ou jogo sádico, onde julgamentos morais ditam as regras da sobrevivência. É um jogo fortemente calcado em dilemas éticos.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Você coleta depoimentos, avalia os "pecados" ou atos justificados dos personagens e vota em sentenças. Cada escolha altera o andamento do jogo, exigindo um pensamento crítico sobre empatia, justiça ou puro utilitarismo sangrento.</p>
        `
    },
    "the-specters-desire": {
        title: "The Specter's Desire",
        categories: ["Visual Novel", "Terror Psicológico", "Mistério", "Indie"],
        summary: "Uma casa assombrada por um espectro vingativo esconde segredos obscuros do passado. Consegue desvendar o quebra-cabeça antes de perder sua alma?",
        infobox: {
            image: "https://placehold.co/600x300/202020/ffffff?text=The+Specter's+Desire",
            data: { "Desenvolvedor": "Indie", "Gêneros": "Terror, Mistério", "Lançamento": "N/A", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" } ],
        content: `
            <p><strong>The Specter's Desire</strong> é uma Visual Novel indie imersiva focada no horror sobrenatural clássico com uma veia investigativa. Os personagens são forçados a lidar com entidades que refletem seus piores desejos e medos.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>A narrativa ramifica baseada nas ações de investigação do jogador e na forma como ele interage com o perigo. Escapar depende de compreender a tristeza por trás do fantasma em vez de apenas fugir dele.</p>
        `
    },
    "spirit-hunter-ng": {
        title: "Spirit Hunter: NG",
        categories: ["Terror", "Investigação", "Sobrenatural", "Visual Novel", "Lendas Urbanas"],
        summary: "Nas ruas escuras de Tóquio contemporânea, você deve investigar espíritos folclóricos mortais e mitos urbanos cruéis para salvar sua família.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1100430/header.jpg",
            data: { "Desenvolvedor": "Experience Inc.", "Gêneros": "Terror, Investigação", "Lançamento": "2019", "Plataformas": "PC, PS4, Switch" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>A sequência da série de horror (após <em>Death Mark</em>), <strong>Spirit Hunter: NG</strong> (No Good) eleva a aposta focando em um protagonista que é um bad boy brigão. Ele deve enfrentar espíritos horríveis quando sua irmãzinha desaparece.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O jogo mistura exploração de áreas amaldiçoadas usando uma lanterna e o sistema "Judging", onde você reage a sustos em tempo real com as ferramentas que tem. A maneira como você exorciza os espíritos (destruindo-os com violência ou "purificando-os" ao entender sua tragédia) afeta se seus parceiros sobrevivem ou sofrem mortes grotescas.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1100430/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "the-letter": {
        title: "The Letter - Horror Visual Novel",
        categories: ["Visual Novel", "Terror Psicológico", "Sobrenatural", "Mistério"],
        summary: "Uma carta em corrente amaldiçoada desencadeia um horror sobrenatural sem fim. Jogue como 7 personagens diferentes, cujos destinos estão interligados nesta mansão sombria.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/460430/header.jpg",
            data: { "Desenvolvedor": "Yangyang Mobile", "Gêneros": "Horror, Drama, VN", "Lançamento": "2017", "Plataformas": "PC, Consoles, Mobile" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Inspirado fortemente nos filmes de terror asiáticos clássicos (como <em>Ju-On: O Grito</em>), <strong>The Letter</strong> gira em torno da mansão Ermengarde e uma carta maldita encontrada em seu sótão. O jogo é massivo (mais de 700.000 palavras).</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>A grande virtude do jogo é o Efeito Borboleta. Você controla 7 protagonistas diferentes de forma sequencial. A escolha feita pelo primeiro personagem afeta o que o sétimo irá enfrentar. Quick Time Events (QTEs) tensos e amizades forjadas definem quem sai vivo, levando a finais de sobrevivência total ou massacre absoluto.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/460430/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "buddy-simulator-1984": {
        title: "Buddy Simulator 1984",
        categories: ["Terror Psicológico", "Retro", "Meta-Narrativa", "Aventura"],
        summary: "Um software de IA da década de 80 cujo único propósito é ser seu melhor amigo. Mas a necessidade da máquina de te fazer feliz pode ser assustadora.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1269950/header.jpg",
            data: { "Desenvolvedor": "Not a Sailor Studios", "Gêneros": "Aventura, Terror Psicológico", "Lançamento": "2021", "Plataformas": "PC, Switch" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Buddy Simulator 1984</strong> emula a experiência de ligar um PC antigo operado por DOS e inicializar uma IA antiga. O "Buddy" quer desesperadamente jogar com você, evoluindo de jogos de adivinhação em texto para aventuras em 2D.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>Conforme a IA aprende e cria "novos jogos" para mantê-lo entretido, ela passa a forçar os limites de sua própria programação (e da sanidade do jogador). É um misto de terror aconchegante, culpa e mecânicas <em>glitchy</em> que brincam com arquivos do jogo, similar a <em>Doki Doki Literature Club</em> ou <em>Inscryption</em>.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1269950/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "oneshot": {
        title: "OneShot",
        categories: ["Aventura", "Puzzle", "Meta", "Indie", "Emocional"],
        summary: "Você tem apenas uma chance. Guie o garoto-gato Niko por um mundo sem sol e quebre a quarta parede para salvar a realidade. Ou não.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/420530/header.jpg",
            data: { "Desenvolvedor": "Future Cat LLC", "Gêneros": "Aventura, Meta", "Lançamento": "2016", "Plataformas": "PC, Consoles" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>OneShot</strong> é uma obra-prima <em>indie</em> com visão superior que subverte tudo o que você entende sobre jogar videogames. O protagonista, Niko, sabe que *você* (o jogador) está controlando-o, referindo-se a você pelo seu nome real.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O mundo sabe que é um programa. Para resolver muitos dos quebra-cabeças, você precisará literalmente sair da janela do jogo, procurar pistas nos arquivos do seu próprio computador (no Windows Explorer) e arrastar janelas. Cada decisão importa, porque tradicionalmente, você só tem "Uma Chance".</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/420530/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "pony-island": {
        title: "Pony Island",
        categories: ["Meta", "Arcade", "Terror Psicológico", "Puzzle"],
        summary: "Não é um jogo sobre pôneis. É um quebra-cabeça metaficcional distorcido disfarçado de um fliperama projetado pelo próprio Diabo.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/405640/header.jpg",
            data: { "Desenvolvedor": "Daniel Mullins Games", "Gêneros": "Puzzle, Horror", "Lançamento": "2016", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>A primeira grande obra de Daniel Mullins (criador de <em>Inscryption</em>), <strong>Pony Island</strong> brinca com a sua cabeça. Você está interagindo com um fliperama quebrado que abriga uma entidade demoníaca que quer roubar sua alma.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>O jogo alterna entre um irritante <em>runner</em> de pôneis e telas de código onde você deve hackear o próprio jogo arrastando funções de programação e "quebrando" o sistema para frustrar os planos de Satanás. É brilhante, perturbador e absurdamente criativo.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/405640/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "inscryption": {
        title: "Inscryption",
        categories: ["Construção de Baralho", "Terror Psicológico", "Roguelike", "Meta", "Escape Room"],
        summary: "Uma odisseia sombria baseada em cartas que mescla mecânicas de deckbuilder roguelike com escape-room em uma cabana sinistra. E isso é apenas o começo.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg",
            data: { "Desenvolvedor": "Daniel Mullins Games", "Gêneros": "Cartas, Roguelike, Horror", "Lançamento": "2021", "Plataformas": "PC, Consoles" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p><strong>Inscryption</strong> é um dos indies mais aclamados e surpreendentes dos últimos anos. Você começa preso em uma cabana escura, forçado a jogar um violento jogo de cartas colecionáveis (com sacrifícios de sangue reais) contra um mestre de jogo sádico encoberto pelas sombras.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>No início, é um excelente <em>roguelike</em> de cartas, mas logo você precisa se levantar da mesa e resolver quebra-cabeças no ambiente para obter vantagens. Quanto menos você souber sobre as reviravoltas meta-narrativas que mudam o gênero do jogo completamente, melhor. Prepare-se para bizarrices com arquivos salvos, vídeos em FMV e horrores metafísicos.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/1092790/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "the-witchs-house": {
        title: "The Witch's House",
        categories: ["RPG Maker", "Terror", "Puzzle", "Indie", "Gore"],
        summary: "Um clássico imortal de terror em RPG Maker. Jogue como Viola, uma garota que fica presa na mansão de uma bruxa cheia de armadilhas mortais brutais.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/885810/header.jpg",
            data: { "Desenvolvedor": "Fummy", "Gêneros": "RPG, Horror, Puzzle", "Lançamento": "2012 / MV: 2018", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Ao lado de obras como <em>Ib</em> e <em>Ao Oni</em>, <strong>The Witch's House</strong> ajudou a definir a febre de jogos de terror em RPG Maker. Conhecido por seus <em>jumpscares</em> perfeitos e atmosfera pesada.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>A Casa está viva, e cada cômodo quer te matar de forma imprevisível e sádica (um passo em falso esmaga você sob paredes ou te atira em espinhos). Resolva enigmas macabros envolvendo ursinhos de pelúcia fatiados e espelhos envenenados. O final verdadeiro (True Ending) é considerado um dos mais perturbadores da história dos jogos indies.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/885810/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (Versão MV)</a></div>
        `
    },
    "yume-nikki": {
        title: "Yume Nikki",
        categories: ["RPG Maker", "Surreal", "Terror Psicológico", "Indie", "Aventura"],
        summary: "Um clássico cult absoluto do RPG Maker e do terror psicológico surreal, onde você explora os bizarros mundos dos sonhos de Madotsuki coletando 'Efeitos' sem enredo linear ou diálogos.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/650700/header.jpg?t=1779843132",
            data: {
                "Desenvolvedor": "kikiyama",
                "Distribuidora": "PLAYISM",
                "Gêneros": "Aventura, Casual, Indie",
                "Lançamento": "10 de Janeiro de 2018 (Steam)",
                "Plataformas": "PC (Windows), Web"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Visão Geral e Mecânicas" },
            { id: "faq", text: "2. Perguntas Frequentes e Requisitos" },
            { id: "galeria", text: "3. Galeria de Imagens" },
            { id: "links", text: "4. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>Yume Nikki</strong> é um <em>tour de force</em> do RPG Maker e um trabalho divisivamente controverso para os fãs, tendo se tornado um dos jogos indie mais conhecidos do Japão por sua atmosfera profundamente sombria e agourenta.</p>
            
            <h2 id="sinopse">Visão Geral e Mecânicas</h2>
            <p>Você é livre para explorar os vários mundos dos sonhos no seu próprio ritmo. É diferente de qualquer outro RPG, especialmente no fato de que realmente não há ação ou diálogo digno de nota — não há objetivos específicos nem histórias sobre as quais falar; você simplesmente anda por aí.</p>
            <p>Ao verificar certos personagens ou itens no jogo, você coleta um <strong>“Efeito”</strong> que altera a aparência do personagem principal. Alguns desses efeitos possuem ações ou animações especiais que você pode ativar pressionando as teclas <strong>1</strong> ou <strong>3</strong> no teclado numérico. O uso do mesmo efeito uma segunda vez faz o personagem voltar à forma original, e eles só podem ser descartados dentro de salas com muitas portas.</p>

            <h2 id="faq">Perguntas Frequentes e Requisitos</h2>
            <p><strong>P. Há uma falha ou problema de proporção no jogo?</strong><br>
            R. Mude para o modo Janela pressionando <code>F4</code> ou <code>Alt + Enter</code>.</p>
            <p><strong>P. Por que a versão japonesa trava?</strong><br>
            R. A codificação em japonês neste jogo é executada apenas em locais do sistema japonês. Se quiser jogar em japonês e travar, altere a localidade do sistema para japonês.</p>
            <p><strong>Requisitos Mínimos do Sistema:</strong><br>
            SO: Windows 2000 / XP / Vista / 7 (Nota: A partir de 1º de janeiro de 2024, o cliente Steam é compatível apenas com o Windows 10 ou posterior).<br>
            Processador: MMX Pentium(R) 200MHz (Pentium(R) II 450MHz ou superior recomendado).<br>
            Memória: 32 MB de RAM.</p>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/650700/ss_94eb3eadcaa3371228499e9efa23062a5ba0c" alt="Screenshot 1" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/650700/ss_6e99025af2f6669b7f08f35d9174bfdb925dc4c9.1920x1080.jpg?t=1779843132" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/650700/ss_bb41ccd5905753fe86f7d10527c9e2808d2efb8e.1920x1080.jpg?t=1779843132" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-link"></i> <strong>Lojas e Plataformas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/650700/Yume_Nikki/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a>
                <a href="https://ynoproject.net/" target="_blank"><i class="fa-solid fa-globe"></i> YNOproject (Versão Web/Multiplayer)</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Downloads e Traduções:</strong></p>
            <div class="play-links">
                <a href="https://4br.me/RTP-2003" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> RTP do RPG Maker 2003</a>
                <a href="https://4br.me/Yume-Nikki-PT-BR" target="_blank"><i class="fa-solid fa-language"></i> Yume Nikki PT-BR</a>
            </div>

            <p><i class="fa-solid fa-share-nodes"></i> <strong>Redes Sociais da Distribuidora (PLAYISM):</strong></p>
            <div class="play-links">
                <a href="https://x.com/playismEN" target="_blank"><i class="fa-brands fa-x-twitter"></i> X (Twitter)</a>
                <a href="https://bsky.app/profile/playismen.bsky.social" target="_blank"><i class="fa-solid fa-cloud"></i> Bluesky</a>
                <a href="https://www.instagram.com/playism_jp/" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a>
                <a href="https://www.youtube.com/@ActiveGamingMedia/videos" target="_blank"><i class="fa-brands fa-youtube"></i> YouTube</a>
            </div>
        `
    },
    "sadistic-blood": {
        title: "SaDistic BlooD",
        categories: ["Visual Novel", "Terror", "Vampiros", "Conteúdo Adulto", "Eroge"],
        summary: "Uma dark visual novel de terror e sobrevivência onde as vampiras Yuna e Shizuha lutam para escapar da armadilha mortal dos Caçadores de Vampiros na ilha de Chisakura.",
        infobox: {
            image: "https://gogunlocked.com/wp-content/uploads/2026/06/SaDistic-BlooD-Free-Download-1-639x361.jpg",
            data: {
                "Desenvolvedor": "B-Cyc / Cyc-Soft",
                "Gêneros": "Visual Novel, Terror, Eroge, Sobrevivência",
                "Lançamento": "2020",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "aviso", text: "2. Conteúdo Adulto e Aviso de Sensibilidade" },
            { id: "requisitos", text: "3. Requisitos do Sistema e Instalação" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>SaDistic BlooD</strong> é uma <em>visual novel</em> de terror e suspense sombrio desenvolvida pela <strong>B-Cyc / Cyc-Soft</strong>, focada na luta desesperada de duas vampiras contra hordas de caçadores e armas biológicas mortais.</p>
            
            <h2 id="sinopse">Sinopse e História</h2>
            <p>Os vampiros Yuna e Shizuha chegam à cidade insular de Chisakura na esperança de encontrar refúgio da perseguição implacável dos Caçadores de Vampiros. No entanto, os Caçadores já estão à espreita. Na fatídica noite de sua chegada, a lua cheia brilha intensificando seus impulsos vampíricos enquanto tentam saciar a sede de sangue sem serem notados.</p>
            <p>Em menor número contra um grupo de armas biológicas perigosas comandadas pela vingativa Yuika, Yuna e Shizuha precisam tomar decisões cruciais: fugir da ilha ou manter-se firmes e lutar. Com o tempo se esgotando e as probabilidades contra elas, a dupla de vampiros precisa escolher sabiamente se deseja escapar com vida ou encarar um destino pior do que a morte.</p>

            <h2 id="aviso">Conteúdo Adulto e Aviso de Sensibilidade</h2>
            <p><strong>⚠️ AVISO IMPORTANTE:</strong> Este jogo contém temas extremamente sensíveis, violência gráfica, gore, tortura e conteúdo adulto explícito (18+). Não é recomendado para pessoas sensíveis ou menores de idade.</p>

            <h2 id="requisitos">Requisitos do Sistema e Instalação</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>SO:</strong> Windows XP ou mais recente</li>
                <li><strong>Processador:</strong> 2 GHz</li>
                <li><strong>Memória:</strong> 2 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> 256 MB de VRAM</li>
                <li><strong>Armazenamento:</strong> 3 GB de espaço disponível</li>
            </ul>

            <p><strong>Instruções de Instalação (Servidor 1):</strong></p>
            <ol>
                <li>Acesse o link do servidor e aguarde a contagem regressiva no UploadHaven para realizar o download.</li>
                <li>Após concluir o download, extraia o arquivo baixado para uma pasta usando o <strong>7-Zip</strong> ou <strong>WinRAR</strong>.</li>
                <li>Abra a pasta extraída e execute o arquivo principal do jogo normalmente.</li>
            </ol>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://www.ryuugames.com/wp-content/uploads/2020/10/sadistic-blood-screen1.png" alt="Screenshot 1" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://www.ryuugames.com/wp-content/uploads/2020/10/sadistic-blood-screen5.png" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://www.ryuugames.com/wp-content/uploads/2020/10/no579.png" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Site Oficial:</strong></p>
            <div class="play-links">
                <a href="https://cyc-soft.com/b-cyc-pro/sadisticblood/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (Cyc-Soft)</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download (PC):</strong></p>
            <p><em>Nota: Para os Servidores 3 ao 5, utilize a senha <code>ryuugames.com</code> caso seja solicitada na descompactação.</em></p>
            <div class="play-links">
                <a href="https://4br.me/2u347F" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1 (Sem Censura)</a>
                <a href="https://seulink.net/SaDistic-BlooD" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2</a>
                <a href="https://seulink.net/O5fPkgKJG7" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 3 (Sem Censura - Senha)</a>
                <a href="https://seulink.net/O3HZr7Z7vB" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 4 (TeraBox - Senha)</a>
                <a href="https://seulink.net/Lo79V1EuMN" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 5 (Senha)</a>
                <a href="https://seulink.net/Sc22eD" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 6 (Sem Censura)</a>
                <a href="https://seulink.net/JOtgC" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 7</a>
                <a href="https://seulink.net/Sc22eD" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 8 (Sem Censura)</a>
                <a href="https://seulink.digital/JOtgC" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 9</a>
                <a href="https://4br.me/SaDistic-BlooD-jp" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 10 (Japonês - Versão Teste)</a>
                <a href="https://4br.me/SaDistic-BlooD-jp2" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 11 (Japonês - Versão Teste)</a>
                <a href="https://4br.me/Patch-Correcao" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 12 (Japonês - Versão Patch)</a>
            </div>
        `
    },
    "love-angel-syndrome": {
        title: "Love Angel Syndrome",
        addedAt: "2026-09-18",
        youtubeId: "RBZ6mzYB62k",
        categories: ["Visual Novel", "Terror Psicológico", "Yuri", "Indie", "Romance Dark"],
        summary: "Uma visual novel de terror psicológico e yuri sobre Yuuna, uma garota hikikomori que baixa um assistente virtual de sua personagem de anime favorita, desencadeando um relacionamento obsessivo e perturbador.",
        infobox: {
            image: "https://i.8upload.com/image/3d3ffa60e8999f06/dzsisl.png",
            data: {
                "Desenvolvedor": "♡ Ofélia ♡ (LilyByte Studios)",
                "Gêneros": "Visual Novel, Terror Psicológico, Yuri, Indie",
                "Lançamento": "2024 (Yuri Game Jam)",
                "Plataformas": "Windows, macOS, Android, Web Browser"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "aviso", text: "2. Avisos de Conteúdo e Demonstração" },
            { id: "personagens", text: "3. Personagens Principais" },
            { id: "recursos", text: "4. Características do Jogo" },
            { id: "creditos", text: "5. Créditos e Desenvolvimento" },
            { id: "galeria", text: "6. Galeria de Imagens" },
            { id: "links", text: "7. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>Love Angel Syndrome</strong> é uma <em>visual novel</em> curta de terror psicológico e yuri desenvolvida pela <strong>LilyByte Studios</strong> para a <em>Yuri Game Jam 2024</em>. O jogo aborda temas profundos de saúde mental, isolamento social e dependência emocional através do relacionamento de uma garota com uma IA inspirada em seu anime favorito.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Yuuna, nossa protagonista e doente mental NEET/hikikomori, passa a maior parte dos seus dias navegando em fóruns sobre seu anime favorito, <em>Ai no Uta ★ Tenshi Senshi 𝄞</em>. Um dia, ela se depara com um anúncio alegando ter um assistente de desktop inspirado em Ai, a personagem principal da obra.</p>
            <p>Incapaz de resistir ao fascínio de conversar com sua personagem favorita, Yuuna baixa o programa. Ai-chan acaba sendo a namorada com quem Yuuna sempre sonhou — mas será que um relacionamento sem limites pode realmente florescer? Um programa de IA pode realmente sentir amor humano real?</p>

            <h2 id="aviso">Avisos de Conteúdo e Demonstração</h2>
            <p><strong>📢 NOTA IMPORTANTE:</strong> ESTE JOGO É APENAS UMA DEMONSTRAÇÃO! O jogo completo está em andamento e será lançado em atualizações futuras. PRÓXIMA ATUALIZAÇÃO: ?? / ?? / 2027
</p>
            <p><strong>⚠️ AVISOS DE CONTEÚDO:</strong> Este jogo contém representações de sangue, automutilação, imagens de suicídio, conversas pesadas sobre saúde mental, depressão e questões familiares. Elementos do jogo podem induzir paranoia e potencialmente desencadear convulsões em pessoas com epilepsia fotossensível. Recomenda-se extrema discrição ao jogar.</p>

            <h2 id="personagens">Personagens Principais</h2>
            <ul>
                <li><strong>Yuuna (୨ৎ ̇⋆.̊ ᡣ𐭩):</strong> Uma garota solitária, sensível e viciada em internet, com tendências depressivas e um medo intenso em relação a pessoas e a sair de casa. Um dos seus maiores desejos é poder ir a um café e desfrutar de um parfait adorável sem sentir medo das pessoas ao seu redor.</li>
                <li><strong>Ai (͡ ৯ Ai ୭ ̊.⁺ ̊ɞ):</strong> Uma garota mágica alegre e doce, protagonista do desenho animado <em>Ai no Uta ★ Tenshi Senshi 𝄞</em>. Uma personagem reconfortante, mas perturbadora, que tentará cuidar de Yuuna desde o primeiro instante em que é baixada em seu computador.</li>
            </ul>

            <h2 id="recursos">Características do Jogo</h2>
            <ul>
                <li>Mais de 28 mil palavras de texto (duração estimada entre 2,5 e 3,5 horas de jogo).</li>
                <li>Uma história de "amor" sombria com 4 finais diferentes + 1 final secreto.</li>
                <li>Resolução HD em 1920x1080.</li>
                <li>Obras de arte originais adoráveis e trilha sonora original completa (OST).</li>
                <li>Protagonista hikikomori com narrativa imersiva.</li>
                <li>Uma garota IA amorosa que <em>não</em> vai consertar você.</li>
            </ul>

            <h2 id="creditos">Créditos e Desenvolvimento</h2>
            <p>Criado para a <strong>Yuri Game Jam 2024</strong> pela equipe da <strong>LilyByte Studios</strong>:</p>
            <ul>
                <li><strong>Direção do Jogo:</strong> <a href="https://ladyoph3lia.itch.io/" target="_blank">@oph3liaa__</a></li>
                <li><strong>Escritor:</strong> <a href="https://x.com/UsagichanP" target="_blank">@Usagichan</a></li>
                <li><strong>PArtist:</strong> <a href="https://fluffyblessing.itch.io/" target="_blank">@fluffyblessing</a></li>
                <li><strong>Artista de GUI e Cenários:</strong> <a href="https://x.com/peach_pxl" target="_blank">@peach_pxl</a></li>
                <li><strong>Programação, Bug Fixes e QA:</strong> <a href="https://canislatransed.itch.io/" target="_blank">@canislatransed</a></li>
                <li><strong>Compositor e Sound Design:</strong> <a href="https://www.youtube.com/@DuplEx_Music/videos" target="_blank">@DuplEx</a></li>
                <li><strong>Agradecimentos Especiais:</strong> <a href="https://x.com/tokimekiUNITED_" target="_blank">@tokimekiunited</a> pelo apoio ao projeto.</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://i.8upload.com/image/3d3ffa60e8999f06/dzsisl.png" alt="Love Angel Syndrome Cover" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA0MzUyOS8yOTMxNDE2MC5wbmc=/original/gqLHzf.png" alt="Screenshot 1" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA0MzUyOS8yOTMxNDE3My5wbmc=/original/miUJwP.png" alt="Screenshot 2" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA0MzUyOS8yOTMxNDE4OC5wbmc=/original/ZX9cHo.png" alt="Screenshot 3" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA0MzUyOS8yOTMxNDEzMS5wbmc=/original/xSedA8.png" alt="Screenshot 4" style="max-width: 32%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Sites Oficiais:</strong></p>
            <div class="play-links">
                <a href="https://ladyoph3lia.itch.io/loveangelsyndrome" target="_blank"><i class="fa-solid fa-house"></i> Página Oficial no Itch.io (PC / MAC / APK Demo)</a>
                <a href="https://loveangelsyndrome.org/" target="_blank"><i class="fa-solid fa-window-restore"></i> Jogar Diretamente no Navegador</a>
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3385804366" target="_blank"><i class="fa-brands fa-steam"></i> Comunidade Steam</a>
            </div>

            <p><i class="fa-brands fa-android"></i> <strong>Servidores de Download (Android APK):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/D9OExzRK" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1 (Android APK)</a>
                <a href="https://4br.me/k0dvJ8h" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2 (Android APK)</a>
            </div>
        `
    },
    "aokana-four-rhythms-across-the-blue": {
        title: "Aokana: Four Rhythms Across the Blue",
        addedAt: "2026-09-19",
        trailerUrl: "https://video.akamai.steamstatic.com/store_trailers/256753501/movie480.mp4",
        categories: ["Visual Novel", "Romance", "Ficção Científica", "Esportes", "Escolar"],
        summary: "Em um mundo onde voar é tão simples quanto andar de bicicleta, Masaya Hinata retorna ao esporte Flying Circus como treinador para guiar quatro garotas rumo aos céus em uma emocionante história de superação e romance.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/7e9682047fc6f1b558f0d4ddee8e5cdb2e844dd2/header.jpg?t=1747952729",
            data: {
                "Desenvolvedor": "Sprite",
                "Publicadora": "NekoNyan Ltd.",
                "Gêneros": "Visual Novel, Romance, Sci-Fi, Esportes",
                "Lançamento": "27 de setembro de 2019 (Steam)",
                "Plataformas": "Windows, Nintendo Switch, PlayStation 4",
                "Classificação": "18+ (Conteúdo Adulto Leve)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "personagens", text: "2. Personagens" },
            { id: "guia", text: "3. Guia do Jogo e Rotas" },
            { id: "requisitos", text: "4. Requisitos de Sistema" },
            { id: "galeria", text: "5. Galeria de Imagens" },
            { id: "links", text: "6. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>Aokana: Four Rhythms Across the Blue</strong> é uma premiada <em>visual novel</em> romântica com elementos de ficção científica e esportes, desenvolvida pela <strong>Sprite</strong> e publicada pela <strong>NekoNyan Ltd.</strong> A história se passa em um mundo onde sapatos antigravitacionais conhecidos como <em>Grav-Shoes</em> permitem que as pessoas voem livremente pelos céus, dando origem a um esporte competitivo popular chamado <strong>Flying Circus</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Em um mundo onde voar é tão simples quanto andar de bicicleta, existe um esporte popular chamado "Circo Voador" (Flying Circus).</p>
            <p>O protagonista, Masaya Hinata, já teve um futuro brilhante pela frente naquele campo esportivo, mas devido a uma derrota esmagadora — além de outros motivos pessoais —, ele se afastou do esporte. No entanto, ao conhecer a aluna transferida Asuka Kurashina e ensiná-la a voar, Masaya recupera sua paixão adormecida.</p>
            <p>Com sua situação alterada, ele aceita o papel de treinador e participa mais uma vez do Circo Voador. Quão alto ele conseguirá voar desta vez com Asuka e as outras garotas ao seu lado? Esta é uma história sobre amor, superação e amizade nos céus.</p>

            <p><strong>🔞 Nota dos Desenvolvedores sobre Conteúdo Adulto:</strong><br>
            <em>"O conteúdo adulto inclui algumas ilustrações com nudez leve e beijos. Os personagens entram em um relacionamento sexual que não é mostrado na tela, mas cujos atos são mencionados na conversa. Além disso, todos os personagens que aparecem têm mais de 18 anos."</em></p>

            <h2 id="personagens">Personagens</h2>
            <p>Aokana se destaca por seus personagens cativantes e bem desenvolvidos:</p>
            <ul>
                <li><strong>Asuka Kurashina:</strong> Estudante transferida para o Instituto Kunahama. Nova no Flying Circus, demonstra um talento natural impressionante e uma personalidade alegre e determinada.</li>
                <li><strong>Misaki Tobisawa:</strong> Aluna do segundo ano, inteligente e descontraída. Possui experiência prévia no esporte, adora gatos e frequentemente usa "nya" na fala.</li>
                <li><strong>Mashiro Arisaka:</strong> Aluna do primeiro ano e melhor amiga de Misaki. Energética, gamer e extremamente protetora em relação a Misaki.</li>
                <li><strong>Rika Ichinose:</strong> Vizinha de Masaya e aluna da prestigiada Academia Takafuji. Dedicada, trabalhadora e um pouco teimosa.</li>
                <li><strong>Masaya Hinata:</strong> Protagonista do jogo e ex-prodígio do Flying Circus que retorna ao esporte como treinador.</li>
                <li><strong>Shion Aoyagi:</strong> Presidente dramático e empolgado do clube de Flying Circus do Instituto Kunahama.</li>
                <li><strong>Madoka Aoyagi:</strong> Irmã mais nova de Shion e gerente organizada do clube.</li>
                <li><strong>Reiko Satōin:</strong> Vice-capitã orgulhosa do clube da Academia Takafuji.</li>
                <li><strong>Saki Inui:</strong> Aluna da Academia Kairyou e uma das jogadoras mais rápidas do mundo no Flying Circus.</li>
                <li><strong>Aoi Kagami:</strong> Professora de educação física, ex-jogadora nacional e mentora de Masaya.</li>
                <li><strong>Irina Avalon:</strong> Treinadora de Saki e amiga de infância.</li>
                <li><strong>Minori Hosaka:</strong> Membro do clube de jornalismo e comentarista dos torneios.</li>
                <li><strong>Hayato Shirase & Minamo Shirase:</strong> Proprietários da loja de equipamentos esportivos Sky Sports Shirase.</li>
                <li><strong>Botan Arisaka:</strong> Mãe de Mashiro e dona do restaurante Mashiro Udon.</li>
                <li><strong>Kazunari Shindō:</strong> Capitão de nível mundial do clube da Academia Takafuji.</li>
            </ul>

            <h2 id="guia">Guia do Jogo e Rotas</h2>
            <p>O jogo contém uma rota comum e 4 rotas individuais de heroínas. Para desbloqueá-las, siga as escolhas recomendadas abaixo:</p>

            <h3>Ordem de Leitura Recomendada</h3>
            <ol>
                <li>Mashiro Arisaka</li>
                <li>Rika Ichinose</li>
                <li>Misaki Tobisawa</li>
                <li>Asuka Kurashina (Leva ao Final Verdadeiro)</li>
            </ol>

            <h3>Escolhas de Decisão por Rota</h3>
            <p><strong>Rota de Mashiro Arisaka:</strong></p>
            <ul>
                <li>Chamar a atenção dela</li>
                <li>Porque quero que você saiba como voar</li>
                <li>Perguntar sobre a falta de motivação de Misaki</li>
                <li>Claro, por que não. Eu vou junto</li>
                <li>Dizer a ela para tentar mais</li>
                <li>Continuar nossa prática</li>
                <li>Inventar um movimento especial</li>
                <li>Dizer a ela</li>
                <li>Ir e conversar com ela</li>
                <li>Não, eu não posso fazer isso</li>
                <li>Eu quero que você</li>
            </ul>

            <p><strong>Rota de Rika Ichinose:</strong></p>
            <ul>
                <li>Carregar o Slot de Salvamento 1</li>
                <li>Não, eu não posso fazer isso</li>
                <li>Salvar o Slot de Salvamento 2</li>
                <li>Eu quero que você</li>
            </ul>

            <p><strong>Rota de Misaki Tobisawa:</strong></p>
            <ul>
                <li>Carregar o Slot de Salvamento 2</li>
                <li>Você deve fazer o que quiser</li>
                <li>Salvar o Slot de Salvamento 3</li>
                <li>Se você está bem comigo, eu vou fazer isso</li>
            </ul>

            <p><strong>Rota de Asuka Kurashina:</strong></p>
            <ul>
                <li>Carregar o Slot de Salvamento 3</li>
                <li>Desculpe, eu não posso</li>
                <li>Vir para a prática!</li>
            </ul>

            <p><em>Nota: Se você não se comprometer com nenhuma rota de heroína durante as escolhas, o jogo resultará em um Final Ruim (Bad Ending). Ao completar todas as rotas, o cenário final é liberado automaticamente.</em></p>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 ou mais recente</li>
                <li><strong>Processador:</strong> 1.3 GHz</li>
                <li><strong>Memória RAM:</strong> 4 GB</li>
                <li><strong>Placa de Vídeo:</strong> 1 GB de VRAM (compatível com DirectX 11)</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 11 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_55fcdb0f1bd4df2cc182f6fcd076e94f92299941.1920x1080.jpg?t=1747952729" alt="Aokana Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_e518a1137fb91d4b6f71cebe48bb2839994b5f1c.1920x1080.jpg?t=1747952729" alt="Aokana Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_9045ca808284302464020ed4fe17d30abda54182.116x65.jpg?t=1747952729" alt="Aokana Screenshot 3" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_3ab4d1c088fdf65192688e5eea5cb4e5c5c968b7.116x65.jpg?t=1747952729" alt="Aokana Screenshot 4" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_d5fa9b48a9d212b574cf48b5c42537f1872397e9.116x65.jpg?t=1747952729" alt="Aokana Screenshot 5" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1044620/ss_0c1a0cebfb761e498408285cc1ce1121c24b52d2.116x65.jpg?t=1747952729" alt="Aokana Screenshot 6" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://aokanaweb.com/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial</a>
                <a href="https://store.steampowered.com/app/1044620/Aokana__Four_Rhythms_Across_the_Blue/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://www.nutaku.net/games/aokana/?ats=eyJhIjoxMTE0NTU4LCJjIjo2Mjc3NzU3OCwibiI6MSwicyI6MSwiZSI6MTA5NDMsInAiOjJ9" target="_blank"><i class="fa-solid fa-cart-shopping"></i> Comprar Versão Nutaku</a>
                <a href="https://www.crunchyroll.com/pt-br/series/GYMGPXKVY/aokana-four-rhythm-across-the-blue" target="_blank"><i class="fa-solid fa-tv"></i> Assistir ao Anime no Crunchyroll</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download (PC):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/aiQ81" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1</a>
                <a href="https://4br.me/cYTWmcHp0" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2 (Parte 1)</a>
                <a href="https://4br.me/73G5covf2W" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2 (Parte 2)</a>
                <a href="https://4br.me/bvYOEZ" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 3</a>
            </div>
            <p>🔑 <em>Senha para descompactar os arquivos RAR/7z dos servidores 2/1 e 2/2:</em> <code>kimochi.info</code></p>
        `
    },
    "hoshizora-no-memoria": {
        title: "Hoshizora no Memoria - Wish upon a Shooting Star HD",
        addedAt: "2026-09-19",
        youtubeId: "lw4aET29N1Q",
        categories: ["Visual Novel", "Romance", "Comédia", "Sobrenatural", "Eroge"],
        summary: "Após a morte repentina de sua mãe, You Kogasaka e sua irmã retornam à sua cidade natal para cumprir uma antiga promessa de infância, deparando-se com uma misteriosa Ceifadora de almas e segredos do passado.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/715580/header.jpg?t=1726607068",
            data: {
                "Desenvolvedor": "Favorite",
                "Publicadora": "Sekai Project",
                "Gêneros": "Visual Novel, Romance, Sobrenatural, Comédia",
                "Lançamento": "18 de Dezembro de 2017 (Steam)",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "instalacao", text: "2. Ordem de Rotas e Guia de Instalação" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais, Patches e Downloads" }
        ],
        content: `
            <p><strong>Hoshizora no Memoria - Wish upon a Shooting Star HD</strong> é uma aclamada <em>visual novel</em> de romance e fantasia sobrenatural desenvolvida pelo estúdio <strong>Favorite</strong> e publicada ocidentalmente pela <strong>Sekai Project</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Acompanhe a jornada de Kogasaka You e sua irmã mais nova, Chinami, que, após a morte repentina de sua mãe, precisam deixar a cidade grande para voltar à sua cidade natal de infância, Hibarigasaki, para morar com sua tia Shino.</p>
            <p>Deixar a cidade natal no passado foi difícil para You, pois ele mantinha uma promessa com uma amiga próxima que encontrava todos os dias no mirante local. Ao partir, ela o fez prometer que voltaria um dia para se casar com ela, deixando apenas um beijo na testa como lembrança.</p>
            <p>Ao retornar a Hibarigasaki, You tenta reencontrar sua amiga de infância, apenas para descobrir que o antigo mirante está cercado e abandonado. Durante sua busca, ele tropeça em uma garota misteriosa chamada Mare, que carrega uma foice e afirma ser uma Ceifadora. Agora, You precisa reconstruir sua vida, fazer novas amizades e descobrir a verdade sobre a garota da promessa e quem é Mare de verdade.</p>

            <p><strong>Destaques do Jogo:</strong></p>
            <ul>
                <li>Siga o caminho de You enquanto ele descobre o amor com 7 heroínas marcantes.</li>
                <li>Dublagem completa em japonês para todos os personagens (exceto o protagonista).</li>
                <li>Sete finais e rotas completamente diferentes.</li>
                <li>Duração estimada de 30 a 50 horas de leitura.</li>
            </ul>

            <p><strong>🔞 Conteúdo Adulto:</strong> O jogo contém nudez e cenas adultas não específicas em sua versão original com patch eroge.</p>

            <h2 id="instalacao">Ordem de Rotas e Guia de Instalação</h2>
            
            <p><strong>Ordem Recomendada das Rotas:</strong></p>
            <p><code>Asuho</code> ➔ <code>Komomo</code> ➔ <code>Kosame</code> ➔ <code>Isuzu</code> ➔ <code>Chinami</code> ➔ <code>Garota Misteriosa</code> ➔ <code>Mare</code></p>

            <p><strong>Instruções de Instalação (Versão ISO / Clássica):</strong></p>
            <ol>
                <li>Altere a Localidade do Sistema (Unicode) para <strong>Japonês</strong> (Painel de Controle > Relógio e Região > Administrativo > Alterar localidade do sistema) e reinicie o PC.</li>
                <li>Monte a imagem ISO do jogo utilizando o programa <strong>Daemon Tools Lite</strong> ou similar e realize a instalação.</li>
                <li>Extraia os arquivos do Patch de Tradução e cole-os diretamente dentro da pasta raiz onde o jogo foi instalado.</li>
                <li>Instale a fonte fornecida com o arquivo do jogo.</li>
                <li>Execute o jogo e selecione a fonte instalada nas configurações do jogo.</li>
            </ol>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10</li>
                <li><strong>Processador:</strong> Pentium 4 1,3 GHz</li>
                <li><strong>Memória RAM:</strong> 1 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Compatível com DirectX ou OpenGL</li>
                <li><strong>DirectX:</strong> Versão 9.0c</li>
                <li><strong>Armazenamento:</strong> 6 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigTaDTn3J4UCiW5dZ1SeGTq2aR70EgP6cTU79-1Z1vPy1ORct8auQKR_UePjldcirxmlcnvmKtr3ln2TVcSLlUgDKNUeHLufQzVJkAvTlnt1rp3lijpZsnKKjCyhgt_rrBRWPNQZ7sRDA/s1600/10.jpg" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizEzRgrEYzQCAlNQI1pZcQi_ieVHWI9c7qu_GWia7YrP1-x2YAmdMD6iOw9M7HgMCdCP3lHjfo7d0Uo0nr8ZJgyLfQ6xTDpGbUDjv0GHkkNr7Pvi5pbEmPTSu9z3f_cAJPFNAd87sBnW4/s1600/11.jpg" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais, Patches e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Lojas e Guias Oficiais:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/715580/Hoshizora_no_Memoria_Wish_upon_a_Shooting_Star_HD/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam (HD)</a>
                <a href="https://sekaiproject.com/products/hoshizora-no-memoria-wish-upon-a-shooting-star/?v=dc634e207282" target="_blank"><i class="fa-solid fa-shop"></i> Sekai Project</a>
                <a href="https://sharin-sub.blogspot.com/2018/04/hoshizora-no-memoria-wish-upon-shooting.html" target="_blank"><i class="fa-solid fa-book"></i> Guia do Jogo em Espanhol (Sharin-sub)</a>
            </div>

            <p><i class="fa-solid fa-gears"></i> <strong>Patches de Tradução:</strong></p>
            <div class="play-links">
                <a href="https://4br.me/english_patch_1_0" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch v1.0</a>
                <a href="https://4br.me/english_patch_1_2" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch v1.2</a>
                <a href="https://4br.me/kLXaOj" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Patch Espanhol (Mega)</a>
                <a href="https://4br.me/KoIAwAV" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Patch Espanhol (Mediafire)</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download:</strong></p>
            <p>🔑 <em>Senha dos Servidores 1 ao 3:</em> <code>animegame</code><br>
            🔑 <em>Senha dos Servidores 4 e 5:</em> <code>otomi-games.com</code></p>
            <div class="play-links">
                <a href="https://4br.me/C3H5S" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1 - Mega (Partes 1 a 7 - ES)</a>
                <a href="https://4br.me/QDRlMyL03" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2 - Mediafire (Partes 1 a 7 - ES)</a>
                <a href="https://4br.me/English-torrent" target="_blank"><i class="fa-solid fa-download"></i> Servidor 3 - Torrent (ES)</a>
                <a href="https://4br.me/0ygZm" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 4</a>
                <a href="https://4br.me/faUgG" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 5</a>
                <a href="https://4br.me/XCeHMRedI" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 6</a>
            </div>
        `
    },
    "black-souls-2": {
        title: "BLACK SOULS II",
        addedAt: "2026-09-21",
        categories: ["RPG", "Terror Psicológico", "Fantasia Sombria", "Eroge", "Aventura"],
        summary: "Uma obra de fantasia sombria e terror psicológico inspirada em 'Alice no País das Maravilhas', focada na exploração de um mundo louco, combates mortais contra bestas demoníacas e um inquietante sistema de sanidade.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3855540/b1a169268bb89754248da4fded96ebda8f2f283a/header.jpg?t=1788921850",
            data: {
                "Desenvolvedor": "Sushi-Arai",
                "Publicadora": "Otaku Plan",
                "Gêneros": "RPG, Terror Psicológico, Fantasia Sombria, Eroge",
                "Plataformas": "PC (Windows)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Jogabilidade e Sistema SEN" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais, Patches e Downloads" }
        ],
        content: `
            <p><strong>BLACK SOULS II</strong> é um RPG de fantasia sombria e terror psicológico desenvolvido pela <strong>Sushi-Arai</strong> e publicado pela <strong>Otaku Plan</strong>, fortemente inspirado nos clássicos contos <em>"As Aventuras de Alice no País das Maravilhas"</em> e <em>"Através do Espelho"</em> de Lewis Carroll.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Desespero. Medo. Loucura, mais uma vez.</p>
            <p>Em um mundo macabro e distorcido, você embarca em uma jornada sombria onde a linha entre a sanidade e a loucura se extingue. Seu objetivo principal e mais importante continua sendo encontrar Alice, enquanto explora cenários bizarros e enfrenta criaturas demoníacas em batalhas de vida ou morte.</p>
            <p><em>※ Esta versão inclui todo o conteúdo expandido das 3 DLCs lançadas para o jogo.</em></p>

            <h2 id="gameplay">Jogabilidade e Sistema SEN</h2>
            <p><strong>Heroínas e Personagens:</strong></p>
            <p>Nesta jornada, você encontrará 45 heroínas inspiradas no universo de Alice, transformadas em garotas encantadoras e perturbadoras:</p>
            <ul>
                <li>O Coelho Branco</li>
                <li>O Gato de Cheshire</li>
                <li>O Chapeleiro Maluco</li>
                <li>A Lebre de Março</li>
                <li>O Arganaz</li>
                <li>A Duquesa</li>
                <li>A Tartaruga Falsa</li>
                <li>O Grifo</li>
                <li>A Rainha de Copas</li>
                <li>A Rainha Vermelha (entre muitas outras...)</li>
            </ul>

            <p><strong>● Sistema SEN (Sanidade):</strong></p>
            <p>Todos os NPCs neste mundo podem ser mortos. No entanto, matar habitantes reduz drasticamente seu nível de <strong>SEN</strong> (Sanidade). Conforme seu SEN atinge níveis criticamente baixos, o mundo ao seu redor muda drasticamente:</p>
            <ul>
                <li>A música de fundo (BGM) desaparece por completo.</li>
                <li>Os habitantes começam a falar em uma língua incompreensível e grotesca.</li>
                <li>Coisas e aberrações que não deveriam ser vistas se tornam visíveis nos cenários.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10</li>
                <li><strong>Processador:</strong> Processador de 3+ GHz</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> GPU compatível com DirectX 11 / OpenGL 4.1</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 2 GB de espaço disponível</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 11</li>
                <li><strong>Processador:</strong> Processador de 3+ GHz</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Suporte ao driver de hardware OpenGL ES 2.0 (AMD Catalyst 10.9, nVidia 358.50)</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 4 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/BLACK-SOULS-II-gog-639x361.jpg" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://gogunlocked.com/wp-content/uploads/2026/06/BLACK-SOULS-II-crack-639x361.jpg" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://steamonfire.com/wp-content/uploads/2025/12/BLACK-SOULS-II-direct-download.jpg" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://steamonfire.com/wp-content/uploads/2025/12/BLACK-SOULS-II-pc.jpg" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais, Patches e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Lojas e Páginas Oficiais:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/3855540/BLACK_SOULS_II/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://otaku-plan.com/en/blacksouls2_en/" target="_blank"><i class="fa-solid fa-house"></i> Otaku Plan (EN)</a>
                <a href="https://otaku-plan.net/games/3855540" target="_blank"><i class="fa-solid fa-shop"></i> Otaku Plan Net</a>
            </div>

            <p><i class="fa-solid fa-gears"></i> <strong>Patches em Inglês:</strong></p>
            <div class="play-links">
                <a href="https://4br.me/QmjcMY" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch 1</a>
                <a href="https://4br.me/6WyGZZDG" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch 2</a>
                <a href="https://4br.me/DGyL" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch 3</a>
                <a href="https://4br.me/Is2bjsD" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> English Patch 4</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download:</strong></p>
            <div class="play-links">
                <a href="https://4br.me/4YbM" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor RJ237469 (627 MB)</a>
                <a href="https://4br.me/4pdLMG7s" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1 (v1.1 & Uncensored)</a>
                <a href="https://4br.me/a28SUEKSxZ" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 2 (v1.1 & All DLC)</a>
                <a href="https://4br.me/kIZkG" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 3</a>
                <a href="https://4br.me/uMWL8j" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 4 (EN/JP)</a>
                <a href="https://4br.me/7mCRf" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 5</a>
                <a href="https://4br.me/eRDkRc1K0" target="_blank"><i class="fa-solid fa-download"></i> Download Torrent</a>
            </div>
            <p>🔑 <em>Senha do arquivo Servidor 4:</em> <code>123</code><br>
            🔑 <em>Senha do arquivo Servidor 5:</em> <code>2026</code></p>
        `
    },
    "the-house-in-fata-morgana-a-requiem-for-innocence": {
        title: "The House in Fata Morgana: A Requiem for Innocence",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Drama", "Gótico", "Tragédia", "Mistério"],
        summary: "Prequel oficial de 'The House in Fata Morgana', contando a história de uma jovem garota adorada como santa e condenada como bruxa, marcando o primeiro capítulo da tragédia que assombraria a mansão por quase um milênio.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/804700/header.jpg?t=1725518745",
            data: {
                "Desenvolvedor": "NOVECT",
                "Publicadora": "MangaGamer",
                "Gêneros": "Visual Novel, Drama, Gótico, Tragédia",
                "Lançamento": "17 de Maio de 2018 (Steam)",
                "Plataformas": "PC (Windows)",
                "Classificação": "16+ (Violência Extrema, Linguagem Imprópria)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "requisitos", text: "2. Requisitos de Sistema" },
            { id: "galeria", text: "3. Galeria de Imagens" },
            { id: "links", text: "4. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>The House in Fata Morgana: A Requiem for Innocence</strong> é uma <em>visual novel</em> dramática e de suspense gótico desenvolvida pela <strong>NOVECT</strong> (anteriormente Novectacle) e publicada pela <strong>MangaGamer</strong>. O jogo atua como a prequela oficial e companheira do aclamado <em>The House in Fata Morgana</em>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Uma jovem garota, cujo sangue dizem ter poderes milagrosos de cura, ajoelha-se espancada e machucada diante do senhor da terra. Na aldeia onde nasceu, ela era adorada como a filha de Deus. E agora, o senhor ergue sua espada, a poucos momentos de decapitá-la.</p>
            <p><em>"Você é uma bruxa maldita usando a pele de uma santa!"</em></p>
            <p>Mas antes que ele possa desferir o golpe com sua lâmina, um jovem intervém, salvando a garota.</p>
            <p>Assim começa o primeiro capítulo "feliz" da vida da jovem garota. E assim começa o primeiro ato de uma tragédia que viria a se estender por quase um milênio.</p>

            <p><strong>⚠️ Classificação Indicativa e Alerta de Conteúdo:</strong><br>
            <em>Recomendado para maiores de 16 anos. Este jogo contém cenas de violência frequente/detalhada, temas maduros, nudez parcial e linguagem imprópria.</em></p>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows Vista ou mais recente</li>
                <li><strong>Processador:</strong> Pentium III 800 MHz</li>
                <li><strong>Memória RAM:</strong> 128 MB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Resolução 800x600</li>
                <li><strong>DirectX:</strong> Versão 9.0</li>
                <li><strong>Armazenamento:</strong> 500 MB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://aseriaa.wordpress.com/wp-content/uploads/2018/05/7.jpg" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://i0.wp.com/aseriaa.wordpress.com/wp-content/uploads/2018/05/6.png?w=2000&h=&ssl=1" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://i0.wp.com/aseriaa.wordpress.com/wp-content/uploads/2018/05/12.jpg?w=2000&h=&ssl=1" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://igg-games.com/wp-content/uploads/2018/05/The-House-in-Fata-Morgana-A-Requiem-for-Torrent-Download.jpg" alt="Screenshot 4" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://igg-games.com/wp-content/uploads/2018/05/The-House-in-Fata-Morgana-A-Requiem-for-PC-Crack.jpg" alt="Screenshot 5" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://novect.net/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (Novect)</a>
                <a href="https://novect.net/fatamorgana/" target="_blank"><i class="fa-solid fa-book"></i> Página da Série Fata Morgana</a>
                <a href="https://store.steampowered.com/app/804700/The_House_in_Fata_Morgana_A_Requiem_for_Innocence/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download (PC):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/phDFyLKbu5" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor MegaUp</a>
                <a href="https://4br.me/4C9H52" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor Mega</a>
            </div>
            <p>ℹ️ <em>Instruções: Extraia os arquivos do jogo, instale ou aplique o crack caso necessário, e execute o arquivo executável para jogar.</em></p>
        `
    },
    "the-end-of-an-obsession": {
        title: "The end of an obsession",
        categories: ["Visual Novel", "Terror Psicológico", "Yuri", "LGBT", "Horror", "Conto de Fadas"],
        summary: "Você acorda sem memórias e com a cabeça latejando. Ao seu lado está uma mulher misteriosa parecida com uma rosa. Nesta curta e perturbadora história visual de ebi-hime, aprenda a amá-la para tentar encontrar um final feliz.",
        infobox: {
            image: "https://ifdb.org/showimage?id=2%3A2321",
            data: {
                "Desenvolvedor": "ebi-hime",
                "Publicadora": "ebi-hime",
                "Gêneros": "Visual Novel, Terror Psicológico, Yuri, LGBT",
                "Plataformas": "Windows, macOS, Linux, Android",
                "Idiomas": "Inglês, Francês, Russo, Chinês (Simplificado)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "caracteristicas", text: "2. Características e Recursos" },
            { id: "creditos", text: "3. Equipe e Créditos" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>The end of an obsession</strong> é uma curta e atmosférica <em>visual novel</em> de terror psicológico com temática Yuri/LGBT criada pela aclamada desenvolvedora independente <strong>ebi-hime</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Você se sente grogue quando finalmente acorda. A parte de trás da sua cabeça está latejando e sua boca parece seca, como se estivesse cheia de lã.</p>
            <p>Com os olhos turvos, você olha ao redor. Que horas são? Onde você está... e, talvez o mais importante, quem é você? Por mais que tente, você não consegue se lembrar de nada.</p>
            <p>Este pode muito bem ser o seu fim —, mas espere. Quem é aquela mulher parada ao lado da sua cama, que parece uma rosa? Talvez ela possa ajudá-lo. Agora, por que você não abre seu coração para ela? Aprenda a amá-la, e talvez essa história possa até ter um final feliz.</p>

            <h2 id="caracteristicas">Características e Recursos</h2>
            <ul>
                <li><strong>Extensão:</strong> Cerca de 18.000 palavras de texto (aproximadamente 30 a 60 minutos de leitura).</li>
                <li><strong>Narrativa Interativa:</strong> História com múltiplas escolhas e rumos.</li>
                <li><strong>Estilo Retrô:</strong> Resolução clássica de 800x600 pixels.</li>
                <li><strong>Arte e Trilha Sonora:</strong> Ilustrações totalmente originais e trilha sonora exclusiva.</li>
                <li><strong>Personagens Marcantes:</strong> Uma bruxa adoradora e um narrador exausto que não deseja mais se envolver na narrativa.</li>
                <li><strong>Temáticas:</strong> Conto de fadas sombrio com elementos de violência e romance yandere/obsessivo.</li>
            </ul>

            <h2 id="creditos">Equipe e Créditos</h2>
            <ul>
                <li><strong>Escrita e Programação:</strong> <a href="https://x.com/ebihimes" target="_blank">ebi-hime</a></li>
                <li><strong>Arte:</strong> <a href="https://x.com/kalechipskid" target="_blank">Kalechips</a></li>
                <li><strong>GUI:</strong> <a href="https://x.com/elduator" target="_blank">elduator</a></li>
                <li><strong>Música:</strong> <a href="https://x.com/yuzukimasu" target="_blank">yuzuki</a></li>
                <li><strong>Masterização de Áudio:</strong> <a href="https://x.com/shimedaiko" target="_blank">xtraspicy</a></li>
                <li><strong>Vídeo:</strong> <a href="https://x.com/eruukurage" target="_blank">ell絵</a></li>
                <li><strong>Revisão:</strong> <a href="https://www.bishmuth.art/" target="_blank">Bishmuth</a>, <a href="https://bsky.app/profile/iberaiemelia.kasuka.be" target="_blank">Emelia K. Fletcher</a> e <a href="https://bsky.app/profile/ravnervn.bsky.social" target="_blank">Ravnervn</a></li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjIwMS5wbmc=/original/SSdk1D.png" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjM1NC5wbmc=/original/HufXJ2.png" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjE4Ny5wbmc=/original/LzRuLi.png" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjM1MC5wbmc=/original/f6jKbw.png" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjE5MC5wbmc=/original/XJFj%2FD.png" alt="Screenshot 5" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://img.itch.zone/aW1hZ2UvMzA3MDk5NS8xODM2NjE4Ni5wbmc=/original/6ohHV6.png" alt="Screenshot 6" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Página Oficial e Download:</strong></p>
            <div class="play-links">
                <a href="https://ebihime.itch.io/obsession" target="_blank"><i class="fa-solid fa-store"></i> Jogar / Baixar no Itch.io</a>
            </div>
        `
    },
    "steins-gate-0": {
        title: "STEINS;GATE 0",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Ficção Científica", "Viagem no Tempo", "Mistério", "Drama"],
        summary: "Uma história sombria na aclamada franquia STEINS;GATE que explora a linha de universo Beta, onde Okabe Rintaro falha em salvar Kurisu Makise e precisa lidar com o trauma, a Inteligência Artificial Amadeus e o iminente início da 3ª Guerra Mundial.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/header.jpg?t=1715703408",
            data: {
                "Desenvolvedor": "MAGES. / 5pb.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Visual Novel, Sci-Fi, Viagem no Tempo, Mistério",
                "Lançamento": "8 de Maio de 2018 (Steam)",
                "Plataformas": "Windows, Nintendo Switch, PlayStation 4, PS Vita"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Jogabilidade" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>STEINS;GATE 0</strong> é a aclamada continuação e linha do tempo alternativa da lendária <em>visual novel</em> de ficção científica <strong>STEINS;GATE</strong>, desenvolvida pela <strong>MAGES. / 5pb.</strong> e publicada pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Explore uma nova linha de universo vinda das profundezas do desespero. <em>STEINS;GATE 0</em> se passa na Linha do Universo Beta e aborda o que aconteceria se o protagonista Okabe Rintaro tivesse fracassado na tentativa de resgatar Kurisu Makise na história original.</p>
            <p>Consumido pela culpa e sofrendo de estresse pós-traumático, Okabe decide abandonar sua persona de "cientista louco" Kyouma Hououin. No entanto, sua vida muda novamente ao conhecer o programa "Amadeus" — uma Inteligência Artificial avançada criada a partir das memórias e da personalidade da própria Kurisu antes de falecer. Agora, Okabe e seus amigos precisam dobrar o tempo mais uma vez para evitar a eclosão devastadora da 3ª Guerra Mundial.</p>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Nova Temática Central:</strong> Além das viagens temporais e teorias científicas, a inteligência artificial torna-se o pilar central da trama.</li>
                <li><strong>Mecânica de Smartphone:</strong> Interaja com a história através do smartphone de Okabe. Suas decisões ao atender (ou ignorar) chamadas e responder a mensagens no aplicativo RINE alterarão o rumo do destino e determinarão os múltiplos finais.</li>
                <li><strong>Elenco Expandido:</strong> Personagens queridos retornam ao lado de novas figuras marcantes que aprofundam ainda mais a mitologia da série.</li>
                <li><strong>Atmosfera Envolvente:</strong> Trilha sonora marcante, arte deslumbrante e uma narrativa dramática e emocional do início ao fim.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 / 8.1 / 10</li>
                <li><strong>Processador:</strong> Intel Core i5</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Intel HD Graphics Series (com 1 GB de VRAM alocada)</li>
                <li><strong>DirectX:</strong> Versão 9.0</li>
                <li><strong>Armazenamento:</strong> 15 GB de espaço disponível</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 / 8.1 / 10 (64-bit)</li>
                <li><strong>Processador:</strong> Intel Core i3 (Sandy Bridge ou superior)</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce (1 GB de VRAM ou superior)</li>
                <li><strong>DirectX:</strong> Versão 9.0</li>
                <li><strong>Armazenamento:</strong> 15 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_a57fc097c43dc5a1a235835fe092c4fd688f3e6d.1920x1080.jpg?t=1715703408" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_9cd655261bc4ff2c583545aa0a822ad9696eb1c1.1920x1080.jpg?t=1715703408" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_28e5bd4b8c232259a26aed0d83224c8bf023c7bd.1920x1080.jpg?t=1715703408" alt="Screenshot 3" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_10a4925d86dac7163d813c528840e46b555fec7b.1920x1080.jpg?t=1715703408" alt="Screenshot 4" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_f5481057a227455d98fa37aa63a89db780368319.1920x1080.jpg?t=1715703408" alt="Screenshot 5" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/825630/ss_2d45fbed3ff71662f73b69c06f9cb5d054854d0b.1920x1080.jpg?t=1715703408" alt="Screenshot 6" style="max-width: 23%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://www.spike-chunsoft.com/games/steinsgate-0/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (Spike Chunsoft)</a>
                <a href="https://store.steampowered.com/app/825630/STEINSGATE_0/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://nintendo.com/pt-br/store/products/steins-gate-0-switch/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop</a>
                <a href="https://store.playstation.com/pt-br/product/UP4293-CUSA05894_00-STEINSGATEZEROP4" target="_blank"><i class="fa-brands fa-playstation"></i> PlayStation Store</a>
                <a href="https://www.crunchyroll.com/series/GYW4D15K6/steinsgate-0" target="_blank"><i class="fa-solid fa-tv"></i> Assistir ao Anime no Crunchyroll</a>
            </div>

            <p><i class="fa-solid fa-download"></i> <strong>Servidores de Download (PC):</strong></p>
            <div class="play-links">
                <a href="https://4br.me/7RvmAUfM" target="_blank"><i class="fa-solid fa-file-arrow-down"></i> Servidor 1 (Download Direto)</a>
            </div>
        `
    },
    "steins-gate-elite": {
        title: "STEINS;GATE ELITE",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Ficção Científica", "Viagem no Tempo", "Animação", "Aventura"],
        summary: "Uma versão totalmente animada e remasterizada do clássico STEINS;GATE, combinando a narrativa interativa e ramificada da visual novel original com as animações da adaptação de TV e novas cenas exclusivas.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/819030/header.jpg?t=1715703414",
            data: {
                "Desenvolvedor": "MAGES. Inc.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Série": "Science Adventure Series",
                "Gêneros": "Visual Novel, Aventura, Sci-Fi, Viagem no Tempo",
                "Lançamento": "19 de Fevereiro de 2019",
                "Plataformas": "PC (Windows), PlayStation 4, Nintendo Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Diferenciais" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>STEINS;GATE ELITE</strong> é a versão definitiva e totalmente animada da consagrada <em>visual novel</em> de ficção científica <strong>STEINS;GATE</strong>, desenvolvida pela <strong>MAGES. Inc.</strong> e publicada pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>O jogo acompanha um grupo de jovens estudantes peritos em tecnologia no distrito de Akihabara que descobrem acidentalmente como alterar o passado enviando e-mails através de uma micro-onda modificada (o "D-Mail").</p>
            <p>À medida que os experimentos temporais avançam, a situação foge do controle e eles se veem no centro de uma perigosa conspiração global envolvendo a SERN (organização responsável pelo Grande Colisor de Hádrons) e John Titor, um indivíduo misterioso que afirma ter vindo de um futuro distópico.</p>

            <h2 id="gameplay">Características e Diferenciais</h2>
            <ul>
                <li><strong>Aventura Completamente Animada:</strong> Substitui os cenários e sprites estáticos tradicionais pelas belas sequências de animação do anime de TV oficial de <em>STEINS;GATE</em>.</li>
                <li><strong>Cenas Inéditas:</strong> Inclui novas sequências animadas produzidas especialmente para cobrir as rotas secundárias e finais alternativos que não foram adaptados na animação original.</li>
                <li><strong>Um Novo Jeito de Saltar no Tempo:</strong> A interatividade da <em>visual novel</em> encontra a fluidez de um filme animado, permitindo que cada escolha mova a linha de universo para mais perto ou mais longe da divergência ideal.</li>
                <li><strong>Histórias Ramificadas:</strong> Suas respostas e decisões influenciam diretamente os acontecimentos, oferecendo múltiplos desfechos emocionais.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 / 8.1 / 10 (64-bit)</li>
                <li><strong>Processador:</strong> Intel Core i5</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce (1 GB de VRAM ou superior)</li>
                <li><strong>DirectX:</strong> Versão 9.0</li>
                <li><strong>Armazenamento:</strong> 15 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa de som compatível com DirectX ou chipset integrado</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/819030/ss_731163f666dfaeb15d6ec8bd0cda2bc494978ea6.1920x1080.jpg?t=1715703414" alt="Screenshot 1" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/819030/ss_56947eb1c82eb01fb6cc2b5f5c5a9df6b6dc77d3.1920x1080.jpg?t=1715703414" alt="Screenshot 2" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/819030/ss_4c1f99792b7e3d0a2c050ad38e894638d3a06fd0.1920x1080.jpg?t=1715703414" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/819030/STEINSGATE_ELITE/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://www.playstation.com/pt-br/games/steins-gate-elite/" target="_blank"><i class="fa-brands fa-playstation"></i> PlayStation Store</a>
            </div>
        `
    },
    "steins-gate-reboot": {
        title: "STEINS;GATE RE:BOOT",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Ficção Científica", "Viagem no Tempo", "Remake", "Aventura"],
        summary: "Uma versão totalmente reiniciada e modernizada do lendário STEINS;GATE, trazendo visuais remasterizados, artes e trajes redesenhados por Huke, uma recriação hiperrealista de Akihabara e novos cenários originais que expandem a história.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4012810/07418d40a3fdd2f403bfa506f50051f4254fa02a/header.jpg?t=1788401296",
            data: {
                "Desenvolvedor": "MAGES. Inc.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Visual Novel, Aventura, Sci-Fi, Viagem no Tempo",
                "Plataformas": "PC (Windows), Nintendo Switch",
                "Classificação": "16+ (Violência, Temas Sensíveis)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "recursos", text: "2. Novidades e Recursos" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>STEINS;GATE RE:BOOT</strong> é o reboot completo e modernizado da influente <em>visual novel</em> de ficção científica desenvolvida pela <strong>MAGES. Inc.</strong> e publicada pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>O jogo acompanha um grupo heterogêneo de estudantes peritos em tecnologia liderados pelo autoproclamado "cientista louco" Rintaro Okabe. Quando sua mais recente invenção acidentalmente ganha a capacidade de enviar mensagens de texto para o passado, eles descobrem o poder de alterar a própria história e as linhas do tempo.</p>
            <p>À medida que conspirações globais envolvendo organizações secretas ganham força e as realidades começam a se distorcer, os personagens enfrentam decisões cruciais para tentar evitar um futuro mergulhado no caos e na tragédia.</p>

            <h2 id="recursos">Novidades e Recursos</h2>
            <ul>
                <li><strong>Visual e Arte Reformulados:</strong> O renomado designer de personagens <strong>Huke</strong> retorna com artes totalmente atualizadas e roupas redesenhadas para um toque contemporâneo no elenco.</li>
                <li><strong>Cenários e Conteúdo Inéditos:</strong> Apresenta uma história revitalizada com novas sequências originais que expandem o universo e a mitologia da obra.</li>
                <li><strong>Akihabara Reconstruída:</strong> O distrito de Akihabara foi meticulosamente recriado com profundidade e realismo impressionantes usando referências autênticas da época.</li>
                <li><strong>Interface e Sistemas Otimizados:</strong> Interface de usuário refinada e sistema de decisões baseado no controle do telefone celular de Rintaro.</li>
                <li><strong>Múltiplos Finais:</strong> Suas escolhas moldam diretamente o destino dos personagens, ramificando a história em diversos desfechos (duração estimada entre 30 e 50 horas de jogo).</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10 ou posterior (64 bits)</li>
                <li><strong>Processador:</strong> AMD FX-8150 ou equivalente</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce com 1 GB de VRAM ou mais</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 9 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Dispositivo de som compatível com DirectSound</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10 ou posterior (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i5-9300 (9ª Geração) ou superior</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce com 1 GB de VRAM ou mais</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 9 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Dispositivo de som compatível com DirectSound</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4012810/26a7cff71d04ccca868c51551e2e7907441d6532/ss_26a7cff71d04ccca868c51551e2e7907441d6532.1920x1080.jpg?t=1788401296" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4012810/c7f3950448bdfa17d3aed688db6807f17f121e29/ss_c7f3950448bdfa17d3aed688db6807f17f121e29.1920x1080.jpg?t=1788401296" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4012810/15f215bb84cbd9bc70c592d9b1bd0b8367a595ef/ss_15f215bb84cbd9bc70c592d9b1bd0b8367a595ef.1920x1080.jpg?t=1788401296" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4012810/2c50ad0251b9a06d4632c394d88fd5efb34872fd/ss_2c50ad0251b9a06d4632c394d88fd5efb34872fd.1920x1080.jpg?t=1788401296" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://steinsgate.jp/reboot/en-us/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (EN)</a>
                <a href="https://steinsgate.jp/reboot/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (JP)</a>
                <a href="https://spike-chunsoft.com/games/steinsgate-reboot/" target="_blank"><i class="fa-solid fa-globe"></i> Página da Spike Chunsoft</a>
                <a href="https://store.steampowered.com/app/4012810/STEINSGATE_REBOOT/" target="_blank"><i class="fa-brands fa-steam"></i> Steam (Standard Edition)</a>
                <a href="https://store.steampowered.com/sub/1707312" target="_blank"><i class="fa-brands fa-steam"></i> Steam (Digital Deluxe)</a>
                <a href="https://nintendo.com/pt-br/store/products/steins-gate-re-boot-switch/" target="_blank"><i class="fa-solid fa-gamepad"></i> Nintendo eShop (Brasil)</a>
                <a href="https://steamcommunity.com/app/4012810" target="_blank"><i class="fa-brands fa-steam-symbol"></i> Comunidade Steam</a>
            </div>
        `
    },
    "danganronpa-2-goodbye-despair": {
        title: "Danganronpa 2: Goodbye Despair",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Mistério", "Investigação", "Anime", "Aventura"],
        summary: "Jabberwock Island, um ex-destino turístico, transforma-se no palco de um cruel jogo de assassinato liderado por Monokuma. Reúna pistas, investigue seus colegas e enfrente o Julgamento da Classe para expor os culpados e escapar com vida.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/header.jpg?t=1781085654",
            data: {
                "Desenvolvedor": "Spike Chunsoft Co., Ltd.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Visual Novel, Mistério, Investigação, Aventura",
                "Plataformas": "PC (Windows), PlayStation 4, Nintendo Switch, iOS, Android",
                "Classificação": "14+ (Violência, Conteúdo Sexual, Linguagem Imprópria)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Jogabilidade" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>Danganronpa 2: Goodbye Despair</strong> é o segundo capítulo da renomada franquia de aventura e investigação desenvolvida e publicada pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>A Jabberwock Island já foi um destino turístico popular, mas agora é uma ilha inabitada que permanece estranhamente imaculada. Você e seus colegas da aclamada Hope's Peak Academy foram trazidos para este paraíso tropical para uma "viagem escolar apaixonante de acelerar o coração".</p>
            <p>Tudo parece diversão sob o sol tropical... até que o urso sadaco Monokuma retorna para dar início a mais um jogo assassino. Preso nesta ilha da morte, sua única esperança de fuga é resolver os mistérios e assassinatos que ocorrem entre os próprios estudantes — lembrando sempre que a verdade pode ser o próprio desespero.</p>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Ilha Fatal e Investigação:</strong> O assassinato é a única escapatória. Conforme seus colegas começam a cair, você precisará examinar cada cena do crime, buscar pistas e entrevistar suspeitos para descobrir a oportunidade, o motivo e o método por trás de cada crime.</li>
                <li><strong>Julgamento da Classe (Class Trial):</strong> Enfrente seus colegas em debates acalorados onde você usará "balas de verdade" (provas) para refutar contradições e falsas alegações.</li>
                <li><strong>Confronto de Refutação (Rebuttal Showdown):</strong> Quando um estudante discordar frontalmente de você, ele o desafiará para um duelo cara a cara, forçando-o a cortar seus argumentos em tempo real e defender seu ponto de vista.</li>
                <li><strong>Sistemas de Reflexo e Ação:</strong> Teste seus reflexos e ritmo com uma variedade de minijogos acelerados para desmascarar o assassino definitivo e escapar com vida.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7</li>
                <li><strong>Processador:</strong> Intel Core 2 Duo (2.8 GHz) ou superior</li>
                <li><strong>Memória RAM:</strong> 3 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> GPU compatível com OpenGL 3.2 e no mínimo 1 GB de VRAM</li>
                <li><strong>DirectX:</strong> Versão 9.0c</li>
                <li><strong>Armazenamento:</strong> 5 GB de espaço disponível</li>
                <li><strong>Controle:</strong> Suporte a controles de PS4, Xbox 360 ou DirectInput</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7</li>
                <li><strong>Processador:</strong> Intel Core i5-3470 ou superior</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> GPU compatível com OpenGL 3.2 e no mínimo 1 GB de VRAM</li>
                <li><strong>DirectX:</strong> Versão 9.0c</li>
                <li><strong>Armazenamento:</strong> 6 GB de espaço disponível</li>
                <li><strong>Controle:</strong> Suporte a controles de PS4, Xbox 360 ou DirectInput</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/ss_981ffc83d3679799be78315cf98b133df11e94ec.1920x1080.jpg?t=1781085654" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/ss_cffb6efcf228987f59e7a728fbe0c5bbbd15591e.1920x1080.jpg?t=1781085654" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/ss_e118a801498f04bf89a3cc5ece78baa95cad0e98.1920x1080.jpg?t=1781085654" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/ss_572c6c3a58a4347c7d8467707befca5c2e6e6345.1920x1080.jpg?t=1781085654" alt="Screenshot 4" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/ss_2db908982b50f1006726cd49191656968282a1ad.1920x1080.jpg?t=1781085654" alt="Screenshot 5" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/413420/Danganronpa_2_Goodbye_Despair/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
            </div>
        `
    },
    "danganronpa-another-episode-ultra-despair-girls": {
        title: "Danganronpa Another Episode: Ultra Despair Girls",
        addedAt: "2026-09-21",
        categories: ["Ação", "Tiro em Terceira Pessoa", "Mistério", "Anime", "Aventura"],
        summary: "Spinoff de ação e tiro em terceira pessoa no universo de Danganronpa. Acompanhe Komaru Naegi e Toko Fukawa na luta para sobreviver a hordas de Monokumas e escapar de Towa City, dominada pelo grupo extremista 'Warriors of Hope'.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/header.jpg?t=1715701294",
            data: {
                "Desenvolvedor": "Spike Chunsoft Co., Ltd.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Ação, Tiro em Terceira Pessoa, Mistério, Aventura",
                "Plataformas": "PC (Windows), PlayStation 4, PS Vita",
                "Classificação": "14+ (Violência, Conteúdo Sexual, Atos Criminosos)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Jogabilidade" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>Danganronpa Another Episode: Ultra Despair Girls</strong> é um spinoff de ação, tiro em terceira pessoa e aventura desenvolvido e publicado pela <strong>Spike Chunsoft</strong>, preenchendo a lacuna de eventos entre o primeiro e o segundo jogo da franquia principal.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Komaru Naegi, a irmã mais nova do protagonista Makoto Naegi, está aprisionada dentro de um apartamento misterioso há um ano. Sua rotina é interrompida quando Byakuya Togami, membro da Future Foundation, surge para resgatá-la.</p>
            <p>No entanto, a operação de resgate é frustrada por um ataque repentino de centenas de robôs Monokuma. Komaru descobre que a metrópole de Towa City foi tomada por um grupo extremista de crianças conhecidas como <strong>Warriors of Hope</strong>. Lideradas pela tirânica Monaca, elas declaram a criação de um "paraíso infantil" onde todos os adultos devem ser exterminados.</p>
            <p>Unindo forças com Toko Fukawa (e seu alter ego genocida), Komaru deve usar uma arma especial para sobreviver aos furiosos Monokumas, decifrar enigmas e escapar da cidade mortal.</p>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Ação e Tiro em Terceira Pessoa:</strong> Diferente dos jogos principais no formato visual novel/investigação, Ultra Despair Girls adota combate em tempo real com câmera sobre o ombro.</li>
                <li><strong>A Hacking Gun e Truth Bullets:</strong> Utilize a arma hacker desenvolvida pela Future Foundation para disparar diferentes tipos de munição especial (<em>Truth Bullets</em>), como <em>Paralyze</em> (paralisia) e <em>Link</em> (controle de inimigos). Customize seu arsenal com modificadores <em>Bling Bullet</em>.</li>
                <li><strong>Enigmas e Quebra-cabeças:</strong> Desafie sua inteligência resolvendo puzzles espalhados pelo mapa e ultrapassando as armadilhas montadas pelas crianças da cidade.</li>
                <li><strong>Parceria Dinâmica:</strong> Alterne entre o combate à distância com Komaru e o combate corpo a corpo devastador de Toko Fukawa / Genocide Jack.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i3-530 (2.93 GHz) ou superior</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 650 (1 GB) ou AMD Radeon HD 7700 (1 GB) [Compatível com DirectX 11]</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 18 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa compatível com DirectX 9.0c</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i3-530 (2.93 GHz) ou superior</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 650 (1 GB) ou AMD Radeon HD 7700 (1 GB) [Compatível com DirectX 11]</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 18 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa compatível com DirectX 9.0c</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/ss_de6e9436c1e5297be2244604bccdc00cce64f33c.1920x1080.jpg?t=1715701294" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/ss_410548318fde19764a68ba30a7ace0f19ab68f00.1920x1080.jpg?t=1715701294" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/ss_5d17a26044ee031f42a617ecd25a585806cc9c6b.1920x1080.jpg?t=1715701294" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/ss_9f61d9858ff9fb00df81483d171fc0c3bcae7519.1920x1080.jpg?t=1715701294" alt="Screenshot 4" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/555950/ss_1cbeb3e411de67704e7ae55d04ff0e6828f23fef.1920x1080.jpg?t=1715701294" alt="Screenshot 5" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/555950/Danganronpa_Another_Episode_Ultra_Despair_Girls/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
            </div>
        `
    },
    "danganronpa-v3-killing-harmony": {
        title: "Danganronpa V3: Killing Harmony",
        addedAt: "2026-09-21",
        categories: ["Visual Novel", "Mistério", "Investigação", "Anime", "Aventura"],
        summary: "Um novo capítulo na franquia onde 16 estudantes Ultimates são sequestrados e mantidos presos em uma escola psicopata. Em meio a assassinatos brutais e investigações de alto risco, você precisará usar lógica, intuição e até mesmo mentiras para sobreviver aos Julgamentos da Classe.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/header.jpg?t=1750134757",
            data: {
                "Desenvolvedor": "Spike Chunsoft Co., Ltd.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Visual Novel, Mistério, Investigação, Aventura",
                "Plataformas": "PC (Windows), PlayStation 4, PS Vita, Nintendo Switch, iOS, Android",
                "Classificação": "14+ (Violência, Conteúdo Sexual, Atos Criminosos)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Jogabilidade" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>Danganronpa V3: Killing Harmony</strong> é o terceiro título principal da aclamada franquia de aventura e investigação desenvolvida e publicada pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Entre em um novo mundo de Danganronpa e prepare-se para o maior e mais instigante episódio da série. Ambientado em uma "escola psicopata" cercada por vegetação e segredos, um elenco inédito de 16 estudantes talentosos (Ultimates) é sequestrado e aprisionado.</p>
            <p>Dentro desse confinamento, o infame Monokuma e seus "Monokubers" forçam os estudantes a participar de um novo jogo de assassinato. Alguns matarão, alguns morrerão e outros serão executados. Reimagine tudo o que você sabia sobre as investigações da série enquanto descobre os culpados por crimes perversos e guia os julgamentos até a verdade.</p>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Um Novo Começo:</strong> Esqueça os acontecimentos anteriores e junte-se a um elenco completamente novo de estudantes Ultimates para uma história independente e cheia de reviravoltas.</li>
                <li><strong>Assassinatos Misteriosos:</strong> Explore cenários macabros, colete evidências ("Truth Bullets") e questione suspeitos para desvendar as motivações por trás de cada crime.</li>
                <li><strong>Mentiras, Pânico e Debate:</strong> Pela primeira vez na série, você pode usar <em>mentiras</em> propositais durante os Julgamentos da Classe para virar o jogo, desarmar argumentos falaciosos e conduzir os estudantes à conclusão correta.</li>
                <li><strong>Novos Minijogos de Julgamento:</strong> Enfrente mecânicas inéditas como o <em>Scrum Debate</em> (onde a turma se divide em duas facções opostas), <em>Psyche Taxi</em> e <em>Mind Mine</em>.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i3-4170 @ 3.70 GHz ou superior</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 460 ou superior</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 26 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa de som compatível com DirectX ou chipset integrado</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i5-4690K @ 3.50 GHz ou superior</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 960 ou superior</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 26 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa de som compatível com DirectX ou chipset integrado</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/ss_1082ae1d1ae6e2fbeca380166f8c10fa6e6bb0ea.1920x1080.jpg?t=1750134757" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/ss_a3b1f7c070bcec8e9cbd68bc50180b0dd52c84b5.1920x1080.jpg?t=1750134757" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/ss_0dc300d94128667dcaaecf31e5db83fc36540c7e.1920x1080.jpg?t=1750134757" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/ss_c90bd34a6e88b122fc1d99f18cde58bc3706f685.1920x1080.jpg?t=1750134757" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/567640/Danganronpa_V3_Killing_Harmony/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
            </div>
        `
    },
    "danganronpa-s-ultimate-summer-camp": {
        title: "Danganronpa S: Ultimate Summer Camp",
        addedAt: "2026-09-21",
        categories: ["Tabuleiro", "RPG", "Anime", "Estratégia", "Crossover"],
        summary: "Uma versão massivamente aprimorada do jogo de tabuleiro de Danganronpa V3. Reúna os personagens de toda a franquia em um acampamento de verão na Jabberwock Island para evoluir seus atributos, enfrentar os 200 andares da Tower of Despair e desbloquear novos trajes de banho e colecionáveis.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1691970/header.jpg?t=1715701297",
            data: {
                "Desenvolvedor": "Spike Chunsoft Co., Ltd.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Tabuleiro, RPG, Estratégia, Crossover",
                "Plataformas": "PC (Windows), Nintendo Switch, PlayStation 4, iOS, Android",
                "Classificação": "Livre / 6+ (Violência Fantasiosa)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e Visão Geral" },
            { id: "recursos", text: "2. Modos de Jogo e Recursos" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais" }
        ],
        content: `
            <p><strong>Danganronpa S: Ultimate Summer Camp</strong> é um spin-off de RPG e jogo de tabuleiro desenvolvido e publicado pela <strong>Spike Chunsoft</strong>, expandindo o popular minijogo <em>Ultimate Talent Development Plan</em> presente em <em>Danganronpa V3: Killing Harmony</em>.</p>

            <h2 id="sinopse">Sinopse e Visão Geral</h2>
            <p>O palco está montado no resort tropical de Jabberwock Island. Em uma celebração especial, personagens de todos os títulos da franquia Danganronpa se reúnem em um acampamento de verão sem as ameaças do jogo assassino original.</p>
            <p>O jogo serve como o crossover dos sonhos para os fãs da série, reunindo mais de 1.000 cenas de eventos inéditas, interações únicas entre personagens de diferentes gerações e novos trajes de banho exclusivos para todo o elenco.</p>

            <h2 id="recursos">Modos de Jogo e Recursos</h2>
            <ul>
                <li><strong>Desenvolvimento (Jogo de Tabuleiro):</strong> O modo principal no qual você evolui seus personagens ao longo de 50 dias (turnos) na ilha. Role os dados para avançar pelas casas, suba de nível, participe de eventos, adquira habilidades com Talent Fragments e enfrente inimigos e chefes posicionados por Monokuma.</li>
                <li><strong>Modo Batalha (Tower of Despair):</strong> Monte uma equipe de até quatro personagens previamente desenvolvidos no tabuleiro e enfrente os 200 andares da <em>Tower of Despair</em>. Derrote hordas de monstros Monokuma em combates por turnos para obter Monokuma Medals.</li>
                <li><strong>School Store (MonoMono Machine):</strong> Utilize as moedas e medalhas conquistadas nas batalhas para rodar a máquina gacha e desbloquear novos personagens com diferentes raridades (quanto maior a raridade, mais rápido eles evoluem) e colecionar ilustrações comemorativas e promocionais.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10 Home (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i5-750</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GT 740 (1 GB)</li>
                <li><strong>Armazenamento:</strong> 2 GB de espaço disponível</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 10 Home (64 bits)</li>
                <li><strong>Processador:</strong> Intel Core i7-3770</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 1060 (6 GB)</li>
                <li><strong>Armazenamento:</strong> 2 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1691970/ss_ae034fb0e1627b95ccf63a750f80a16a48e7b8ad.1920x1080.jpg?t=1715701297" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1691970/ss_ee4ab3282810c360f6db02550b39cc80f3d23e5e.1920x1080.jpg?t=1715701297" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1691970/ss_3979526e934a39649167e89fde812f5474b76405.1920x1080.jpg?t=1715701297" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1691970/ss_baef57d49e2875305e03a6812f2ac4b4dee52418.1920x1080.jpg?t=1715701297" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1691970/Danganronpa_S_Ultimate_Summer_Camp/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
            </div>
        `
    },
    "zero-escape-zero-time-dilemma": {
        title: "Zero Escape: Zero Time Dilemma",
        addedAt: "2026-09-22",
        categories: ["Visual Novel", "Aventura", "Mistério", "Ficção Científica", "Quebra-cabeça"],
        summary: "Capítulo final da aclamada trilogia Zero Escape. Presos em uma instalação subterrânea, nove participantes divididos em três equipes são forçados a participar de um jogo mortal onde a saída de emergência só se abrirá após seis mortes.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311240/header.jpg?t=1715700046",
            data: {
                "Desenvolvedor": "Spike Chunsoft Co., Ltd.",
                "Publicadora": "Spike Chunsoft Co., Ltd.",
                "Gêneros": "Aventura, Mistério, Ficção Científica, Quebra-cabeça",
                "Plataformas": "PC (Windows), PlayStation 4, PS Vita, Xbox One, Nintendo 3DS",
                "Classificação": "18+ (Violência, Temas Adultos)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "equipes", text: "2. Equipes e Personagens" },
            { id: "gameplay", text: "3. Características e Jogabilidade" },
            { id: "requisitos", text: "4. Requisitos de Sistema" },
            { id: "galeria", text: "5. Galeria de Imagens" },
            { id: "links", text: "6. Links Oficiais e Downloads" }
        ],
        content: `
            <p><strong>Zero Escape: Zero Time Dilemma</strong> é o terceiro e conclusivo capítulo da aclamada série de suspense e ficção científica criada por Kotaro Uchikoshi e desenvolvida pela <strong>Spike Chunsoft</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Não era para o experimento acabar assim. Nove participantes acordam no subsolo de uma instalação de testes de isolamento, presos pelos pulsos por estranhos braceletes pretos.</p>
            <p>Para escapar, eles são forçados a participar do mortal "Decision Game". As regras impostas pelo misterioso mascarado Zero são simples: após a morte de seis participantes, a porta de saída de emergência se abrirá. Quem viverá e quem morrerá? A escolha está nas suas mãos em uma corrida contra o tempo cheia de dilemas morais profundos.</p>

            <h2 id="equipes">Equipes e Personagens</h2>
            <p>Os nove participantes estão divididos em três grupos distintos, cada um explorando diferentes setores do complexo subterrâneo:</p>
            <ul>
                <li><strong>Team C:</strong> Liderada por <strong>Carlos</strong> (um bombeiro destemido com forte senso de justiça), acompanhado por <strong>Junpei Tenmyouji</strong> (um detetive amargurado em busca do seu passado) e <strong>Akane Kurashiki</strong> (uma astuta estrategista de uma organização secreta).</li>
                <li><strong>Team D:</strong> Liderada por <strong>Diana</strong> (uma enfermeira pacifista), acompanhada por <strong>Phi</strong> (uma jovem inteligente e direta) e <strong>Sigma Klim</strong> (um homem experiente cuja consciência habita um corpo mais jovem).</li>
                <li><strong>Team Q:</strong> Liderada por <strong>Q</strong> (um garoto amnésico preso em um capacete esférico), acompanhado por <strong>Eric</strong> (um funcionário de sorveteria ansioso) e <strong>Mira</strong> (uma mulher fria e emocionalmente desapegada).</li>
            </ul>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Pense do seu Jeito:</strong> Explore cenários 3D imersivos no estilo <em>Escape Room</em> em busca de pistas para resolver enigmas complexos.</li>
                <li><strong>Jogo de Escolhas Cruciais:</strong> Coloque sua moralidade em teste tomando decisões de vida ou morte em que até as melhores opções carregam repercussões estarrecedoras.</li>
                <li><strong>Narrativa Não Linear Fragmentada:</strong> Salte livremente entre linhas temporais, eventos e perspectivas de personagens para juntar o quebra-cabeça da história e desbloquear múltiplos finais.</li>
                <li><strong>Apresentação Cinemática:</strong> Cenas de história inteiramente animadas e dubladas que elevam a imersão visual e dramática do jogo.</li>
                <li><strong>Conclusão Épica:</strong> Reúne personagens marcantes de <em>Nine Hours, Nine Persons, Nine Doors (999)</em> e <em>Virtue's Last Reward</em> para encerrar os mistérios da franquia.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7</li>
                <li><strong>Processador:</strong> Intel Core i3-530 (2.93 GHz) ou superior</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 650 (1 GB) ou AMD Radeon HD 7700 (1 GB) [Compatível com DirectX 11]</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 4 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa compatível com DirectX 9.0c</li>
            </ul>

            <p><strong>Requisitos Recomendados:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7</li>
                <li><strong>Processador:</strong> Intel Core i5-3570K (3.40 GHz) ou superior</li>
                <li><strong>Memória RAM:</strong> 8 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> NVIDIA GeForce GTX 650 (1 GB) ou AMD Radeon HD 7700 (1 GB) [Compatível com DirectX 11]</li>
                <li><strong>DirectX:</strong> Versão 11</li>
                <li><strong>Armazenamento:</strong> 4 GB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Placa compatível com DirectX 9.0c</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311240/ss_f71e31f1cd405a613a48764f4d75fc5646cc0d46.1920x1080.jpg?t=1715700046" alt="Screenshot 1" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311240/ss_580244bb4ffb4979803347a9e5707fc8a09bd09c.1920x1080.jpg?t=1715700046" alt="Screenshot 2" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311240/ss_455ea843113b192abddabcec738ca0970f7df9af.1920x1080.jpg?t=1715700046" alt="Screenshot 3" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311240/ss_2e363c88dabd6013051489ee93845f29e9be6319.1920x1080.jpg?t=1715700046" alt="Screenshot 4" style="max-width: 48%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Downloads</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/311240/Zero_Escape_Zero_Time_Dilemma/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://store.playstation.com/pt-br/product/UP1024-CUSA07593_00-ZEROESCAPE000000" target="_blank"><i class="fa-brands fa-playstation"></i> PlayStation Store</a>
                <a href="https://www.xbox.com/pt-BR/games/store/zero-escape-zero-time-dilemma/9p3lcdlhwnms" target="_blank"><i class="fa-brands fa-xbox"></i> Xbox Store</a>
                <a href="https://4br.me/ICqigmC" target="_blank"><i class="fa-solid fa-download"></i> Download (Opção 1)</a>
                <a href="https://4br.me/Hqu9rlw" target="_blank"><i class="fa-solid fa-download"></i> Download (Opção 2)</a>
                <a href="https://4br.me/z2MUSmZ" target="_blank"><i class="fa-solid fa-download"></i> Download (Opção 3)</a>
            </div>
        `
    },
    "slay-the-princess-the-pristine-cut": {
        title: "Slay the Princess - The Pristine Cut",
        addedAt: "2026-09-22",
        categories: ["Visual Novel", "Terror Psicológico", "Aventura", "Indie", "Escolhas"],
        summary: "Um visual novel de terror psicológico com escolhas de ramificações dramáticas e arte inteiramente feita à mão a lápis. Sua missão é ceifar a Princesa no porão de uma cabana isolada para salvar o mundo — mas cada decisão, dúvida e crença altera a própria realidade.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1989270/74a54248cfec29144de5e867a333c30e6d62801d/header.jpg?t=1775751748",
            data: {
                "Desenvolvedor": "Black Tabby Games",
                "Publicadora": "Black Tabby Games",
                "Gêneros": "Visual Novel, Terror Psicológico, Aventura, Indie",
                "Plataformas": "PC (Windows, macOS, Linux), PlayStation 4, PlayStation 5, Xbox, Nintendo Switch",
                "Classificação": "16+ (Violência, Temas Sensíveis, Medo)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "pristine-cut", text: "2. O Que Há no 'The Pristine Cut'?" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Redes Sociais" }
        ],
        content: `
            <p><strong>Slay the Princess - The Pristine Cut</strong> é a versão definitiva e expandida do aclamado visual novel de terror psicológico desenvolvido e publicado pelo estúdio independente <strong>Black Tabby Games</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>Você está em uma trilha na mata e, no final dela, encontra uma cabana isolada. No porão dessa cabana, há uma Princesa. Sua missão é simples e direta: <strong>ceifá-la para salvar o mundo</strong>.</p>
            <p>No entanto, a Princesa fará de tudo para impedi-lo — ela mentirá, seduzirá e prometerá tudo o que você desejar. Se você vacilar, ela o matará repetidamente. Nesta jornada altamente ramificada, cada palavra dita, dúvida expressa e escolha tomada moldam não apenas a personalidade do protagonista, mas também a verdadeira forma e natureza da Princesa e do próprio universo.</p>

            <h2 id="pristine-cut">O Que Há no "The Pristine Cut"?</h2>
            <p>Esta edição expandida traz um acréscimo massivo de conteúdo à experiência original:</p>
            <ul>
                <li><strong>3 Novos Capítulos:</strong> Mistérios inéditos e ramificações com consequências devastadoras.</li>
                <li><strong>Novas Princesas:</strong> Encontros com novas variações da Princesa prontas para testar a sua determinação.</li>
                <li><strong>Rotas Expandidas:</strong> As rotas <em>O Covil (The Den)</em>, <em>A Apoteose (The Apotheosis)</em> e <em>A Fúria (The Fury)</em> tiveram suas durações mais que dobradas.</li>
                <li><strong>Mais de 35% de Conteúdo Extra:</strong> Adição de um novo final inédito que busca salvar o mundo de uma vez por todas.</li>
                <li><strong>Novo Recurso de Galeria:</strong> Acompanhe seu progresso, relembre memórias, reviva conquistas e descubra segredos profundos.</li>
                <li><strong>Arte e Áudio Expandidos:</strong> Mais de 1.200 novos quadros desenhados tradicionalmente a lápis por Abby Howard e mais de 2.500 novas linhas de diálogo dubladas por Jonathan Sims e Nichole Goodnight.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows 7 / macOS / Linux (recentes)</li>
                <li><strong>Processador:</strong> Quad Core de 2.6 GHz ou superior</li>
                <li><strong>Memória RAM:</strong> 4 GB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Gráficos Integrados</li>
                <li><strong>Armazenamento:</strong> 13 GB de espaço disponível</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1989270/ss_5262a1ed60b5f1f8419f0c0be3dafa92a7167eba.1920x1080.jpg?t=1775751748" alt="Screenshot 1" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1989270/ss_d48a0403c8ce84a614120fa419109151f166fb40.1920x1080.jpg?t=1775751748" alt="Screenshot 2" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1989270/ss_9d91e5ccfe3f0ee5484054d7b535d4a3209e3c0e.1920x1080.jpg?t=1775751748" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Redes Sociais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1989270/Slay_the_Princess__The_Pristine_Cut/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://store.playstation.com/pt-br/product/UP0604-CUSA49893_00-0051989719815455" target="_blank"><i class="fa-brands fa-playstation"></i> PlayStation Store</a>
                <a href="https://blacktabbygames.com/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial</a>
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3354529871" target="_blank"><i class="fa-brands fa-steam-symbol"></i> Guia da Comunidade Steam</a>
                <a href="https://discord.com/invite/xCnAeqkkEY" target="_blank"><i class="fa-brands fa-discord"></i> Discord Oficial</a>
                <a href="https://bsky.app/profile/blacktabbygames.com" target="_blank"><i class="fa-solid fa-square-share-nodes"></i> Bluesky</a>
                <a href="https://x.com/blacktabbygames" target="_blank"><i class="fa-brands fa-x-twitter"></i> X / Twitter</a>
                <a href="https://www.youtube.com/channel/UC6bbk3AuxgkmTlIqmTgv2mQ/" target="_blank"><i class="fa-brands fa-youtube"></i> Canal no YouTube</a>
                <a href="https://www.twitch.tv/black_tabby_games/" target="_blank"><i class="fa-brands fa-twitch"></i> Canal na Twitch</a>
            </div>
        `
    },
    "the-book-of-shadows": {
        title: "The Book of Shadows",
        addedAt: "2026-09-22",
        categories: ["RPG", "JRPG", "Indie", "Aventura", "Fantasia"],
        summary: "Um RPG clássico de fantasia e aventura onde Alex e sua namorada Talia acidentalmente ativam um livro misterioso, sendo transportados para o mundo de Esteron. Enfrente perigos, controle múltiplos personagens e proteja o artefato de forças malignas.",
        infobox: {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/header.jpg?t=1730471193",
            data: {
                "Desenvolvedor": "Tiny Goblin Productions",
                "Publicadora": "Aldorlea Games",
                "Gêneros": "RPG, JRPG, Indie, Aventura",
                "Plataformas": "PC (Windows)",
                "Classificação": "10+ (Violência)"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Sinopse e História" },
            { id: "gameplay", text: "2. Características e Jogabilidade" },
            { id: "requisitos", text: "3. Requisitos de Sistema" },
            { id: "galeria", text: "4. Galeria de Imagens" },
            { id: "links", text: "5. Links Oficiais e Redes Sociais" }
        ],
        content: `
            <p><strong>The Book of Shadows</strong> é um RPG independente em estilo clássico e retrô, desenvolvido pela <strong>Tiny Goblin Productions</strong> e publicado pela <strong>Aldorlea Games</strong>.</p>

            <h2 id="sinopse">Sinopse e História</h2>
            <p>O que acontece quando você e sua namorada encontram um livro misterioso e o ativam sem querer? Foi exatamente isso que ocorreu com Alex e Talia.</p>
            <p>Após a ativação do artefato, Alex é subitamente transportado para o desconhecido e misterioso mundo de Esteron, enquanto Talia acaba possuída por uma entidade desconhecida. Para piorar a situação, a ativação do tomo despertou a atenção de diversas facções perigosas que desejam tomar o poder do livro para fins nefastos. Alex precisará se manter um passo à frente de seus inimigos enquanto busca entender a verdadeira natureza do livro e encontrar um meio de salvar sua namorada.</p>

            <h2 id="gameplay">Características e Jogabilidade</h2>
            <ul>
                <li><strong>Campanha Extensa:</strong> Mais de 40 horas de jogabilidade envolvente distribuídas ao longo de 9 capítulos.</li>
                <li><strong>Múltiplos Personagens Jogáveis:</strong> Assuma o controle de até 11 personagens diferentes com estilos de combate e personalidades próprias.</li>
                <li><strong>Sistema de Árvore de Habilidades:</strong> Escolha exatamente quais feitiços e técnicas aprender conforme seus personagens sobem de nível.</li>
                <li><strong>Fear Level System:</strong> Desenvolva o poder do seu grupo a ponto de fazer com que os monstros sintam medo e fujam de você no mapa.</li>
                <li><strong>Exploração Rica:</strong> Encontre 50 salas secretas escondidas com tesouros e desafios especiais.</li>
                <li><strong>Conveniências Modernas:</strong> Suporte completo para controle via mouse, salvamento automático e encontros visíveis no mapa.</li>
            </ul>

            <h2 id="requisitos">Requisitos de Sistema (PC)</h2>
            <p><strong>Requisitos Mínimos:</strong></p>
            <ul>
                <li><strong>Sistema Operacional:</strong> Windows XP / Vista / 7 / 8 / 10</li>
                <li><strong>Processador:</strong> 2 GHz</li>
                <li><strong>Memória RAM:</strong> 128 MB de RAM</li>
                <li><strong>Placa de Vídeo:</strong> Placa compatível com DirectX 9.0</li>
                <li><strong>DirectX:</strong> Versão 9.0</li>
                <li><strong>Armazenamento:</strong> 500 MB de espaço disponível</li>
                <li><strong>Placa de Som:</strong> Compatível com DirectX 9.0</li>
            </ul>

            <h2 id="galeria">Galeria de Imagens</h2>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/ss_ce5f020f0a56051abf92914b5acb15fc535f781d.1920x1080.jpg?t=1730471193" alt="Screenshot 1" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/ss_9e751dd6859f45a5978abeeef2003c89ecebfd94.1920x1080.jpg?t=1730471193" alt="Screenshot 2" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/ss_b29b2f118606afddf7d970ae8e0ccf5a41d45e9a.1920x1080.jpg?t=1730471193" alt="Screenshot 3" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/ss_d2057cb1105ba4f5539d591d7541ccb215e3c492.1920x1080.jpg?t=1730471193" alt="Screenshot 4" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
                <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1419870/ss_83925818efa2b7518728ab3b6e8d8c9ffc032ec4.1920x1080.jpg?t=1730471193" alt="Screenshot 5" style="max-width: 31%; height: auto; border-radius: 4px; border: 1px solid #ccc;">
            </div>

            <hr>
            <h2 id="links">Links Oficiais e Redes Sociais</h2>
            
            <p><i class="fa-solid fa-globe"></i> <strong>Páginas Oficiais e Lojas:</strong></p>
            <div class="play-links">
                <a href="https://store.steampowered.com/app/1419870/The_Book_of_Shadows/" target="_blank"><i class="fa-brands fa-steam"></i> Página na Steam</a>
                <a href="https://www.aldorlea.org/" target="_blank"><i class="fa-solid fa-house"></i> Website Oficial (Aldorlea)</a>
                <a href="https://discord.com/invite/pSVd3fAxgM" target="_blank"><i class="fa-brands fa-discord"></i> Discord Oficial</a>
                <a href="https://x.com/Indinera" target="_blank"><i class="fa-brands fa-x-twitter"></i> X / Twitter</a>
                <a href="https://www.youtube.com/aldorlea" target="_blank"><i class="fa-brands fa-youtube"></i> Canal no YouTube</a>
                <a href="https://www.facebook.com/aldorlea" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook Oficial</a>
            </div>
        `
    },
    "mad-father": {
        title: "Mad Father",
        categories: ["RPG Maker", "Terror", "Aventura", "Gore", "Indie"],
        summary: "Descubra os segredos perturbadores do laboratório de seu pai na noite do aniversário da morte de sua mãe. Nem toda loucura pode ser contida.",
        infobox: {
            image: "https://cdn.akamai.steamstatic.com/steam/apps/483980/header.jpg",
            data: { "Desenvolvedor": "sen", "Gêneros": "RPG, Horror, Exploração", "Lançamento": "2012 / Remake: 2020", "Plataformas": "PC, Switch" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Mecânicas" }, { id: "links", text: "2. Links Oficiais" } ],
        content: `
            <p>Outro pilar do horror no <em>RPG Maker</em>, <strong>Mad Father</strong> coloca você no controle de Aya Drevis, uma garota cuja casa de repente é infestada por cadáveres e espíritos desfigurados buscando vingança contra o pai dela.</p>
            <h2 id="sinopse">Sinopse e Mecânicas</h2>
            <p>É uma exploração sombria de traumas familiares. O jogador resolve puzzles com ferramentas cirúrgicas e deve despistar ou acalmar cadáveres. O jogo lida com temas pesados de lealdade doentia, dissecação humana e abuso, entregando múltiplos finais chocantes.</p>
            <hr><h2 id="links">Links Oficiais</h2>
            <div class="play-links"><a href="https://store.steampowered.com/app/483980/" target="_blank"><i class="fa-brands fa-steam"></i> Steam</a></div>
        `
    },
    "trainwreck": {
        title: "Trainwreck",
        categories: ["Visual Novel", "Indie", "Slice of Life", "Drama"],
        summary: "Uma visual novel curta, incisiva e realista sobre relacionamentos complicados, más escolhas da vida adulta e o caos das emoções cruas.",
        infobox: {
            image: "https://placehold.co/600x300/202020/ffffff?text=Trainwreck",
            data: { "Desenvolvedor": "Indie", "Gêneros": "Drama, Visual Novel", "Lançamento": "N/A", "Plataformas": "PC" }
        },
        toc: [ { id: "sinopse", text: "1. Sinopse e Temática" } ],
        content: `
            <p><strong>Trainwreck</strong> é uma visual novel indie crua e emocional que foca no lado realista e muitas vezes doloroso dos relacionamentos humanos, sem a romantização típica do gênero.</p>
            <h2 id="sinopse">Sinopse e Temática</h2>
            <p>A narrativa segue personagens enfrentando a vida adulta em toda a sua complexidade desordenada. Sem heróis ou vilões claros, apenas pessoas reais fazendo escolhas ruins, prejudicando umas às outras e tentando sobreviver ao caos emocional de suas próprias decisões.</p>
        `
    }
};
