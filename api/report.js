const ALLOWED_TYPES = [
  "inappropriate",
  "spam",
  "malicious_nickname",
  "harassment",
  "fake_information",
  "broken_link",
  "copyright",
  "wrong_game",
  "scam",
  "other"
];

const recentReports = new Map();

function clean(value, maxLength = 500) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, maxLength);
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método não permitido."
    });
  }

  // Verificação adicional de origem.
  const origin = req.headers.origin;
  const siteOrigin = process.env.SITE_ORIGIN;

  if (siteOrigin && origin && origin !== siteOrigin) {
    return res.status(403).json({
      success: false,
      message: "Origem não autorizada."
    });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;

  if (
    !webhook ||
    !/^https:\/\/discord\.com\/api\/webhooks\//.test(webhook)
  ) {
    return res.status(500).json({
      success: false,
      message: "Integração não configurada."
    });
  }

  try {
    const body = req.body || {};

    // Honeypot: bots simples costumam preencher este campo.
    if (body.website) {
      return res.status(200).json({ success: true });
    }

    const type = clean(body.type, 50);
    const targetType = clean(body.targetType, 30);
    const targetId = clean(body.targetId, 100);
    const reportedUser = clean(body.reportedUser, 80);
    const description = clean(body.description, 1500);

    if (!ALLOWED_TYPES.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Tipo de denúncia inválido."
      });
    }

    if (!["game", "comment", "review", "profile"].includes(targetType)) {
      return res.status(400).json({
        success: false,
        message: "Conteúdo inválido."
      });
    }

    if (!targetId || !description || description.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Preencha os campos obrigatórios."
      });
    }

    // Limite básico por endereço de origem.
    // É uma proteção de melhor esforço, não um rate limit distribuído.
    const ip = clean(req.headers["x-forwarded-for"], 100)
      .split(",")[0]
      .trim() || "unknown";

    const now = Date.now();
    const previous = recentReports.get(ip) || 0;

    if (now - previous < 60000) {
      return res.status(429).json({
        success: false,
        message: "Aguarde um minuto antes de enviar outra denúncia."
      });
    }

    const labels = {
      inappropriate: "Conteúdo inapropriado",
      spam: "Spam ou propaganda",
      malicious_nickname: "Nick malicioso ou enganoso",
      harassment: "Ofensas ou assédio",
      fake_information: "Informação falsa",
      broken_link: "Link quebrado",
      copyright: "Violação de direitos autorais",
      wrong_game: "Informações incorretas sobre o jogo",
      scam: "Possível golpe ou fraude",
      other: "Outro motivo"
    };

    const embed = {
      title: "Nova denúncia — IK Games",
      color: 0xE74C3C,
      fields: [
        {
          name: "Tipo de denúncia",
          value: labels[type],
          inline: true
        },
        {
          name: "Conteúdo",
          value: targetType,
          inline: true
        },
        {
          name: "ID do conteúdo",
          value: targetId,
          inline: false
        },
        {
          name: "Usuário denunciado",
          value: reportedUser || "Não informado",
          inline: true
        },
        {
          name: "Descrição",
          value: description,
          inline: false
        },
        {
          name: "Status",
          value: "🟡 Pendente",
          inline: true
        }
      ],
      footer: {
        text: "IK Games • Sistema de denúncias"
      },
      timestamp: new Date().toISOString()
    };

    const discordResponse = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        embeds: [embed],
        allowed_mentions: {
          parse: []
        }
      })
    });

    if (!discordResponse.ok) {
      return res.status(502).json({
        success: false,
        message: "Não foi possível enviar a denúncia."
      });
    }

    recentReports.set(ip, now);

    return res.status(200).json({
      success: true,
      message: "Denúncia enviada com sucesso!"
    });

  } catch (error) {
    console.error("Report error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Erro interno ao processar a denúncia."
    });
  }
};
