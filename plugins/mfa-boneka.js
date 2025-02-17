/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastbonekaCommandTime = {}; // Simpan waktu terakhir perintah boneka dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah boneka dieksekusi oleh pengguna saat ini
    if (lastbonekaCommandTime[m.sender] && now - lastbonekaCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastbonekaCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const bonekaImages = global.boneka;
    const randomIndex = Math.floor(Math.random() * bonekaImages.length);
    const url = bonekaImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random boneka >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastbonekaCommandTime[m.sender] = now;
};

afriza.command = /^(boneka)$/i;
afriza.tags = ['random'];
afriza.help = ['boneka'];
module.exports = afriza;

global.boneka = [

"https://i.pinimg.com/originals/da/a5/6a/daa56a7378ccf4914a1fdc1441515b9a.jpg",
"https://i.pinimg.com/736x/dc/2f/6d/dc2f6db2c02b7bbe14b0993d448b26c9--movies--sbonekay-things.jpg",
"https://i.pinimg.com/474x/13/e1/45/13e1453d2acea4f8618ea4be38f080eb.jpg",
"https://i.pinimg.com/736x/36/cc/64/36cc646530e1f9f205423e677ef799b9.jpg",
"https://i.pinimg.com/originals/75/d2/b1/75d2b1965924a5407511cfe7b1cd0a4f.jpg",
"https://i.pinimg.com/736x/4b/4b/ec/4b4bec7d363627c25c8a078bcebf652d--angel.jpg",
"https://i.pinimg.com/originals/5e/63/11/5e631163455c432174ebf318b80aad77.jpg",
"https://i.pinimg.com/originals/94/70/fe/9470feeab7a213dbfbf8a5afd5fed311.jpg",
"https://i.pinimg.com/236x/f3/01/45/f301457899d9bc809c12bd567130780c.jpg",
"https://i.pinimg.com/236x/ec/4a/12/ec4a1237983f56218d206c7b974d7923.jpg",
"https://i.pinimg.com/originals/de/cf/70/decf707acfab673e99fdb399dee6d055.jpg",
"https://i.pinimg.com/236x/f5/a9/5d/f5a95de9e27fb3895dd2e9371c21bae9.jpg",
"https://i.pinimg.com/474x/39/b5/1a/39b51ab902cbebd16ccec13e516cc7cb.jpg",
"https://i.pinimg.com/736x/ff/00/ef/ff00ef21eb5db40f16cdb925357102da--halloween-movies-halloween-horror.jpg",
"https://i.pinimg.com/originals/d7/78/b9/d778b992d61f1aa23caa4bf6da259111.jpg",
"https://i.pinimg.com/474x/f6/5d/2d/f65d2de40c6f5d5847937f26e8fa7fc4.jpg",
"https://i.pinimg.com/originals/74/06/ac/7406acc80a1df8eca7c717a333257298.jpg",
"https://i.pinimg.com/originals/5e/1d/03/5e1d030dd01d39d9d871947dea321556.jpg",
"https://i.pinimg.com/564x/c2/e0/c5/c2e0c579627c3b564095fd0a6a06f5c3--chucky-tattoo-film-posters.jpg",
"https://i.pinimg.com/originals/fd/b3/b4/fdb3b4142cd1e310535763cc6474c3e9.jpg",
"https://i.pinimg.com/originals/a0/90/2c/a0902c74c017398b48f3ceb9387fa5f1.jpg",
"https://i.pinimg.com/736x/e1/e6/8e/e1e68e24f5a8257637544327f3a688bd.jpg",
"https://i.pinimg.com/originals/02/bf/70/02bf707471187c7ed7cc63562d00579a.jpg",
"https://i.pinimg.com/236x/6b/04/fa/6b04fa7c540f709a0797cd568c8478d3--doll-tattoo-tattoo-ink.jpg",
"https://i.pinimg.com/736x/7a/33/6d/7a336da5a3c4a75ecccfd38f11197ba8.jpg",
"https://i.pinimg.com/originals/1c/4e/4f/1c4e4fdf8b674f51aa3ed48b43f3e8fc.jpg",
"https://i.pinimg.com/originals/23/36/40/233640d85c91822053c9623359afc934.jpg",
"https://i.pinimg.com/736x/a9/91/9c/a9919cf65c720d6f80d76af747ae73a8.jpg",
"https://i.pinimg.com/736x/71/aa/1f/71aa1f6add3504506c6673b9f69846b6.jpg",
"https://i.pinimg.com/236x/59/71/06/5971068264d50e40a3e51873dbf6589f--chucky-tattoo-best-tattoos.jpg",
"https://i.pinimg.com/736x/bd/ba/08/bdba0836264bd5a1a38e39533a348bc4.jpg",
"https://i.pinimg.com/474x/0f/dc/cc/0fdcccfd21398831a58f2567c64794d6.jpg",
"https://i.pinimg.com/originals/ae/02/b8/ae02b860a0fd2c0b40e84d446c08ef1f.jpg",
"https://i.pinimg.com/originals/51/9c/c3/519cc3226f09cd008c579d90fd6b7341.png",
"https://i.pinimg.com/736x/92/ed/93/92ed9306edffa27aef9e54355d611225--tattoo-ideas-horror.jpg",
"https://i.pinimg.com/736x/08/f3/ba/08f3badfcafd6b1a8a5d993bd67d447d--horror-movies.jpg",
"https://i.pinimg.com/236x/45/15/30/451530a276a420e16007558957f59e67.jpg",
"https://i.pinimg.com/originals/1f/ac/c2/1facc23accabb26ecf6e07055aa9416e.jpg",
"https://i.pinimg.com/originals/7e/b6/b7/7eb6b73b0c12f81077cf80523b0ce4eb.jpg",
"https://i.pinimg.com/originals/ff/f6/1d/fff61d0c6ff6c32aa6b319c3dfc2acf4.jpg",
"https://i.pinimg.com/736x/46/5e/33/465e335565a7237dba90ad28148acfd7--children-play-horror.jpg",
"https://i.pinimg.com/474x/8c/51/60/8c516010ec633f7a5842e28ff3c72f8a--sbonekay-movies-horror-movies.jpg",
"https://i.pinimg.com/550x/c3/db/b1/c3dbb1885ee38cca7b3897c39d678ceb.jpg",
"https://i.pinimg.com/736x/69/cf/5f/69cf5f65b7b039833aca75ec928b8ac5.jpg",
"https://i.pinimg.com/474x/6e/05/3e/6e053eec0d4f579cc62e8bdc26aa50f2.jpg",
"https://i.pinimg.com/736x/7c/1f/6b/7c1f6bee3842029d7419e81ea79634d8.jpg",
"https://i.pinimg.com/originals/fd/3b/a2/fd3ba25cff538c3ab4a75e66cbf3eb9d.jpg",
"https://i.pinimg.com/236x/ff/42/76/ff42769c6be69bf306865673b2f22d2b.jpg",
"https://i.pinimg.com/474x/4a/cc/e0/4acce00f6402f017959aa096a48aa1b0.jpg",
"https://i.pinimg.com/originals/48/fc/6d/48fc6d8c5014df95bd38cea11045dc47.jpg",
"https://i.pinimg.com/originals/34/80/49/348049373d69e1729805f23d3496bf4b.jpg",
"https://i.pinimg.com/originals/b5/fc/d0/b5fcd0c955b7eba6e9b4be06e831d867.png",
"https://i.pinimg.com/originals/9a/ed/ba/9aedba682a9a23d6573b5280a81f78af.jpg",
"https://i.pinimg.com/originals/93/57/07/935707702f9a698400c007a5c5f3fa9d.jpg",
"https://i.pinimg.com/originals/80/7b/32/807b328ed4919abf042a8adc831b9937.jpg",
"https://i.pinimg.com/originals/ed/6d/a3/ed6da36ce051f2d3f64d5938cf58bfe8.jpg",
"https://i.pinimg.com/originals/5a/78/85/5a7885d91eec77facb616cee3f11b86c.jpg",
"https://i.pinimg.com/736x/7a/27/9b/7a279b4a01dc5fa2733061527897f76b--cosplay-costumes-cosplay-ideas.jpg",
"https://i.pinimg.com/736x/cd/0c/82/cd0c82ec6ca455a5e3f0ad8670052074.jpg",
"https://i.pinimg.com/736x/b0/06/27/b006270aba04231d1ae9a5c8d0cb8c29.jpg",
"http://31.media.tumblr.com/f493b7352fa22fc56c34ff57ca6934ff/tumblr_n990rwxO1D1qav174o1_500.jpg",
"https://i.pinimg.com/564x/a1/b1/70/a1b170000888f4de372b83426fd220e9.jpg",
"https://i.pinimg.com/474x/30/d6/f6/30d6f6d2a80d9f8d65aee227c43dc63c.jpg",
"https://i.pinimg.com/originals/aa/24/79/aa24796a4d06b7330c96fd7b95b21b0c.jpg",
"https://i.pinimg.com/originals/d1/1a/df/d11adfc381ae123a0f47f6eacf39933d.jpg",
"https://i.pinimg.com/474x/aa/f5/92/aaf592dd18880eba58e0e4104e78624f--horrorfilms-sbonekay-movies.jpg",
"https://i.pinimg.com/originals/85/fa/c7/85fac72e845b00b68913b384165d27b0.png",
"https://i.pinimg.com/236x/f8/83/a5/f883a56d75ddeb248b2bedf52b1704d6--chucky-tattoo-ink.jpg",
"https://i.pinimg.com/736x/b0/05/90/b00590f4b445bd524ac0457496d9baa0.jpg",
"https://i.pinimg.com/originals/6a/53/01/6a530143c5b50d1c244f6d2df8b75421.jpg",
"https://i.pinimg.com/474x/55/fb/32/55fb32f0bd2e08f6335c4dc42880d47a--horror-movies-finger.jpg",
"https://i.pinimg.com/originals/3c/35/19/3c3519eea5e8fd2c2cde38885253e774.png",
"https://i.pinimg.com/236x/9c/3f/5c/9c3f5c110b65b321a831d300c810c3ad--sbonekay-movies-horror-movies.jpg",
"https://i.pinimg.com/736x/15/9f/06/159f06ed8878bf33fbbca0a9a1669a64.jpg",
"https://i.pinimg.com/474x/db/59/23/db5923b2c79cfe40727a04c7fbacb29e.jpg",
"https://i.pinimg.com/originals/27/34/0d/27340db43f4c1e7eac8a5dbd54be081d.jpg",
"https://i.pinimg.com/originals/47/97/cc/4797cc6ba786cd0c807c14e7ebca58e3.jpg",
"https://i.pinimg.com/564x/6c/c8/22/6cc822f3c6daca76274b9cb0c17ac0b0.jpg",
"https://i.pinimg.com/550x/17/1c/93/171c932d8dfa54ffc3504a8cc3ae0dfa.jpg",
"https://i.pinimg.com/originals/fe/8f/b5/fe8fb55e48ebc4ce47fdf9cc00b5cd3b.jpg",
"https://i.pinimg.com/474x/da/56/2f/da562f9d1ff093086dd8df6581654d26.jpg",
"https://i.pinimg.com/originals/5e/92/66/5e92669595aacb2f81447cd3de1a9247.jpg",
"https://i.pinimg.com/236x/eb/ac/e0/ebace02477f6e6b4db570f21900be21c.jpg",
"https://i.pinimg.com/736x/3d/a3/8a/3da38ab7bf82b0499a92f8987205011e.jpg",
"https://i.pinimg.com/474x/fa/f1/58/faf158267ded3c5718bc10b86aa2ce9a--chucky-costume-creepy-dolls.jpg",
"https://i.pinimg.com/236x/30/88/54/3088548ae4aee955a511e25089436c47--bride-of-chucky-doll-horror-icons.jpg",
"https://i.pinimg.com/474x/07/22/53/0722534aa8b6e5c1a7507c0547a37368.jpg",
"https://i.pinimg.com/236x/d7/bb/92/d7bb92292040770aeeeef936a9cd1693.jpg",
"https://i.pinimg.com/1200x/a3/d5/a3/a3d5a3347a6430f6f9c0ead4913d262f.jpg",
"https://i.pinimg.com/originals/48/d0/74/48d0747af44312d92dda462736976e75.jpg",
"https://i.pinimg.com/236x/b7/b2/57/b7b257e4350fa5812e8fc34fe7d630b8--chucky-tattoo-footprint-tattoo.jpg",
"https://i.pinimg.com/736x/af/a5/b6/afa5b6d7ea44883bf361046089fe3644.jpg",
"https://i.pinimg.com/236x/10/e0/a1/10e0a12c5a1f030085fa681c42b4f0d8.jpg",
"https://i.pinimg.com/736x/94/32/80/9432808631598b503b766e46d8e718b0.jpg",
"https://i.pinimg.com/236x/9e/51/ec/9e51ec1d379686c67e5753a67b6c3098--creepy-tattoos--tattoos.jpg",
"https://i.pinimg.com/550x/24/f8/10/24f81040d55fb5bc02b21d619c8acf96.jpg",
"https://i.pinimg.com/736x/e3/08/89/e3088973237dbb1b44aaccc5799e3688.jpg",
"https://i.pinimg.com/originals/82/c2/69/82c269380232260047fbc028a34d890b.jpg",
"https://i.pinimg.com/originals/14/f7/4c/14f74ce49d9cc56002dae86fc0ad4882.jpg",
"https://i.pinimg.com/736x/f0/a3/7b/f0a37b0ffa16839e0373364c0d97278e.jpg"
]