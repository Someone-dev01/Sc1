const fetch = require('node-fetch');

let handler = async (m, { conn, usedPrefix, command }) => {
    m.reply('w a i t i n g...');
    let res = await fetch('https://api.waifu.pics/nsfw/waifu');

    if (!res.ok) return m.react('❌');

    let json = await res.json();

    if (!json.url) return m.react('❌');

    await conn.sendFile(m.chat, json.url, 'xwaifu.png', '*RANDOM WAIFU*', m);
}

handler.help = ['xwaifu'];
handler.tags = ['nsfw'];
handler.command = ['xwaifu'];
handler.premium = true
handler.nsfw = true;

module.exports = handler;