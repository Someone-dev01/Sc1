const fetch = require('node-fetch');

const afriza = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/shinobu');
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (!json.url) throw 'Error!';
    conn.sendFile(m.chat, json.url, json.url, `Shinobu`.trim(), m);
    //conn.sendButton(m.chat, 'Shinobu', author, json.url, [['shinobu', `${usedPrefix}shinobu`]], m);
};

afriza.help = ['shinobu'];
afriza.tags = ['anime'];
afriza.command = /^(shinobu)$/i;

module.exports = afriza;