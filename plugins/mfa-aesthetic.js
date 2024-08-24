/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastaestheticCommandTime = {}; // Simpan waktu terakhir perintah aesthetic dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah aesthetic dieksekusi oleh pengguna saat ini
    if (lastaestheticCommandTime[m.sender] && now - lastaestheticCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastaestheticCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const aestheticImages = global.aesthetic;
    const randomIndex = Math.floor(Math.random() * aestheticImages.length);
    const url = aestheticImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random aesthetic >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastaestheticCommandTime[m.sender] = now;
};

afriza.command = /^(aesthetic)$/i;
afriza.tags = ['random'];
afriza.help = ['aesthetic'];
module.exports = afriza;

global.aesthetic = [

"https://i.pinimg.com/originals/63/57/66/635766e0012b1043b417569045677466.png",
"https://i.pinimg.com/736x/e6/2c/e6/e62ce675477cd0e4a2b58f054ad61a78.jpg",
"https://i.pinimg.com/474x/96/3a/55/963a559b2b28f887bafa8104b842f77d.jpg",
"https://i.pinimg.com/736x/2d/7b/5b/2d7b5b2f57ea965fd5e89581bb53f07e.jpg",
"https://i.pinimg.com/originals/ce/6c/e4/ce6ce4a8a7d357add239df2dba7130d2.jpg",
"https://i.pinimg.com/736x/7c/58/a3/7c58a331634e34e4198383d4c82fb266.jpg",
"https://i.pinimg.com/736x/6c/d1/51/6cd151fb83df27d4e06f81d8633d3d94.jpg",
"https://i.pinimg.com/236x/16/1c/22/161c221d96dcc1123f5fe191e0142727.jpg",
"https://i.pinimg.com/originals/ff/47/33/ff473398177b52b76d50656e7647e70f.jpg",
"https://i.pinimg.com/736x/b4/e6/24/b4e62402d58034690486c384d2d6727e.jpg",
"https://i.pinimg.com/474x/b6/da/d8/b6dad817cce4a4c7d034eae2950cbfb3.jpg",
"https://i.pinimg.com/736x/1a/d0/0c/1ad00c60485c3775da0653b5bdf25789.jpg",
"https://i.pinimg.com/originals/59/71/68/597168456512a74727dfd000735093b4.png",
"https://i.pinimg.com/736x/b2/c4/f9/b2c4f93407c9208cd401c682943408e7.jpg",
"https://i.pinimg.com/736x/0e/b2/4f/0eb24f35ef1896295e95fe0ef128bc13.jpg",
"https://i.pinimg.com/originals/cb/9e/3f/cb9e3fff187e8440e5c221a00ce73e84.png",
"https://i.pinimg.com/originals/57/68/3d/57683d4c8c79614aee77a1f41650f711.jpg",
"https://i.pinimg.com/564x/b9/8f/f4/b98ff441a9abef04a4848c7683b5ca14.jpg",
"https://i.pinimg.com/474x/5e/ab/ad/5eabad6505f485992669d368034dbce8.jpg",
"https://i.pinimg.com/originals/11/5a/69/115a6980e8008379f65f4e34f92bda72.png",
"https://i.pinimg.com/originals/4c/45/d7/4c45d7aa51f298c6502b2e327a6ad619.jpg",
"https://i.pinimg.com/originals/3e/72/c1/3e72c1f0f464637ae9e23f04f3becdcf.png",
"https://i.pinimg.com/originals/c9/6c/05/c96c05b93d36531bd29327643df079dd.jpg",
"https://i.pinimg.com/736x/bc/39/7a/bc397aad9b28519643729f36c6d334fa.jpg",
"https://i.pinimg.com/736x/37/4e/06/374e0606c85968f4d06b796bad108288.jpg",
"https://i.pinimg.com/originals/1a/44/4d/1a444d8f2eed34f6e81a526b2c755eda.jpg",
"https://i.pinimg.com/564x/fd/ed/d3/fdedd3cfdfb946f78f092c0b65ed9a96.jpg",
"https://i.pinimg.com/originals/b3/d7/de/b3d7de2d6cd205a75cd7de7a0e2dc51e.jpg",
"https://i.pinimg.com/736x/55/f8/1e/55f81ec7e708ba9117d6d9a62d48a735.jpg",
"https://i.pinimg.com/originals/e0/2c/f3/e02cf38c0b8d9cbc5f3c80490204c31a.jpg",
"https://i.pinimg.com/474x/ac/60/4a/ac604a7c18ba0188459b5d316dcb58b3.jpg",
"https://i.pinimg.com/originals/8f/2c/b2/8f2cb2c0b18ba618fc338498f7fdcdcc.jpg",
"https://i.pinimg.com/originals/da/4e/07/da4e072171cfe3833ee0be912cd8dce9.jpg",
"https://i.pinimg.com/originals/41/f5/22/41f522c5a932ff7645d5941de3eaadda.jpg",
"https://i.pinimg.com/474x/c4/c1/63/c4c1635744c257ef8e0df82a208a8942.jpg",
"https://i.pinimg.com/originals/be/47/38/be4738354d3204c247509387c94c2614.jpg",
"https://i.pinimg.com/564x/0c/93/d1/0c93d1745867eda3ce73e91e1c30158e.jpg",
"https://i.pinimg.com/736x/53/38/f8/5338f8f34d04e94e076d1d2e6d2350a0.jpg",
"https://i.pinimg.com/originals/26/d2/86/26d2866c71d6719d650a472b55fbf479.jpg",
"https://i.pinimg.com/originals/8f/89/2a/8f892afc525a7b983eff1019ce44d0f3.jpg",
"https://i.pinimg.com/originals/a3/00/0b/a3000b688cfa3bb2f9f6e279a7fc735b.jpg",
"https://i.pinimg.com/736x/5b/da/7c/5bda7c414ddfe6c07bc3a7afcbe64db3.jpg",
"https://i.pinimg.com/736x/1d/7d/b9/1d7db9853a2faac6657fa1d688bf753d.jpg",
"https://i.pinimg.com/originals/5b/77/10/5b771053bcfe8520adedf2e62a0ae98e.jpg",
"https://i.pinimg.com/474x/94/54/87/945487040fdae83e53f9fed012099031.jpg",
"https://i.pinimg.com/originals/45/1a/f6/451af69c3d893ecf7d5e8db29e694f63.png",
"https://i.pinimg.com/originals/03/68/59/036859e657d5ec24de602a3c1380afc8.jpg",
"https://i.pinimg.com/originals/92/ea/9c/92ea9ccbdbcd65595e9deac0982b5646.png",
"https://i.pinimg.com/474x/bd/24/44/bd244439ba78230faeb8b14ff8532a9f.jpg",
"https://i.pinimg.com/originals/9d/75/fa/9d75faeb06e84a669d772885f59711f6.jpg",
"https://i.pinimg.com/564x/c5/b8/3e/c5b83eafa630e9836080368d7d4e1367.jpg",
"https://i.pinimg.com/originals/23/58/cb/2358cbf776160115076d14abefe1eec5.jpg",
"https://i.pinimg.com/474x/a6/63/d7/a663d7e0d993600628304052f523984a.jpg",
"https://i.pinimg.com/originals/5d/c7/20/5dc7202aa8eb6f517173fcbf2141b642.jpg",
"https://i.pinimg.com/236x/95/08/99/9508990e3225639a266d137a0bd5e2c9.jpg",
"https://i.pinimg.com/originals/48/31/4e/48314eb9dbdd0426c9f67139dbd71b6e.png",
"https://i.pinimg.com/originals/24/7c/af/247caf76a0dfe2ac4fb3f0241a5360cf.jpg",
"https://i.pinimg.com/736x/2b/4d/fe/2b4dfe415a7eb4b083c14280862c1316.jpg",
"https://i.pinimg.com/736x/df/5a/7b/df5a7b1716c5d77e503eb44dc1f66ebe.jpg",
"https://i.pinimg.com/564x/f2/11/81/f2118162c32a583ece95d84e49167211.jpg",
"https://i.pinimg.com/originals/ff/39/4e/ff394ef5f262e2290abf2d3a4e3b589e.jpg",
"https://i.pinimg.com/originals/74/49/41/7449413dc2771509ef7ee71380ddaf67.jpg",
"https://i.pinimg.com/originals/ad/f2/0e/adf20e4b696c1adad152343806834123.jpg",
"https://i.pinimg.com/736x/39/34/32/393432e7ad05ab84e51ca1c4bf0f7480.jpg",
"https://i.pinimg.com/736x/45/1f/53/451f53436e65ee40b5fb7c791bfdcfca.jpg",
"https://i.pinimg.com/originals/dc/77/55/dc775585466f0aedea6fd0d771ddd7ec.png",
"https://i.pinimg.com/474x/c4/6c/08/c46c089d87c8810ee8e39c465bdec670.jpg",
"https://i.pinimg.com/736x/4e/49/a3/4e49a3a2ee7dc86740acf7d141a8d4c1.jpg",
"https://i.pinimg.com/236x/81/68/77/8168774f8b714d65417e7615aac3f361.jpg",
"https://i.pinimg.com/736x/98/62/ea/9862eade6216292ed6c1ed28e8c7171a.jpg",
"https://i.pinimg.com/236x/82/ed/4e/82ed4e3bd06b8ec3f21763430b7f5e86.jpg",
"https://i.pinimg.com/736x/d8/f9/d4/d8f9d409585270395c2c17c2d63a2252.jpg",
"https://i.pinimg.com/originals/eb/10/ed/eb10edade934fa4e08b785d199fddfd2.jpg",
"https://i.pinimg.com/736x/fd/df/d8/fddfd83c4d532e7d517928029d9f2b7a.jpg",
"https://i.pinimg.com/originals/c6/f4/1f/c6f41f9e00e68a755ffdf52d51c8a19e.jpg",
"https://i.pinimg.com/736x/11/3a/31/113a3116adbf71b32d2dfa7d7981208a.jpg",
"https://i.pinimg.com/originals/0c/05/69/0c0569ce317456049d2fef50e1ff9a5e.jpg",
"https://i.pinimg.com/originals/db/93/a1/db93a16d25736c85650883bf9465656b.jpg",
"https://i.pinimg.com/originals/f9/ce/4e/f9ce4e703b635ddf2bf243c83b4e3402.jpg",
"https://i.pinimg.com/originals/f2/d6/ec/f2d6ecf901a3cfc1ac952691404c875c.png",
"https://i.pinimg.com/736x/3a/5b/2e/3a5b2e2874de62ca45db345948702819.jpg",
"https://i.pinimg.com/564x/6f/7a/9a/6f7a9aaf3c4204eec130216ae6e491de.jpg",
"https://i.pinimg.com/originals/68/e3/81/68e381a3486467e5b8626e0cb7cdf433.png",
"https://i.pinimg.com/736x/74/b4/95/74b4954d645c453667784e6e7e8e899a.jpg",
"https://i.pinimg.com/originals/90/37/58/903758e5922034ec2641fc8a62da7e38.jpg",
"https://i.pinimg.com/736x/32/41/94/3241949f4bbec7df931d6c645dd558cc.jpg",
"https://i.pinimg.com/originals/17/43/9e/17439e421cbe19a7141dc67d0fec5a86.jpg",
"https://i.pinimg.com/736x/1e/a3/9b/1ea39bcd1d44c5462dbd9ed30fdd9d0f.jpg",
"https://i.pinimg.com/236x/c2/b6/da/c2b6da003226632ed62e816df94d13b2--tumblr-iphone-wallpaper.jpg",
"https://i.pinimg.com/736x/35/3d/a9/353da9ab23131aebaa6a43ceb37d2b9e.jpg",
"https://i.pinimg.com/originals/37/c2/ef/37c2ef148530378deec1b758fb1bd42d.jpg",
"https://i.pinimg.com/564x/8b/2d/9f/8b2d9fbeae9ecd25a43f6ee618f0ff97.jpg",
"https://i.pinimg.com/564x/3b/d7/27/3bd727910ab82a4e56222f57a181da84.jpg",
"https://i.pinimg.com/564x/4d/6a/0a/4d6a0afc0ba963198fa71c65dc9bd8e9.jpg",
"https://i.pinimg.com/originals/b4/e6/d2/b4e6d2b3719452e6d2757930d7ee5ee4.jpg",
"https://i.pinimg.com/736x/4d/63/13/4d6313b294a6010a9313694f98c0209e.jpg",
"https://i.pinimg.com/736x/56/a1/24/56a124f43c43170fb93398763a993bad.jpg",
"https://i.pinimg.com/originals/65/95/ec/6595ec965a6052d6ae1496d5f4a375b8.jpg",
"https://i.pinimg.com/564x/9d/5c/99/9d5c99ef9fbc96151af9238075b14941.jpg",
"https://i.pinimg.com/originals/26/23/84/2623845c499b09a039a8f28854dc9360.png",
"https://i.pinimg.com/originals/26/03/ec/2603ecf40dd252e9cbf4315740d6dc99.jpg",
"https://i.pinimg.com/originals/3f/fc/81/3ffc81c1809f3926af80d490e54fc1a7.jpg",
"https://i.pinimg.com/564x/3e/7d/c3/3e7dc3ef87ff657d150444c32c1af47c.jpg",
"https://i.pinimg.com/564x/93/30/e2/9330e2ba8812f086c0b017214b3ead96.jpg",
"https://i.pinimg.com/originals/de/3a/63/de3a63c2afc0d9ccf7499607452d52a5.jpg",
"https://i.pinimg.com/originals/33/09/d8/3309d8775617f38a676d0692a256b16a.jpg",
"https://i.pinimg.com/originals/63/b8/6b/63b86b4b2f4fb74f08ae1bfd26c101fa.jpg",
"https://i.pinimg.com/564x/bf/bc/23/bfbc23e3fa6d63fffca42621031bebaa.jpg",
"https://i.pinimg.com/originals/df/0f/27/df0f2736ab47811b77dd0cf8e43b9f7d.jpg",
"https://i.pinimg.com/474x/d5/e6/69/d5e6691460314243923185d31fba9582.jpg",
"https://i.pinimg.com/736x/d2/1f/b7/d21fb737b24c1b09ec435e5f8f0440db.jpg",
"https://i.pinimg.com/736x/6c/f5/de/6cf5de14bb3d8b7678104ed6df46912b.jpg",
"https://i.pinimg.com/originals/a6/e8/1b/a6e81b2bb0685ebab1d7b2f15283b7e4.jpg",
"https://i.pinimg.com/originals/4b/af/ab/4bafabf87afb7bf31498f7adc091572f.jpg",
"https://i.pinimg.com/originals/a2/82/97/a2829770593282f92dee6dd559de8e19.png",
"https://i.pinimg.com/originals/b7/06/05/b70605c47600edaab3ba8fa35b03eed6.png",
"https://i.pinimg.com/474x/59/91/43/59914330bbfc76be5f0a83471bda3f90.jpg",
"https://i.pinimg.com/474x/4b/32/87/4b328733363460346f22a996eb4265e1.jpg",
"https://i.pinimg.com/736x/ab/15/8e/ab158e04daf296b8a887aed1eb5ef2fc.jpg",
"https://i.pinimg.com/564x/ca/1a/9f/ca1a9f2e44ddc0219c1ed69c7fa8a273.jpg",
"https://i.pinimg.com/originals/36/de/e0/36dee0fc017304b615e0b882ddf1bca0.jpg",
"https://i.pinimg.com/474x/6a/05/6c/6a056c16e2d2b292a6ab822cfa4a83ff.jpg",
"https://i.pinimg.com/736x/23/ba/6e/23ba6e7ba0abd70fd5201d89d43c51e0.jpg",
"https://i.pinimg.com/originals/0d/ec/ae/0decaee7bd5bb4848acbc5b67293d83e.jpg",
"https://i.pinimg.com/564x/99/15/9f/99159f45b868e14c081d9b184438b025.jpg",
"https://i.pinimg.com/originals/de/f0/d7/def0d7b00f9d8008e176366ae4c0207c.jpg",
"https://i.pinimg.com/originals/8c/af/16/8caf16a46b7431ffd75d60c99b9f2d6b.jpg",
"https://i.pinimg.com/474x/46/dd/4e/46dd4eaf592cf5704ecb983edff03683.jpg",
"https://i.pinimg.com/736x/20/06/01/200601bd871750c7ed0489ab2b377183.jpg",
"https://i.pinimg.com/originals/0b/ab/d6/0babd6604e4d7e629386227946db16b3.png",
"https://i.pinimg.com/originals/ab/8b/a4/ab8ba4c244c8b3a8660ab0961a7c214c.jpg",
"https://i.pinimg.com/736x/50/ee/16/50ee16e3318317b94c8c7216e7c2df4d.jpg",
"https://i.pinimg.com/474x/52/1b/e8/521be89090b6dc0f4c49b106813d0505.jpg",
"https://i.pinimg.com/736x/67/83/24/67832472f3ced552125d8b79879f14f7.jpg",
"https://i.pinimg.com/736x/37/ed/a5/37eda5e22ee8d1b9d84b4c252e45be1f.jpg",
"https://i.pinimg.com/736x/b4/a9/e5/b4a9e51be6a7f04a45ac60cdcfa058db.jpg",
"https://i.pinimg.com/originals/99/8d/0c/998d0c75499fb7134ecc13c893e3567b.jpg",
"https://i.pinimg.com/originals/df/3d/36/df3d36668130dc1c6726bcb6445bc135.png",
"https://i.pinimg.com/originals/b9/c7/5f/b9c75fe090de55b4f3f272fdbea3c4b3.jpg",
"https://i.pinimg.com/736x/10/a3/62/10a362dcc2b500b38b7a18c0f8e56633.jpg",
"https://i.pinimg.com/736x/03/67/42/0367424064ac0150ea778c9ea6233b43.jpg",
"https://i.pinimg.com/originals/67/2e/80/672e80d4a4a54fe7bc4a1bdb51286531.jpg",
"https://i.pinimg.com/originals/15/47/ba/1547bace14e1b8fbf75e3940fc3a048c.jpg",
"https://i.pinimg.com/originals/5d/f7/01/5df701d9b791231a4a5b5364d093a947.jpg",
"https://i.pinimg.com/originals/8a/11/10/8a111047e9c2d8666b9158b6bd715580.png",
"https://i.pinimg.com/originals/52/ca/50/52ca5013af5da8b5c698701023a4be0b.jpg",
"https://i.pinimg.com/originals/63/bd/d2/63bdd2d9d5049d56a14a06ad1797459e.jpg",
"https://i.pinimg.com/originals/b7/ed/31/b7ed3187acc707b300228ba17689aceb.jpg",
"https://i.pinimg.com/originals/3d/14/94/3d149472b77ad738f37fbd783dbaedb4.png",
"https://i.pinimg.com/originals/5f/66/12/5f661200610211326288939758bc2c7a.jpg",
"https://i.pinimg.com/736x/d5/ef/66/d5ef660566553b27db75dc7f058562b1.jpg",
"https://i.pinimg.com/564x/af/96/fa/af96fa50c0b0e7e9ccf02dfa606958dc.jpg",
"https://i.pinimg.com/736x/ae/f2/da/aef2da40ebc64fb79e463056394d642a.jpg",
"https://i.pinimg.com/736x/45/17/e3/4517e37e82240d838ae6037ad2d98f6b.jpg",
"https://i.pinimg.com/736x/48/84/e3/4884e3fab465c98b93ea64e30b353fb1.jpg",
"https://i.pinimg.com/736x/26/ac/01/26ac01cb3143c52d2b320d0221a37320.jpg",
"https://i.pinimg.com/originals/89/ee/40/89ee405569eaa1ba2ab48c8b8b5e20f3.png",
"https://i.pinimg.com/564x/7d/77/74/7d777479bf982a358729153f4d4e0296.jpg",
"https://i.pinimg.com/736x/97/63/57/976357c3dc36e537db5a94d25e543863.jpg",
"https://i.pinimg.com/originals/c1/54/e5/c154e58bacadaae4c92e5fe4cdc72002.jpg",
"https://i.pinimg.com/736x/62/49/79/62497981b0f1151536d385c112350909.jpg",
"https://i.pinimg.com/originals/59/9d/41/599d4170d8ad75351002ba2206997899.jpg",
"https://i.pinimg.com/564x/3e/2c/5f/3e2c5f678e3e2daa997cd6a9108c6b82.jpg",
"https://i.pinimg.com/736x/55/8d/f8/558df879b8e21cb66fd48cd668c71a4f.jpg",
"https://i.pinimg.com/474x/bd/df/7f/bddf7f8bbea5d1cd930f9fccb19a3c17.jpg",
"https://i.pinimg.com/474x/c4/35/a4/c435a4381986e2bdf83c2867263b4717.jpg",
"https://i.pinimg.com/originals/d9/9c/62/d99c629a4df001e6dff678670de3bbea.jpg",
"https://i.pinimg.com/originals/88/19/6f/88196ff2a378811123fbb10288be0b84.jpg",
"https://i.pinimg.com/736x/8f/c5/84/8fc584b77ec4aa72c0d02e0d9c04c291.jpg",
"https://i.pinimg.com/originals/ce/64/2a/ce642a8c1d948602e20651a2d38c6a65.jpg",
"https://i.pinimg.com/736x/f5/43/41/f54341588aad19de5744375a7ac890b7.jpg",
"https://i.pinimg.com/474x/ce/7f/68/ce7f6822998fc0a56c23c1c7a13c6483.jpg",
"https://i.pinimg.com/originals/3e/7d/5a/3e7d5a807b54db936df0637aeef6b98d.jpg",
"https://i.pinimg.com/736x/f5/d5/0a/f5d50a7699c3bba7abe62042b5174ac3.jpg",
"https://i.pinimg.com/564x/70/d9/13/70d913b652dc310d8b0d1f2c7834df8a.jpg",
"https://i.pinimg.com/736x/b3/17/a8/b317a8204e2de93e4dd60251cecc340d.jpg",
"https://i.pinimg.com/564x/30/42/37/304237ad3e88da7eef4c5a4a2b55e6cd.jpg",
"https://i.pinimg.com/originals/16/a2/5d/16a25de4654efeb8257800ac939cefe4.jpg",
"https://i.pinimg.com/474x/b0/93/96/b093969dc1001910c527f01b53778397.jpg",
"https://i.pinimg.com/originals/e0/ec/98/e0ec98b6437473de83741eda28dc296e.jpg",
"https://i.pinimg.com/originals/ae/92/29/ae922999cbf4bf6f95bac2c94ebeaffa.jpg",
"https://i.pinimg.com/474x/9f/f4/f2/9ff4f245590ef634031accb1634fdfb2.jpg",
"https://i.pinimg.com/474x/c7/cb/d0/c7cbd0d85177dae3c63ab6f281ea91c4.jpg",
"https://i.pinimg.com/originals/22/6c/f8/226cf8637ec4a470abe01dc35cc034bf.jpg",
"https://i.pinimg.com/originals/03/05/57/030557846856f7c596d6035b69572f43.jpg",
"https://i.pinimg.com/originals/44/ef/ca/44efcaf494779f447befc86abef90665.jpg",
"https://i.pinimg.com/originals/bc/98/d5/bc98d54ce729048f705411548b580ec9.jpg",
"https://i.pinimg.com/originals/51/0c/23/510c2375e8e93b4eb6defadfeb9abc63.png",
"https://i.pinimg.com/474x/00/ed/33/00ed33901ed3c528e9cb03c783786462.jpg",
"https://i.pinimg.com/736x/67/dd/36/67dd36a5a6257ab4cd5ae6a2c463b58f.jpg",
"https://i.pinimg.com/736x/92/70/c9/9270c9d14dfe29d8a7f73d239df17ef5.jpg",
"https://i.pinimg.com/originals/29/84/cf/2984cf2240c6e915da73a06b5e02d7cf.jpg",
"https://i.pinimg.com/736x/9d/2e/c8/9d2ec81f82984a95051653db2cd508e3.jpg",
"https://i.pinimg.com/736x/ce/b9/d7/ceb9d732314ca91b1412a0740eb48d53.jpg",
"https://i.pinimg.com/originals/89/0c/d9/890cd9d7d814230ec1a807f341916430.jpg",
"https://i.pinimg.com/736x/7c/9d/24/7c9d24341bbe0ae05e1d2f7aecd20261.jpg",
"https://i.pinimg.com/originals/44/2b/5b/442b5bdbf48963051bdde4b1824ff244.jpg",
"https://i.pinimg.com/originals/15/53/b4/1553b4335d1669cf6b06628019027343.jpg",
"https://i.pinimg.com/474x/e0/80/f0/e080f09d8a91a603258bf85ca7916eda.jpg",
"https://i.pinimg.com/originals/3f/24/5e/3f245e0865d2ab9be96df43f3478533b.png"
]