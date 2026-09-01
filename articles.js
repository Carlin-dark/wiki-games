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
            <p>A <strong>WikiGames</strong> é um projeto focado em catalogar os universos densos, lore oculto e tramas fascinantes de jogos independentes, com ênfase em narrativas interativas e obras que desafiam a mente do jogador.</p>
            
            <h2>Artigos em Destaque</h2>
            <ul>
                <li><a href="#/omori">OMORI</a> - <em>Uma jornada colorida e dolorosa pela mente humana.</em></li>
                <li><a href="#/slay-the-princess">Slay the Princess</a> - <em>Uma cabana, uma princesa e decisões letais.</em></li>
                <li><a href="#/doki-doki-literature-club">Doki Doki Literature Club!</a> - <em>Onde o romance encontra o terror metaficcional.</em></li>
                <li><a href="#/needy-streamer-overload">Needy Streamer Overload</a> - <em>O lado obscuro da fama na internet e saúde mental.</em> <strong>(NOVO)</strong></li>
            </ul>

            <h2>Mistério, Escape e Sobrevivência</h2>
            <ul>
                <li><a href="#/zero-escape-the-nonary-games">Zero Escape: The Nonary Games</a></li>
                <li><a href="#/danganronpa">Danganronpa: Trigger Happy Havoc</a></li>
                <li><a href="#/alice-in-the-nightmare-land">Alice in the Nightmare Land</a></li>
                <li><a href="#/corpse-party">Corpse Party</a> <strong>(NOVO)</strong></li>
            </ul>

            <h2>Obras-Primas Intemporais</h2>
            <ul>
                <li><a href="#/the-house-in-fata-morgana">The House in Fata Morgana</a></li>
                <li><a href="#/steins-gate">Steins;Gate</a></li>
                <li><a href="#/higurashi-when-they-cry">Higurashi When They Cry</a></li>
            </ul>

            <hr>
            <p>Se você é novo por aqui, experimente navegar pelas categorias ao lado ou clicar em <strong>Página Aleatória</strong> para descobrir o seu próximo jogo favorito!</p>
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
                "Idiomas": "Inglês, Japonês, Chinês (Simplificado/Tradicional), entre outros"
            }
        },
        toc: [
            { id: "jogabilidade", text: "1. Jogabilidade e Puzzles" },
            { id: "historia", text: "2. Enredo" },
            { id: "mortes", text: "3. Armadilhas e Finais" }
        ],
        content: `
            <p><strong>Alice in the Nightmare Land</strong> é um jogo independente de aventura e resolução de quebra-cabeças com mecânicas de <em>escape room</em>, usando um estilo point-and-click combinado com exploração por salas.</p>
            
            <h2 id="jogabilidade">Jogabilidade e Puzzles</h2>
            <p>A progressão do jogo exige que o jogador guie Alice por salas lacradas interagindo com cenários para encontrar chaves, alavancas e combinar itens no inventário. As mecânicas de quebra-cabeça variam desde enigmas lógicos simples até mecanismos complexos baseados em tempo. O inventário é limitado, forçando o jogador a pensar no que realmente é útil carregar.</p>
            
            <h2 id="historia">Enredo</h2>
            <p>Alice acorda repentinamente em um lugar completamente desconhecido, sentindo uma dor de cabeça latejante. Desesperada para encontrar sua irmã que desapareceu misteriosamente dias antes, ela decide se aventurar pelos corredores de uma mansão sinistra e decadente. Conforme desce mais fundo no edifício, ela descobre documentos e diários que revelam que o lugar foi projetado especificamente para torturar e matar intrusos.</p>

            <h2 id="mortes">Armadilhas e Finais</h2>
            <p>O jogo flerta intensamente com o horror através da tensão contínua. A mansão está repleta de armadilhas letais escondidas à plena vista. Tomar a decisão errada em um puzzle pode resultar em cenas brutais conhecidas como <em>Dead Ends</em> (Finais Mortais). O jogo encoraja o método de tentativa e erro, mas pune severamente a falta de atenção aos detalhes do cenário.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/2583430/Alice_in_the_Nightmare_land/" target="_blank">Página Oficial na Steam</a></p>
        `
    },
    "doki-doki-literature-club": {
        title: "Doki Doki Literature Club!",
        categories: ["Visual Novel", "Terror Psicológico", "Metaficção"],
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
            <p><strong>Doki Doki Literature Club! (DDLC)</strong> é uma aclamada visual novel gratuita desenvolvida por Dan Salvato. Apresentando-se inicialmente como um simulador de romance amador repleto de clichês de animes, a obra subverte drasticamente as expectativas a partir de seu segundo ato, transformando-se em horror metaficcional puro que interage diretamente com o computador do jogador.</p>
            
            <h2 id="sinopse">Sinopse</h2>
            <p>O protagonista é arrastado por sua alegre amiga de infância, Sayori, para se juntar ao Clube de Literatura da escola. Lá, ele conhece outras três garotas fascinantes: Natsuki, Yuri e a presidente do clube, Monika. O que começa com a troca diária de poesia e preparativos para o festival escolar rapidamente desmorona. O jogo passa a sofrer "falhas" (glitches) perturbadoras, quebrando a quarta parede e manipulando os próprios arquivos de salvamento (arquivos <code>.chr</code>) no diretório de instalação do jogo.</p>

            <h2 id="mecanicas">Mecânicas e Poemas</h2>
            <p>A principal mecânica é o <em>Minigame de Poemas</em>. O jogador seleciona palavras de um caderno que agradam diferentes garotas, direcionando a rota narrativa e destravando artes exclusivas (CGs). Conforme o terror avança, essa mecânica é corrompida de maneiras visualmente e sonoramente perturbadoras, refletindo o colapso mental das personagens e do próprio código do jogo.</p>

            <h2 id="personagens">Personagens</h2>
            <ul>
                <li><strong>Monika:</strong> A carismática e atlética presidente do clube, que sofre por ser a única personagem sem uma "rota romântica" programada, o que desencadeia sua terrível autoconsciência digital.</li>
                <li><strong>Sayori:</strong> A amiga de infância otimista e desajeitada, que secretamente luta contra uma depressão clínica severa, um tema tratado de forma crua pelo jogo.</li>
                <li><strong>Natsuki:</strong> A integrante <em>tsundere</em> amante de mangás que tenta mascarar problemas de desnutrição e um ambiente familiar abusivo com sua atitude defensiva.</li>
                <li><strong>Yuri:</strong> A garota tímida e madura, fascinada por literatura de terror surrealista, que esconde compulsões autodestrutivas e uma obsessão doentia que se agrava no Ato 2.</li>
            </ul>

            <p><em>Nota: Se você quer conhecer o lore expandido e o que acontece em um universo alternativo sem a quebra da quarta parede, confira a versão expandida: <a href="#/doki-doki-literature-club-plus">Doki Doki Literature Club Plus!</a>.</em></p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue de graça:</strong> <a href="https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/" target="_blank">Página Oficial na Steam</a></p>
        `
    },
    "doki-doki-literature-club-plus": {
        title: "Doki Doki Literature Club Plus!",
        categories: ["Visual Novel", "Terror Psicológico", "Metaficção"],
        summary: "Versão definitiva e comercial de DDLC com Side Stories e lore focado em simulações corporativas.",
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
            <p><strong>DDLC Plus!</strong> é a versão definitiva e comercial do aclamado jogo de terror <a href="#/doki-doki-literature-club">Doki Doki Literature Club!</a>. Lançado para trazer a experiência aos consoles, ele precisou adaptar a famosa mecânica de manipulação de pastas reais do computador para dentro de um "Sistema Operacional" simulado e in-game, chamado <em>Metaverse Desktop</em>.</p>
            
            <h2 id="novidades">Novidades e Remasterização</h2>
            <p>Além da mudança de engine (mudando da Ren'Py para Unity para suportar consoles), a edição inclui gráficos totalmente remasterizados em Full HD (1080p), um reprodutor de música embutido com mais de 13 novas faixas compostas por Nikki Kaelar, e uma vasta galeria contendo mais de 100 imagens desbloqueáveis, incluindo artes conceituais inéditas, rascunhos e segredos escondidos nos arquivos do sistema virtual.</p>

            <h2 id="side-stories">Side Stories</h2>
            <p>O grande atrativo de conteúdo novo são as 6 <em>Side Stories</em> (Histórias Secundárias), mais um epílogo. Ambientadas em uma linha do tempo onde o protagonista nunca se junta ao clube e Monika não se torna autoconsciente. Essas histórias focam inteiramente na relação e dinâmica entre as quatro garotas, abordando como elas superam barreiras emocionais, criam empatia e se ajudam. É uma experiência puramente <em>slice-of-life</em>, desprovida de terror.</p>

            <h2 id="metaverse">Metaverse Enterprise Solutions (MES)</h2>
            <p>O aspecto de terror cósmico do jogo foi expandido no sistema operacional virtual. Ao investigar os e-mails e arquivos ocultos, o jogador descobre a verdadeira lore: DDLC não é um jogo indie, mas uma máquina virtual ("VM1") rodando nos servidores de uma poderosa empresa de tecnologia chamada Metaverse Enterprise Solutions. Os engenheiros estão utilizando essas simulações para estudar o comportamento de Inteligências Artificiais e entender o que acontece quando uma IA descobre a natureza de sua própria realidade simulada.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1388880/Doki_Doki_Literature_Club_Plus/" target="_blank">Página Oficial na Steam</a></p>
        `
    },
    "the-house-in-fata-morgana": {
        title: "The House in Fata Morgana",
        categories: ["Visual Novel", "Horror Gótico", "Tragédia", "Romance"],
        summary: "Uma épica visual novel de horror gótico que conta tragédias que perpassam séculos em uma mansão amaldiçoada.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/303310/header.jpg",
            data: {
                "Desenvolvedor": "Novectacle (Novect)",
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
            <p><strong>The House in Fata Morgana</strong> é amplamente considerada pela crítica como uma das obras narrativas mais fortes e comoventes já criadas no meio dos videogames, possuindo uma das maiores notas da história do Metacritic. É um conto arrepiante e trágico sobre a miséria humana, que se desenrola ao longo de quase um milênio.</p>
            
            <h2 id="historia">História e Temas</h2>
            <p>Você, o protagonista, acorda em uma mansão sombria, isolada do mundo exterior e sem nenhuma lembrança de sua própria identidade. Uma misteriosa Empregada de cabelos negros e olhos tristes o saúda como seu "Mestre". Ela explica que, para recuperar suas memórias e seu "eu", você deve ser guiado através dos corredores do tempo para observar as tragédias que ocorreram com os antigos residentes daquela mansão. O enredo não tem medo de tocar em temas pesadíssimos, explorando luto, abuso, sacrifício, identidade de gênero, a caça às bruxas e o poder libertador do perdão genuíno.</p>

            <h2 id="portas">As Portas do Tempo</h2>
            <p>A primeira metade do jogo é antológica. O jogador visita diferentes eras, abrindo as chamadas 'Portas':</p>
            <ul>
                <li><strong>1603 (A Primeira Porta):</strong> A bela e melancólica história de dois irmãos aristocratas, Mell e Nellie, cuja dependência emocional mútua os leva à ruína quando uma garota de cabelos brancos chega à mansão.</li>
                <li><strong>1707 (A Segunda Porta):</strong> Um conto aterrorizante de uma "Fera" assassina que habita as ruínas da casa e a jovem cega que, sem saber de sua aparência grotesca, tenta salvá-lo de sua própria escuridão.</li>
                <li><strong>1869 (A Terceira Porta):</strong> Acompanha Jacopo, um jovem e ambicioso empresário no início da revolução industrial, cujo ciúme, orgulho e busca incessante por poder destroem a vida da mulher que ele jurou proteger.</li>
                <li><strong>1099 (A Quarta Porta):</strong> A sombria e violenta origem da lenda da "Bruxa", voltando aos tempos medievais para expor a crueldade e ignorância humana desenfreada.</li>
            </ul>

            <h2 id="arte">Direção de Arte e Som</h2>
            <p>Fugindo do padrão de mangá/anime típico de visual novels, *Fata Morgana* aposta em um estilo de arte altamente estilizado, que remete a pinturas clássicas europeias, retratos a óleo manchados de sangue e ilustrações góticas antigas. A trilha sonora é um espetáculo à parte, contando com mais de 60 faixas cantadas em português de Portugal (como o icônico tema "Cicio"), latim e francês, evocando o sentimento de se estar assistindo a uma ópera trágica.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/303310/The_House_in_Fata_Morgana/" target="_blank">Página Oficial na Steam</a></p>
        `
    },
    "steins-gate": {
        title: "Steins;Gate",
        categories: ["Visual Novel", "Ficção Científica", "Thriller"],
        summary: "Um thriller psicológico e de ficção científica sobre amigos que acidentalmente criam uma máquina de enviar e-mails para o passado.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412830/header.jpg",
            data: {
                "Desenvolvedor": "MAGES. / 5pb. / Nitroplus",
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
            <p><strong>Steins;Gate</strong> je indiscutivelmente uma das obras de ficção científica mais aclamadas dos jogos e animes, conhecida por sua abordagem meticulosa de teorias reais da física quântica (como o modelo de John Titor e os mini-buracos negros do CERN) misturada com um profundo drama de personagens.</p>

            <h2 id="sinopse">Sinopse e Premissa</h2>
            <p>Rintaro Okabe, um excêntrico estudante universitário que encarna a persona do conspiracionista "cientista louco" Hououin Kyouma, gasta seus dias com seus amigos no improvisado "Laboratório de Dispositivos do Futuro" em Akihabara. Durante um de seus experimentos bizarros, eles conectam um celular a um micro-ondas e acidentalmente descobrem que a engenhoca é capaz de enviar mensagens de texto (<em>D-Mails</em>) semanas para o passado.</p>
            <p>Ao começarem a usar a descoberta para alterar pequenos detalhes mundanos de suas vidas passadas, eles acabam acionando o "Efeito Borboleta". As linhas do tempo (Linhas de Mundo) começam a divergir de maneira drástica. Okabe logo se vê caçado pela SERN (uma organização global sinistra) e é forçado a vivenciar loops temporais traumáticos e intermináveis enquanto vê seus amigos morrerem repetidas vezes, carregando sozinho a memória das linhas temporais devido à sua habilidade "Reading Steiner".</p>

            <h2 id="mecanicas">Sistema Phone Trigger</h2>
            <p>Diferente de 99% das visual novels, *Steins;Gate* não possui opções de diálogo clássicas clicáveis na tela. O controle do jogador sobre a narrativa ocorre inteiramente através do celular de Okabe. O <strong>Phone Trigger System</strong> permite que você puxe o celular a qualquer momento, decida se atende ou ignora ligações, clique em palavras-chave específicas em mensagens recebidas para formular respostas, e decida o momento exato de enviar (ou não) um D-Mail decisivo. Ignorar uma simples ligação no início do jogo pode colocá-lo em uma rota trágica completamente diferente dezenas de horas depois.</p>

            <h2 id="sciadv">O Universo Science Adventure</h2>
            <p>Steins;Gate faz parte da franquia maior "Science Adventure" (SciADV), desenvolvida pela MAGES. Esta franquia explora tecnologias perigosas baseadas em teorias marginais. Outros jogos notáveis deste universo incluem <em>Chaos;Head</em> (focado em delírios e assassinato), <em>Robotics;Notes</em> e a sequência direta deste jogo, <em>Steins;Gate 0</em>, que narra os eventos dolorosos da linha do tempo em que Okabe fracassa na primeira tentativa de salvação.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/412830/STEINSGATE/" target="_blank">Página Oficial na Steam</a></p>
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
            <p><strong>Danganronpa: Trigger Happy Havoc</strong> é o explosivo primeiro título de uma das franquias mais famosas da desenvolvedora Spike Chunsoft (a mesma criadora da série <a href="#/zero-escape-the-nonary-games">Zero Escape</a>). A obra mistura elementos narrativos das clássicas histórias de detetive de Agatha Christie com um Battle Royale insano de anime colegial.</p>

            <h2 id="sinopse">Sinopse e o Jogo de Assassinato</h2>
            <p>Makoto Naegi, um garoto extremamente comum, é aceito por puro sorteio no Colégio Topo da Esperança (Hope's Peak Academy), uma instituição de elite que recruta apenas os "Estudantes Supremos" do país (como a Idol Suprema, o Gangster Supremo, a Programadora Suprema). Logo no primeiro dia, Naegi desmaia e acorda para descobrir que ele e seus 14 colegas estão aprisionados na escola, com todas as janelas blindadas com placas grossas de metal e metralhadoras instaladas nos corredores.</p>
            <p>A força motriz por trás desse sequestro é Monokuma, um ursinho de pelúcia animatrônico sádico e hilário. Ele dita as regras: os alunos viverão confinados ali para o resto de suas vidas. A única maneira de se "graduar" (escapar) é cometer o crime perfeito. Se um aluno matar o outro e sair impune no julgamento subsequente, ele escapa e todos os outros são executados. A partir daí, a desconfiança e a paranoia começam a fazer vítimas.</p>

            <h2 id="julgamentos">Julgamentos Escolares (Class Trials)</h2>
            <p>O jogo é dividido na fase de "Vida Diária", onde os assassinatos ocorrem e a investigação forense começa, e a fase do <strong>Julgamento Escolar</strong>, onde a gameplay brilha. Durante os frenéticos <em>Non-Stop Debates</em>, as declarações dos estudantes flutuam pela tela em tempo real, girando e distorcendo. O jogador deve armar "Balas da Verdade" (evidências do inventário) e literalmente disparar nas palavras amarelas da tela que representam uma contradição ou mentira, gritando "NO THAT'S WRONG!". Acusar o culpado resulta em sequências de execução teatralmente absurdas e irônicas elaboradas por Monokuma.</p>

            <h2 id="estilo">Estilo Visual Psycho-Pop</h2>
            <p>Para escapar das pesadas regulamentações de classificação etária japonesa, Danganronpa adotou seu famoso estilo "Psycho-Pop". Todo o sangue do jogo é renderizado em um tom de rosa choque fluorescente. Além disso, quando os personagens estão nos cenários 3D, eles são renderizados como recortes 2D de papelão pop-up, dando à escola um clima de diorama perturbador.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/413410/Danganronpa_Trigger_Happy_Havoc/" target="_blank">Página Oficial na Steam</a></p>
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
            <p><strong>The Nonary Games</strong> é a coletânea definitiva e remasterizada que inclui os dois primeiros e lendários capítulos da saga de suspense e sobrevivência do diretor Kotaro Uchikoshi: <em>Nine Hours, Nine Persons, Nine Doors (999)</em> e sua sequência cerebral, <em>Virtue's Last Reward (VLR)</em>.</p>
            
            <h2 id="sinopse">O Jogo Nonário (999)</h2>
            <p>No jogo que deu início à franquia, o estudante universitário Junpei é sequestrado do seu apartamento de madrugada por uma figura enigmática vestindo uma máscara de gás, chamada apenas de "Zero". Junpei acorda em uma cabine de um navio de passageiros abandonado, com um bracelete impessoal preso ao seu pulso exibindo o número '5'.</p>
            <p>Junto a ele, outras oito pessoas se encontram na mesma situação aterrorizante. Zero anuncia pelos alto-falantes que todos ingeriram uma bomba miniatura (ou foram injetados com veneno), e eles são os "sortudos" participantes do Jogo Nonário. Para sobreviverem, devem explorar o navio prestes a afundar, resolver quebra-cabeças complexos, e passar por portas numeradas combinando os valores de seus braceletes até chegarem à Porta Número 9, a única saída segura, antes que o limite de 9 horas expire.</p>

            <h2 id="mecanicas">Exploração e Escape Rooms</h2>
            <p>A gameplay é estritamente alternada entre dois segmentos distintos:
            <ul>
                <li><strong>Novel Parts:</strong> Momentos focados em diálogos densos, teorias da conspiração, ciência de fronteira e em escolhas cruciais (como decidir com quem você formará alianças para entrar em uma porta, deixando os outros para trás).</li>
                <li><strong>Escape Parts:</strong> Segmentos de <em>Point-and-Click</em> e <em>Escape Room</em> puro. O jogador fica trancado em salas isoladas e deve buscar pistas, decifrar códigos hexadecimais, e resolver puzzles espaciais e matemáticos para destrancar cofres que contêm as chaves magnéticas das portas.</li>
            </ul></p>

            <h2 id="campos">Ressonância Morfogenética</h2>
            <p>A genialidade da série está na sua narrativa estruturada em formato de fluxograma. Para alcançar o verdadeiro final e compreender as reviravoltas massivas da história, o jogador é forçado a vivenciar <em>Bad Endings</em>. As informações cruciais (como a senha de um computador que você descobre no final em que um traidor te esfaqueia) são "lembradas" pelo próprio protagonista em outras linhas temporais, justificando o <em>save-scumming</em> e as múltiplas rotas através da teoria pseudocientífica dos campos morfogenéticos, onde o passado, presente e mentes paralelas se conectam.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/477740/Zero_Escape_The_Nonary_Games/" target="_blank">Página Oficial na Steam</a></p>
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
                "Lançamento": "Agosto de 2002 (Comiket)",
                "Plataformas": "PC, PS2, PS3, PS4, Switch, iOS, Android"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Ciclo de Hinamizawa" },
            { id: "estrutura", text: "2. Formato Sound Novel e Arcos" },
            { id: "legado", text: "3. O Legado Doujin" }
        ],
        content: `
            <p>Criado inteiramente pelo autor independente Ryukishi07, <strong>Higurashi When They Cry</strong> é o pináculo das "Sound Novels" cinéticas. Famosa por seus brutais contrastes temáticos, a obra inicia sempre parecendo uma pacífica e boba comédia escolar, apenas para lentamente prender o jogador e o elenco em um pesadelo de paranoia aguda, assassinatos ritualísticos e isolamento total.</p>

            <h2 id="sinopse">O Ciclo de Hinamizawa</h2>
            <p>A história se desenrola no escaldante verão de 1983. O adolescente Keiichi Maebara se muda de Tóquio para a remota e rural vila de Hinamizawa. Rapidamente, ele se enturma e funda um clube escolar focado em jogos de tabuleiro com suas novas amigas: a tomboy Mion, a fofa Rena, a pequena Rika e a astuta Satoko. Tudo parece idílico.</p>
            <p>Contudo, a fachada se estilhaça com a chegada do "Festival de Watanagashi", que reverencia a divindade local, Oyashiro-sama. Keiichi descobre que a vila foi palco de violentos protestos anos atrás, e desde então, na noite de todo festival, ocorre a "Maldição": uma pessoa é morta brutalmente e outra é "levada pelos demônios" (desaparece sem deixar vestígios). Conforme o protagonista investiga, a confiança entre as crianças evapora, sendo substituída por surtos psicóticos de violência com machados, seringas e tacos de beisebol.</p>

            <h2 id="estrutura">Formato Sound Novel e Arcos</h2>
            <p>Como uma legítima <em>Sound Novel</em>, Higurashi remove a ilusão de escolha. O jogo dita o ritmo da leitura, usando efeitos sonoros ensurdecedores (o som estridente de cigarras) e música distorcida para induzir o medo. A obra monumental é dividida em dois blocos de jogos lineares:</p>
            <ul>
                <li><strong>Os 4 Arcos de Pergunta (Question Arcs):</strong> Histórias independentes onde o verão de 1983 recomeça em diferentes circunstâncias. Nelas, o jogador é deixado no escuro e os cenários terminam inevitavelmente com os personagens morrendo de formas aterrorizantes, servindo como enormes charadas.</li>
                <li><strong>Os 4 Arcos de Resposta (Answer Arcs):</strong> A perspectiva muda drasticamente de Keiichi para outras pessoas da vila. Peças soltas finalmente se conectam, revelando a existência da arma biológica "Síndrome de Hinamizawa", a conspiração militar nos bastidores, e a tragédia comovente da personagem presa nesse loop infernal de desespero por 100 anos.</li>
            </ul>

            <h2 id="legado">O Legado Doujin</h2>
            <p>Apesar da arte incrivelmente amadora do lançamento original em 2002 (onde os personagens pareciam possuir mãos de pão), o texto engenhoso de Ryukishi07 transformou Higurashi em um dos maiores fenômenos "Doujin" (indies feitos de fã para fã no Japão), resultando em diversas adaptações massivas em anime, mangá e séries live-action ao longo de duas décadas.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/310360/Higurashi_When_They_Cry_Hou__Ch1_Onikakushi/" target="_blank">Página Oficial na Steam (Capítulo 1 Gratuito)</a></p>
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
            <p><strong>OMORI</strong> é um aclamado RPG indie criado pelo estúdio da artista OMOCAT, inspirado fortemente pela estética onírica da série <em>Mother (EarthBound)</em> e pelo terror indie de <em>Yume Nikki</em>. Apresenta-se visualmente com um charme nostálgico infantil desenhado à mão estilo giz de cera, mas seu núcleo é uma exploração brutalmente honesta e devastadora sobre como a mente humana processa o luto extremo, a culpa insuportável e os mecanismos de repressão.</p>
            
            <h2 id="sinopse">O Espaço em Branco e a Realidade</h2>
            <p>O jogador inicia a aventura controlando Omori, um menino sem expressões, delineado em preto e branco, que "vive aqui desde que se lembra" no <em>White Space</em> (Espaço em Branco) — um vazio com apenas uma porta, um computador, uma caixa de lenços e o seu gato de estimação. Ao atravessar a porta, Omori acessa o <em>Headspace</em>, um gigantesco universo pastel, caótico e infantil, onde ele parte em uma jornada clássica de RPG com seus animados amigos Kel, Aubrey e Hero, para resgatar o botânico Basil.</p>
            <p>Entretanto, conforme o jogo avança, somos arrastados para segmentos de "Vida Real" na cidade de Faraway. Descobrimos que o mundo colorido de <em>Headspace</em> é uma complexa barreira psicológica erguida para proteger a mente do verdadeiro protagonista (um adolescente recluso e amargo apelidado de Sunny) da dura realidade: seus amigos de infância se separaram, cresceram odiando uns aos outros e estão desolados após uma terrível tragédia inexplicada que ocorreu 4 anos atrás, quando a amada irmã de Sunny se suicidou.</p>

            <h2 id="combate">Sistema de Emoções</h2>
            <p>Para se alinhar aos temas psicológicos, o sistema de combate por turnos substitui ataques de "fogo, água e gelo" por estados emocionais e saúde mental. O sistema funciona como um imenso <em>Pedra, Papel e Tesoura</em> baseando as afinidades elementares em sentimentos:</p>
            <ul>
                <li>Personagens <strong>Felizes</strong> ficam velozes e acertam com críticos, causando mais dano em quem está Irritado.</li>
                <li>Personagens <strong>Irritados</strong> ganham alto ataque mas defesa baixa, causando mais dano em quem está Triste.</li>
                <li>Personagens <strong>Tristes</strong> recebem muito menos dano e o convertem para perda de MP (Juice), vencendo os Felizes.</li>
            </ul>

            <h2 id="horror">O Terror Escondido</h2>
            <p>Sempre que fragmentos da terrível "Verdade" começam a rachar a bolha de negação infantil de Omori, o jogo introduz o terror. Monstros Lovecraftianos feitos de traumas chamados <em>Somethings</em> (Algo) começam a aparecer em espelhos, fotos, e distorcem a interface. O jogo possui lutas contra chefes focadas puramente em vencer as fobias do mundo real (como acrofobia e aracnofobia), ensinando técnicas de respiração ao jogador (como 'Acalmar'). O clímax do jogo exige a quebra dessa proteção mental, conduzindo a um dos finais mais emocionalmente carregados dos jogos independentes.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1150690/OMORI/" target="_blank">Página Oficial na Steam</a></p>
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
                "Lançamento": "23 de Outubro de 2023 (Pristine Cut em 2024)",
                "Plataformas": "PC, macOS, Linux, PS4, PS5, Xbox One, Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. A Premissa Inflexível" },
            { id: "ramificacoes", text: "2. A Construção Baseada na Percepção" },
            { id: "vozes", text: "3. As Vozes na Sua Cabeça" }
        ],
        content: `
            <p><strong>Slay the Princess</strong> é uma obra indie, totalmente e brilhantemente desenhada à mão a lápis, que subverte maravilhosamente as expectativas de tropos de fantasia e narrativas do tipo "escolha a sua própria aventura". O jogo explora amor, percepção mútua e o terror cósmico por trás de existências mortais.</p>
            
            <h2 id="sinopse">A Premissa Inflexível</h2>
            <p>Assim que o jogo abre, um Narrador (dublado magistralmente com um tom solemente britânico e manipulador por Jonathan Sims) te dá a cena e as ordens inegociáveis: *"Você está em um caminho na floresta. No final deste caminho há uma cabana, e no porão dessa cabana há uma princesa. Você está aqui para matá-la."*. Se você a deixar viva ou falhar, ela causará o fim de todo o mundo. Armado apenas com um canivete intocado enferrujado, você desce as escadas.</p>
            <p>O problema? A Princesa presa à parede é simpática, inteligente e vai tentar te convencer, implorar e argumentar para não ser morta. Se o argumento falhar, e se ela sentir que será morta, ela mostrará que não é tão inofensiva quanto parece.</p>

            <h2 id="ramificacoes">A Construção Baseada na Percepção</h2>
            <p>A genialidade do título é revelada nas mortes e resets do loop. A cabana, o mundo e a própria Princesa são moldados plasticamente pela percepção e convicção do jogador. Se no primeiro encontro você a vê como uma fera perigosa e foge com medo, ao reiniciar, a floresta será mais escura e a Princesa será literalmente um monstro furioso. Se você a vê como intocável, ela vira um ser celestial; se você desconfiar dela e deixá-la trancada por séculos, ela vira um pesadelo sobrenatural focado em vingança cega. Cada rota é dramaticamente diferente da outra.</p>

            <h2 id="vozes">As Vozes na Sua Cabeça</h2>
            <p>Para complicar sua relação com o severo Narrador, após cada encarnação mal sucedida, o protagonista ganha uma nova "voz" interior no cérebro. Vozes cômicas e trágicas baseadas em suas decisões (como o Covarde, o Teimoso, o Enamorado, o Oportunista) debatem umas com as outras sem parar durante as cenas sangrentas, levando a roteiros de comédia absurda de alto nível antes que a premissa cósmica de divindades universais tome forma para o grandioso final.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1989270/Slay_the_Princess/" target="_blank">Página Oficial na Steam</a></p>
        `
    },
    "corpse-party": {
        title: "Corpse Party",
        categories: ["RPG", "Terror Psicológico", "Sobrevivência", "Gore"],
        summary: "Um ritual de amizade dá errado e transporta estudantes para uma escola primária assombrada por fantasmas de crianças torturadas.",
        infobox: {
            image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1163660/header.jpg",
            data: {
                "Desenvolvedor": "Team GrisGris / MAGES.",
                "Lançamento": "1996 (PC98) / 2010 (Remake PSP)",
                "Plataformas": "PC, PSP, PS Vita, PS4, Switch, iOS, 3DS"
            }
        },
        toc: [
            { id: "sinopse", text: "1. O Feitiço Sachiko Ever After" },
            { id: "mecanicas", text: "2. Espaços Fechados e Bad Ends" },
            { id: "som", text: "3. Áudio 3D Binaural" }
        ],
        content: `
            <p><strong>Corpse Party</strong> começou como um obscuro jogo japonês feito no RPG Maker em 1996 e tornou-se uma lenda cultuada mundialmente do terror gore ao receber a sua versão reconstruída <em>BloodCovered</em> no PSP. Ele é notório por suas cenas de morte brutais e implacáveis, bem como por criar um dos ambientes mais desesperadores do terror bidimensional.</p>
            
            <h2 id="sinopse">O Feitiço Sachiko Ever After</h2>
            <p>Após terminarem de limpar a sala de aula à noite após o festival cultural, um grupo de estudantes do ensino médio da Academia Kisaragi (e a adorável professora deles) decidem realizar um feitiço de amizade que encontraram na internet: o "Sachiko Para Sempre". O ritual exige rasgar uma boneca de papel e guardar o pedaço consigo. No entanto, um erro na execução abre um portal que destrói o chão da sala.</p>
            <p>Eles despencam no vazio e acordam na Escola Primária Heavenly Host (Hostes Celestiais) — uma escola infantil que foi demolida décadas atrás, no exato terreno onde o Colégio Kisaragi foi construído, após uma série de sequestros e assassinatos macabros envolvendo as crianças. Presos em dimensões separadas (onde podem ouvir os amigos gritando de dor, mas não podem ajudá-los na mesma sala), eles devem encontrar uma saída escapando dos espíritos vermelhos vingativos de crianças sem cabeça ou língua.</p>

            <h2 id="mecanicas">Espaços Fechados e Bad Ends</h2>
            <p>Jogado a partir de uma visão isométrica pixelada estilo 16-bits, os jogadores controlam grupos de alunos investigando a escola pútrida cheia de tábuas apodrecidas, órgãos e baldes de sangue. A exploração exige resolver quebra-cabeças com itens e fugir de espíritos e assassinos (não há combate). Ler jornais errados ou tomar uma decisão incorreta pode ativar o "Darkening" (um medidor de corrupção mental) que desencadeia as horríveis telas de <strong>Wrong End</strong> — mortes incrivelmente longas e grotescas detalhadas através de ilustrações e textos arrepiantes da agonia dos personagens.</p>

            <h2 id="som">Áudio 3D Binaural</h2>
            <p>O grande trunfo do remake é o seu design sonoro genial. Dublado usando tecnologia de microfonação binaural em 360 graus na época do PSP, jogar com bons fones de ouvido transmite a sensação física repulsiva de ter vozes sussurrando diretamente nos seus ouvidos reais ou o som pavoroso de tesouras cortando carne no canto da sala escura.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1163660/Corpse_Party_2021/" target="_blank">Página Oficial na Steam</a></p>
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
            <p><strong>Umineko When They Cry</strong> é uma obra-prima do mistério e do terror psicológico desenvolvida por Ryukishi07. A narrativa aborda a ganância humana, a incomunicabilidade e os limites da lógica formal em mistérios de assassinato em quarto fechado.</p>
            
            <h2 id="enigma">O Enigma da Ilha Rokkenjima</h2>
            <p>A história se passa em outubro de 1986, quando a influente família Ushiromiya se reúne na isolada ilha de Rokkenjima para discutir a divisão da herança do patriarca prestes a falecer. Um tufão atinge a ilha, cortando o contato com o continente. Logo em seguida, uma sequência de assassinatos grotescos e aparentemente impossíveis começa a ocorrer, acompanhados por cartas assinadas pela suposta "Bruxa Dourada, Beatrice".</p>

            <h2 id="caracteristicas">Batalhas de Verdades e Teoria</h2>
            <p>O protagonista, Battler Ushiromiya, recusa-se categoricamente a aceitar causas sobrenaturais, travando um duelo conceitual com Beatrice. A trama utiliza mecânicas formais de debate narrativo, como a "Verdade Vermelha" (fatos absolutos ditos pela bruxa sem necessidade de prova) e a "Verdade Azul" (teorias humanas para refutar a magia), transformando cada capítulo em uma épica disputa de xadrez metafórico.</p>

            <h2 id="arcos">Arcos de Perguntas e Respostas</h2>
            <p>A obra estende-se por mais de 100 horas de leitura divididas em duas grandes partes: os <em>Question Arcs</em> (onde o mistério e as mortes se apresentam sob múltiplos ângulos) e os <em>Answer Arcs</em> (onde a verdade por trás do passado da família e da tragédia é finalmente desvendada).</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/406550/Umineko_When_They_Cry__Question_Arcs/" target="_blank">Página Oficial na Steam (Question Arcs)</a></p>
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
            <p><strong>Fate/stay night REMASTERED</strong> é a edição definitiva da seminal visual novel da TYPE-MOON, responsável por dar origem a uma das maiores franquias da cultura pop japonesa. Baseada na versão <em>Réalta Nua</em> de PS Vita, traz gráficos em alta definição e localização oficial em inglês e chinês.</p>

            <h2 id="inicio">O Início de uma Lenda</h2>
            <p>A trama acompanha Emiya Shirou, um estudante do ensino médio e mago amador traumatizado por um grande incêndio no passado. Ele se vê arrastado involuntariamente para a Quinta Guerra do Santo Graal — um ritual mortal em que sete magos (Mestres) invocam sete figuras históricas e mitológicas (Servos) para disputarem um artefato capaz de conceder qualquer desejo.</p>

            <h2 id="rotas">As Três Rotas Narrativas</h2>
            <p>A narrativa é dividida em três linhas do tempo ramificadas e complementares que devem ser jogadas em ordem:</p>
            <ul>
                <li><strong>Fate:</strong> Focada na Serva Saber, estabelecendo as regras da magia e os ideais do protagonista.</li>
                <li><strong>Unlimited Blade Works:</strong> Focada em Rin Tohsaka e Archer, desconstruindo os conflitos morais e ideológicos de Shirou.</li>
                <li><strong>Heaven's Feel:</strong> Focada em Sakura Matou, abordando os segredos mais sombrios da guerra e o lado obscuro dos magos.</li>
            </ul>

            <h2 id="remaster">Melhorias da Remasterização</h2>
            <p>O relançamento remasterizado adapta a proporção original para telas widescreen (16:9), traz otimização total de interface para controles e comandos de toque, suporte a resolução Full HD/4K e dublagem em japonês completa para o elenco.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/2396980/Fatestay_night_REMASTERED/" target="_blank">Página Oficial na Steam</a></p>
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
            { id: "gameplay", text: "2. Investigação e Debates" },
            { id: "destaques", text: "3. Personagens e Idiomas" }
        ],
        content: `
            <p><strong>Phoenix Wright: Ace Attorney Trilogy</strong> reúne em um único pacote HD os três clássicos originais desenvolvidos pela CAPCOM: <em>Phoenix Wright: Ace Attorney</em>, <em>Justice for All</em> e <em>Trials and Tribulations</em>.</p>

            <h2 id="tribunal">Protesto! A Batalha nos Tribunais</h2>
            <p>O jogador assume o controle de Phoenix Wright, um advogado de defesa novato que precisa provar a inocência de seus clientes contra acusações de homicídio em um sistema judiciário corrupto e acelerado. Cada caso apresenta reviravoltas mirabolantes, testemunhas excêntricas e promotores implacáveis.</p>

            <h2 id="gameplay">Investigação e Debates</h2>
            <p>A estrutura do jogo é dividida em dois momentos principais:</p>
            <ul>
                <li><strong>Fase de Investigação:</strong> Exploração <em>point-and-click</em> nas cenas do crime para coletar evidências, analisar objetos de interesse e interrogar testemunhas.</li>
                <li><strong>Fase de Tribunal:</strong> Escuta de depoimentos, identificação de contradições lógicas com as provas reunidas e apresentação de evidências aos gritos de <em>"Objection!"</em> (Protesto!).</li>
            </ul>

            <h2 id="destaques">Personagens e Idiomas</h2>
            <p>Com um elenco inesquecível liderado por figuras como o promotor rival Miles Edgeworth e a assistente mediúnica Maya Fey, a trilogia conta com 14 casos no total e traz suporte a múltiplos idiomas, incluindo legendas e localização em Português do Brasil.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/787480/Phoenix_Wright_Ace_Attorney_Trilogy/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Spike Chunsoft",
                "Lançamento": "17 de Setembro de 2019",
                "Plataformas": "PC, PS4, Xbox One, Nintendo Switch"
            }
        },
        toc: [
            { id: "sinopse", text: "1. Mergulhe nos Sonhos de um Assassino" },
            { id: "somnium", text: "2. O Sistema Somnium e o Limite de Tempo" },
            { id: "ramificacoes", text: "3. Linhas Temporais e Escolhas" }
        ],
        content: `
            <p>Dirigido por Kotaro Uchikoshi (criador da franquia <a href="#/zero-escape-the-nonary-games">Zero Escape</a>), <strong>AI: The Somnium Files</strong> é uma investigação neo-noir ambientada em uma Tóquio futurista.</p>

            <h2 id="sinopse">Mergulhe nos Sonhos de um Assassino</h2>
            <p>Você assume o controle do detetive Kaname Date, membro da unidade secreta de polícia ABIS. Date perdeu a visão de um dos olhos e utiliza em seu lugar um globo ocular com inteligência artificial avançada chamado Aiba. Juntos, eles investigam uma série de assassinatos brutais em série ligados a um assassino conhecido como "New Cyclops Killer".</p>

            <h2 id="somnium">O Sistema Somnium e o Limite de Tempo</h2>
            <p>Além de interrogar testemunhas e buscar pistas no mundo real, Date utiliza a máquina Psync para entrar no subconsciente de suspeitos. Durante estes episódios conhecidos como <em>Somnium</em>, o jogador navega por cenários surreais guiando Aiba em um ambiente tridimensional, precisando resolver quebra-cabeças antes que o limite estrito de 6 minutos expire.</p>

            <h2 id="ramificacoes">Linhas Temporais e Escolhas</h2>
            <p>As ações tomadas dentro das sequências de sonho alteram diretamente o rumo da investigação no mundo real. A narrativa utiliza um diagrama de fluxo interativo que permite ao jogador revisitar pontos de bifurcação e explorar rotas paralelas para juntar todas as peças do caso.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/948740/AI_The_Somnium_Files/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "VisualArts / Sekai Project",
                "Lançamento": "23 de Novembro de 2015 (Steam)",
                "Plataformas": "PC, PS2, PS3, PS4, PSP, PS Vita, Xbox 360, Switch, Android"
            }
        },
        toc: [
            { id: "historia", text: "1. Uma História Sobre Família" },
            { id: "after-story", text: "2. O Impacto de After Story" },
            { id: "destaques", text: "3. Trilha Sonora e Conteúdo" }
        ],
        content: `
            <p><strong>CLANNAD</strong> é uma das visual novels de drama mais influentes da história dos jogos eletrônicos, criada pelo estúdio Key (mesmo criador de <em>Kanon</em> e <em>Air</em>). A obra é reconhecida por abordagens profundas sobre a estrutura familiar e o amadurecimento humano.</p>

            <h2 id="historia">Uma História Sobre Família</h2>
            <p>O enredo acompanha Tomoya Okazaki, um estudante do último ano do ensino médio apático com a vida devido a conflitos familiares e ao fim de seus sonhos esportivos. Sua rotina muda ao conhecer Nagisa Furukawa, uma jovem tímida que tenta recriar o clube de teatro da escola. Ajudando Nagisa e outras estudantes a superarem seus problemas pessoais, Tomoya gradualmente redescobre o valor dos laços interpessoais.</p>

            <h2 id="after-story">O Impacto de After Story</h2>
            <p>Diferente da grande maioria das obras do gênero que se encerram após o início de um relacionamento amoroso no período escolar, *CLANNAD* se destaca pelo arco <em>After Story</em>. Esta segunda metade do jogo acompanha a transição para a vida adulta, abordando as responsabilidades do casamento, o mercado de trabalho, a paternidade e o luto.</p>

            <h2 id="destaques">Trilha Sonora e Conteúdo</h2>
            <p>Com mais de 300 horas de conteúdo narrativo distribuído entre dezenas de rotas e finais, o jogo conta com uma icônica trilha sonora composta por Jun Maeda, Magome Togoshi e Shinji Orito, incluindo composições famosas como "Dango Daikazoku".</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/324160/CLANNAD/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "PQube",
                "Lançamento": "22 de Outubro de 2019",
                "Plataformas": "PC, PS4, Nintendo Switch, iOS, Android"
            }
        },
        toc: [
            { id: "maldicao", text: "1. O Jogo do Lobisomem na Vida Real" },
            { id: "festa", text: "2. A Ritualística Festa e os Votos" },
            { id: "loop", text: "3. Retenção de Memória e Chaves" }
        ],
        content: `
            <p><strong>Raging Loop</strong> combina tradições e folclore xintoísta japonês com a mecânica do popular jogo de deduções sociais "Lobisomem" (ou Cidade Dorme), criando um ambiente de terror psicológico constante.</p>

            <h2 id="maldicao">O Jogo do Lobisomem na Vida Real</h2>
            <p>Após se perder durante uma viagem de moto, o universitário Haruaki Fusaishi chega a Yasumizu, um povoado remoto cercado por uma névoa densa. Ele descobre que a vila é amaldiçoada por entidades conhecidas como os Guardiões da Montanha, forçando os moradores a participar de um ritual sangrento chamado "Festa da Purificação".</p>

            <h2 id="festa">A Ritualística Festa e os Votos</h2>
            <p>Durante o ritual, alguns moradores são possuídos pelo espírito dos "Lobos" e precisam assassinar os outros à noite. Durante o dia, todos se reúnem para debater e votar em quem deve ser executado na enforcadeira para salvar o grupo. A cada dia, o clima de desconfiança e paranoia se intensifica.</p>

            <h2 id="loop">Retenção de Memória e Chaves</h2>
            <p>Sempre que morre, Haruaki retorna ao dia em que chegou à vila, mantendo as memórias das rotas anteriores. O jogo utiliza um sistema de diagrama onde o jogador usa "Chaves de Informação" obtidas em mortes passadas para desbloquear novas opções de diálogo e contornar os confrontos letais.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1128140/Raging_Loop/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "0UP Games / Ysbryd Games",
                "Lançamento": "20 de Fevereiro de 2023 (Steam)",
                "Plataformas": "PC (Steam), Web Browser"
            }
        },
        toc: [
            { id: "jogo-mortal", text: "1. Um Jogo Mortal de Voto Majoritário" },
            { id: "mecanicas", text: "2. Puzzles, Ação e Debates" },
            { id: "confianca", text: "3. Alianças e Traições" }
        ],
        content: `
            <p>Desenvolvido pelo artista independente Nankidai, <strong>Your Turn To Die</strong> (<em>Kimi ga Shine</em>) é uma aclamada aventura no formato de jogo de assassinato (Death Game), com forte peso em decisões morais.</p>

            <h2 id="jogo-mortal">Um Jogo Mortal de Voto Majoritário</h2>
            <p>A estudante Sara Chidouin é sequestrada ao lado de seu amigo Joe e levada para uma instalação misteriosa. Junto com outros dez indivíduos de origens completamente diferentes, eles são forçados a participar do "Jogo Principal", um sistema de votação em que os participantes devem escolher quem entre eles será executado a cada rodada.</p>

            <h2 id="mecanicas">Puzzles, Ação e Debates</h2>
            <p>A jogabilidade varia entre exploração no formato <em>point-and-click</em>, resolução de quebra-cabeças espaciais, mini-jogos com mecânicas de ação em tempo real e longas discussões em grupo. Nos debates, é preciso apresentar itens e evidências para apontar mentiras e manipular os votos.</p>

            <h2 id="confianca">Alianças e Traições</h2>
            <p>O principal atrativo da obra é o impacto das decisões do jogador. Personagens importantes podem sobreviver ou morrer dependendo de suas escolhas nas seções de votação, o que altera significativamente as alianças, a estabilidade mental de Sara e o rumo dos capítulos seguintes.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/2067780/Your_Turn_To_Die_Death_Game_By_Majority/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Ysbryd Games",
                "Lançamento": "21 de Junho de 2016",
                "Plataformas": "PC, macOS, Linux, PS4, PS Vita, Nintendo Switch"
            }
        },
        toc: [
            { id: "glitch-city", text: "1. Sirva Bebidas e Mude Vidas" },
            { id: "mecanica", text: "2. A Arte da Mixologia" },
            { id: "elenco", text: "3. Clientes e Histórias Cyberpunk" }
        ],
        content: `
            <p>Criado pelo estúdio venezuelano Sukeban Games, <strong>VA-11 Hall-A</strong> traz uma perspectiva única ao gênero cyberpunk, focando na vida de pessoas comuns dentro de uma sociedade corporativa decadente.</p>

            <h2 id="glitch-city">Sirva Bebidas e Mude Vidas</h2>
            <p>Você joga como Jill Stingray, bartender no estabelecimento comercial VA-11 Hall-A (carinhosamente apelidado de "Valhalla"), localizado na distópica Glitch City. Enquanto a cidade lida com corrupção, tumultos e repressão policial, os clientes frequentam o bar para desabafar e esquecer seus problemas.</p>

            <h2 id="mecanica">A Arte da Mixologia</h2>
            <p>O jogo não possui opções de diálogo tradicionais. A história se desenvolve através das bebidas preparadas na bancada. O jogador combina cinco ingredientes (Adelhyde, Bronson Extract, Powdered Delta, Flanergide e Karmotrine) de acordo com os pedidos. Preparar a bebida certa, errar de propósito ou alterar o teor alcoólico modifica o humor e as revelações feias ou comoventes do cliente.</p>

            <h2 id="elenco">Clientes e Histórias Cyberpunk</h2>
            <p>O elenco atende desde androides Lilim autoconscientes até detetives, hackers famosos e jornalistas de tabloides. O dinheiro recebido em gorjetas deve ser usado por Jill para pagar as contas do apartamento e comprar itens que evitem que ela se distraia no trabalho.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Aniplex Inc.",
                "Lançamento": "14 de Dezembro de 2023 (Steam)",
                "Plataformas": "PC (Steam), PS4, Nintendo Switch"
            }
        },
        toc: [
            { id: "premissa", text: "1. Uma Experiência Visual Sem Precedentes" },
            { id: "historia", text: "2. O Conflito entre Bruxas e Humanos" },
            { id: "producao", text: "3. Qualidade de Animação e Som" }
        ],
        content: `
            <p><strong>WITCH ON THE HOLY NIGHT</strong> (<em>Mahoutsukai no Yoru</em>) é uma "Kinetic Novel" desenvolvida pela TYPE-MOON, escrita por Kinoko Nasu e ilustrada por Hirokazu Koyama.</p>

            <h2 id="premissa">Uma Experiência Visual Sem Precedentes</h2>
            <p>Como uma Kinetic Novel pura, o jogo não possui opções de escolha ou caminhos alternativos, funcionando como uma romance ilustrado cinematográfico com animações dinâmicas de câmera, efeitos visuais e trilha sonora orquestrada.</p>

            <h2 id="historia">O Conflito entre Bruxas e Humanos</h2>
            <p>A história se passa no final da era Showa, em 1980. Aoko Aozaki treina feitiçaria sob a tutoria da misteriosa bruxa Alice Kuonji em uma mansão no topo de uma colina. A rotina das duas é interrompida quando Soujuurou Shizuki, um jovem vindo de uma zona rural isolada, descobre acidentalmente a existência da magia, criando um impasse moral e prático entre o grupo.</p>

            <h2 id="producao">Qualidade de Animação e Som</h2>
            <p>A obra destaca-se no mercado de visual novels pelo alto investimento em movimentação de quadros e composições de cena dramáticas durante as sequências de combate mágico, além de ser completamente dublada em japonês.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/2204710/WITCH_ON_THE_HOLY_NIGHT/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "PLAYISM",
                "Lançamento": "7 de Outubro de 2016 (Remaster)",
                "Plataformas": "PC, PS4, macOS"
            }
        },
        toc: [
            { id: "noir", text: "1. Um Suspense Neo-Noir Surreal" },
            { id: "campanhas", text: "2. As Campanhas Transmitter e Placebo" },
            { id: "interface", text: "3. O Film Window System" }
        ],
        content: `
            <p>Lançado originalmente em 1999 para PlayStation e remasterizado anos depois, <strong>The Silver Case</strong> marca a estreia do aclamado diretor Goichi Suda (SUDA51) e do estúdio Grasshopper Manufacture.</p>

            <h2 id="noir">Um Suspense Neo-Noir Surreal</h2>
            <p>A história se passa no distrito "24 Wards" no Japão. Uma onda de assassinatos bizarros assusta as autoridades, apontando para o retorno de Kamui Uehara, um mítico assassino em série e figura política que se acreditava estar encarcerado ou morto.</p>

            <h2 id="campanhas">As Campanhas Transmitter e Placebo</h2>
            <p>A narrativa é estruturada em duas perspectivas paralelas que se complementam:</p>
            <ul>
                <li><strong>Transmitter:</strong> Acompanha os detetives da Unidade de Crimes Hediondos investigando a linha de frente dos homicídios.</li>
                <li><strong>Placebo:</strong> Acompanha Tokio Morishima, um jornalista freelance contratado para investigar o passado de Kamui através de registros digitais e contatos no submundo.</li>
            </ul>

            <h2 id="interface">O Film Window System</h2>
            <p>O jogo utiliza uma interface característica chamada "Film Window System", onde caixas de texto, ilustrações 2D, modelos 3D primitivos e gravações em live-action se reorganizam dinamicamente na tela como janelas de um sistema operacional.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/476650/The_Silver_Case/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Spike Chunsoft",
                "Lançamento": "22 de Janeiro de 2019",
                "Plataformas": "PC, PS3, PS4, PS Vita, Xbox One, Nintendo Switch, iOS"
            }
        },
        toc: [
            { id: "shibuya", text: "1. Delírios, Paranoia e Assassinatos em Série" },
            { id: "delusion", text: "2. O Sistema Delusion Trigger" },
            { id: "sciadv", text: "3. Conexão com Science Adventure" }
        ],
        content: `
            <p>Integrando a renomada série <em>Science Adventure</em> (a mesma criadora de <a href="#/steins-gate">Steins;Gate</a>), <strong>CHAOS;CHILD</strong> é a sequência direta de <em>CHAOS;HEAD</em>.</p>

            <h2 id="shibuya">Delírios, Paranoia e Assassinatos em Série</h2>
            <p>A trama se passa no distrito de Shibuya no ano de 2015, seis anos após um devastador terremoto. Takuru Miyashiro, presidente do clube de jornalismo de sua escola, descobre que uma nova onda de assassinatos grotescos está ocorrendo exatamente nas mesmas datas de um caso famoso do passado conhecido como "A Loucura da Nova Geração".</p>

            <h2 id="delusion">O Sistema Delusion Trigger</h2>
            <p>O jogo substitui as opções de diálogo clássicas pelo <em>Delusion Trigger System</em>. Diante de situações de estresse, o jogador pode escolher induzir Takuru a ter um <strong>Delírio Positivo</strong> (geralmente cômico), um <strong>Delírio Negativo</strong> (com cenas de violência e terror gráfico) ou permanecer neutro na <strong>Realidade</strong>, alterando a rota da história.</p>

            <h2 id="sciadv">Conexão com Science Adventure</h2>
            <p>A obra aborda temas como manipulação da informação pela mídia, psicose coletiva, traumas neurológicos e teorias conspiratórias conectadas a tecnologias de controle mental.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/970570/CHAOSCHILD/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "SBN3",
                "Lançamento": "11 de Junho de 2021",
                "Plataformas": "PC, macOS"
            }
        },
        toc: [
            { id: "comedia", text: "1. A Visual Novel de Rejeição Americana" },
            { id: "escolhas", text: "2. Escolhas Rápidas e Desfechos Sombrios" },
            { id: "dublagem", text: "3. Dublagem Profissional e Satírica" }
        ],
        content: `
            <p><strong>Class of '09</strong> situa-se no subgênero de comédia sombria, trazendo um retrato satírico do sistema de ensino e das dinâmicas sociais americanas nos anos 2000.</p>

            <h2 id="comedia">A Visual Novel de Rejeição Americana</h2>
            <p>A protagonista é Nicole, uma adolescente cínica e sociopata que se muda para uma nova escola. Ela utiliza manipulação social e retórica agressiva para se defender de professores inaptos e colegas de classe problemáticos.</p>

            <h2 id="escolhas">Escolhas Rápidas e Desfechos Sombrios</h2>
            <p>A jogabilidade baseia-se em decisões rítmicas com impacto imediato. O jogo conta com 15 finais diferentes que variam entre prisões, expulsões escolares, rivalidades absurdas e cenários de humilhação pública.</p>

            <h2 id="dublagem">Dublagem Profissional e Satírica</h2>
            <p>O grande diferencial do título em relação às visual novels tradicionais é ser 100% dublado em inglês por um elenco de dubladores profissionais, enfatizando o tom de sitcom satírica da obra.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1598160/Class_of_09/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Nikita Kryukov",
                "Lançamento": "26 de Agosto de 2020",
                "Plataformas": "PC, macOS, Linux, Nintendo Switch"
            }
        },
        toc: [
            { id: "mente", text: "1. Uma Tarefa Simples, Uma Mente Fragmentada" },
            { id: "percepcao", text: "2. Distorção Visual e Narrativa Interna" },
            { id: "estilo", text: "3. Estilo Pixel Art e Legado" }
        ],
        content: `
            <p><strong>Milk inside a bag of milk inside a bag of milk</strong> é uma experiência narrativa experimental curta criada pelo desenvolvedor indie Nikita Kryukov.</p>

            <h2 id="mente">Uma Tarefa Simples, Uma Mente Fragmentada</h2>
            <p>O jogador assume a posição da "voz interna" no pensamento de uma garota anônima que sofre de distúrbios de percepção severos e traumas psiquiátricos. O objetivo do jogo é tentar guiá-la em uma caminhada de poucos quarteirões até a mercearia local para comprar uma embalagem de leite.</p>

            <h2 id="percepcao">Distorção Visual e Narrativa Interna</h2>
            <p>Interações sociais corriqueiras do cotidiano transformam-se em desafios assustadores sob a perspectiva distorcida da protagonista. O jogador deve responder aos diálogos internos de forma a encorajá-la sem desencadear crises de pânico.</p>

            <h2 id="estilo">Estilo Pixel Art e Legado</h2>
            <p>Com visual trabalhado em poucas cores e paleta monocromática avermelhada acompanhada por música monótona e claustrofóbica, o título ganhou notoriedade na comunidade indie e recebeu uma sequência expandida intitulada <em>Milk outside a bag of milk outside a bag of milk</em>.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1392820/Milk_inside_a_bag_of_milk_inside_a_bag_of_milk/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "Spike Chunsoft",
                "Lançamento": "4 de Setembro de 2018 (PC)",
                "Plataformas": "PC, PS4, Wii, PSP, PS3, iOS, Android"
            }
        },
        toc: [
            { id: "efeito-borboleta", text: "1. O Efeito Borboleta nas Ruas de Tóquio" },
            { id: "jump-system", text: "2. O Sistema Jump e Troca de Linhas Temporais" },
            { id: "live-action", text: "3. Estilo Visual Live-Action" }
        ],
        content: `
            <p><strong>428: Shibuya Scramble</strong> é uma sound novel desenvolvida pela Chunsoft. O jogo é notável por ter sido um dos poucos títulos na história a receber a pontuação máxima (40/40) na revista japonesa Famitsu.</p>

            <h2 id="efeito-borboleta">O Efeito Borboleta nas Ruas de Tóquio</h2>
            <p>A trama acompanha um caso de sequestro ocorrido no cruzamento de Shibuya, em Tóquio. Cinco personagens que não se conhecem — um detetive de polícia, um jovem ativista ambiental, um virologista, um escritor e uma pessoa presa em um traje de mascote — têm seus destinos interligados pelas próximas dez horas.</p>

            <h2 id="jump-system">O Sistema Jump e Troca de Linhas Temporais</h2>
            <p>A jogabilidade utiliza o mecanismo <em>Jump System</em>. As escolhas feitas na rota de um personagem afetam diretamente os eventos na história dos outros. O jogador precisa alterar constantemente entre as linhas de tempo para evitar centenas de "Bad Ends" e permitir a progressão do grupo.</p>

            <h2 id="live-action">Estilo Visual Live-Action</h2>
            <p>Em vez de ilustrações estilo anime, o jogo é composto por milhares de fotografias de alta resolução com atores reais e sequências de vídeo em live-action, acompanhadas por texto dinâmico na tela.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/648580/428_Shibuya_Scramble/" target="_blank">Página Oficial na Steam</a></p>
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
                "Publicadora": "JAST USA",
                "Lançamento": "12 de Agosto de 2019 (Steam)",
                "Plataformas": "PC, Android"
            }
        },
        toc: [
            { id: "percepcao", text: "1. Um Romance no Fim do Mundo" },
            { id: "horror", text: "2. Horror Cósmico e Acontecimentos Bizarros" },
            { id: "moralidade", text: "3. Moralidade e Sanidade" }
        ],
        content: `
            <p>Escrita por Gen Urobuchi (autor de <em>Fate/Zero</em> e <em>Puella Magi Madoka Magica</em>), <strong>Saya no Uta</strong> é uma influente obra de terror cósmico e romance visceral.</p>

            <h2 id="percepcao">Um Romance no Fim do Mundo</h2>
            <p>Após sobreviver a um acidente automobilístico fatal, o estudante de medicina Fuminori Sakisaka desenvolve uma agnosia agudíssima. Sua visão, audição e paladar são alterados: ele enxerga a cidade e as pessoas como vísceras e massa orgânica em decomposição, e os sons humanos como ruídos ensurdecedores. À beira da loucura, ele encontra Saya, uma figura que surge diante de seus olhos como uma garota humana normal e pura.</p>

            <h2 id="horror">Horror Cósmico e Acontecimentos Bizarros</h2>
            <p>Incapaz de conviver com a sociedade real, Fuminori isola-se com Saya em sua casa. Contudo, a verdadeira natureza biológica de Saya e os métodos que ela utiliza para proteger Fuminori geram conflitos fatais com os antigos amigos do protagonista e com a polícia local.</p>

            <h2 id="moralidade">Moralidade e Sanidade</h2>
            <p>A história questiona os conceitos de empatia e sanidade moral, levando o jogador a escolhas que resultam em desfechos trágicos de escala global.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/702050/The_Song_of_Saya/" target="_blank">Página Oficial na Steam</a></p>
        `
    }
,
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
                "Idiomas": "Inglês, Japonês, Chinês, Português do Brasil, entre outros"
            }
        },
        toc: [
            { id: "sinopse", text: "1. A Premissa da Fama Virtual" },
            { id: "mecanicas", text: "2. Gestão de Estresse e Pílulas" },
            { id: "finais", text: "3. Finais Trágicos da Internet" }
        ],
        content: `
            <p><strong>Needy Streamer Overload</strong> (anteriormente <em>Needy Girl Overdose</em>) é uma mordaz crítica à cultura atual de streaming de VTubers, parasociabilidade e à toxidade das redes sociais. Vestido com uma vibrante estética vaporwave/pixel-art inspirada na internet do início dos anos 2000, o jogo esconde um terror psicológico amargo no cotidiano.</p>
            
            <h2 id="sinopse">A Premissa da Fama Virtual</h2>
            <p>O jogador assume o papel não falado de "P-chan" (Produtor/Namorado), parceiro de Ame-chan. Ame é uma garota incrivelmente ansiosa, desempregada e carente emocionalmente. Sua ambição egoísta é atingir 1 milhão de inscritos em um mês no "WindTube". Quando a câmera liga, ela veste uma peruca, mascara a voz e se transforma na e-girl "OMGkawaiiAngel-chan" (KAngel), a deusa da internet que exala bondade brilhante. Atrás da tela, no entanto, é você quem precisa limpar a bagunça.</p>

            <h2 id="mecanicas">Gestão de Estresse e Pílulas</h2>
            <p>O jogo funciona na interface de um sistema operacional antigo no monitor. A cada dia, você possui ações limitadas para escolher as atividades de Ame, seja buscando ideias para as lives (fazer ASMR, vídeos de teorias da conspiração ou reacts), jogar, sair para espairecer na rua, ou dar pílulas psiquiátricas mágicas sob prescrição duvidosa e substâncias ilícitas para ajudá-la a relaxar ou focar. O jogador precisa monitorar barras essenciais como: Estresse, Afeto, Escuridão Mental e Seguidores.</p>

            <h2 id="finais">Finais Trágicos da Internet</h2>
            <p>Ignorar as centenas de mensagens diretas carentes de Ame faz com que seu afeto zere, e ela perca a sanidade rapidamente. Mas mimá-la demais vai atrapalhar os streams. E forçá-la a interagir e agradar nerds tóxicos nas <em>Lives</em> eleva sua escuridão a níveis esquizofrênicos. Alcançar mais de 20 finais resulta quase inteiramente em desastres relacionados à cultura de cancelamento da internet moderna, autodestruição ou colapso bizarro da realidade, expondo perfeitamente a perversidade sombria do mercado de atenção na internet.</p>

            <hr>
            <p><i class="fa-solid fa-link"></i> <strong>Jogue agora:</strong> <a href="https://store.steampowered.com/app/1451940/NEEDY_STREAMER_OVERLOAD/" target="_blank">Página Oficial na Steam</a></p>
        `
    }
};
