/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch');

let afriza = async (m, { conn }) => {
 let intro = `
   🥳 *[ Welcome To ] [ Anonymous Chat ]* 🥳

1. *.Start (Memulai Sesi Anonymous Chat):*
*[* Ketik "start" atau perintah yang sesuai pada platform anonymous chat yang Anda gunakan. Ini akan memulai sesi obrolan anonim dengan seseorang secara acak. *]*

2. *.Leave (Keluar dari Sesi Anonymous Chat):*
*[* Jika Anda ingin keluar dari sesi anonymous chat, cukup ketik "leave" atau perintah serupa yang ditentukan pada platform tersebut. Ini akan mengakhiri obrolan dan Anda akan keluar dari sesi tersebut. *]*

3. *.Next (Mencari Orang Selanjutnya):*
*[* Jika Anda ingin mengobrol dengan orang lain atau beralih ke obrolan anonim dengan seseorang yang berbeda, ketik "next" atau perintah serupa yang sesuai pada platform tersebut. Ini akan mengarahkan Anda ke obrolan anonim dengan orang lain secara acak. *]*

4. *.Sendkontak (Mengirim Kontak)*
*[* Mengirimkan kontak/nomor kepada partner yang ditemukan dalam sesi (Anonymous Chat) *]*`;


let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: intro,
        },
        footer: {
          text: `Harap Sopan Saat Berbicara Dalam Sesi Anonymous Chat`
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: 'https://telegra.ph/file/f60f2e43f97fd0da47a16.jpg',
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

};

afriza.help = ['anonymous'];
afriza.tags = ['anonymous'];
afriza.command = /^(anonymous)$/i;
afriza.private = false;

module.exports = afriza;