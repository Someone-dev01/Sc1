/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldownDuration = 5000; // Cooldown dalam milidetik (5 detik)
let lastroseCommandTime = {}; // Simpan waktu terakhir perintah rose dieksekusi untuk setiap pengguna

const afriza = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah rose dieksekusi oleh pengguna saat ini
    if (lastroseCommandTime[m.sender] && now - lastroseCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastroseCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const roseImages = global.rose;
    const randomIndex = Math.floor(Math.random() * roseImages.length);
    const url = roseImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random rose >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastroseCommandTime[m.sender] = now;
};

afriza.command = /^(rose)$/i;
afriza.tags = ['random'];
afriza.help = ['rose'];
afriza.limit = 3
module.exports = afriza;

global.rose = [


 "https://i.pinimg.com/originals/7c/d5/5e/7cd55ee4cc7b38ebe34325f8279a432e.jpg",
 "https://i.pinimg.com/originals/e2/50/e6/e250e6e583c7baf5fba852cb8598f3c3.jpg",
 "https://i.pinimg.com/originals/88/7f/fb/887ffbd5b06fa83e166d6f554c074071.jpg",
 "https://i.pinimg.com/474x/b2/08/f8/b208f8e64522caf81bf17c5ecb6ec526.jpg",
 "https://i.pinimg.com/originals/80/b2/33/80b233973eb62e87e554201c15f79d8a.jpg",
 "https://i.pinimg.com/736x/5e/40/cb/5e40cbf1cbdacd667ce9f22a628a9bdb.jpg",
 "https://i.pinimg.com/originals/c8/8a/be/c88abeb00a4442de8f229e1a4eac0e46.jpg",
 "https://i.pinimg.com/originals/d8/71/b9/d871b948bf65914806d9d27d62a33ee9.jpg",
 "https://i.pinimg.com/originals/a5/1e/fc/a51efc27ff1a3fa477485ca68ab45404.jpg",
 "https://i.pinimg.com/originals/82/33/47/823347377556e4b2eb3a852b5c02369a.png",
 "https://i.pinimg.com/originals/75/25/36/7525360739d8b70d2410e990a94b5b47.jpg",
 "https://i.pinimg.com/originals/83/8d/8e/838d8ecf2d1257113aa8357cc0d9fc5b.jpg",
 "https://i.pinimg.com/originals/81/d6/00/81d600ae619a5d2835d15610ad8aa292.jpg",
 "https://i.pinimg.com/564x/c6/da/9b/c6da9b671df09f74d7e8dc0b0c298035.jpg",
 "https://i.pinimg.com/originals/c8/c0/be/c8c0bee4fd5e0589923196e14e4f24c6.jpg",
 "https://i.pinimg.com/originals/10/24/2b/10242bcd8d0eea44a449d4d53092a6a0.jpg",
 "https://i.pinimg.com/originals/66/44/2a/66442a5474e6a9035198efcd5167d1d7.png",
 "https://i.pinimg.com/originals/32/27/42/32274288deb9babb92e237bc1b1ac719.jpg",
 "https://i.pinimg.com/originals/65/32/fe/6532fe6cc6000899d22491c612c23590.jpg",
 "https://i.pinimg.com/736x/54/da/d3/54dad3afbf960ee1ba35c252741a83f8.jpg",
 "https://i.pinimg.com/originals/51/be/da/51bedad86dc541011f21ad0b8100c13b.jpg",
 "https://i.pinimg.com/originals/88/76/2b/88762bf1cd1319fc67da4b39a78851c9.jpg",
 "https://i.pinimg.com/originals/f2/a2/c1/f2a2c13d66169c7eb7a5af0c1db1bfe2.jpg",
 "https://i.pinimg.com/474x/fe/7c/20/fe7c208fbe60730b3a0c65f28c7b04e8.jpg",
 "https://i.pinimg.com/474x/30/51/c8/3051c83d55e005bab982dc08eb007674.jpg",
 "https://i.pinimg.com/564x/8e/05/80/8e0580ff5c8824bbb0544d7dfe428602.jpg",
 "https://i.pinimg.com/originals/db/ae/4c/dbae4c44ea4f1adc7f66c49bc89b4c3b.jpg",
 "https://i.pinimg.com/736x/bb/7d/6e/bb7d6ead3deaf47574acbc9996e2aa99.jpg",
 "https://i.pinimg.com/originals/3f/6b/47/3f6b4795d1c6df2e10c340c3560708fb.jpg",
 "https://i.pinimg.com/474x/2b/19/1a/2b191a042a0f13e4c69608cfb6f85164.jpg",
 "https://i.pinimg.com/474x/4c/b3/e2/4cb3e2780d8b39f32e31f42b7630ed36.jpg",
 "https://i.pinimg.com/originals/b5/0e/8b/b50e8bc40ca4bb28d15ce4aa8f78a8b4.jpg",
 "https://i.pinimg.com/originals/0d/d9/9f/0dd99fc5abe7a7741bd03bca1a72318a.jpg",
 "https://i.pinimg.com/736x/cd/61/25/cd61252d7c7b23934e42389e9f50aab3.jpg",
 "https://i.pinimg.com/originals/52/43/d7/5243d711f81f96f0171221b6db399a59.jpg",
 "https://i.pinimg.com/originals/d5/22/f1/d522f174d2c0b3448f04b5d30408c873.png",
 "https://i.pinimg.com/originals/49/92/03/499203f5d7839a29e03f5ec2615cd469.jpg",
 "https://i.pinimg.com/originals/73/12/2b/73122bf149004e8314e1713433ed4b86.jpg",
 "https://i.pinimg.com/originals/fd/bf/2b/fdbf2b173e81fae814250710ebba3bbf.jpg",
 "https://i.pinimg.com/736x/4f/98/69/4f98698ceff71ca45785e82461cec2e0.jpg",
 "https://i.pinimg.com/736x/19/27/8b/19278b90ae33e13f7be92956701196ce.jpg",
 "https://i.pinimg.com/originals/b7/fb/f2/b7fbf2a02f8ae5f8dca77520800f30ce.jpg",
 "https://i.pinimg.com/736x/9b/f3/98/9bf3984271a8e27eac74b587f5f37c7f.jpg",
 "https://i.pinimg.com/736x/b5/b0/57/b5b057f4f2a0affc20555585d0a30734.jpg",
 "https://i.pinimg.com/originals/97/a0/2c/97a02c5551e8589e6d76123c44918c0d.jpg",
 "https://i.pinimg.com/736x/61/43/97/6143979375e41091d12423535ac874d4.jpg",
 "https://i.pinimg.com/originals/17/53/da/1753da0859637012d4b239f7006fdb96.jpg",
 "https://i.pinimg.com/originals/b2/35/f7/b235f71beccf8c84dff2f56d2555f931.png",
 "https://i.pinimg.com/736x/25/e5/59/25e5595ee1ef5528858eb1d34061c0c0.jpg",
 "https://i.pinimg.com/originals/dc/be/b3/dcbeb33cb31eb1666a52f7157f234c57.png",
 "https://i.pinimg.com/736x/f4/7f/b6/f47fb63f7ed66c02cef162e24e7e1d1b.jpg",
 "https://i.pinimg.com/originals/30/59/a5/3059a5a3e96a1288f025fc94a65bc840.png",
 "https://i.pinimg.com/originals/90/1f/14/901f14dd89ad58b9ea7c62b084804bc4.jpg",
 "https://i.pinimg.com/736x/b4/09/b3/b409b3aa06e5d0ea30487860e77234ba.jpg",
 "https://i.pinimg.com/originals/29/aa/08/29aa08a2228853c804af4449d5af30c8.jpg",
 "https://i.pinimg.com/originals/40/32/c3/4032c3acff49904b125c63876cf91143.jpg",
 "https://i.pinimg.com/originals/96/49/44/9649443cc3d0611befae9fdf24c2719a.jpg",
 "https://i.pinimg.com/originals/e6/ad/cf/e6adcf57992b78c2e9bf022c17f17f1d.jpg",
 "https://i.pinimg.com/originals/0a/fc/8e/0afc8e7d224da4940255f6fa6a300784.jpg",
 "https://i.pinimg.com/originals/11/c9/4d/11c94db9b0c1443d3f48490748113cf0.jpg",
 "https://i.pinimg.com/736x/6f/5e/cc/6f5eccc65835915d85c43573c882f306.jpg",
 "https://i.pinimg.com/236x/d7/73/f6/d773f695dd5d8e35a3850fb14cdeb433.jpg",
 "https://i.pinimg.com/originals/d0/a6/ed/d0a6edcf6e27ad9525b850c5717ac9e3.jpg",
 "https://i.pinimg.com/originals/31/cf/df/31cfdfabe250531bf388793971b9379f.png",
 "https://i.pinimg.com/736x/5d/70/6d/5d706de5c97974a1f1e9a9545fedeea2.jpg",
 "https://i.pinimg.com/736x/33/85/37/3385378f9e1bffa809a3bfdc03f0a2e6.jpg",
 "https://i.pinimg.com/736x/83/2a/2b/832a2b0a7fa21f6f43d49490a261232d.jpg",
 "https://i.pinimg.com/564x/6d/36/3e/6d363e37ac12763dcb459c8b09ee7ece.jpg",
 "https://i.pinimg.com/736x/8b/6c/e6/8b6ce6452bd43896617307e58529fcc7.jpg",
 "https://i.pinimg.com/736x/6b/09/65/6b0965b024734ed62f32af2105c79e54.jpg",
 "https://i.pinimg.com/originals/8c/24/c4/8c24c4ecfb20d64bbdb65eb47cc16244.jpg",
 "https://i.pinimg.com/736x/a0/ae/ef/a0aeef74c0b2fef6c21f06e5d00c3c3a.jpg",
 "https://i.pinimg.com/736x/84/c0/aa/84c0aa1dac90033e6cd3cf68e8e9c27e.jpg",
 "https://i.pinimg.com/736x/89/34/be/8934bedfabc0c7f66aebdc197962e93e.jpg",
 "https://i.pinimg.com/originals/be/57/19/be571957203953b28c8acc00bf085338.jpg",
 "https://i.pinimg.com/564x/0d/78/e7/0d78e7bb4133794bd76e0a5b197ace41--blackpink-rose-wallpaper-fashion-tips.jpg",
 "https://i.pinimg.com/originals/eb/aa/ac/ebaaacf72ff054808b7c750f534b3348.jpg",
 "https://i.pinimg.com/originals/c8/b5/b3/c8b5b388700b12d55b89a2a7ca07888b.jpg",
 "https://i.pinimg.com/736x/1e/89/0c/1e890c858e00eb49635d629f95a7878e.jpg",
 "https://i.pinimg.com/originals/f1/a7/6e/f1a76e36c19c8d9354d457882e765a2a.jpg",
 "https://i.pinimg.com/736x/8b/c8/63/8bc86318936a120c33baae0c1e7a47f2.jpg",
 "https://i.pinimg.com/736x/c2/74/ae/c274ae1e843e97c4c59a232f282aa5c8.jpg",
 "https://i.pinimg.com/originals/11/28/50/112850330ed181c5b1b504a42cf9f664.jpg",
 "https://i.pinimg.com/474x/b3/c3/44/b3c344575a9a2c3f0179d1a43be2ce66.jpg",
 "https://i.pinimg.com/736x/40/ce/59/40ce59a73be6850c0b38c2e5ca40eeca.jpg",
 "https://i.pinimg.com/originals/e0/f9/98/e0f9989299217723f1f09488525c10a7.jpg",
 "https://i.pinimg.com/originals/02/bc/cb/02bccb14c994ef7c4251ea7f596655f1.jpg",
 "https://i.pinimg.com/originals/3f/9c/73/3f9c733e67b97ea3f30d26d344970ee3.jpg",
 "https://i.pinimg.com/originals/ee/93/c8/ee93c80e33a1df8f9f05a21e9ab258d2.png",
 "https://i.pinimg.com/736x/7c/b1/79/7cb17981c8bd60333724399166a128f3.jpg",
 "https://i.pinimg.com/originals/99/54/2d/99542df6c05e2198f1977c29464be7a9.jpg",
 "https://i.pinimg.com/originals/d2/f1/48/d2f148196978999e9b266f32099c588b.png",
 "https://i.pinimg.com/originals/9f/c0/bc/9fc0bc2b0f5ea064e68f35d8885ae3e7.gif",
 "https://i.pinimg.com/originals/a9/70/70/a97070a57a43ed7c7850d8042b3186cc.jpg",
 "https://i.pinimg.com/736x/2e/18/56/2e185610ab16cfc35f570972a5cbb5f7.jpg",
 "https://i.pinimg.com/originals/4a/91/70/4a9170effe25c58c43a07a6697536ed7.png",
 "https://i.pinimg.com/736x/92/a2/f2/92a2f279516c97f0dad5b5793436ec5b.jpg",
 "https://i.pinimg.com/originals/eb/83/8c/eb838c049814e98145b76815e20ed1e9.jpg",
 "https://i.pinimg.com/736x/0f/54/f1/0f54f16494eda3f1066e0bf890ceab9b.jpg",
 "https://i.pinimg.com/originals/36/59/1b/36591b92148ef280d7c3cf7442a17100.jpg"
]