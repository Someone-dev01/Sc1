/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch');

let afriza = async (m, { conn }) => {
 let intro = `
\`Untuk mengakses fitur premium, atau mengakses bot melalui private chat anda harus meng-upgrade premium terlebih dahulu\`

HARGA UP PREMIUM 

 -Rp 2.000 1 minggu
 -Rp 3.500 2 minggu
 -Rp 5.000 1 bulan
 -Rp 20.000 permanen

Metode Pembayaran:
 \`Dana -ovo -gopay -qris allpayment -pulsa +5k\``;

  let list = [{
      displayName: "Chat Owner Disini",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:mfastore__456\nFN:Chat Owner Disini\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: mfaa3735@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:${sig}\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }]
let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: intro,
        },
        footer: {
          text: `UPGRADE PREMIUM`
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: 'https://telegra.ph/file/796d1f2a824363771180e.jpg',
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
  conn.sendMessage(m.chat, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            }
        }, { quoted: m })
};

afriza.help = ['upgradeprem', 'premium'];
afriza.tags = ['main'];
afriza.command = /^(upgradeprem|premium)$/i;
afriza.private = false;

module.exports = afriza;