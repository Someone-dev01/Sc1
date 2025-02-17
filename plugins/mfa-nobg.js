/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let afriza = async (m, { conn }) => {
  let message = m.quoted ? m.quoted : m;
  let mime = (message.msg || message).mimetype || '';

  if (/image/.test(mime)) {
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let image = await message.download();
    let imageUrl = await uploadImage(image);

    try {
      let removeBgUrl = `https://api.lolhuman.xyz/api/removebg?apikey=${global.lolkey}&img=${encodeURIComponent(imageUrl)}`;
      let removeBgResponse = await axios.get(removeBgUrl, { responseType: 'arraybuffer' });
      let caption = '```Success...\nDont forget to donate```';
      await conn.sendFile(m.chat, Buffer.from(removeBgResponse.data), 'removed.png', caption, m);
      await conn.sendImageAsSticker(m.chat, Buffer.from(removeBgResponse.data), m, { packname: "sticker by", author: "Afriza" })
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'An error occurred while removing the image background.', m);
    }
  } else {
    conn.reply(m.chat, 'Reply to an image with caption *.removebg*', m);
  }
};

afriza.help = ['nobg', 'removebg'];
afriza.tags = ['tools'];
afriza.command = /^(nobg|removebg)$/i;

module.exports = afriza;