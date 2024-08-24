const fetch = require("node-fetch");

const handler = async (m, { text }) => {
    if (!text) return m.reply("Uhmm");

    let hmm = {
        mentions: [m.sender],
        contextInfo: { forwardingScore: 256, isForwarded: true },
    };

    try {
        let response = await fetch(`https://raiden-api.up.railway.app/api/ai/Raiden-Chat?q=${encodeURIComponent(text)}`);
        let result = await response.json();

        if (result && result.data) {
            await m.reply(result.data, m.chat, hmm);
        } else {
            m.reply("Terjadi kesalahan dalam memproses permintaan.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan dalam memproses permintaan.");
    }
};

handler.help = ["raiden"];
handler.tags = ["cai"];
handler.command = ["raiden"];
handler.limit = true;
handler.premium = false;

module.exports = handler;