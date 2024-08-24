/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const fetch = require('node-fetch');

let handler = async (m, { conn, usedPrefix, command }) => {
    m.reply('w a i t i n g...');
    let res = await fetch('https://api.waifu.pics/nsfw/neko');

    if (!res.ok) return m.react('❌');

    let json = await res.json();

    if (!json.url) return m.react('❌');

    await conn.sendFile(m.chat, json.url, 'xneko.png', '*RANDOM NEKO*', m);
}

handler.help = ['xneko'];
handler.tags = ['nsfw'];
handler.command = ['xneko'];
handler.private = true;
handler.nsfw = true;
handler.premium = true;

module.exports = handler;