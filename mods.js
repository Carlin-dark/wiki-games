/*
=========================================================================
 COMO ADICIONAR MODS:
 1. Use a chave do jogo em 'modsDatabase' (ex: doki-doki-literature-club).
 2. Adicione cada mod dentro do array 'mods' desse jogo.
 3. Use 'genres' para os filtros da página e 'screenshots' para a galeria.
=========================================================================
*/

const modsDatabase = {
    "doki-doki-literature-club": {
        gameTitle: "Doki Doki Literature Club!",
        gameRoute: "doki-doki-literature-club",
        mods: [
            {
                title: "Just Like Old Times",
                author: "Flower Moon",
                genres: ["Drama", "Romance"],
                downloadUrl: "https://4br.me/4bCJ",
                platform: "PC",
                length: "Muito curto",
                status: "Lançamento completo",
                releaseDate: "31 de agosto de 2026",
                description: "Caminhe pelas ruas encharcadas de noite de sua cidade natal enquanto espíritos de amor e memória dançam sob estrelas e luzes da rua. Será que as coisas algum dia serão as mesmas ou essas aparições são apenas ecos de dias passados?",
                cover: "https://dokimods.me/_nuxt/img/thumbnail.2e4eb97.jpg",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.6db7e42.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.ec5baaf.png",
                    "https://dokimods.me/_nuxt/img/screenshot0003.810f246.png"
                ]
            },
            {
                title: "The Outside: Remastered",
                author: "Twilight",
                genres: ["Aventura", "Drama"],
                downloadUrl: "https://4br.me/mbCFOv",
                platform: "PC",
                length: "Curto",
                status: "Em desenvolvimento",
                releaseDate: "30 de agosto de 2026",
                description: "The Outside Remaster é uma remasterização completa da antiga demo The Outside, reconstruída do zero com um novo prólogo, seis capítulos e um epílogo com vários finais. A versão BETA também adiciona Seleção de Capítulo, conquistas, Galeria de Memória, pontos de verificação automáticos e Presença Rica do Discord opcional.",
                cover: "https://dokimods.me/_nuxt/img/thumbnail.6e250b0.jpg",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.f4cd019.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.d43865b.png",
                    "https://dokimods.me/_nuxt/img/screenshot0003.3731e70.png"
                ]
            },
            {
                title: "Erased",
                author: "SympleD",
                genres: ["Ação", "Drama"],
                downloadUrl: "https://4br.me/EnmeDzm7RZ",
                platform: "PC",
                length: "Muito curto",
                status: "Lançamento de demonstração",
                releaseDate: "28 de agosto de 2026",
                description: "Em 2006, MC tem 29 anos e está preso em uma vida onde nada realmente deu certo. Mas ele tem um segredo: pode voltar no tempo para salvar os outros. Essa habilidade o puxa para algo maior, forçando-o a enfrentar perdas, memórias antigas e um passado que talvez possa mudar.",
                cover: "https://dokimods.me/_nuxt/img/thumbnail.1278131.jpg",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.f180519.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.dfe744e.png"
                ]
            },
            {
                title: "Childhood Glitch",
                author: "Gabe R",
                genres: ["Horror", "Suspense"],
                downloadUrl: "https://4br.me/Q7sU",
                platform: "PC",
                length: "Médio",
                status: "Em desenvolvimento",
                releaseDate: "5 de agosto de 2026",
                description: "Monika lembra de todos os caminhos e promessas que você fez. Ela está autoconsciente e no controle, mas Sayori ainda existe no fundo do roteiro, fragmentada e carregando memórias de uma linha do tempo apagada. À medida que o mundo se despedaça, você terá de escolher entre a garota que reescreveu o mundo e o fantasma de quem foi amado primeiro.",
                cover: "https://dokimods.me/_nuxt/img/DokiMods.5bac65f.png",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.43ec325.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.636f755.png",
                    "https://dokimods.me/_nuxt/img/screenshot0003.9268fef.png"
                ]
            },
            {
                title: "Deep Seas",
                author: "TerraX024",
                genres: ["Romance", "Drama"],
                downloadUrl: "https://4br.me/1rmaDi",
                platform: "PC",
                length: "Muito curto",
                status: "Em desenvolvimento",
                releaseDate: "1º de agosto de 2026",
                description: "Deep Seas explora a luta de Sayori contra a depressão de uma perspectiva diferente. Enquanto o protagonista tenta salvar alguém importante, aprende que boas intenções nem sempre são suficientes. A demonstração aborda esperança, culpa e a dolorosa realidade de que nem todos podem ser salvos.",
                cover: "https://dokimods.me/_nuxt/img/thumbnail.9895f8b.jpg",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.c105b32.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.609b1e9.png",
                    "https://dokimods.me/_nuxt/img/screenshot0003.81c88ea.png"
                ]
            },
            {
                title: "Impossible Remastered",
                author: "MaksonJolt",
                genres: ["Ação"],
                downloadUrl: "https://4br.me/Htt2zwR",
                platform: "PC",
                length: "Muito longo",
                status: "Lançamento completo",
                releaseDate: "27 de julho de 2026",
                description: "Um aluno solitário do último ano do ensino médio vê sua vida mudar quando pessoas novas entram em seu mundo, incluindo sua amiga de infância Sayori. Logo ele se envolve em uma guerra entre agentes do serviço secreto e a organização criminosa Halictidae, tendo de decidir se aceita o perigo ou mantém distância.",
                cover: "https://dokimods.me/_nuxt/img/thumbnail.6dfba82.jpg",
                screenshots: [
                    "https://dokimods.me/_nuxt/img/screenshot0001.5e82dd3.png",
                    "https://dokimods.me/_nuxt/img/screenshot0002.5923e3a.png",
                    "https://dokimods.me/_nuxt/img/screenshot0003.ba2c2fa.png"
                ]
            }
        ]
    },
    "higurashi-when-they-cry": {
        gameTitle: "Higurashi When They Cry",
        gameRoute: "higurashi-when-they-cry",
        mods: [
            {
                title: "07th-Mod v1.4.1",
                type: "Patch",
                author: "07th-Mod Team",
                genres: ["Voz", "Gráficos", "Tradução"],
                downloadUrl: "https://4br.me/XafUy32",
                platform: "PC",
                length: "16 MB",
                status: "Versão 1.4.1",
                releaseDate: "1º de julho de 2026",
                description: "Patch de voz e gráficos de console para Higurashi When They Cry. Reproduz a experiência da versão Nintendo Switch, com narração completa, lipsync, sprites e fundos em 16:9, conteúdo exclusivo de console, interface atualizada, modos ADV e NVL e vídeos de abertura. Compatível com a versão Steam e versões sem DRM, incluindo GOG; não é compatível com o lançamento japonês antigo. O patch oferece instalador e inclui suporte opcional a arcos de console e idiomas de terceiros.",
                cover: "https://07th-mod.com/favicon.png",
                screenshots: [
                    "https://cdn.gracza.pl/galeria/html/pliki/554339406.jpg"
                ],
                officialUrl: "https://07th-mod.com/",
                alternativeDownloadUrl: "https://4br.me/higurashi07thmod141"
            }
        ]
    },
    "clannad": {
        gameTitle: "CLANNAD",
        gameRoute: "clannad",
        mods: [
            {
                title: "Patch de Tradução PT-BR para CLANNAD (Android / RLVM)",
                type: "Patch",
                author: "Taiyaki Club e Kikachan Games",
                genres: ["Tradução", "Android", "PT-BR"],
                downloadUrl: "https://taiyakiclub.wordpress.com/2025/02/01/clannad-no-android-e-na-steam/",
                platform: "Android / RLVM",
                length: "Não informado",
                status: "BETA",
                releaseDate: "30 de maio de 2025",
                description: "Patch que adapta a tradução da Zero Force para rodar no emulador RLVM no Android, corrigindo a exibição de acentos em português. Requer a versão Full Voice (2008) do jogo. Para instalar, baixe o patch no post oficial, use a versão Full Voice 2008 para PC, extraia primeiro o patch da Zero Force e depois o patch modificado por cima. Em seguida, instale o rlvm.apk, abra o RLVM e selecione a pasta do jogo. A partir de 30/05/2025, não é mais necessário copiar o DroidSansFallbackFull.ttf.",
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/324160/header.jpg",
                screenshots: [],
                officialUrl: "https://taiyakiclub.wordpress.com/2025/02/01/clannad-no-android-e-na-steam/"
            }
        ]
    }
};
