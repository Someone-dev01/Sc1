/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastkayesCommandTime = {}; // Simpan waktu terakhir perintah kayes dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah kayes dieksekusi oleh pengguna saat ini
    if (lastkayesCommandTime[m.sender] && now - lastkayesCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastkayesCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const kayesImages = global.kayes;
    const randomIndex = Math.floor(Math.random() * kayesImages.length);
    const url = kayesImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random kayes >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastkayesCommandTime[m.sender] = now;
};

afriza.command = /^(kayes)$/i;
afriza.tags = ['random'];
afriza.help = ['kayes'];
module.exports = afriza;

global.kayes = [
  
  
"https://i.pinimg.com/736x/dd/f4/52/ddf45202d850bbcbf23db2fd3aa425bc.jpg",
"https://i.pinimg.com/originals/a0/77/70/a0777027eca8763eb35a4555ab6bc6ba.jpg",
"https://i.pinimg.com/736x/9e/56/98/9e5698539df9cbd72035f4220d214c48.jpg",
"https://i.pinimg.com/originals/97/f8/4f/97f84fecc8164443f9e4de641cece672.jpg",
"https://i.pinimg.com/originals/0f/5e/8f/0f5e8fb610d4f783792df3ccca409de7.jpg",
"https://i.pinimg.com/originals/af/cd/1b/afcd1b675a659513a00fa464edfb3309.jpg",
"https://i.pinimg.com/originals/f1/8d/5b/f18d5b91e3cbb5d600765a5010c2e2e2.jpg",
"https://i.pinimg.com/736x/08/aa/0f/08aa0f966a9f87d0d41ce32702966665.jpg",
"https://i.pinimg.com/736x/69/63/cf/6963cf8b90b1d5680721bdba5de6c18a.jpg",
"https://i.pinimg.com/736x/c5/02/f6/c502f6f12b0e2e972ed3f676a8129f5e.jpg",
"https://i.pinimg.com/originals/27/ec/0a/27ec0ab2c9d7290a5868053ee5fe3b66.jpg",
"https://i.pinimg.com/originals/4e/df/8d/4edf8d2277c6f1ba569b2bae790a2da8.jpg",
"https://i.pinimg.com/736x/6e/67/b1/6e67b13ebc5bdcd37fa54e922652a5cc.jpg",
"https://i.pinimg.com/736x/d0/80/ba/d080ba05f7bfe823b86196ce49a0e5c4.jpg",
"https://i.pinimg.com/564x/05/3b/41/053b41836efd3811c1f3a263c8853e57.jpg",
"https://i.pinimg.com/originals/d6/27/58/d6275889c9f7c0d58953e54a0e9d4cc4.jpg",
"https://i.pinimg.com/1200x/84/4e/29/844e290bb9fa8bcc8deb0a7611a84344.jpg",
"https://i.pinimg.com/originals/27/1c/9f/271c9ff7d9eb680e3ad17eb8ec9fe8d9.jpg",
"https://i.pinimg.com/474x/f3/49/11/f34911553ce8482b0f4ef4a7e247880e.jpg",
"https://i.pinimg.com/1200x/58/8f/1f/588f1f5d3cf83dfe27a63c71dec02c02.jpg",
"https://i.pinimg.com/736x/05/d2/22/05d2226987ca6ab797ed9df8360fee8b.jpg",
"https://i.pinimg.com/736x/b5/d1/1a/b5d11a8e36dcecf4f2db72c726776eae.jpg",
"https://i.pinimg.com/originals/a8/b4/28/a8b4280da0c7b2da59efd312bba68877.jpg",
"https://i.pinimg.com/originals/a6/95/c3/a695c33e6f451794ca0c38806a7651c8.jpg",
"https://i.pinimg.com/originals/2f/d4/1f/2fd41fb0a45a668524aea9e03f1fafa4.jpg",
"https://i.pinimg.com/originals/69/83/34/698334192373ccccfbd30ed01eabe1b4.jpg",
"https://i.pinimg.com/originals/02/ab/a2/02aba25eff9c5fd2a3045b318cd003db.jpg",
"https://i.pinimg.com/originals/93/9d/19/939d1901f5905dca96674a915eaf98be.jpg",
"https://i.pinimg.com/474x/c0/42/df/c042dfa9c240606f049e9d0f57736471.jpg",
"https://i.pinimg.com/236x/4b/3e/ce/4b3ece464da6470133306d40e914af39.jpg",
"https://i.pinimg.com/236x/35/fc/16/35fc16f1cd77b7808fb0587d5a225419.jpg",
"https://i.pinimg.com/736x/99/3a/6a/993a6a9f869cc4218743fa867714b656.jpg",
"https://i.pinimg.com/736x/e4/12/5e/e4125e4097161f2034d448a16769d6ac.jpg",
"https://i.pinimg.com/474x/34/1f/79/341f79fd9a1850837bf4c6dc3f1f5378.jpg",
"https://i.pinimg.com/736x/6f/66/84/6f6684c9ae91fa089061ab62c8a0aa3f.jpg",
"https://i.pinimg.com/originals/b2/f1/10/b2f110ed22c0df4cee66aa22946a3d36.jpg",
"https://i.pinimg.com/originals/61/9e/88/619e88a4a1808715cf6d60c0dbde70a7.jpg",
"https://i.pinimg.com/736x/a3/ba/89/a3ba892629b95961f7726d3e30d8a542.jpg",
"https://i.pinimg.com/474x/37/1d/34/371d34eb9d91bb4eec67bc01b0d143c6.jpg",
"https://i.pinimg.com/236x/e1/c8/cd/e1c8cde36c78978da827736d22f5b0e0.jpg",
"https://i.pinimg.com/originals/ac/ff/bf/acffbfe32244e186ed9fe8a0cf8e8482.jpg",
"https://i.pinimg.com/236x/8d/1d/ab/8d1dabb3bc7b4fd5f9457d21d2ca7e43.jpg",
"https://i.pinimg.com/originals/04/61/54/04615459fd375780e7ebea38d56f1e29.jpg",
"https://i.pinimg.com/474x/1f/2e/7f/1f2e7fd38998f05c30e46cd269b54a9a.jpg",
"https://i.pinimg.com/474x/33/e7/e9/33e7e97c4b0bbb6931f671402e30a52a.jpg",
"https://i.pinimg.com/236x/d7/ab/ca/d7abcabce7682d6c1c4e9dfd4f742b7e.jpg",
"https://i.pinimg.com/1200x/53/cd/93/53cd932261e012d89f7735b1dbd3c589.jpg",
"https://i.pinimg.com/474x/de/84/b0/de84b05f785d7752188cf34451f20015.jpg",
"https://i.pinimg.com/736x/fb/ab/5c/fbab5cb530f1ca5e50d8decdf6b633eb.jpg",
"https://i.pinimg.com/564x/80/25/a3/8025a3a3dd61cbb112921892e0dce94b.jpg",
"https://i.pinimg.com/originals/99/19/0b/99190b3d75941ea63965a431e4cd84bf.jpg",
"https://i.pinimg.com/736x/45/43/76/4543761a6d3b068c59fcb36f4508fcb2.jpg",
"https://i.pinimg.com/236x/3f/89/b0/3f89b0b93c0a7c649dfaca8ad08a002a.jpg",
"https://i.pinimg.com/236x/ca/eb/e1/caebe103b797cc5c853a73054e8ac667.jpg",
"https://i.pinimg.com/736x/d3/39/2f/d3392f60e9b3dcd251974a783d7770f1.jpg",
"https://i.pinimg.com/736x/19/2e/9b/192e9bd01106a57f37b0f1efed0857d7.jpg",
"https://i.pinimg.com/originals/cb/49/d0/cb49d02761526b036ca37de871481715.jpg",
"https://i.pinimg.com/originals/13/55/99/135599c1d2f7fd49319191dacf9b635f.jpg",
"https://i.pinimg.com/originals/a6/a4/e9/a6a4e934e897b0cc0595e60a1d1edeca.jpg",
"https://i.pinimg.com/originals/89/90/bb/8990bbcad195a7191e97f02af0c8af4c.jpg",
"https://i.pinimg.com/236x/94/6d/76/946d76a977193a2273b949c15db09ec7.jpg",
"https://i.pinimg.com/550x/76/b8/2e/76b82e56fff3274c657791fa5bbb9f86.jpg",
"https://i.pinimg.com/736x/41/b8/02/41b80205e4b9dfa031fe59e0913533fe.jpg",
"https://i.pinimg.com/originals/68/73/56/687356013af321dd08a2071ad6d94b22.jpg",
"https://i.pinimg.com/736x/85/0d/06/850d062e897741e190d40c7d73667233.jpg",
"https://i.pinimg.com/736x/3c/53/ec/3c53ec8766a511921426a16b19219675.jpg",
"https://i.pinimg.com/736x/9f/63/66/9f636696adb627ce56cd402c9567a4b8.jpg",
"https://i.pinimg.com/736x/aa/50/80/aa5080e97f74b1e831adf6147b9bc668.jpg",
"https://i.pinimg.com/originals/7e/e2/9a/7ee29aa6d09e739e901a3317e5f5ddb4.jpg",
"https://i.pinimg.com/736x/85/0b/20/850b205cb818aa118b43985d357379bc.jpg",
"https://i.pinimg.com/564x/f4/cd/2f/f4cd2fe2ca0b62de5bfae4fd98402a37.jpg",
"https://i.pinimg.com/originals/99/b4/c0/99b4c07f5ff389c26365f7b23068e7a7.jpg",
"https://i.pinimg.com/236x/e3/04/81/e3048119ca9f33edb0ef0dd35c95cef5.jpg",
"https://i.pinimg.com/736x/95/60/4e/95604ea6bd24e5d1c9fba30ab5ad0241.jpg",
"https://i.pinimg.com/originals/ae/6c/b2/ae6cb2aa3dd59c5aff9b2cd3395e64d8.jpg",
"https://i.pinimg.com/736x/fa/2a/52/fa2a5249fcc8814b988d8c813d538fa5.jpg",
"https://i.pinimg.com/1200x/86/de/35/86de3575d56ec0a6235d55aa961d1e48.jpg",
"https://i.pinimg.com/736x/27/65/45/2765451629aeed50fba1809797c940c4.jpg",
"https://i.pinimg.com/originals/59/9e/21/599e21f0499dfa3909a759cd4a4a5dbc.jpg",
"https://i.pinimg.com/1200x/bc/f7/63/bcf76370c78ab7ffb1f739051ca76650.jpg",
"https://i.pinimg.com/originals/55/b9/45/55b945a7f64bfa70d86800c079156562.jpg",
"https://i.pinimg.com/736x/46/3a/f9/463af9d07667956397d496b2cdf983ab.jpg",
"https://i.pinimg.com/550x/86/c9/dc/86c9dce2ad0c402af497a07feb71422e.jpg",
"https://i.pinimg.com/originals/28/d8/9f/28d89fd2d0d932dafc5f1de3ac24ccea.jpg",
"https://i.pinimg.com/736x/03/1f/2d/031f2d91b0f67be0ee999dda834b332e.jpg",
"https://i.pinimg.com/originals/f4/c1/4a/f4c14a2c5d60380bdf2386f706741e90.jpg",
"https://i.pinimg.com/originals/16/27/ba/1627ba58d9d09aef42ca1257d25cc798.jpg",
"https://i.pinimg.com/736x/55/d1/17/55d117eda4850ab8bdba9e7227d55f63.jpg",
"https://i.pinimg.com/originals/a3/58/3e/a3583e3b4d9801f6a6967ab9b7ae48d4.jpg",
"https://i.pinimg.com/originals/2e/61/08/2e6108943df26ecfdb30c762be8e978f.jpg",
"https://i.pinimg.com/550x/02/ea/e7/02eae79606a23456587befb00c16f578.jpg",
"https://i.pinimg.com/originals/c1/8e/7e/c18e7e7a636807d62082ce6ed6d0ca9b.jpg",
"https://i.pinimg.com/736x/b9/71/d7/b971d796aa8c6e0a504e384726123007.jpg",
"https://i.pinimg.com/originals/f5/bc/c6/f5bcc6167df01db085da832730c479e4.jpg",
"https://i.pinimg.com/originals/3e/0f/64/3e0f64c47705312bfee271d15475a1d8.jpg",
"https://i.pinimg.com/originals/fd/0e/31/fd0e31e4f39bcfb3046dd19698353d91.jpg",
"https://i.pinimg.com/originals/e5/2e/1c/e52e1ccb09ee98a1bffaeb760aa6f974.jpg",
"https://i.pinimg.com/236x/a3/1a/78/a31a78acb91e4ccaf7e2819ae127599a.jpg",
"https://i.pinimg.com/736x/1f/09/5a/1f095a083e4d6ff4be63e934dc4eeb92.jpg",
"https://i.pinimg.com/736x/5e/c1/67/5ec1672350a9ad523cb0f13462e3a9bd.jpg"
]