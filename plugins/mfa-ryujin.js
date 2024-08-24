/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastryujinCommandTime = {}; // Simpan waktu terakhir perintah ryujin dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah ryujin dieksekusi oleh pengguna saat ini
    if (lastryujinCommandTime[m.sender] && now - lastryujinCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastryujinCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const ryujinImages = global.ryujin;
    const randomIndex = Math.floor(Math.random() * ryujinImages.length);
    const url = ryujinImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random ryujin >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastryujinCommandTime[m.sender] = now;
};

afriza.command = /^(ryujin)$/i;
afriza.tags = ['random'];
afriza.help = ['ryujin'];
module.exports = afriza;

global.ryujin = [

 "https://i.pinimg.com/originals/6e/14/c3/6e14c31ab7fa71d506281bfacc58339f.jpg",
 "https://i.pinimg.com/originals/ee/13/ac/ee13acb9fee77752d7f768bffa4e27e1.jpg",
 "https://i.pinimg.com/736x/ea/ed/eb/eaedeb5b352ca20b8b27a31f895089e7.jpg",
 "https://i.pinimg.com/originals/96/d8/4c/96d84c19ad9fc1eb8e03f7e7d1a061a3.jpg",
 "https://i.pinimg.com/1200x/fe/8d/95/fe8d951f376faae42df83b46c87c7730.jpg",
 "https://i.pinimg.com/originals/24/3d/f0/243df0e4dd4902bf07faacb835b43451.jpg",
 "https://i.pinimg.com/originals/f7/cd/7a/f7cd7a7b93f0e16c736e0a3347c1e1b0.jpg",
 "https://i.pinimg.com/originals/ff/c9/af/ffc9afd89fad076f4feaa71b7a0de6a9.jpg",
 "https://i.pinimg.com/originals/14/3a/fa/143afa342cb0fb775a71b996b7aa90e7.jpg",
 "https://i.pinimg.com/originals/b4/22/b4/b422b422ddf447c901664e714bf02431.jpg",
 "https://i.pinimg.com/736x/a1/e8/99/a1e8991093c53b405835b555b103cc54.jpg",
 "https://i.pinimg.com/originals/86/87/1c/86871c0af3d1ea12a5b887dba192a07d.jpg",
 "https://i.pinimg.com/564x/5e/cc/91/5ecc910f17401e8393b280c04d2b6323.jpg",
 "https://i.pinimg.com/736x/35/e7/23/35e7232575dea8e36428d62ae13f8d1e.jpg",
 "https://i.pinimg.com/originals/47/f7/22/47f7228524f3a22fff5ad640eaeb3e46.jpg",
 "https://i.pinimg.com/originals/b7/8e/cf/b78ecfa8f38a057d9429f68d8c5383a7.png",
 "https://i.pinimg.com/originals/90/7a/7a/907a7ad57e5c628b1c8b1cf331dfc50b.jpg",
 "https://i.pinimg.com/736x/ba/a6/13/baa6133d42c251d2cbd9ce2eae1f6506.jpg",
 "https://i.pinimg.com/originals/b2/a4/26/b2a426b8f453f8bbf602d40bf835d011.jpg",
 "https://i.pinimg.com/originals/ee/20/1c/ee201c8e25814e6992f15f48d62c6a0a.jpg",
 "https://i.pinimg.com/originals/fa/25/44/fa25448d1c19485f196fe909f929cdf3.png",
 "https://i.pinimg.com/736x/d5/58/4c/d5584c986562aaeb212f24e8611e3380.jpg",
 "https://i.pinimg.com/originals/fc/68/1f/fc681f3ee05023b3ec804f31f99267eb.jpg",
 "https://i.pinimg.com/222x/48/79/3a/48793a8601b90659584eacb466a63583.jpg",
 "https://i.pinimg.com/736x/ff/d1/2c/ffd12c7192bd8e177b901fd31045eda5.jpg",
 "https://i.pinimg.com/originals/00/0e/52/000e529c9af3e03a409750025899a537.jpg",
 "https://i.pinimg.com/originals/5b/8b/8e/5b8b8e86923de112c8b9feef824e79eb.jpg",
 "https://i.pinimg.com/736x/aa/11/b6/aa11b6d8de71fe5b8c539ed0c01416a9.jpg",
 "https://i.pinimg.com/originals/23/d7/d4/23d7d46defa18beec09b4ec30270cef2.jpg",
 "https://i.pinimg.com/736x/77/a2/5c/77a25cb79b3996f9af3750e83221951e.jpg",
 "https://i.pinimg.com/736x/a8/f5/3b/a8f53ba5d5c4df2830ccf2695f82864a.jpg",
 "https://i.pinimg.com/736x/30/0c/96/300c96b04aaa37593369e55934fdeb82.jpg",
 "https://i.pinimg.com/550x/cc/a8/61/cca861de8aef694e72ed7b2890d8be29.jpg",
 "https://i.pinimg.com/originals/36/7a/83/367a83446d71c00d6729c2a80929ab4e.jpg",
 "https://i.pinimg.com/736x/4a/ee/ea/4aeeead10172c43ed723655a6a184afd.jpg",
 "https://i.pinimg.com/originals/83/9d/fd/839dfd6956ba4c45fab0cb6417a71d1c.jpg",
 "https://i.pinimg.com/736x/64/c5/d6/64c5d6fe6add34fcbe3ce001a077adac.jpg",
 "https://i.pinimg.com/originals/ab/f3/d0/abf3d0f34d209024d6a6b912ba8efd6f.jpg",
 "https://i.pinimg.com/originals/fe/9d/ba/fe9dbaed678be70cbe62d211b3eac4a1.jpg",
 "https://i.pinimg.com/474x/05/b6/08/05b6085ceb102ffd220d212a741f5db2.jpg",
 "https://i.pinimg.com/564x/7c/4b/d6/7c4bd6d30a65dddb36b7b85ea32de7f5.jpg",
 "https://i.pinimg.com/originals/03/71/65/037165924955f6794a51d22d55aba3c1.png",
 "https://i.pinimg.com/originals/02/54/8b/02548b5b6ab54504e01bce10685e43d6.jpg",
 "https://i.pinimg.com/originals/da/95/a9/da95a9f1d7b48e54b740f1293351f4ee.jpg",
 "https://i.pinimg.com/736x/2b/3c/87/2b3c8776b6485f5f138e874e353992a1.jpg",
 "https://i.pinimg.com/474x/9d/46/71/9d46711cfd75fa8a7ad778d374be857d.jpg",
 "https://i.pinimg.com/originals/80/a4/97/80a4970329a7dff8ea4f6cc62ad7422e.jpg",
 "https://i.pinimg.com/originals/59/00/71/590071b20872b5bb1289fb61172a7c1a.jpg",
 "https://i.pinimg.com/originals/b2/84/ab/b284ab45cfd9b3acadd4cfa29f027b8a.jpg",
 "https://i.pinimg.com/originals/8d/0a/26/8d0a26d85f7ea8af0cb4b400469010f9.jpg",
 "https://i.pinimg.com/originals/1f/e7/2b/1fe72ba6b9ccd41f6708cae0d9948771.jpg",
 "https://i.pinimg.com/474x/95/0c/b2/950cb2173ac49aa0b1bad149666050b0.jpg",
 "https://i.pinimg.com/originals/d9/da/cd/d9dacd38a20242870d0afba5f3cb829f.jpg",
 "https://i.pinimg.com/736x/14/57/12/145712aaf875ce5285e44025f33733b6.jpg",
 "https://i.pinimg.com/originals/04/80/44/04804411cffb1521bd61934ace35271d.jpg",
 "https://i.pinimg.com/736x/91/1c/17/911c17573add4f06af8f24cc7cbfb871.jpg",
 "https://i.pinimg.com/736x/8f/32/ee/8f32ee711100beafe35ef1becf24cb86.jpg",
 "https://i.pinimg.com/736x/9a/f5/25/9af52521eda7602a8be5d887a41a3275.jpg",
 "https://i.pinimg.com/originals/ae/e8/06/aee8063da0cab40577a6725d0789ae30.jpg",
 "https://i.pinimg.com/originals/d2/5f/26/d25f26545a34fb233976e8c0707c43c8.jpg",
 "https://i.pinimg.com/originals/7d/53/dd/7d53dd02ba633731dbd4b3388825acdb.jpg",
 "https://i.pinimg.com/736x/96/22/5c/96225ca6155ed0f6d9f2a25cbe0b5370.jpg",
 "https://i.pinimg.com/736x/97/82/76/978276033a6a8e2e9569a93dc69c2cf7.jpg",
 "https://i.pinimg.com/originals/3a/cf/dd/3acfddd76c72927921915df7823324d9.png",
 "https://i.pinimg.com/originals/17/7d/7d/177d7d5c12f63aad02465f83d4e62bc7.jpg",
 "https://i.pinimg.com/originals/45/c2/89/45c28904704ba8025c6a54fe261e7624.jpg",
 "https://i.pinimg.com/originals/c7/48/9b/c7489b20d14c5648512e36668c040788.jpg",
 "https://i.pinimg.com/originals/90/30/2d/90302dfa045f366e6bd4919bc8f06773.jpg",
 "https://i.pinimg.com/originals/13/57/a2/1357a204e7035da289b7ea773b38d82d.jpg",
 "https://i.pinimg.com/originals/47/80/b2/4780b20f37448cd9a6651a495551e79b.jpg",
 "https://i.pinimg.com/originals/81/d6/f8/81d6f8d15e7dab9ed67b714faf6d1a72.jpg",
 "https://i.pinimg.com/550x/2e/17/69/2e17698dbf5111fc98b4fcbff082597c.jpg",
 "https://i.pinimg.com/originals/a8/05/1f/a8051f38afab25c0397d305069892cd1.jpg",
 "https://i.pinimg.com/736x/32/21/c7/3221c714baf28b57b0c76f80c10be795.jpg",
 "https://i.pinimg.com/originals/0b/c1/b6/0bc1b6b3925dd29b5e2fc6e19920d800.jpg",
 "https://i.pinimg.com/originals/06/46/82/064682aa7b8e02a27e6c28be3d6a5c00.jpg",
 "https://i.pinimg.com/736x/2f/f7/54/2ff754c873270b26dfe052835672acc2.jpg",
 "https://i.pinimg.com/564x/93/0a/f4/930af4b389c942e82b9d33abdaf3d1af.jpg",
 "https://i.pinimg.com/originals/ba/f2/2a/baf22a0210e18445e7178a4ceb2746b2.jpg",
 "https://i.pinimg.com/originals/ed/92/75/ed9275103f52d765d5ad51ba9eed8ab7.png",
 "https://i.pinimg.com/originals/62/75/99/6275995f117a8ce3c8d2e20e741c27bb.jpg",
 "https://i.pinimg.com/originals/6e/2f/47/6e2f47174988adf272ea4c17a043a836.jpg",
 "https://i.pinimg.com/736x/88/7f/cd/887fcd0d370e77662b1ac1ead90a0fe4.jpg",
 "https://i.pinimg.com/originals/07/9a/51/079a511f7dfafda55497ed04c3aed939.jpg",
 "https://i.pinimg.com/736x/e8/e6/8d/e8e68d3a60d3e82a33e3367c58b44383.jpg",
 "https://i.pinimg.com/736x/55/73/09/557309f89dd56c33a69455ae3831132b.jpg",
 "https://i.pinimg.com/originals/22/dc/d5/22dcd5665cd699f5359381f34c22ef1c.jpg",
 "https://i.pinimg.com/736x/d5/61/ec/d561ec8c1072fc88dabaccb61089f35c.jpg",
 "https://i.pinimg.com/736x/a4/af/f9/a4aff9dd5893fce24ad5dd1b799e00e5.jpg",
 "https://i.pinimg.com/736x/26/3d/b1/263db17b3ddb882d3a2495e1fb8b5735.jpg",
 "https://i.pinimg.com/originals/f2/8f/f9/f28ff99a2f792356e6bd3594af622214.jpg",
 "https://i.pinimg.com/originals/f8/69/d9/f869d98817521d6f5c9a5b65525abbb9.jpg",
 "https://i.pinimg.com/736x/5c/81/41/5c8141be8731c165d0fb612678ea20ca.jpg",
 "https://i.pinimg.com/originals/24/34/2b/24342bd626b32f3b9b46491193b938bb.jpg",
 "https://i.pinimg.com/originals/2c/c1/ed/2cc1ed40eedfe2d35436d35e174d69ea.jpg",
 "https://i.pinimg.com/280x280_RS/f2/85/80/f285800341f125a25411597ff448a00a.jpg",
 "https://i.pinimg.com/564x/05/45/51/054551719b25c9399b018542e1aeaf63.jpg",
 "https://i.pinimg.com/originals/b4/ae/13/b4ae132a1c0329a297622c30d03ff4b3.jpg",
 "https://i.pinimg.com/originals/83/cd/cb/83cdcb88bb7d9fc54f1f75ea078ba073.jpg",
 "https://i.pinimg.com/736x/de/09/c9/de09c9d02f15dc8969f4a0a4439e3ba8.jpg"
]