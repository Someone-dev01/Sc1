/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch');

let afriza = async (m, { conn }) => {
await m.reply("_Berikut list harga suntik instagram_");
const afriza = `*\`─「 PRICE LIST INSTAGRAM 」─\`*

*[ Instagram Followers ]* | ID 4411
-125 foll *||* Rp 2.200
-375 foll *||* Rp 4.500
-500 foll *||* Rp 6.990 +25 foll
-1.000 foll *||* Rp 14.000 +50 foll

*[ Instagram View ]* | ID 4490
-500 view *||* Rp 450
-1.000 view *||* Rp 916
-2.000 view *||* Rp 1.800
-3.000 view *||* Rp 2.600

*[ Instagram Like ]* | ID 4143
-500 like *||* Rp 550
-1.000 like *||* Rp 1.000 
-2.000 like *||* Rp 1.970 
-3.000 like *||* Rp 2.800
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
              url: 'https://telegra.ph/file/1e014648078997c514c21.jpg',
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

afriza.help = ['kebsos_ig'];
afriza.tags = ['store'];
afriza.command = /^(kebsos_ig)$/i;
afriza.private = false;

module.exports = afriza;