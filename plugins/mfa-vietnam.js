const handler = async (m, { conn, text, command }) => {
    const vietnamImages = global.vietnam;
    const randomIndex = Math.floor(Math.random() * vietnamImages.length);
    const url = vietnamImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random vietnam >///<",
        quoted: m
    });
};

handler.command = /^(vietnam)$/i;
handler.tags = ['cecan'];
handler.premium = true
handler.help = ['vietnam'];

module.exports = handler;

global.vietnam = [

"https://i.postimg.cc/L4qZCk0w/p-1962nyvh11.jpg",
"https://i.postimg.cc/ncB9ZFx1/p-1962o8k741.jpg",
"https://i.postimg.cc/MGKny1Qs/p-1962wlno91.jpg",
"https://i.postimg.cc/NMKLnYbm/p-1962yw2d21.jpg",
"https://i.postimg.cc/mrXtVh3T/p-1962z7kwy1.jpg"
]