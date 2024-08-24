/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require("node-fetch");

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Hay adakah yang bisa saya bantu??`;
  await m.reply("*`Loading | Please Wait.`*");
  let afriza = await fetch(
    `https://aemt.me/gpt4?text=${encodeURIComponent(text)}`);
  let hasil = await afriza.json();
  let txt = `${hasil.result}`.trim();
  conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      externalAdReply: {
        title: `OpenAi -  ChatGpt `,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  });
};

handler.help = ["aic *<text>*"];
handler.tags = ["tai"];
handler.command = /^(aic)$/i;
module.exports = handler;