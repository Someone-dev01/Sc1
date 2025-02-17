/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 3000; // Cooldown dalam milidetik (3 detik)
let lastnotnotCommandTime = {}; // Simpan waktu terakhir perintah notnot dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah notnot dieksekusi oleh pengguna saat ini
    if (lastnotnotCommandTime[m.sender] && now - lastnotnotCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastnotnotCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const notnotImages = global.notnot;
    const randomIndex = Math.floor(Math.random() * notnotImages.length);
    const url = notnotImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random notnot >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastnotnotCommandTime[m.sender] = now;
};

afriza.command = /^(notnot)$/i;
afriza.tags = ['random'];
afriza.help = ['notnot'];
module.exports = afriza;

global.notnot = [
  
        "https://i.pinimg.com/originals/fc/3f/f4/fc3ff4c2982358967d77c8fee0e2ab65.jpg",
        "https://i.pinimg.com/originals/90/22/2b/90222b1b781d1f34d8cd00bb29c47fc0.jpg",
        "https://i.pinimg.com/originals/b9/21/65/b9216584efe6efa10c353c042c8d17ea.jpg",
        "https://i.pinimg.com/originals/07/5b/a0/075ba0fafcf4187744515bec95dce2b8.jpg",
        "https://i.pinimg.com/originals/86/c2/3a/86c23a5f4420327a089d3e8dad5ab3fa.jpg",
        "https://i.pinimg.com/originals/17/c8/2a/17c82a48718554727dbeb38ed6c2627c.jpg",
        "https://i.pinimg.com/1200x/77/32/fe/7732fe8cd3a036ee16ff9ea7c50bbcfe.jpg",
        "https://i.pinimg.com/564x/7c/2c/22/7c2c2236810f8939db66dec4f4e5cb32.jpg",
        "https://i.pinimg.com/originals/18/21/8d/18218de0ad5db217a8483244b18a7b34.jpg",
        "https://i.pinimg.com/236x/7d/60/c5/7d60c5f7cfa20a719d74240df5cd0ce1.jpg",
        "https://i.pinimg.com/originals/4b/0c/97/4b0c97454385333c7d6fd1e7c23bb34c.png",
        "https://i.pinimg.com/236x/0d/48/0f/0d480fa3eb6fa5b50241fefc6a531f38.jpg",
        "https://i.pinimg.com/originals/6e/f4/81/6ef481947a9b89a2159a5236e63175c1.jpg",
        "https://i.pinimg.com/564x/b8/0f/b6/b80fb6bf2cfec0b8c7c0e8a02cf022d7.jpg",
        "https://i.pinimg.com/originals/30/c6/da/30c6daca8f2bffc5a402a9b77271bfdc.jpg",
        "https://i.pinimg.com/564x/5a/4e/0e/5a4e0ecd34fcb4d09839eab9948bc2b5.jpg",
        "https://i.pinimg.com/originals/da/95/58/da9558281b3335154b3e1998422c3a75.jpg",
        "https://i.pinimg.com/originals/02/3d/4c/023d4cd8efe9132bcf5b01965ffb1a18.jpg",
        "https://i.pinimg.com/474x/78/0c/e4/780ce47a75b3a8219371410458e52431.jpg",
        "https://i.pinimg.com/originals/23/87/72/238772209eab7431d339af4f67491e8c.jpg",
        "https://i.pinimg.com/originals/06/b4/ee/06b4ee7984c51dccc1b121d08b2275ec.jpg",
        "https://i.pinimg.com/originals/76/45/fc/7645fc4b6cf254277b91330d7b41dc6c.jpg",
        "https://i.pinimg.com/originals/68/0c/d8/680cd898f43e7573a4046a45bfba314b.jpg",
        "https://i.pinimg.com/1200x/59/25/07/592507dc13a8355e661eaeb73c442c6c.jpg",
        "https://i.pinimg.com/1200x/38/e7/16/38e7164b182ba340f9e1044546e67cb3.jpg",
        "https://i.pinimg.com/736x/98/03/91/98039151a533e9872a0b8df4cbc09d78.jpg",
        "https://i.pinimg.com/originals/22/49/92/2249929c79b15f6345d1c1584238df25.jpg",
        "https://i.pinimg.com/originals/82/63/87/826387b25b2064bf862725c85ea6db45.jpg",
        "https://i.pinimg.com/236x/d0/9a/d8/d09ad8c035baa4a65607b5bf6628af53.jpg",
        "https://i.pinimg.com/originals/07/07/fe/0707fe842ba20d9d6b4e95df391fc04d.jpg",
        "https://i.pinimg.com/1200x/78/1e/63/781e63e4b1a97f8c01b59eafa2ef9c8b.jpg",
        "https://i.pinimg.com/originals/93/ea/e7/93eae73f335ec559d048ed9a8b15b535.jpg",
        "https://i.pinimg.com/1200x/e2/b9/3e/e2b93efd0d5a2b2d4173069d731dd372.jpg",
        "https://i.pinimg.com/736x/79/e8/d4/79e8d48d70df411ed682b1c53b8ff6ec.jpg",
        "https://i.pinimg.com/originals/67/1d/98/671d98f78f9b3d08075cb5f570667ff3.jpg",
        "https://i.pinimg.com/736x/a5/b9/3e/a5b93e2be6dfa72d0eef9a00bd16f506.jpg",
        "https://i.pinimg.com/1200x/6b/eb/67/6beb6763f428578346ce4645939ace1d.jpg",
        "https://i.pinimg.com/1200x/69/37/96/693796b2de735a30026b41edb24f918a.jpg",
        "https://i.pinimg.com/originals/1f/d5/d7/1fd5d7e8ada73705f61f206794b08c09.jpg",
        "https://i.pinimg.com/564x/95/35/67/953567f4e60f4a599236f8c4f614f6da.jpg",
        "https://i.pinimg.com/564x/50/4d/96/504d9659b1dfd25c43fe078990fe7858.jpg",
        "https://i.pinimg.com/1200x/91/ed/c4/91edc4c8f0dbe3a1e7cc2dca326d6a24.jpg",
        "https://i.pinimg.com/736x/25/c1/4e/25c14e39fa184d7dc15d8ea31b781c0b.jpg",
        "https://i.pinimg.com/236x/88/b1/cc/88b1cc147868eb0c32075faed86fd150.jpg",
        "https://i.pinimg.com/564x/a5/1e/56/a51e5645a6f65245829aecf37d1f8524.jpg",
        "https://i.pinimg.com/736x/19/61/af/1961af6e38d790b5900db5add888a7d6.jpg",
        "https://i.pinimg.com/originals/ec/0d/7b/ec0d7b3dac29a9eb68cca10bf9ee9e7f.jpg",
        "https://i.pinimg.com/736x/9c/d0/69/9cd069a58e0dd660ac88e3c7523d4984.jpg",
        "https://i.pinimg.com/564x/1e/99/aa/1e99aa1ee1838c830cafab945af2e100.jpg",
        "https://i.pinimg.com/originals/2e/3c/10/2e3c1069a091dc7e2a0a3f9230f12a28.jpg",
        "https://i.pinimg.com/736x/5a/04/1d/5a041db625dd6edf0d8fc84169a389a4.jpg",
        "https://i.pinimg.com/originals/04/73/86/0473864eadb14e3277a7df5f7b748d8c.jpg",
        "https://i.pinimg.com/600x315/04/73/86/0473864eadb14e3277a7df5f7b748d8c.jpg",
        "https://i.pinimg.com/originals/af/0d/82/af0d82698bf5b6881774e16a2491d726.jpg",
        "https://i.pinimg.com/originals/50/2f/5a/502f5a064a96cd5d62c2fddd8ef49902.jpg",
        "https://i.pinimg.com/474x/63/b7/6e/63b76eeb63496d9c9c13274ea2e47f45.jpg",
        "https://i.pinimg.com/originals/eb/64/2d/eb642d4acb6ccbc7eb29cc3649193c08.jpg",
        "https://i.pinimg.com/474x/8f/1f/23/8f1f23cd2e7f74d33640864cfd76d42a.jpg",
        "https://i.pinimg.com/736x/28/6e/27/286e27d89e34de808d3ade15465b1289.jpg",
        "https://i.pinimg.com/1200x/39/51/a4/3951a4e966f7834a8384039bbc6fc4f0.jpg",
        "https://i.pinimg.com/236x/84/60/60/846060ea989af4b892fd0e70bac7a75d.jpg",
        "https://i.pinimg.com/236x/62/54/2d/62542d770fb5376d9e1c0480eb65331c.jpg",
        "https://i.pinimg.com/1200x/01/ef/01/01ef01c8f71f947092ab6ce482328438.jpg",
        "https://i.pinimg.com/originals/49/6a/0a/496a0a7042c23e9510a3f74e110bc1b4.jpg",
        "https://i.pinimg.com/236x/2d/43/66/2d4366a11895eb2ca909659501d7c77c.jpg",
        "https://i.pinimg.com/564x/48/a5/47/48a5476db09b1d4869c555cb041e6310.jpg",
        "https://i.pinimg.com/originals/d8/30/32/d8303249c673167efd241534f63f596b.jpg",
        "https://i.pinimg.com/originals/d2/13/1f/d2131f6595dfa5bfc8b740ea8c77bfe8.jpg",
        "https://i.pinimg.com/736x/5a/d5/44/5ad544df9f43974f790d5476596e5a00.jpg",
        "https://i.pinimg.com/474x/c9/97/34/c99734e00f0effbfe2eb27fa534d9806.jpg",
        "https://i.pinimg.com/originals/f6/c0/f0/f6c0f073676d404dae9be05879283117.jpg",
        "https://i.pinimg.com/originals/77/64/c5/7764c5c9b8f5f7bdc01a52ef16ebb046.jpg",
        "https://i.pinimg.com/originals/62/23/19/622319fa2c5cc886e3f876276f602ed4.jpg",
        "https://i.pinimg.com/originals/33/8e/1f/338e1f6407102543166742eafcfbb6ea.jpg",
        "https://i.pinimg.com/originals/48/b8/f4/48b8f44bea66ac097d1ec0ad6f718d62.jpg",
        "https://i.pinimg.com/1200x/19/fb/7b/19fb7b0abcd7151e0666660960c5590e.jpg",
        "https://i.pinimg.com/originals/25/a6/be/25a6be2d7e2f56e95765f5f6db46498c.jpg",
        "https://i.pinimg.com/736x/07/14/2d/07142d5f5e5375f720a439c01448ac29.jpg",
        "https://i.pinimg.com/236x/ea/02/b2/ea02b2ca4174b433e99f7c65f71c2b12.jpg",
        "https://i.pinimg.com/originals/6f/d6/b9/6fd6b9eb940b2794adaed9438d81f96c.jpg",
        "https://i.pinimg.com/474x/21/82/e2/2182e2d920030a65ff1c1f92a2ac209f.jpg",
        "https://i.pinimg.com/originals/8c/56/07/8c56074df9e7e96f31ad21cb4d90b546.jpg",
        "https://i.pinimg.com/1200x/eb/61/43/eb6143a784935b72c433ea7fdeff4a61.jpg",
        "https://i.pinimg.com/originals/4b/d0/3c/4bd03cbda5103c9454fddfb7fee7424a.jpg",
        "https://i.pinimg.com/originals/d5/e0/9b/d5e09b732f4295da62bb968c966c0fd9.jpg",
        "https://i.pinimg.com/564x/e4/0b/e9/e40be9f565384053f12983bbaabea3d6.jpg",
        "https://i.pinimg.com/236x/87/73/ef/8773ef783c447d6937a49bb52be45258.jpg",
        "https://i.pinimg.com/736x/4d/ab/a5/4daba5c6bdba4644b709d336bfd9b381.jpg",
        "https://i.pinimg.com/236x/49/af/b1/49afb119f8a94aa0d3baed9210630985.jpg",
        "https://i.pinimg.com/originals/2f/ff/47/2fff47bebd706ddfeb61b9475f767daf.jpg",
        "https://i.pinimg.com/736x/b9/c3/06/b9c3060dbfde8ba0fce8d0bc22a02639.jpg",
        "https://i.pinimg.com/236x/68/68/99/686899d0dad4e7c42459139365c80013.jpg",
        "https://i.pinimg.com/originals/a3/b6/db/a3b6dbb6b5b9d2b39c1fee61e59ed499.jpg",
        "https://i.pinimg.com/originals/04/22/63/04226303dee2b0750c1c1ee77afb73c5.jpg",
        "https://i.pinimg.com/474x/e3/f9/27/e3f927b49e76bebc9f8a8c56c6522570.jpg",
        "https://i.pinimg.com/originals/35/4f/e7/354fe7972b1f14ea0be06904f6a5271a.jpg",
        "https://i.pinimg.com/1200x/be/d5/cc/bed5cc9c1f6c8d3b4adabb37a16190d2.jpg",
        "https://i.pinimg.com/originals/a8/99/c7/a899c763e108b671aa6a23b080a9b07c.jpg",
        "https://i.pinimg.com/originals/39/e3/5d/39e35d1a1e25c48798c32c0898b4da36.jpg",
        
]