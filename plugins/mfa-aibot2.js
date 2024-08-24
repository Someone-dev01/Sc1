/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require("node-fetch");

const afriza = async (m, { text }) => {
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

afriza.help = ["aibot2 *(text)*"];
afriza.tags = ["ai"];
afriza.command = ["aibot2"];
afriza.limit = true;
afriza.premium = false;

module.exports = afriza;