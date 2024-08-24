/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require('node-fetch');

async function afriza(m, { conn, text }) {
    if (!text) throw `Masukan Usernamenya`;
    m.reply(wait);
    try {
        let res = await fetch(`https://www.forestapi.my.id/api/telegram/user/${text}`);
        let zel = await res.json();
        conn.sendFile(m.chat, zel.image_url, 'anu.jpg', `Username: ${zel.username}\nName: ${zel.name}\nBio: ${zel.bio}`, m);
    } catch (e) {
        throw e;
    }
}

afriza.help = ['stalktelegram'];
afriza.tags = ['internet'];
afriza.command = /^(stalktelegram)$/i;
afriza.limit = false;
afriza.premium = true;

module.exports = afriza;