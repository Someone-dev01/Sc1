const fs = require('fs');
const uploadImage = require ('../lib/uploadImage.js');
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `Kirim/Reply Gambar dengan caption ${usedPrefix + command}`;
  m.reply('Tunggu Sebentar...');
  let media = await q.download();
  let url = await uploadImage(media);
  let configFile = './config.js';
  let configData = fs.readFileSync(configFile, 'utf8');
  let newValue = `global.thumb = "${url}"`;

  configData = configData.replace(/global\.thumb\s*=\s*".*"/, newValue);

  fs.writeFileSync(configFile, configData, 'utf8');

  m.reply('Berhasil mengubah thumbnail bot');
};

handler.help = ['setthumb'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^setthumb$/i;

module.exports = handler;