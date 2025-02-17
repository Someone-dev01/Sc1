let lastCoacakCommandTime = {}; // Simpan waktu terakhir perintah coacak dieksekusi untuk setiap pengguna
const cooldownDuration = 8000; // Cooldown dalam milidetik (8 detik)

const handler = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah coacak dieksekusi oleh pengguna saat ini
    if (lastCoacakCommandTime[m.sender] && now - lastCoacakCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastCoacakCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const coacakImages = global.coacak;
    const randomIndex = Math.floor(Math.random() * coacakImages.length);
    const url = coacakImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random coacak >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastCoacakCommandTime[m.sender] = now;
};

handler.command = /^(coacak)$/i;
handler.tags = ['cecan'];
handler.help = ['coacak'];
module.exports = handler;

global.coacak = [
    // Daftar gambar coacak

"https://i.pinimg.com/originals/10/57/9b/10579b6c326063161bc27fb301e74527.jpg",
"https://i.pinimg.com/474x/09/16/7f/09167f386fa8eb3b0acdd715f2d0e5f5.jpg",
"https://i.pinimg.com/originals/62/1e/c5/621ec56a042a6aecbdd7b18cfe7bb9c5.png",
"https://i.pinimg.com/originals/bb/15/6b/bb156b1b3ef163c297991f1638ba9019.jpg",
"https://i.pinimg.com/564x/28/5d/7f/285d7f3377b71a18400484b86500bdce.jpg",
"https://i.pinimg.com/236x/5d/e9/fc/5de9fca8a8a266b61140a9743f5e5a7b.jpg",
"https://i.pinimg.com/originals/b8/1d/b9/b81db9c2a8924fe15cece1f9b5305e27.jpg",
"https://i.pinimg.com/736x/24/9b/79/249b79e5cd8609b392d51c7f790d96fc.jpg",
"https://i.pinimg.com/originals/c1/46/74/c146748a06d08e1dd9f433ad307bf77a.jpg",
"https://i.pinimg.com/236x/65/94/e4/6594e4a9070b17ff53077fa7ffaf771d.jpg",
"https://i.pinimg.com/originals/62/72/b8/6272b82617fc9eedbbddf24e502755a6.jpg",
"https://i.pinimg.com/736x/14/10/a3/1410a34afbde83bd203e86feca510cdf.jpg",
"https://i.pinimg.com/736x/7d/57/5e/7d575eb234583f38fc9053d6017c86fc.jpg",
"https://i.pinimg.com/736x/82/26/4b/82264b3188e1a855c418aa158ad0b1c0.jpg",
"https://i.pinimg.com/736x/b3/4d/61/b34d61c4435f1e6c28ee7e25b4314833.jpg",
"https://i.pinimg.com/originals/78/d6/16/78d616c4ee63a94dc80428b321c2c22b.jpg",
"https://i.pinimg.com/originals/65/77/04/657704b431288f038d8cff9c13eb52cc.jpg",
"https://i.pinimg.com/originals/01/af/a4/01afa40efc851083163055e0d7bf597e.jpg",
"https://i.pinimg.com/originals/96/44/0e/96440e373e9673c049fd88a7ee8f160b.jpg",
"https://i.pinimg.com/originals/36/42/1e/36421e4f669e68974b779d21ec0112ca.jpg",
"https://i.pinimg.com/originals/51/54/68/51546802b4d7f5fd625c537b17c72517.jpg",
"https://i.pinimg.com/736x/26/a3/5f/26a35f5fe932d6c092ee5faf158f4566.jpg",
"https://i.pinimg.com/736x/ed/fa/e2/edfae2162e3302abc13f874d0bb60a10.jpg",
"https://i.pinimg.com/originals/8f/fb/45/8ffb458c042a4ecbfa176298535fa967.jpg",
"https://i.pinimg.com/736x/b1/60/3c/b1603c931b6365caf708d6c90a11953b.jpg",
"https://i.pinimg.com/736x/a4/61/b8/a461b8d242737b3c187c96dabfc739f6.jpg",
"https://i.pinimg.com/736x/91/54/36/91543604436ccaca4d037901d0e0aad7.jpg",
"https://i.pinimg.com/474x/5c/c0/ae/5cc0ae79c250f1f2d5112a3d36a49694.jpg",
"https://i.pinimg.com/originals/f7/5b/9c/f75b9c5ce31ead4b8579fb1a7d352e0b.jpg",
"https://i.pinimg.com/originals/59/d2/6e/59d26e736103c8a3f2a6a0ba5ce6396c.jpg",
"https://i.pinimg.com/originals/cd/76/08/cd7608e13f35d784e1729e4938897b99.jpg",
"https://i.pinimg.com/236x/76/17/9e/76179e5a26cdb4aa3166129d3bf76cbd.jpg",
"https://i.pinimg.com/originals/31/b9/5d/31b95d80891a041c8e68eeadf45916f2.jpg",
"https://i.pinimg.com/474x/b7/fc/a3/b7fca3f946a59a0464e6231c7ace3662.jpg",
"https://i.pinimg.com/originals/44/f0/d5/44f0d57472265b6d73393f259a701bfd.jpg",
"https://i.pinimg.com/originals/bf/68/9f/bf689f52d6748f2cc7d69ef0cfd8e791.jpg",
"https://i.pinimg.com/originals/53/d1/71/53d1715e55281ff209e8a4f5377cd277.jpg",
"https://i.pinimg.com/originals/69/bd/26/69bd26b1baca3fb7e874d06d597113c5.jpg",
"https://i.pinimg.com/originals/50/7d/96/507d96bc990a5641f8fd41bc43c079a0.jpg",
"https://i.pinimg.com/736x/3e/88/ac/3e88acf993aabc1d72eac8cb9cfa09b4.jpg",
"https://i.pinimg.com/originals/6e/4d/64/6e4d6445d35634ea976e67d6d6c7ec9c.jpg",
"https://i.pinimg.com/564x/57/e6/3b/57e63b237aae96b321d55ce11b647e04.jpg",
"https://i.pinimg.com/474x/e0/46/47/e04647d6d3b2476d568255987941c1f6.jpg",
"https://i.pinimg.com/736x/a3/34/53/a33453b4829421d66ea847f4149a9c5f.jpg",
"https://i.pinimg.com/564x/a9/50/31/a95031e623783c2f0c56fa87c2f3424f.jpg",
"https://i.pinimg.com/236x/07/ee/fc/07eefcea7242ba49b9c13d7cbd8e9174.jpg",
"https://i.pinimg.com/564x/b1/df/78/b1df782e6dca44a0bcd161f73b32e393.jpg",
"https://i.pinimg.com/originals/9b/37/c7/9b37c7e5bba1d155a920892be0b2c40f.jpg",
"https://i.pinimg.com/originals/f1/eb/d7/f1ebd7e1a5fec4dd0531369f8beddf92.jpg",
"https://i.pinimg.com/564x/f0/45/0e/f0450e3a5f28725b31ebc9afce22f94b.jpg",
"https://i.pinimg.com/originals/d4/bc/ed/d4bced7606022f29d1683faee5a9e097.jpg",
"https://i.pinimg.com/736x/30/b7/23/30b723903c21f35b5e0fa763d38f5f92.jpg",
"https://i.pinimg.com/originals/fe/af/2b/feaf2bd22e7451fa4453566eb8f4f13e.jpg",
"https://i.pinimg.com/736x/7e/f0/2c/7ef02c1699ec984e6a085224f845b827.jpg",
"https://i.pinimg.com/736x/2f/10/63/2f1063adf158b41cd5b922ca1d0e0399.jpg",
"https://i.pinimg.com/736x/03/1b/f1/031bf1106116a2ab1dac9e2ebadec5ca.jpg",
"https://i.pinimg.com/originals/53/57/35/5357351334c11f6c903e0c4376da3f37.jpg",
"https://i.pinimg.com/236x/d3/eb/02/d3eb02cab894cb728d17b922135e37dd.jpg",
"https://i.pinimg.com/originals/03/67/a5/0367a5ff20342796e3afa5e961c04b95.jpg",
"https://i.pinimg.com/736x/fd/46/3b/fd463b1e7bd0eae9e47a7255c2b38c13.jpg",
"https://i.pinimg.com/236x/4e/de/2f/4ede2f1eb29cbb9e904c1f54f258bcf8.jpg",
"https://i.pinimg.com/736x/42/bc/77/42bc770134d2fc28655a5b035314c29b.jpg",
"https://i.pinimg.com/236x/3b/4f/30/3b4f30fdf1f57873db870f6776b10023.jpg",
"https://i.pinimg.com/originals/0d/de/70/0dde705c6c41c15750b50f99727e69cf.jpg",
"https://i.pinimg.com/564x/27/af/bc/27afbc706e87f90919de94c241a03da5.jpg",
"https://i.pinimg.com/originals/17/72/50/17725057489adf55c338f1f7b57fd1c2.jpg",
"https://i.pinimg.com/originals/ce/89/fc/ce89fcfb4f66f1d2e1b48085495734a9.jpg",
"https://i.pinimg.com/originals/39/64/37/39643760dfcc60b3b048fe3989d587d3.jpg",
"https://i.pinimg.com/originals/4e/3c/77/4e3c7767fd70c30d40634ecc1d88d389.jpg",
"https://i.ytimg.com/vi/W5M5M0Qfqho/maxresdefault.jpg",
"https://i.pinimg.com/originals/09/a6/dd/09a6ddd6cbeeb066dba2aa73220c8cde.jpg",
"https://i.pinimg.com/474x/29/60/a1/2960a18b8fad85de13fbb5fc33ce114e.jpg",
"https://i.pinimg.com/originals/7f/21/a9/7f21a96eb421942d51642c739e7376e0.jpg",
"https://i.pinimg.com/236x/6e/8e/c8/6e8ec868fbe751156d7fa030494e8ee3.jpg",
"https://i.pinimg.com/236x/20/07/44/2007444ce9906963a6f5bd3fa90bdf41.jpg",
"https://i.pinimg.com/564x/d8/5e/2f/d85e2f5cb5e922f07893fee0f35e43c7.jpg",
"https://i.pinimg.com/originals/d8/2a/0c/d82a0ccc329a18ac564087f4367a1493.jpg",
"https://i.pinimg.com/originals/97/28/fd/9728fd79602ad243fc01b0dc3e0b7f8d.jpg",
"https://i.pinimg.com/originals/46/b0/fc/46b0fc25c98f21fd5d2db55714d0ef29.jpg",
"https://i.pinimg.com/originals/6d/10/98/6d10983b06a0cab9be7f55b5ea5fa063.jpg",
"https://i.pinimg.com/474x/3f/34/07/3f340773ab06c08c75a6d13a1e5b4038.jpg",
"https://i.pinimg.com/originals/06/7c/49/067c4929691f4c4521f7197ece1f9155.jpg",
"https://i.pinimg.com/originals/18/4a/91/184a91790b9a97ce13b1eb39abafa1b4.jpg",
"https://i.pinimg.com/236x/a9/4d/83/a94d83696b3c88b7dc52a14da6daea7d.jpg",
"https://i.pinimg.com/originals/1b/61/2e/1b612eee1c71bc92beec3559dc9f7a36.jpg",
"https://i.pinimg.com/originals/ef/ee/36/efee36a2fd00c99f9975ad7c04917ca1.jpg",
"https://i.pinimg.com/736x/d5/4a/f5/d54af5f4e6c9c43b31fe074dfddc97c0.jpg",
"https://i.pinimg.com/originals/f4/91/dc/f491dc6e9995b16dad1055611b1fb974.jpg",
"https://i.pinimg.com/736x/bc/25/6b/bc256baa1547735b437930f476930e61.jpg",
"https://i.pinimg.com/originals/62/27/84/622784884dafc2b8d8b2791afd8c56a5.jpg",
"https://i.pinimg.com/474x/2e/7f/17/2e7f173f414e14d333eb1ceacd86d212.jpg",
"https://i.pinimg.com/564x/93/ac/c1/93acc17b399d99ba8f23a320de171196.jpg",
"https://i.pinimg.com/736x/bc/50/16/bc50167db56dd7cbad75f6e5875a2dd0.jpg",
"https://i.pinimg.com/originals/4e/cf/5c/4ecf5cf64d3ba5729891905a419fdc2e.jpg",
"https://i.pinimg.com/originals/55/cf/06/55cf065d2faab86bb423b4e48f4f34c9.jpg",
"https://i.pinimg.com/originals/cd/e7/05/cde705c04eca12b048fa964c86db7114.jpg",
"https://i.pinimg.com/originals/7d/98/df/7d98df3cbaf328b74e893e49e3d47728.jpg",
"https://i.pinimg.com/originals/38/39/a7/3839a752b7c1eb617e465ee913750d45.png",
"https://i.pinimg.com/736x/65/d3/72/65d3723a129317c6ff3cf8e12d357fd8.jpg",
"https://i.pinimg.com/originals/f7/23/a1/f723a136225f4ffd2afb600014b3bcb1.png"
]