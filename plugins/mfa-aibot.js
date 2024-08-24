/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require("node-fetch");

const afriza = async (m, { args, usedPrefix, text, command }) => {
    if (!text) return m.reply("Uhmm");
    let hmm = {
        mentions: [m.sender],
        contextInfo: { forwardingScore: 256, isForwarded: true },
    };
    let ouh = await fetch(
        `https://raiden-api.up.railway.app/api/ai/Raiden-Chat?q=${text}`
    );
    let gyh = await ouh.json();
    await m.reply(gyh.data);
};

afriza.help = ["aibot *(text)*"];
afriza.tags = ["ai"];
afriza.command = ["aibot"];
afriza.limit = true;
afriza.premium = false;

module.exports = afriza;