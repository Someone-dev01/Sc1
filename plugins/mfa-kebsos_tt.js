/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch');

let afriza = async (m, { conn }) => {
await m.reply("_Berikut list harga suntik tiktok_");
const afriza = `*\`─「 PRICE LIST TIKTOK 」─\`*

*[ Tiktok Followers ]* ID 2122
-50 foll *||* Rp 1.500
-100 foll *||* Rp 3.000
-150 foll *||* Rp 4.500
-200 foll *||* Rp 6.000
Dst....

*[ Tiktok Like ]* ID 3343
-50 like *||* Rp 350p
-100 like *||* Rp 700p
-150 like *||* Rp 1.050
-200 like *||* Rp 1.400
Dst....

*[ Tiktok View ]* ID 4174
-10.000 view *||* Rp 1.300
-15.000 view *||* Rp 1.800
-20.000 view *||* Rp 2.600
Dst....

*[ Tiktok Share ]* ID 4174
-200 share *||* Rp 300
-400 share *||* Rp 600
-600 share *||* Rp 900
-1.000 share *||* Rp 1.500
Dst....

*[ Tiktok Save ]* ID 4411
-200 save *||* Rp 400
-400 save *||* Rp 800
-600 save *||* Rp 1.100
-1.000 save *||* Rp 2.200
`
let ownerNumber = '6283174059236'; // ====((Nomor Owner))====
let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: afriza,
        },
        footer: {
          text: `MFA STORE`,
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: 'https://telegra.ph/file/4c4cc22ffa5fb658c9c4d.jpg',
            }
          }, {
            upload: conn.waUploadToServer
          }))
        },
        nativeFlowMessage: {
          buttons: [{text: ""}]
					}
				}, 
			},
			{
				quoted: fkontak
			}, {contextInfo: {
mentionedJid: [m.sender]
              }}
		);
  await conn.relayMessage(m.chat, msg.message, m)

  // Kirim nomor owner
  conn.reply(m.chat, `Nomor owner: wa.me/${ownerNumber}`, m);
};

afriza.help = ['kebsos_tt'];
afriza.tags = ['store'];
afriza.command = /^(kebsos_tt)$/i;
afriza.private = false;

module.exports = afriza;