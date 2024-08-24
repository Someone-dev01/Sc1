let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let lastCoganCommandTime = {}; // Simpan waktu terakhir perintah cogan dieksekusi untuk setiap pengguna
const cooldownDuration = 8000; // Cooldown dalam milidetik (8 detik)

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah cogan dieksekusi oleh pengguna saat ini
    if (lastCoganCommandTime[m.sender] && now - lastCoganCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastCoganCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    scrap.pinterest("cogan").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,wm,m));

    // Perbarui waktu terakhir perintah dieksekusi
    lastCoganCommandTime[m.sender] = now;
}
    
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i
handler.limit = true

module.exports = handler