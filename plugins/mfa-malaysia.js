let lastMalaysiaCommandTime = {}; // Simpan waktu terakhir perintah malaysia dieksekusi untuk setiap pengguna
const cooldownDuration = 8000; // Cooldown dalam milidetik (8 detik)

const handler = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah malaysia dieksekusi oleh pengguna saat ini
    if (lastMalaysiaCommandTime[m.sender] && now - lastMalaysiaCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastMalaysiaCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const malaysiaImages = global.malaysia;
    const randomIndex = Math.floor(Math.random() * malaysiaImages.length);
    const url = malaysiaImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random malaysia >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastMalaysiaCommandTime[m.sender] = now;
};

handler.command = /^(malaysia)$/i;
handler.tags = ['cecan'];
handler.help = ['malaysia'];
handler.premium = true;
module.exports = handler;

global.malaysia = [

"https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg",
"https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg",
"https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg",
"https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg",
"https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg",
"https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg",
"https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg",
"https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg",
"https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg",
"https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg",
"https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg",
"https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg",
"https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg",
"https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg",
"https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg",
"https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg",
"https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg",
"https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg",
"https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg",
"https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg",
"https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg",
"https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg"
]