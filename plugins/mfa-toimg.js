/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const uploadImage = require('../lib/uploadFile');

let afriza = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `Balas stiker dengan caption *${usedPrefix + command}*`;
  let mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `Balas stiker dengan caption *${usedPrefix + command}*`;
  let media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await uploadImage(media);
  }
  await conn.sendMessage(m.chat, { image: { url: out }, caption: '*DONE*' }, { quoted: m });
}

afriza.help = ['toimg (reply)'];
afriza.tags = ['sticker'];
afriza.command = ['toimg'];

module.exports = afriza;