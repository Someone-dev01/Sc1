/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const fetch = require("node-fetch");

const afriza = async (m, { text, usedPrefix, command }) => {

let pp = m.sender.startsWith('@@') ? 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg' : await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg');

  if (!text) throw `Hay adakah yang bisa saya bantu??`;
  await m.reply("*`Loading | Please Wait.`*");
  let afriza = await fetch(
    `https://aemt.me/gpt4?text=${encodeURIComponent(text)}`);
  let hasil = await afriza.json();
  let txt = `${hasil.result}`.trim();
  
  let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: txt,
        },
        footer: {
          text: `OPEN AI`
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: pp,
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

afriza.help = ["ai *text*"];
afriza.tags = ["tai"];
afriza.command = /^(ai|gpt|openai)$/i;
module.exports = afriza;