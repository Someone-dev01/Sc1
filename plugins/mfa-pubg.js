/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; 
let lastpubgCommandTime = {};

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    if (lastpubgCommandTime[m.sender] && now - lastpubgCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastpubgCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const pubgImages = global.pubg;
    const randomIndex = Math.floor(Math.random() * pubgImages.length);
    const url = pubgImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random pubg >///<",
        quoted: m
    });

    lastpubgCommandTime[m.sender] = now;
};

afriza.command = /^(pubg)$/i;
afriza.tags = ['random'];
afriza.help = ['pubg'];
afriza.limit = 3
module.exports = afriza;

global.pubg = [
"https://i.pinimg.com/736x/2a/41/c2/2a41c28a310195b2f91e2d90b1985550.jpg",
"https://i.pinimg.com/736x/66/6b/29/666b29058ad33e8f9e0c041702f29fac.jpg",
"https://i.pinimg.com/originals/2e/35/83/2e35833f10a1d1442ffa3fc30f607907.jpg",
"https://i.pinimg.com/474x/f6/49/7d/f6497dad4933c90ca7d937ae1cb1178d.jpg",
"https://i.pinimg.com/originals/da/2b/13/da2b1307ae2ed959b6bedf9162dda3ad.jpg",
"https://i.pinimg.com/originals/1b/6d/00/1b6d003c70c51da242ceccd2b4378fd9.jpg",
"https://i.pinimg.com/474x/da/28/ba/da28ba597cd8657c41f3cf58144f5720.jpg",
"https://i.pinimg.com/originals/e5/1d/f6/e51df6d85726d3a54185c61c647439f7.jpg",
"https://i.pinimg.com/736x/e1/67/3d/e1673d5b364301986048af4652edfda4.jpg",
"https://i.pinimg.com/736x/d9/d3/6f/d9d36f393a6d6b0d5c4a71e622966e65.jpg",
"https://i.pinimg.com/474x/d7/83/60/d783602a5efac21da7e8af7130dec980.jpg",
"https://i.pinimg.com/originals/7d/4c/85/7d4c85185c28219f977523a8fe05b270.jpg",
"https://i.pinimg.com/736x/10/41/c7/1041c7fd3873fbf67e62b999ac6ec2e5.jpg",
"https://i.pinimg.com/474x/e8/87/3b/e8873bfc3cd9dc8eb4e5232101731732.jpg",
"https://i.pinimg.com/originals/3a/b1/b9/3ab1b9d7269a74e253d6dc79050556a0.jpg",
"https://i.pinimg.com/originals/85/9a/c1/859ac18c23e14faa29479775bcad0843.jpg",
"https://i.pinimg.com/originals/64/5e/bb/645ebb127cb1b1455a18a7a9bc46dae2.jpg",
"https://i.pinimg.com/474x/db/10/cd/db10cd7030321d05c5ffd148301a15cd.jpg",
"https://i.pinimg.com/736x/76/2b/e3/762be3821728b50de44cb7275ca7105b.jpg",
"https://i.pinimg.com/564x/22/30/3d/22303de5349541a35437a5e3ad351bc8.jpg",
"https://i.pinimg.com/originals/0e/11/d6/0e11d69b330f485966e2ace6408b4693.jpg",
"https://i.pinimg.com/originals/2f/65/c5/2f65c581f695b2bba2bba87e5d0bbb46.jpg",
"https://i.pinimg.com/736x/e6/22/3a/e6223a7346354b17cf3a838ddd9eb465.jpg",
"https://i.pinimg.com/originals/81/87/6f/81876f2595cee19e42b33ecbc0ee66b1.jpg",
"https://i.pinimg.com/originals/de/b3/7d/deb37d72a1115b4184bbb90a2b65d4e7.jpg",
"https://i.pinimg.com/564x/67/1b/b7/671bb7d3b09e62109610d793bffbeffa.jpg",
"https://i.pinimg.com/564x/98/87/16/988716390f151637e1053111b0349980.jpg",
"https://i.pinimg.com/originals/bf/93/32/bf9332798cb864094c922ef0735a85ad.jpg",
"https://i.pinimg.com/originals/8a/18/94/8a18949177be92d57f81aec74f55091e.jpg",
"https://i.pinimg.com/564x/71/cd/72/71cd7244065eb8e680826daf472120d0.jpg",
"https://i.pinimg.com/736x/b3/7b/26/b37b267a7abc936057fed874f94f1df0.jpg",
"https://i.pinimg.com/564x/8d/fa/c5/8dfac5cc5a719ad5bdde5be1f43605f3.jpg",
"https://i.pinimg.com/736x/97/7f/64/977f64a3b8be88ff1db5781e33eadd75.jpg",
"https://i.pinimg.com/originals/29/be/50/29be50d4fe20d3aa870e59c2e7f8c648.jpg",
"https://i.pinimg.com/736x/86/f3/a8/86f3a843643ced4b400ba5897c1d2668.jpg",
"https://i.pinimg.com/474x/94/56/75/945675adfdb53d37bae7a2f3670eebf0.jpg",
"https://i.pinimg.com/564x/db/a0/11/dba01180a76337e016b5621ffa65991d.jpg",
"https://i.pinimg.com/originals/bb/4e/40/bb4e40062f1d1b3a0b074c21597c8d83.jpg",
"https://i.pinimg.com/474x/36/5a/5a/365a5aa57368e30b779ec81fcf2a2147.jpg",
"https://i.pinimg.com/564x/75/0e/f5/750ef591b1d046b291b07b541c3be4dc.jpg",
"https://i.pinimg.com/originals/e6/3f/48/e63f48e7e695892491a1f1288dec7a05.jpg",
"https://i.pinimg.com/736x/d1/a3/cb/d1a3cb595bc74dee065558dadaaffb80.jpg",
"https://i.pinimg.com/originals/39/4a/d9/394ad9cab8ffc5423ee54bea82631cfa.jpg",
"https://i.pinimg.com/474x/ec/96/1f/ec961ff00978bd95efabd8814171541e.jpg",
"https://i.pinimg.com/originals/51/9a/29/519a29cc27f5b77dac14f0160d247ecb.jpg",
"https://i.pinimg.com/736x/40/7f/ee/407feeb7f89eef7bb2ca46c769d326a0.jpg",
"https://i.pinimg.com/originals/74/f0/f0/74f0f0f12c6613de820b0ad3cb3aea94.png",
"https://i.pinimg.com/736x/9e/f8/60/9ef860c39112a42fd666fe9237cf2922.jpg",
"https://i.pinimg.com/736x/f4/d6/2e/f4d62ed354756b5e0b63b383148647f1.jpg",
"https://i.pinimg.com/736x/46/68/1c/46681c6e45653f2595a77d5114d0a36c.jpg",
"https://i.pinimg.com/736x/49/d9/d0/49d9d05781887dc3f1ece0fe50973e44.jpg",
"https://i.pinimg.com/564x/5e/1c/3d/5e1c3d7e77e2fa545e5c8456c1a45c4a.jpg",
"https://i.pinimg.com/474x/ec/d3/c5/ecd3c5d19eda0f38c9452433f3e9cfe9.jpg",
"https://i.pinimg.com/564x/91/38/39/9138395837be85a395f9e36bf9005fd2.jpg",
"https://i.pinimg.com/736x/3a/12/51/3a1251e80b41deb8e512507ba11c77c6.jpg",
"https://i.pinimg.com/474x/1c/81/82/1c8182520badecc8645fbf59a6c22c96.jpg",
"https://i.pinimg.com/474x/26/79/f0/2679f0d2d0916c6e71bdb3717d0e2c71.jpg",
"https://i.pinimg.com/474x/54/9c/76/549c767751d3c8a3c9f5188f4a39dcef.jpg",
"https://i.pinimg.com/originals/53/98/31/53983121ea3e253b45ad5e6b9435146b.jpg",
"https://i.pinimg.com/originals/a1/f7/29/a1f72912fc70da05cea479d7cf7bacf9.jpg",
"https://i.pinimg.com/474x/77/f9/16/77f916c70a35dd5d0e1aa3f08679ac90.jpg",
"https://i.pinimg.com/564x/d0/5a/03/d05a03591ca96f6354040c5d1151c70c.jpg",
"https://i.pinimg.com/564x/0d/45/e6/0d45e6445afabff4e5581ecf8c996893.jpg",
"https://i.pinimg.com/originals/17/80/b1/1780b18de42df1e286efefaf166fb63b.jpg",
"https://i.pinimg.com/564x/3c/d3/1f/3cd31f1d3925defecaacc31dc5418e42.jpg",
"https://i.pinimg.com/736x/d0/ca/ce/d0cace83ab2cfc5c17f02ea53808adcf.jpg",
"https://i.pinimg.com/736x/00/2c/d0/002cd099228e1d7a9ddc37fd93aa45fb.jpg",
"https://i.pinimg.com/736x/d4/1b/5d/d41b5dd9dd26b1d0d690968e30abb729.jpg",
"https://i.pinimg.com/originals/9f/f0/63/9ff06343e8178ab4795b65e6af5a0aa1.jpg",
"https://i.pinimg.com/736x/d6/81/2d/d6812d4b6fea010729061a011fad7a1e.jpg",
"https://i.pinimg.com/originals/80/11/32/8011329e83dc5df2863aa9e5d8d3986f.jpg",
"https://i.pinimg.com/474x/a1/61/7b/a1617ba69ef46b372ba9710382b9aeba.jpg",
"https://i.pinimg.com/474x/c4/ee/35/c4ee35b18c2ec17df36ab31ff0e1cf8e.jpg",
"https://i.pinimg.com/474x/72/6d/d1/726dd11a42b6da5e1085542db2765a60.jpg",
"https://i.pinimg.com/736x/a2/9a/b8/a29ab8d7ef3e5cd6766c97cc3ba182d5.jpg",
"https://i.pinimg.com/736x/b5/20/fc/b520fcb49faf4a7656f2fa38f834a3db.jpg",
"https://i.pinimg.com/originals/47/cc/f6/47ccf6cbfc158502d774d7960c7c2f2f.jpg",
"https://i.pinimg.com/originals/e6/35/23/e6352375501d9530b81326d0c94db91d.jpg",
"https://i.pinimg.com/564x/4f/dc/f0/4fdcf08e183fcd5a85de460e6a04191f.jpg",
"https://i.pinimg.com/736x/88/6c/89/886c89f2178125155cb4eb87c58c0ce8.jpg",
"https://i.pinimg.com/564x/e2/fd/79/e2fd796f7639e7309ec55927ff067dd8.jpg",
"https://i.pinimg.com/736x/33/b0/30/33b030424dce05dd2f97d8935cc006b9.jpg",
"https://i.pinimg.com/474x/fa/fd/b1/fafdb16fb24b10e1dbbaea6acbf181a7.jpg",
"https://i.pinimg.com/originals/30/cd/07/30cd07e5ce668572e9c916f6ccb2c015.jpg",
"https://i.pinimg.com/564x/17/33/ab/1733abb1650171e6c164c5effa3a59ac.jpg",
"https://i.pinimg.com/474x/31/fa/27/31fa27a0dfb77bf2eb93c57fd433c939.jpg",
"https://i.pinimg.com/originals/5d/b9/56/5db9564a9eaf9f5b1da0b5fceb7c71f9.jpg",
"https://i.pinimg.com/564x/58/37/0d/58370d453dde32a3d1d5bdc5018436ff.jpg",
"https://i.pinimg.com/474x/dd/03/f8/dd03f857e48a6a03857855d2745f65b9.jpg",
"https://i.pinimg.com/736x/e7/0c/be/e70cbe567af6b0b7bd89cdd94d3adcfb.jpg",
"https://i.pinimg.com/564x/f2/8b/e7/f28be77969f2becb551fd5344c417ee1.jpg",
"https://i.pinimg.com/736x/d4/e2/79/d4e279db53d92b829af15e60b0ba2199.jpg",
"https://i.pinimg.com/originals/8b/c1/79/8bc179cd058abbcb414a62f4dab9e8e2.jpg",
"https://i.pinimg.com/736x/c5/c2/32/c5c2323b9f3a39ef804411173a74f3b5.jpg",
"https://i.pinimg.com/originals/40/bd/80/40bd80221f04ff0126cd99c11b58a63b.jpg",
"https://i.pinimg.com/originals/82/83/d7/8283d74bfd7abcc18f6fcd9ebf980ea4.jpg",
"https://i.pinimg.com/736x/78/d2/44/78d24494a7d3efe722cab2c9f18b6b3b.jpg",
"https://i.pinimg.com/originals/a8/09/18/a80918171e0a16c734a93c50dc71d726.jpg",
"https://i.pinimg.com/736x/a5/03/fc/a503fccb6285bfa6944718a95c18cd7d.jpg",
"https://i.pinimg.com/736x/6b/67/26/6b67267d5b281ff2679dc6e63034e1f2.jpg"
 ]