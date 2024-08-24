let lastChinaCommandTime = {}; // Simpan waktu terakhir perintah china dieksekusi untuk setiap pengguna

const handler = async (m, { conn, text, command }) => {
    const now = Date.now();
    const cooldown = 8000; // cooldown dalam milidetik (5 detik)

    // Periksa waktu terakhir perintah china dieksekusi oleh pengguna saat ini
    if (lastChinaCommandTime[m.sender] && now - lastChinaCommandTime[m.sender] < cooldown) {
        const remainingTime = (cooldown - (now - lastChinaCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const chinaImages = global.china;
    const randomIndex = Math.floor(Math.random() * chinaImages.length);
    const url = chinaImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random china >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastChinaCommandTime[m.sender] = now;
};

handler.command = /^(china)$/i;
handler.tags = ['cecan'];
handler.help = ['china'];
handler.premium = true;
module.exports = handler;

global.china = [


"https://i.postimg.cc/bNfS6sNy/p-19632yfvu1.jpg",
"https://i.postimg.cc/zfZQvwJm/p-19632ygrr1.jpg",
"https://i.postimg.cc/NMwwQFFt/p-196338q591.jpg",
"https://i.postimg.cc/y8wMTxFR/p-19633gbl91.jpg",
"https://i.postimg.cc/QCb4nv5h/p-19633sib41.jpg",
"https://i.postimg.cc/nzMhztFw/p-19633xttt1.jpg",
"https://i.postimg.cc/5y75zJLY/p-196369fav1.jpg",
"https://i.postimg.cc/VkRt0mwY/p-19636bd861.jpg",
"https://i.postimg.cc/HsrXNfbz/p-19637d5e21.jpg",
"https://i.postimg.cc/RZffSKsn/p-19638wjv31.jpg",
"https://i.postimg.cc/5N8L18kQ/p-1963ayh131.jpg",
"https://i.postimg.cc/141mJnpL/p-1963bvygq1.jpg",
"https://i.postimg.cc/ZRqx50yt/p-1963ci80j1.jpg",
"https://i.postimg.cc/8CmZCqKW/p-1963eb6jo1.jpg",
"https://i.postimg.cc/430mp3ST/p-1963f6c1x1.jpg",
"https://i.postimg.cc/2jcn2zL3/p-1963g3q9o1.jpg",
"https://i.postimg.cc/RFT29T21/p-1963gu0751.jpg",
"https://i.postimg.cc/qB3CX8rD/p-1963hxxv61.jpg",
"https://i.postimg.cc/dQ6KKqYM/p-1963in1xo1.jpg",
"https://i.postimg.cc/SNYV9X1m/p-1963kvd2m1.jpg",
"https://i.postimg.cc/TPfcBtdP/p-1963kxg331.jpg",
"https://i.postimg.cc/TYB7Nj5y/p-1963l8hv91.jpg",
"https://i.postimg.cc/R0pnGdqy/p-1963lbfki1.jpg",
"https://i.postimg.cc/kG1Zgk5w/p-1963m1chq1.jpg",
"https://i.postimg.cc/HLqhJwdD/p-1963mjc6o1.jpg",
"https://i.postimg.cc/j2pHcX3t/p-1963nx6s01.jpg",
"https://i.postimg.cc/fWB1C0vX/p-1963o493c1.jpg",
"https://i.postimg.cc/KjRkdM3j/p-1963ocz0i1.jpg",
"https://i.postimg.cc/j20C0R0n/p-1963oi02s1.jpg",
"https://i.postimg.cc/T1gLdXQv/p-1963p3d5r1.jpg",
"https://i.postimg.cc/1zwKjLh2/p-1963pf5dy1.jpg",
"https://i.postimg.cc/Nf82t20s/p-1963prd9d1.jpg",
"https://i.postimg.cc/fLMgjwtB/p-1963pwt2s1.jpg",
"https://i.postimg.cc/jdBPYZXb/p-1963q2trw1.jpg",
"https://i.postimg.cc/y8vJgq92/p-1963ry7c71.jpg",
"https://i.postimg.cc/wMvfZ0kN/p-1963rza701.jpg",
"https://i.postimg.cc/65hqgsHT/p-1963uwr8q1.jpg",
"https://i.postimg.cc/sXBZCnMq/p-1963v1u6e1.jpg",
"https://i.postimg.cc/DZhRtNpy/p-1963vapvf1.jpg",
"https://i.postimg.cc/NGm582m6/p-1963wei6k1.jpg",
"https://i.postimg.cc/ry05nB1J/p-1963xdgu51.jpg",
"https://i.postimg.cc/Y2nyYBpz/p-1963xq0s21.jpg",
"https://i.postimg.cc/xCgLrQsx/p-1963xyy7f1.jpg",
"https://i.postimg.cc/B6hNT2Gn/p-1963ykqp51.jpg",
"https://i.postimg.cc/SKfM8qpS/p-1963z0ff31.jpg",
"https://i.postimg.cc/52htFxy7/p-196407mpn1.jpg",
"https://i.postimg.cc/sgQNNzmR/p-19640sjns1.jpg",
"https://i.postimg.cc/Wbp8QV2H/p-19640yubd1.jpg",
"https://i.postimg.cc/05zDmNyx/p-196412n1t1.jpg",
"https://i.postimg.cc/d0RnbVTg/p-19641np861.jpg",
"https://i.postimg.cc/MGLgGTGH/p-196434d9e1.jpg",
"https://i.postimg.cc/52cg7CRf/p-19644gwzb1.jpg",
"https://i.postimg.cc/fTQ55dFD/p-19644m1951.jpg",
"https://i.postimg.cc/TwpLrkGQ/p-19644ue8n1.jpg",
"https://i.postimg.cc/d1mXj9Bk/p-196455fna1.jpg",
"https://i.postimg.cc/tRcdmxMY/p-19645e7ms1.jpg",
"https://i.postimg.cc/K8PYL6Tm/p-19645s6j21.jpg",
"https://i.postimg.cc/rmQcgcyL/p-1964676ti1.jpg",
"https://i.postimg.cc/wBnDM8Yg/p-19649dcoq1.jpg",
"https://i.postimg.cc/vZt3jmnk/p-19649k93s1.jpg",
"https://i.postimg.cc/RVYyMhpY/p-1964aq5s81.jpg",
"https://i.postimg.cc/4dLyyp9t/p-1964azle71.jpg",
"https://i.postimg.cc/Ssv95BVw/p-1964bp79r1.jpg",
"https://i.postimg.cc/j5mXNnVw/p-1964bxvsi1.jpg",
"https://i.postimg.cc/dQkS5wVm/p-1964cg5gp1.jpg",
"https://i.postimg.cc/yxjPkQTj/p-1964ddmc31.jpg",
"https://i.postimg.cc/cJyznjSM/p-1964dwjeg1.jpg",
"https://i.postimg.cc/gcKFVGSS/p-1964e3a0q1.jpg",
"https://i.postimg.cc/J4TfFPWj/p-1964e3oge1.jpg",
"https://i.postimg.cc/3rnzcnXY/p-1964ev6r71.jpg",
"https://i.postimg.cc/PxhYYbJR/p-1964f9jdx1.jpg",
"https://i.postimg.cc/s20CZmTV/p-1964g6kdp1.jpg",
"https://i.postimg.cc/yNKkb1KJ/p-1964k0nej1.jpg",
"https://i.postimg.cc/1t675rT7/p-1964klbm61.jpg",
"https://i.postimg.cc/bYmVYrFh/p-1964m5nti1.jpg",
"https://i.postimg.cc/7hw9P8Sb/p-1964mgxf81.jpg",
"https://i.postimg.cc/ZqqCSf9Z/p-1964nqe8r1.jpg",
"https://i.postimg.cc/V6LPJTqZ/p-1964o50md1.jpg",
"https://i.postimg.cc/fbWMdJZv/p-1964obxe91.jpg",
"https://i.postimg.cc/RCYqzQ9x/p-1964qdq4q1.jpg",
"https://i.postimg.cc/VN4LZX4T/p-1964r73sr1.jpg",
"https://i.postimg.cc/nV4SyTqC/p-1964s30991.jpg",
"https://i.postimg.cc/Y9yZhSqj/p-1964sovwr1.jpg",
"https://i.postimg.cc/RCN22wXt/p-1964tu3wl1.jpg",
"https://i.postimg.cc/2j087d3B/p-1964u4i6x1.jpg",
"https://i.postimg.cc/xCYp8z20/p-1964umtp61.jpg",
"https://i.postimg.cc/nhGDZj0K/p-1964vi0uw1.jpg",
"https://i.postimg.cc/VNPDZC5j/p-1964x7okw1.jpg",
"https://i.postimg.cc/Xv5p2rt6/p-1964xu2aa1.jpg",
"https://i.postimg.cc/7YgCMJ8v/p-1964zftiv1.jpg",
"https://i.postimg.cc/J4B07D4D/p-1964zicjx1.jpg",
"https://i.postimg.cc/SRYSK3qF/p-1964zu1961.jpg"
]