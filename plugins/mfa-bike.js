/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; 
let lastbikeCommandTime = {};

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    if (lastbikeCommandTime[m.sender] && now - lastbikeCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastbikeCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const bikeImages = global.bike;
    const randomIndex = Math.floor(Math.random() * bikeImages.length);
    const url = bikeImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random bike >///<",
        quoted: m
    });

    lastbikeCommandTime[m.sender] = now;
};

afriza.command = /^(bike)$/i;
afriza.tags = ['random'];
afriza.help = ['bike'];
afriza.limit = 3
module.exports = afriza;

global.bike = [
"https://i.pinimg.com/736x/14/c9/ba/14c9baaaae8b4d42ca590bf8d557ae54--motor-kawasaki-kawasaki-ninja.jpg",
"https://i.pinimg.com/originals/33/17/a6/3317a6466c8e6193d93d6e5d43c85180.jpg",
"https://i.pinimg.com/originals/14/1e/7e/141e7edee8a752b5c2a972de50e361e8.jpg",
"https://i.pinimg.com/originals/78/37/e5/7837e5ec08866f782d4f4021936d12dc.jpg",
"https://i.pinimg.com/originals/4e/89/1e/4e891ed9439e3103827cc5c84534a943.jpg",
"https://i.pinimg.com/originals/a7/25/f2/a725f2e741b98330a3b4d7cb94f0489b.jpg",
"https://i.pinimg.com/originals/78/a7/d7/78a7d75e73b3e924e88cfacf5fcd1203.jpg",
"https://i.pinimg.com/originals/da/f5/5e/daf55e8123d0bc79ac795c3db6993289.jpg",
"https://i.pinimg.com/originals/dd/b6/cd/ddb6cd9029d25666bc670db94c42a712.jpg",
"https://i.pinimg.com/originals/4c/c7/43/4cc7436d012ea34589be6b2a31a537f0.jpg",
"https://i.pinimg.com/564x/fe/34/b1/fe34b155143d331874b1c71289eb74a5.jpg",
"https://i.pinimg.com/originals/5c/0b/f4/5c0bf48b1544d50c782cc8726b5685aa.jpg",
"https://i.pinimg.com/originals/70/41/b3/7041b3f07e04415d0c116135ba296092.jpg",
"https://i.pinimg.com/originals/2e/3a/fe/2e3afedc919564d7cc6faca873698454.jpg",
"https://i.pinimg.com/474x/3a/64/88/3a648826ea0486f4579ca019e7b7d979.jpg",
"https://i.pinimg.com/originals/28/a7/21/28a721fbd15bde1f59eb7789ce28741f.jpg",
"https://i.pinimg.com/originals/5e/35/dd/5e35ddf7af6cf7b67fe66c84ff5086f6.jpg",
"https://i.pinimg.com/736x/d9/ea/72/d9ea72642d6662e67a3c0a50da26bb8f.jpg",
"https://i.pinimg.com/564x/31/90/2b/31902b9ef387ee86ee42e565f78350f1.jpg",
"https://i.pinimg.com/originals/cc/6b/0f/cc6b0ffaeadc9c37f56685a10d8ac537.jpg",
"https://i.pinimg.com/736x/46/97/24/469724be5e145c8a0a97ba29df6aa80a.jpg",
"https://i.pinimg.com/564x/fa/98/13/fa9813a3285db70daef93d3f7d461af6.jpg",
"https://i.pinimg.com/originals/ef/72/7d/ef727dd968e14cb2cb17291e17d70a86.jpg",
"https://i.pinimg.com/originals/0e/d2/10/0ed21022cf8ab31ed665a88d3b9e1388.jpg",
"https://i.pinimg.com/originals/20/25/2b/20252b05476f19cb49e2085372479962.png",
"https://i.pinimg.com/originals/54/a9/04/54a90467ddcbd2b45465b26835ac5268.jpg",
"https://i.pinimg.com/originals/b8/53/24/b8532460afa1cb55f2f5ff5f83a3ba83.jpg",
"https://i.pinimg.com/originals/51/26/38/512638c84b49871662c234c3785c33e6.png",
"https://i.pinimg.com/originals/0f/98/82/0f9882acd2d69cb0d15e9bb563088b89.jpg",
"https://i.pinimg.com/originals/37/dc/87/37dc87e8871e43c6df1b6c71538d47be.jpg",
"https://i.pinimg.com/736x/53/11/be/5311bea86941bcd27078670ff00562ad--ocean-couple.jpg",
"https://i.pinimg.com/474x/54/cd/d0/54cdd0cd123d7ab317d42f84f399487a.jpg",
"https://i.pinimg.com/originals/26/3b/6a/263b6a4039e5fa0580f06415bb879999.jpg",
"https://i.pinimg.com/originals/3e/f0/b2/3ef0b20d4b704e69514b366f729c4c31.jpg",
"https://i.pinimg.com/736x/cb/91/dc/cb91dce67d5214814a9e015e89a95f3e.jpg",
"https://i.pinimg.com/236x/2c/f0/b9/2cf0b914fa40062b0e0102c3cd85c4b8--ninja-design.jpg",
"https://i.pinimg.com/originals/61/14/b4/6114b49788c99fd449baf9e85ab6dab7.png",
"https://i.pinimg.com/736x/19/61/56/1961560cdcb1851f51060e9d2c850ab7.jpg",
"https://i.pinimg.com/originals/e1/e0/f7/e1e0f70dbb6b6f7996277333d13081f1.jpg",
"https://i.pinimg.com/236x/1e/4a/76/1e4a7687c9a8df79c890e41934b9b488.jpg",
"https://i.pinimg.com/originals/df/d2/94/dfd29495a08395ca0bc79436043e5681.jpg",
"https://i.pinimg.com/originals/58/3f/55/583f5598d590f9a55f84b32f3cb782af.jpg",
"https://i.pinimg.com/originals/02/d5/c8/02d5c8c1a16ae96b8cd5582075ac600f.jpg",
"https://i.pinimg.com/originals/f8/1f/23/f81f23b0e40f7407070cbf639ace1a16.png",
"https://i.pinimg.com/originals/d9/b3/46/d9b3465eebbb88b65481508d7f61191a.jpg",
"https://i.pinimg.com/236x/79/c9/38/79c938ecdd2dcbc7c699390cc7dd82dc.jpg",
"https://i.pinimg.com/564x/c3/59/e6/c359e60c4e35798ee5973a8505a9cf0d--cool-motorcycles-concept-motorcycles.jpg",
"https://i.pinimg.com/474x/ed/8c/92/ed8c9277d8a4879ae079905d8e2ff659.jpg",
"https://i.pinimg.com/736x/af/f3/bf/aff3bfdb773d5989a385c51002fcfde1.jpg",
"https://i.pinimg.com/originals/ae/55/c4/ae55c42b26ebc4f7796c7b6d7e12d4e6.jpg",
"https://i.pinimg.com/originals/73/1a/51/731a51629f108c5d56b7ec2c0b6cdce7.jpg",
"https://i.pinimg.com/originals/85/fd/81/85fd81cc718fa68b795af6e698f7c35b.jpg",
"https://i.pinimg.com/474x/34/83/7d/34837dcfd80e4cc9dbaab23858c9a501.jpg",
"https://i.pinimg.com/originals/0f/c3/d9/0fc3d9dead6051c350313ae66726d7ea.jpg",
"https://i.pinimg.com/236x/3c/e0/0d/3ce00d735a49256324f93e9c858a0d3b--plastic-hornet.jpg",
"https://i.pinimg.com/originals/47/df/56/47df56e3bdd11fb4a23fabfe30ef5942.jpg",
"https://i.pinimg.com/originals/2d/30/8c/2d308cf60ab291ebe7d2ea8870d3ae61.jpg",
"https://i.pinimg.com/originals/e7/8e/9a/e78e9a256816554c558e00688d663f15.jpg",
"https://i.pinimg.com/236x/e7/01/ba/e701bae77134328e806e77898b572b83.jpg",
"https://i.pinimg.com/736x/6d/e6/c5/6de6c59c7fbae3e552179930b28a4098.jpg",
"https://i.pinimg.com/736x/c7/39/8d/c7398db80bac75a303fb00e4db3174b7.jpg",
"https://i.pinimg.com/736x/63/54/43/635443a2a6b674994197c9200fbb64bb.jpg",
"https://i.pinimg.com/236x/de/b1/28/deb12888ae90c77b58504e6ea135e9d4---custom-cafe-racers.jpg",
"https://i.pinimg.com/originals/34/1b/64/341b644b0f783ed2b567aee33f36fe11.jpg",
"https://i.pinimg.com/originals/2a/ae/f1/2aaef196573c71fadf2697d6d88af4ad.jpg",
"https://i.pinimg.com/474x/8c/91/e5/8c91e5097d127408fb8f98e04694f900.jpg",
"https://i.pinimg.com/originals/bb/66/f4/bb66f48af1e1b8602b2c71ccbda50ff7.jpg",
"https://i.pinimg.com/originals/70/ec/d6/70ecd69ef9211373987f36df7ae7c91d.jpg",
"https://i.pinimg.com/736x/3a/0a/e2/3a0ae20f663fc38e88368a4a4924fa4a--motor-honda-scooter.jpg",
"https://i.pinimg.com/736x/ba/7b/58/ba7b5885d7d3c0ff8eb42895caf4fd52.jpg",
"https://i.pinimg.com/originals/4c/83/b9/4c83b9c8ec4d3d4f782685ac5bb18a9f.jpg",
"https://i.pinimg.com/originals/db/74/e3/db74e33604d81bd18cacb33574d26367.jpg",
"https://i.pinimg.com/736x/02/e6/f9/02e6f993107afd8d80bbdcf5dd2c1694.jpg",
"https://i.pinimg.com/originals/2d/1e/cf/2d1ecf70de202f90efb545d14efddf64.jpg",
"https://i.pinimg.com/originals/22/c1/7e/22c17ec578627c79acfce49e211b231c.png",
"https://i.pinimg.com/originals/0e/ee/05/0eee05e24d296c8c09ef33719333ff36.jpg",
"https://i.pinimg.com/564x/f3/0a/0f/f30a0fc5f455c0b202a2742e72c60120.jpg",
"https://i.pinimg.com/564x/8d/ca/3f/8dca3fe8f65044c074d423650c14439a.jpg",
"https://i.pinimg.com/236x/47/4f/5b/474f5b9ce4b302b734cb71fb5e91df8e.jpg",
"https://i.pinimg.com/736x/81/27/83/812783169a0b97c5713efee6226c12a8.jpg",
"https://i.pinimg.com/236x/a8/40/13/a84013f3c60314518d90d417f4298886--retro-bikes-kawasaki-ninja.jpg",
"https://i.pinimg.com/originals/f4/84/74/f48474a00f007987964f3e2d834d5c34.jpg",
"https://i.pinimg.com/originals/ce/9e/89/ce9e890104606a82481dd1e9c4e10944.jpg",
"https://i.pinimg.com/564x/27/be/94/27be949c05327b9d3eb2f74fa176b8be.jpg",
"https://i.pinimg.com/564x/7e/56/0f/7e560f885f90d05cc8c825a9a6215c5d.jpg",
"https://i.pinimg.com/originals/15/e0/33/15e03353ae32881f71d899b01ed0f5d1.png",
"https://i.pinimg.com/originals/15/09/1d/15091db642b6fb2edc261f727f9a2cbf.jpg",
"https://i.pinimg.com/474x/f2/53/00/f25300641715d7dcf92cd02fb31afa1d.jpg",
"https://i.pinimg.com/originals/31/cd/53/31cd53127403268fa573ba048113d5f6.jpg",
"https://i.pinimg.com/originals/46/e2/0d/46e20de6e95de37c035f89f67a701c07.jpg",
"https://i.pinimg.com/736x/ca/9b/bf/ca9bbf7dc0aee71be3e878af823879b8--curves-tigers.jpg",
"https://i.pinimg.com/originals/10/e2/a9/10e2a996cff29306de489e59e7ecf4f3.jpg",
"https://i.pinimg.com/236x/9d/dd/6d/9ddd6df43b68fc26301b7eb8fd273d75--kawasaki-zxr-series.jpg",
"https://i.pinimg.com/originals/2e/ed/a8/2eeda8715beab4676e7984c7ebfad990.jpg",
"https://i.pinimg.com/236x/8f/51/56/8f51564b0c27f850e6713367ccbfa2c1.jpg",
"https://i.pinimg.com/736x/c9/9d/d2/c99dd283f34947a28b50c8fc8fd01cd0--judge-dredd-nice-cars.jpg", 
"https://i.pinimg.com/originals/4c/f9/9d/4cf99d44128ec5fd2c4befeaec3d8c5e.jpg",
"https://i.pinimg.com/originals/69/ec/1b/69ec1bc4e1f6c33713827ae5eed5144c.jpg",
"https://i.pinimg.com/originals/21/ba/12/21ba1251a804fafc64255cb32246e594.jpg",
"https://i.pinimg.com/originals/34/c4/e2/34c4e255ea982c0b5c4933bd01cbf488.jpg"
]