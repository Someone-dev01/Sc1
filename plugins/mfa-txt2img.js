/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch');
let afriza = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Contoh: ${usedPrefix}${command} 1girl, solo, ponytail, blush.`);
  conn.sendMessage(m.chat, {
    react: {
      text: '🤨',
      key: m.key,
    }
  });
  let res = `https://aemt.me/ai/text2img?text=${encodeURIComponent(text)}`;
  conn.sendFile(m.chat, res, 'txt2img.jpg', 'DONE BANG', m, false);
};

afriza.help = ['txt2img *(prompt)*'];
afriza.command = ['txt2img', 't2i'];
afriza.tags = ['ai'];
afriza.register = true;
afriza.premium = true;
afriza.limit = false;

module.exports = afriza;