/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastjustinaCommandTime = {}; // Simpan waktu terakhir perintah justina dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah justina dieksekusi oleh pengguna saat ini
    if (lastjustinaCommandTime[m.sender] && now - lastjustinaCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastjustinaCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const justinaImages = global.justina;
    const randomIndex = Math.floor(Math.random() * justinaImages.length);
    const url = justinaImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random justina >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastjustinaCommandTime[m.sender] = now;
};

afriza.command = /^(justina)$/i;
afriza.tags = ['random'];
afriza.help = ['justina'];
module.exports = afriza;

global.justina = [

 "https://i.pinimg.com/280x280_RS/c2/2b/1d/c22b1d9ac450a05a7020d6a46dca6402.jpg",
 "https://i.pinimg.com/originals/94/55/0e/94550e2deee3265b17afb71af2554d9c.png",
 "https://i.pinimg.com/originals/c1/1c/91/c11c91db78e34290dbbb1aaee9d8773d.jpg",
 "https://i.pinimg.com/originals/55/22/e3/5522e32117a956531319cf0234dbe513.jpg",
 "https://i.pinimg.com/originals/de/14/a0/de14a068ab446867119df3035bf24b25.jpg",
 "https://i.pinimg.com/originals/70/9d/3d/709d3d07517e23a1ac66319d9078af0e.jpg",
 "https://i.pinimg.com/originals/87/7e/2a/877e2ac5f4b930f3c1671dabb39c17bd.jpg",
 "https://i.pinimg.com/originals/24/51/a5/2451a518a132535fcfe3bd9576fcb6a8.jpg",
 "https://i.pinimg.com/originals/f5/46/14/f546142c3a026622d682672039ab4c6f.jpg",
 "https://i.pinimg.com/236x/bf/87/43/bf8743704bf9483857aa295f04dbb614.jpg",
 "https://i.pinimg.com/736x/dc/3b/1b/dc3b1b1351b3227fd1fc655e15c36bc8.jpg",
 "https://i.pinimg.com/200x150/3f/bd/f3/3fbdf3f7b46a24e316990dd1a02a45b2.jpg",
 "https://i.pinimg.com/736x/05/4a/cf/054acfb9e89f999dd6ad4e2abd6cfa17.jpg",
 "https://i.pinimg.com/originals/b1/cd/0c/b1cd0ce15fa56edd57118df1ff85d3a8.jpg",
 "https://i.pinimg.com/originals/e4/7f/24/e47f247bcbcacefa864c5f1f891ac57e.jpg",
 "https://i.pinimg.com/736x/e2/5a/0e/e25a0e605cef2a39442366a6e020a225.jpg",
 "https://i.pinimg.com/originals/36/3f/46/363f46279f2e319c7e5a40a1ad954863.jpg",
 "https://i.pinimg.com/originals/35/b5/00/35b500dcb396ee34cdd901dbc755b82d.jpg",
 "https://i.pinimg.com/originals/32/6d/4f/326d4f666c5954b293443c0c57296416.jpg",
 "https://i.pinimg.com/originals/38/fb/3c/38fb3c2cb9fb08c642f7d4d48ed4c167.jpg",
 "https://i.pinimg.com/originals/2c/03/c7/2c03c793a71f2cd4208a7f55d272143d.jpg",
 "https://i.pinimg.com/736x/cd/52/cc/cd52ccfb1fc874d29401fef848f3bacd.jpg",
 "https://i.pinimg.com/736x/fb/b8/fa/fbb8fab7a2b285036493131d63d33776.jpg",
 "https://i.pinimg.com/originals/34/f9/cf/34f9cfda46a2833491569c8948f5f261.jpg",
 "https://i.pinimg.com/originals/06/ce/79/06ce798640c2328122204ab73a753295.jpg",
 "https://i.pinimg.com/474x/a2/5c/77/a25c77326648e5fa24e82b6cc2d56ab1.jpg",
 "https://i.pinimg.com/videos/thumbnails/originals/22/7d/40/227d407c5f2e4507bc552a26f873ea27.0000001.jpg",
 "https://i.pinimg.com/originals/2c/57/63/2c5763583ee34156a07226655deb4708.jpg",
 "https://i.pinimg.com/474x/3d/cc/99/3dcc99bedd4c4c48fe87ea252365945e.jpg",
 "https://i.pinimg.com/originals/d0/bb/5e/d0bb5e6525c613d3d678e35f5f2e0180.jpg",
 "https://i.pinimg.com/736x/da/38/f8/da38f87711f68abf8f9098b8b182da27.jpg",
 "https://i.pinimg.com/236x/2e/7c/92/2e7c927a7e164a41af1bb199ec965213.jpg",
 "https://i.pinimg.com/originals/36/a7/63/36a763c4cb89193710195c72ee5c3a30.jpg",
 "https://i.pinimg.com/originals/99/ee/01/99ee0133dc7fa98435ecea06034d0a04.jpg",
 "https://i.pinimg.com/originals/fd/ee/c9/fdeec9034130a54f4775d35e21fac88f.png",
 "https://i.pinimg.com/originals/5a/6d/67/5a6d67c0d34f9ce569f9ee3f0908ade3.jpg",
 "https://i.pinimg.com/originals/a4/84/51/a484513260dca06c03b03c7b42b5bb09.jpg",
 "https://i.pinimg.com/originals/89/11/6f/89116f6d90e4044411a08e3861e29213.jpg",
 "https://i.pinimg.com/564x/0f/7d/36/0f7d3625f103636ec44d64902f49313b.jpg",
 "https://i.pinimg.com/originals/d0/d6/69/d0d669c19fc4ee24726dab8cb8217785.jpg",
 "https://i.pinimg.com/originals/a0/ea/11/a0ea118cfe4af5da663bbfd27d9ff04c.jpg",
 "https://i.pinimg.com/236x/48/53/9d/48539d8e5d11f5f2528cb890cc28cdef.jpg",
 "https://i.pinimg.com/236x/57/be/3b/57be3b2d180f790a8faa173bb6ff8126.jpg",
 "https://i.pinimg.com/736x/1e/db/89/1edb89d85e45c24dccd4e0d837b3b8ac.jpg",
 "https://i.pinimg.com/originals/c0/a0/cb/c0a0cbbc840a9f237c49f2caa2d0fe38.jpg",
 "https://i.pinimg.com/originals/b6/48/64/b6486423973647b4572270cafeba1ea7.jpg",
 "https://i.pinimg.com/originals/fd/a8/38/fda83808d44361548f626f1ef443c7a4.jpg",
 "https://i.pinimg.com/originals/cb/21/dc/cb21dc1d687a56ecaf0d5c3cbba8294b.jpg",
 "https://i.pinimg.com/originals/c2/7f/ab/c27fab12e12ae50ae201fa1fe3eb6f76.jpg",
 "https://i.pinimg.com/originals/72/20/c6/7220c6a1055d5ef779c83225bd7037bc.jpg",
 "https://i.pinimg.com/originals/5b/78/96/5b789608a85f9bcc8967bc5996e355ab.jpg",
 "https://i.pinimg.com/originals/f1/8d/3e/f18d3ea6ac886b3f1455971db3d4e1c7.jpg",
 "https://i.pinimg.com/474x/2c/64/9c/2c649c2af54ac39e676b9bbf1adeaea3.jpg",
 "https://i.pinimg.com/originals/ac/8d/16/ac8d165cc54232245bd550c1ee36f343.jpg",
 "https://i.pinimg.com/736x/55/6b/8b/556b8b2ba4ee1b4069275cde47b72951.jpg",
 "https://i.pinimg.com/736x/9d/b6/05/9db6058455bacb43838987a01b2cce6a.jpg",
 "https://i.pinimg.com/originals/23/d1/ce/23d1ce5dec0c49418ea5d7ac67e7394d.jpg",
 "https://i.pinimg.com/736x/22/c8/d8/22c8d81c6995e99166cde24b045922fc.jpg",
 "https://i.pinimg.com/originals/1b/2d/4e/1b2d4ee1235e3c9d64cf3e350c68c753.jpg",
 "https://i.pinimg.com/474x/c1/19/d3/c119d3ac85933b00cd57f8e038e2b66f.jpg",
 "https://i.pinimg.com/280x280_RS/26/16/88/261688a3c79035b793f7edab6e4f8802.jpg",
 "https://i.pinimg.com/originals/7c/7d/61/7c7d61c5d1e0e6267c413c864b5d6a5b.jpg",
 "https://i.pinimg.com/474x/c6/76/1d/c6761dd897e8c0bcd8e836aafb524dc3.jpg",
 "https://i.pinimg.com/originals/04/7f/ac/047facf010d2f31e064f6df412620162.jpg",
 "https://i.pinimg.com/236x/e8/7b/5f/e87b5f09ddbcd56036fe236ce8942916.jpg",
 "https://i.pinimg.com/originals/be/65/70/be6570db6bb1e84fa6882652a206b075.jpg",
 "https://i.pinimg.com/originals/cd/4b/8c/cd4b8ccd86269756004111e54b27a2b6.jpg",
 "https://i.pinimg.com/originals/74/56/04/7456047344e247d8566b0227f44547fc.jpg",
 "https://i.pinimg.com/originals/88/14/f6/8814f68564bc8448470adfa44ad0b6b9.jpg",
 "https://i.pinimg.com/originals/c8/8d/0e/c88d0ee7eaa7ec41adf7a5fb4a04fbd9.jpg",
 "https://i.pinimg.com/originals/c0/a3/f5/c0a3f57eaf8872b044b16605bd689825.jpg",
 "https://i.pinimg.com/222x/1c/a7/8d/1ca78dfb62ba3a5c475108d806b8e57d.jpg",
 "https://i.pinimg.com/originals/4e/62/09/4e6209d4440f2f66f5942e5f80ed1b81.jpg",
 "https://i.pinimg.com/736x/19/2d/b4/192db490d5b9759073451a9a820d6aff.jpg",
 "https://i.pinimg.com/originals/e5/e1/5a/e5e15a23100f0eed7508f7f8cbcb1d0b.jpg",
 "https://i.pinimg.com/736x/8a/83/a9/8a83a96be0179a1686d2e3b06eb41064.jpg",
 "https://i.pinimg.com/originals/b2/24/88/b22488f718218794bcd9ebfef9cda66c.jpg",
 "https://i.pinimg.com/originals/27/18/49/2718498e959767fd6f054c3503e10af5.jpg",
 "https://i.pinimg.com/236x/b4/b3/d4/b4b3d46788b1bff905909ff67b4103fe.jpg",
 "https://i.pinimg.com/236x/65/93/96/659396e3740bdf1ea508d49acf8a493a.jpg",
 "https://i.pinimg.com/236x/40/b9/5e/40b95e8e42c5c49da5f168ff3511c9ed.jpg",
 "https://i.pinimg.com/originals/7a/3a/75/7a3a754dffee88d760cd3b7f589ee276.jpg",
 "https://i.pinimg.com/736x/aa/df/c7/aadfc76452929f52d0ee37345cf88915.jpg",
 "https://i.pinimg.com/originals/a6/90/cc/a690cc96fb0c25167de498f82d36faf1.jpg",
 "https://i.pinimg.com/originals/01/77/2b/01772b7dc8f2be3a230ea943e57bea06.jpg",
 "https://i.pinimg.com/236x/69/f6/47/69f64745082fcbc3881bca44e44c9532.jpg",
 "https://i.pinimg.com/originals/9c/bb/f9/9cbbf9e2a70401b14474dbb7d3ac7503.jpg",
 "https://i.pinimg.com/736x/5e/9b/01/5e9b01c2397335e99da4b5f2b404a8b0.jpg",
 "https://i.pinimg.com/236x/4d/2d/11/4d2d1174f4f5a00d1465a56c994549d3.jpg",
 "https://i.pinimg.com/originals/81/d6/32/81d632a9f9d0a0389ada8fd0411d42a4.jpg",
 "https://i.pinimg.com/236x/29/2f/74/292f7486657baf2c900f95eea60569b3.jpg",
 "https://i.pinimg.com/originals/6b/07/1c/6b071c388eb280447b37719e390911a5.jpg",
 "https://i.pinimg.com/originals/ab/a6/bf/aba6bfc36890f7e60a8d05cf2308a0ad.jpg",
 "https://i.pinimg.com/736x/a6/a8/af/a6a8afbf17ecc042380a89925e30b94d.jpg",
 "https://i.pinimg.com/236x/55/67/f5/5567f5a838f16126e7ba4aa69e676a17.jpg",
 "https://i.pinimg.com/originals/f2/94/cd/f294cdd3bd910e5c6a05c7ea2a0ce660.jpg",
 "https://i.pinimg.com/736x/e8/e9/90/e8e990b772bd98035051af4ec00695c3.jpg",
 "https://i.pinimg.com/originals/2f/b3/91/2fb391e125c8df7b4521ef44f8c2f289.jpg",
 "https://i.pinimg.com/originals/26/e8/8f/26e88fb621dc9d4631854c8efa669f5e.jpg",
 "https://i.pinimg.com/originals/0d/48/e9/0d48e91125aee7ce27c9562824fae0e5.jpg"
    ]