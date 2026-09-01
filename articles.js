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
            <div class="home-banner">
                <h2>Bem-vindo à WikiGames</h2>
                <p>A enciclopédia definitiva focada em Visual Novels, Terror Psicológico e jogos Independentes. Explore universos densos, lore oculto e tramas fascinantes.</p>
            </div>
            
            <div class="home-section">
                <h3><i class="fa-solid fa-star"></i> Artigos em Destaque</h3>
                <div class="home-grid">
                    <a href="/?route=omori" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1150690/header.jpg" alt="OMORI">
                        <span>OMORI</span>
                    </a>
                    <a href="/?route=slay-the-princess" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1989270/header.jpg" alt="Slay the Princess">
                        <span>Slay the Princess</span>
                    </a>
                    <a href="/?route=doki-doki-literature-club" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/698780/header.jpg" alt="Doki Doki Literature Club!">
                        <span>Doki Doki Literature Club!</span>
                    </a>
                    <a href="/?route=needy-streamer-overload" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1451940/header.jpg" alt="Needy Streamer Overload">
                        <span>Needy Streamer Overload</span>
                    </a>
                </div>
            </div>

            <div class="home-section">
                <h3><i class="fa-solid fa-magnifying-glass"></i> Mistério, Escape e Sobrevivência</h3>
                <div class="home-grid">
                    <a href="/?route=zero-escape-the-nonary-games" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/477740/header.jpg" alt="Zero Escape">
                        <span>Zero Escape: The Nonary Games</span>
                    </a>
                    <a href="/?route=danganronpa" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413410/header.jpg" alt="Danganronpa">
                        <span>Danganronpa</span>
                    </a>
                    <a href="/?route=alice-in-the-nightmare-land" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2583430/header.jpg" alt="Alice in the Nightmare Land">
                        <span>Alice in the Nightmare Land</span>
                    </a>
                    <a href="/?route=corpse-party" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1163660/header.jpg" alt="Corpse Party">
                        <span>Corpse Party</span>
                    </a>
                </div>
            </div>

            <div class="home-section">
                <h3><i class="fa-solid fa-clock"></i> Obras-Primas Intemporais</h3>
                <div class="home-grid">
                    <a href="/?route=the-house-in-fata-morgana" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/303310/header.jpg" alt="The House in Fata Morgana">
                        <span>The House in Fata Morgana</span>
                    </a>
                    <a href="/?route=steins-gate" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412830/header.jpg" alt="Steins;Gate">
                        <span>Steins;Gate</span>
                    </a>
                    <a href="/?route=higurashi-when-they-cry" class="home-card">
                        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/310360/header.jpg" alt="Higurashi When They Cry">
                        <span>Higurashi When They Cry</span>
                    </a>
                </div>
            </div>
            <hr>
            <p style="text-align: center; color: #7a8b9e;">Use o menu lateral para explorar categorias ou pesquise o seu próximo jogo favorito na barra superior.</p>
        `
    },
    "alice-in-the-nightmare-land": {
        title: "Alice in the Nightmare Land",
        categories: ["Escape Room", "Aventura", "Puzzle"],
        summary: "Jogo indie de escape e exploração onde Alice procura sua irmã desaparecida em uma mansão cheia de armadilhas mortais.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2583430/header.jpg",
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
        `
    },
    "doki-doki-literature-club-plus": {
        title: "Doki Doki Literature Club Plus!",
        categories: ["Visual Novel", "Terror Psicológico", "Metaficção"],
        youtubeId: "NjKZG9HYP7U",
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
        `
    },
    "omori": {
        title: "OMORI",
        categories: ["RPG", "Terror Psicológico", "Surrealismo"],
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
        `
    },
    "slay-the-princess": {
        title: "Slay the Princess",
        categories: ["Visual Novel", "Terror Psicológico", "Escolhas Múltiplas"],
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
        `
    },
    "raging-loop": {
        title: "Raging Loop",
        categories: ["Terror Psicológico", "Mistério", "Suspense", "Loop Temporal"],
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
    "needy-streamer-overload": {
        title: "Needy Streamer Overload",
        categories: ["Visual Novel", "Terror Psicológico", "Simulação"],
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
    }
};
