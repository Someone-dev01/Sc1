/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastwallppCommandTime = {}; // Simpan waktu terakhir perintah wallpp dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah wallpp dieksekusi oleh pengguna saat ini
    if (lastwallppCommandTime[m.sender] && now - lastwallppCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastwallppCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const wallppImages = global.wallpp;
    const randomIndex = Math.floor(Math.random() * wallppImages.length);
    const url = wallppImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random wallpp >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastwallppCommandTime[m.sender] = now;
};

afriza.command = /^(wallpp)$/i;
afriza.tags = ['random'];
afriza.help = ['wallpp'];
module.exports = afriza;

global.wallpp = [

"https://i.pinimg.com/564x/3b/51/0b/3b510b9dc9ce95e068ebfb66cee8fcfb.jpg",
"https://i.pinimg.com/originals/8b/f4/fa/8bf4fa5c4d4c00e52b9386da6d5e6723.jpg",
"https://i.pinimg.com/originals/ce/00/24/ce002453879ef6c5eda3db249946d372.jpg",
"https://i.pinimg.com/originals/47/76/b0/4776b0068a7de7e691a2f7b479818a9b.jpg",
"https://i.pinimg.com/736x/12/ee/98/12ee982b710e5a73b26fc4952927c20c.jpg",
"https://i.pinimg.com/736x/6c/48/b2/6c48b269655557eb8a1a86e3442c0818.jpg",
"https://i.pinimg.com/originals/64/76/72/647672a241cca36e2c947e0240c45f11.jpg",
"https://i.pinimg.com/originals/69/ba/8b/69ba8bcc41adf78dd9e242cc6d22ae26.jpg",
"https://i.pinimg.com/736x/d7/ee/27/d7ee277c313e37955caa401ffd4aded1.jpg",
"https://i.pinimg.com/474x/b6/21/ea/b621eabb5e1a0884de3484525c346e80.jpg",
"https://i.pinimg.com/originals/f1/c0/f7/f1c0f71a593028f5721d8baa0c2a1f73.jpg",
"https://i.pinimg.com/originals/3b/70/21/3b7021103f12cc4557e195d8adc89ca2.jpg",
"https://i.pinimg.com/originals/62/0c/ba/620cbaf26cb6c211b4aaed49cc419aea.gif",
"https://i.pinimg.com/564x/6c/5f/33/6c5f336ced201d98e5d6fe157178ebff.jpg",
"https://i.pinimg.com/originals/bd/6c/3b/bd6c3b4e7166172bc1f27c59bd9c7e76.jpg",
"https://i.pinimg.com/originals/63/57/66/635766e0012b1043b417569045677466.png",
"https://i.pinimg.com/736x/6c/d1/51/6cd151fb83df27d4e06f81d8633d3d94.jpg",
"https://i.pinimg.com/564x/5b/d3/f8/5bd3f8d6d524aa7e2bcd33de80ba835a.jpg",
"https://i.pinimg.com/originals/12/02/30/120230f7b1a9fb8d619d6e048c00b72f.jpg",
"https://i.pinimg.com/originals/30/84/66/308466a14dad3dd07a9b52f51857184c.jpg",
"https://i.pinimg.com/736x/7f/6c/07/7f6c0738a37f3620470727b7e18f630c.jpg",
"https://i.pinimg.com/originals/9a/85/58/9a8558a05e7daf5b0f4aac525872acb6.jpg",
"https://i.pinimg.com/736x/8b/70/11/8b701118b341c8f3f160089dd9b8a310.jpg",
"https://i.pinimg.com/originals/47/76/4f/47764f0d3938043f96d24446a3e10015.jpg",
"https://i.pinimg.com/originals/93/16/8f/93168f5aad9e0bfcb8aed48c57a70226.jpg",
"https://i.pinimg.com/originals/7a/93/f2/7a93f274b666ea738110516ece46cff4.png",
"https://i.pinimg.com/originals/16/ac/41/16ac41d18a254743f545d85538c7dbaf.jpg",
"https://i.pinimg.com/564x/95/26/83/9526835e2f8a122a7c9b02301d0e1c3d.jpg",
"https://i.pinimg.com/originals/19/4f/59/194f599a772e3c1ec20843ecaee7bf34.jpg",
"https://i.pinimg.com/736x/c0/bc/72/c0bc72ebe12ff010a3a82fc6f218aa94.jpg",
"https://i.pinimg.com/originals/b4/3a/b2/b43ab2712f1f7147c918f629fed99f1c.gif",
"https://i.pinimg.com/originals/4e/6a/d2/4e6ad235f5c413c53c1c432faeb21429.png",
"https://i.pinimg.com/736x/af/52/71/af5271acad2461060c080e4af3a511c5.jpg",
"https://i.pinimg.com/736x/a7/b1/c2/a7b1c21bbcaf286fe028c4f602ff67b2.jpg",
"https://i.pinimg.com/originals/4c/f2/95/4cf2955d32ebf1c8f22578e039085943.jpg",
"https://i.pinimg.com/736x/f5/5e/c1/f55ec1a2f4f7070efde70df5a37def1e.jpg",
"https://i.pinimg.com/736x/b4/e6/24/b4e62402d58034690486c384d2d6727e.jpg",
"https://i.pinimg.com/564x/54/4c/f0/544cf04833e1f937daa598c0ccc9e413.jpg",
"https://i.pinimg.com/originals/ae/9a/0f/ae9a0f7ee0423479f766c3627ca59eb6.png",
"https://i.pinimg.com/564x/71/ca/96/71ca969c99e61bad2afebfdddc6d44fc.jpg",
"https://i.pinimg.com/564x/84/d0/4e/84d04ecfdfc14dccbace987998b60742.jpg",
"https://i.pinimg.com/originals/c5/14/de/c514de71dcf2fdac5ec1f197c547550d.jpg",
"https://i.pinimg.com/736x/23/ab/39/23ab3992be9430a50db4a4561608fdfe.jpg",
"https://i.pinimg.com/564x/fd/ed/d3/fdedd3cfdfb946f78f092c0b65ed9a96.jpg",
"https://i.pinimg.com/236x/95/08/99/9508990e3225639a266d137a0bd5e2c9.jpg",
"https://i.pinimg.com/736x/54/1f/18/541f185e048309697be368588d5eb020.jpg",
"https://i.pinimg.com/736x/9f/cc/9e/9fcc9eedadd9b840692e1b2cc3bd2625.jpg",
"https://i.pinimg.com/736x/b6/1b/7d/b61b7d4ea4c3170c969a28d501081ec1.jpg",
"https://i.pinimg.com/originals/30/12/2d/30122d99b050973b37876a09aade5851.jpg",
"https://i.pinimg.com/736x/18/40/82/184082fe68dbcac8fdfb7b42f1de91f5.jpg",
"https://i.pinimg.com/originals/65/95/ec/6595ec965a6052d6ae1496d5f4a375b8.jpg",
"https://i.pinimg.com/736x/44/b6/51/44b65120834f9c459c571371c52203a8.jpg",
"https://i.pinimg.com/originals/0d/98/c9/0d98c999b940b9d0255b06a5b77d2def.jpg",
"https://i.pinimg.com/originals/21/7a/40/217a40e92fb49ea61296feb1f66cc07a.png",
"https://i.pinimg.com/originals/b6/a1/f7/b6a1f71516df056e9c749f1a800abedf.jpg",
"https://i.pinimg.com/originals/ec/ba/e7/ecbae7b6f025f4f185489fe6f6b53b56.jpg",
"https://i.pinimg.com/736x/f6/db/84/f6db8453e218b0e4cd2f2d6d466f5ecc.jpg",
"https://i.pinimg.com/736x/7e/dd/52/7edd5246b6fd667221dbef68cb44ad68.jpg",
"https://i.pinimg.com/736x/61/86/97/6186974eb29e305398dc9df0c98d1a9e.jpg",
"https://i.pinimg.com/736x/a0/76/64/a07664d417d93f3e442d11fdd4f729e3.jpg",
"https://i.pinimg.com/736x/24/d4/91/24d491c3115882aea8a1f06c65abc718.jpg",
"https://i.pinimg.com/736x/71/2d/ba/712dba1558ccd8346bba6ef18fa63e83.jpg",
"https://i.pinimg.com/736x/ec/6e/9e/ec6e9ee50f135ec6cf976113d05899c1.jpg",
"https://i.pinimg.com/564x/c9/3d/03/c93d03631d7cdce64f1296d3e3817451.jpg",
"https://i.pinimg.com/474x/32/9c/bc/329cbc94a96e8c30b3c5594892538803.jpg",
"https://i.pinimg.com/736x/8f/9d/04/8f9d0491b4090fa140a6903f949dc27f.jpg",
"https://i.pinimg.com/originals/34/10/31/341031d4972d9ce353ca31e1a1299ab1.png",
"https://i.pinimg.com/736x/e6/75/c0/e675c04dec65f619c969a69839a751ef.jpg",
"https://i.pinimg.com/originals/a7/1f/07/a71f07065e636f722fab0f8ecbaf3f51.jpg",
"https://i.pinimg.com/474x/67/73/11/67731114e37ab63b1f05c26d93d26e62.jpg",
"https://i.pinimg.com/originals/91/ac/bd/91acbde3e4a5c64743a7394012a25349.jpg",
"https://i.pinimg.com/originals/ba/06/21/ba062168c0503700545549e33b832771.jpg",
"https://i.pinimg.com/originals/8d/d9/9d/8dd99d90f153223282547bc081507c56.jpg",
"https://i.pinimg.com/564x/bc/01/dd/bc01ddcd674f075e5b274424b5d52064.jpg",
"https://i.pinimg.com/736x/b4/a6/52/b4a652b94dbc1c86a392678ae206f597.jpg",
"https://i.pinimg.com/originals/69/f5/5a/69f55a7700089b10a2c4545b32a56b93.jpg",
"https://i.pinimg.com/736x/f0/bb/2c/f0bb2ce91861f31e955ddcad8454c346.jpg",
"https://i.pinimg.com/originals/d8/49/06/d84906ed4733aed31283517c69abb8af.jpg",
"https://i.pinimg.com/736x/6f/c1/41/6fc141013ca14d39356ea4b2449921a0.jpg",
"https://i.pinimg.com/474x/40/66/38/406638beec0730087053b75b6ae626c4.jpg",
"https://i.pinimg.com/originals/98/c5/90/98c5906a9b6b687fafa507a511d75ef4.png",
"https://i.pinimg.com/564x/01/4c/94/014c94e8cd2cfdd506d8ee67e8c8a2b2.jpg",
"https://i.pinimg.com/736x/7a/6d/1c/7a6d1cc599df202352a350049e494d8b.jpg",
"https://i.pinimg.com/originals/b5/b6/02/b5b60279cbe1626902283ee04eff22bc.jpg",
"https://i.pinimg.com/originals/14/1a/b8/141ab80ed4a14f4f76bbf042befd50fb.png",
"https://i.pinimg.com/736x/21/5f/3c/215f3c8689e3ba02863afbb8ab7133cd.jpg",
"https://i.pinimg.com/564x/59/e4/33/59e4336c0ed27e4fde597f472f8cf53c.jpg",
"https://i.pinimg.com/originals/36/b0/50/36b050f376dea9f802179216c78e77d7.jpg",
"https://i.pinimg.com/originals/ae/2c/cb/ae2ccb9a545e5a62ac689ca76199a14c.jpg",
"https://i.pinimg.com/originals/4f/c0/63/4fc0632f34cb5444db04aaacc4399d65.jpg",
"https://i.pinimg.com/236x/32/76/9b/32769b8342619e6e4b5cf55f97a86109.jpg",
"https://i.pinimg.com/originals/3b/0c/3d/3b0c3d59228058712880dee410b8b00a.png",
"https://i.pinimg.com/736x/81/7c/ab/817cabadfa6bfa60864ef9332f7b0d1b.jpg",
"https://i.pinimg.com/550x/31/39/3c/31393c46b64e3b6609ae381b1e74c0f9.jpg",
"https://i.pinimg.com/564x/35/e9/78/35e9780fec9dace294c104cc1058118e.jpg",
"https://i.pinimg.com/736x/d7/5c/75/d75c75ddaf9b22b5bf309cae8ae0fd5f.jpg",
"https://i.pinimg.com/564x/5d/62/95/5d6295309a072c8f5a4f49cdd0bf762e.jpg",
"https://i.pinimg.com/originals/38/dc/b8/38dcb838b9371ab848af2a45a511ee2e.jpg",
"https://i.pinimg.com/736x/8b/f4/fa/8bf4fa5c4d4c00e52b9386da6d5e6723.jpg",
"https://i.pinimg.com/originals/46/af/c3/46afc302cfbb5a42113c598ae3084f61.jpg"
]