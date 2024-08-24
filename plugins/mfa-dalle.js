const fetch = require("node-fetch");

const handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
    if (!text) throw 'Example: .aidalle highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed';
    m.reply('wait');
    try {
        conn.sendFile(m.chat, await (await fetch(`https://aemt.me/dalle?text=${encodeURIComponent(text)}`)).buffer(), 'anu.jpg', `Prompt: ${text}`, m);
    } catch (e) {
        m.reply('error');
    }
}

handler.help = ['aiimage'];
handler.tags = ['ai'];
handler.command = /^(aidalle|aiimage)$/i;
handler.limit = true;
handler.premium = true; // Added premium flag

module.exports = handler;