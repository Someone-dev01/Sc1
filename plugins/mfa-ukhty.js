const fetch = require('node-fetch');

let zzz = [];
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/ukhty.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'));

const handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)];
    if (!img) throw img;
    await conn.sendFile(m.chat, img, '', '© nih cecan ukhty', m, 0, { thumbnail: await (await fetch(img)).buffer() });
};
handler.help = ['cecanukhty'];
handler.tags = ['internet'];
handler.limit = false;
handler.command = /^(cecanukhty|ukhty)$/i;

module.exports = handler;