/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const Jimp = require('jimp');

let afriza = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw '🐱 You are not registered in the database'

  if (!text) {
    throw 'Reply image with caption *Example:* .compress 80%';
  }

  if (!/^\d+%$/.test(text)) {
    throw `Invalid format. *Example:* .compress 80%`;
  }

  let quality = parseInt(text) / 100;
  if (quality < 0.1 || quality > 1) throw '🐱 Quality percentage should be between *10%* and *100%*'

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime || !mime.startsWith('image')) throw '🐱 Please reply to an image'

  let start = new Date();
  
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let img = await q.download();
  let image = await Jimp.read(img);

  let compressedImage = await image.quality(quality * 100).getBufferAsync(Jimp.MIME_JPEG);
  
  let end = new Date();
  let time = end - start;

  conn.sendFile(m.chat, compressedImage, 'compressed.jpg', `*🐱 Fetching:* ${time} ms`, m);
}

afriza.help = ['compress /quality']
afriza.tags = ['tools']
afriza.command = /^(compress|comp)$/i

module.exports = afriza