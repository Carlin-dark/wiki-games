# wiki-games

## Regras do Realtime Database

As regras atuais do Firebase Realtime Database estão em [`database.rules.json`](./database.rules.json). Publique esse arquivo em **Firebase Console → Realtime Database → Regras** para ativar os comentários, respostas, edição pelo autor e exclusão pelo administrador. A interface sozinha não concede permissões: as regras publicadas no Firebase são a validação de segurança.

O administrador de comentários é a conta autenticada com o e-mail `konozuba1k@gmail.com`; somente ela pode excluir comentários de outras pessoas.

## Denúncias

O formulário de denúncias envia os relatos para a rota Vercel `/api/report`, que encaminha os dados ao Discord. Configure `DISCORD_WEBHOOK_URL` como variável de ambiente no projeto Vercel; nunca coloque a URL do webhook no JavaScript do navegador. `SITE_ORIGIN` pode ser configurada para limitar a origem aceita pela API.