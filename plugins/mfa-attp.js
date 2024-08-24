/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { sticker } = require('../lib/sticker.js');

const afriza = async (m, { conn, text }) => {
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

afriza.help = ['attp <teks>'];
afriza.tags = ['sticker'];
afriza.command = /^attp$/i;
afriza.limit = true;

module.exports = afriza;