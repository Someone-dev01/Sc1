const cooldowns = {};

const handler = async (m, { conn, text, command }) => {
    // Check if the command has a cooldown
    if (cooldowns[m.sender] && new Date() - cooldowns[m.sender] < 8000) {
        const remainingTime = (8000 - (new Date() - cooldowns[m.sender])) / 1000;
        conn.reply(m.chat, `Please wait ${remainingTime.toFixed(1)} seconds before using the command again.`, m);
        return;
    }

    const koreaImages = global.korea;
    const randomIndex = Math.floor(Math.random() * koreaImages.length);
    const url = koreaImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random korea >///<",
        quoted: m
    });

    // Set the cooldown for the user
    cooldowns[m.sender] = new Date();
};

handler.command = /^(korea)$/i;
handler.tags = ['cecan'];
handler.help = ['korea'];

module.exports = handler;

global.korea = [

"https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg",
"https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg",
"https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg",
"https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg",
"https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg",
"https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg",
"https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg",
"https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg",
"https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg",
"https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg",
"https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg",
"https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg",
"https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg",
"https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg",
"https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg",
"https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg",
"https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg",
"https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg",
"https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg"
]