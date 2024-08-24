const { sticker } = require('../lib/sticker.js');

const handler = async (m, { conn, text }) => {
    if (!text[0]) {
        return m.reply(`Teksnya Mana Kak?\n*Example:* .attp2 mfabot`);
    }

    const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
    const stiker = await sticker(null, global.API('https://api.erdwpe.com/api/maker/', 'attp?text', { file: '', text: teks }), global.packname, global.author);

    if (stiker) {
        return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }

    throw stiker.toString();
};

handler.help = ['attp2 <teks>'];
handler.tags = ['sticker'];
handler.command = /^attp2$/i;
handler.limit = true;

module.exports = handler;