/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const uploadFile = require('../lib/uploadFile.js');
const uploadImage = require('../lib/uploadImage.js');
const fetch = require('node-fetch');

let afriza = async (m, { args, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'No media found';
  let media = await q.download();
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);
  let caption = `*[LINK]:*
${link}
*[SIZE]* ${formatBytes(media.length)}
*[EXPIRED]* ${isTele ? 'PERMANENT' : 'Unknown'}
*[SHORT]* ${await shortUrl(link)}`;

  await m.reply(caption);
};

afriza.help = ['tourl2'];
afriza.tags = ['tools'];
afriza.command = /^(tourl2|t)$/i;
afriza.limit = true;
module.exports = afriza;

function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
  return await res.text();
}