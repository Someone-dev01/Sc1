const { sticker } = require('../lib/sticker.js');

let afriza = async (m, { conn }) => { 
    let stiker = await sticker(null, global.API('https://telegra.ph/file/4749ebddec8e60a5c3b8d.png'), global.packname, global.author);
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
}

afriza.customPrefix = /^(@18133335851|priza|prija)$/i; 
afriza.command = new RegExp;

module.exports = afriza;