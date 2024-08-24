/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let { sticker } = require ('../lib/sticker.js')

let afriza = async (m, { conn, text, usedPrefix, command }) => {
    let stickers = [
        'https://telegra.ph/file/0772b152bbc3bac8ec392.jpg',
        'https://telegra.ph/file/1c4734e828cf3dc92fe01.jpg',
        'https://telegra.ph/file/babaf922de8b032152220.jpg',
        //MFA Bot 
    ];

    let randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    let stiker = await sticker(null, randomSticker, global.packname, global.author);

    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    
    conn.reply(m.chat, 'Oi Bang ada Yang ngetag lu nih @6283174059236', m);
}

afriza.customPrefix = /^ajarin dong puh|sepuh$/i;
afriza.command = new RegExp();

module.exports = afriza;