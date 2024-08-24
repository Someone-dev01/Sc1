const fetch = require('node-fetch');

let arr = [];
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'));

let lastCecanCommandTime = {}; // Simpan waktu terakhir perintah cecan dieksekusi untuk setiap pengguna
const cooldownDuration = 8000; // Cooldown dalam milidetik (8 detik)

const handler = async (m, { conn }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah cecan dieksekusi oleh pengguna saat ini
    if (lastCecanCommandTime[m.sender] && now - lastCecanCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastCecanCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    let img = arr[Math.floor(Math.random() * arr.length)];
    if (!img) throw img;
    await conn.sendFile(m.chat, img, '', '© nih cecan random', m, 0, { thumbnail: await (await fetch(img)).buffer() });

    // Perbarui waktu terakhir perintah dieksekusi
    lastCecanCommandTime[m.sender] = now;
};

handler.help = ['cecan'];
handler.tags = ['internet'];
handler.limit = true;
handler.command = /^(cecan)$/i;

module.exports = handler;