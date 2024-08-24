const { sticker } = require('../lib/sticker.js');

const handler = async (m, { conn, text, usedPrefix, command }) => {
  let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author);
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
  throw stiker.toString();
};

handler.customPrefix = /^(haii|haiii|hai)$/i;
handler.command = new RegExp;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const stikerhuuu = [
  "https://telegra.ph/file/5a6e54fbe1fe004866abc.png",
];