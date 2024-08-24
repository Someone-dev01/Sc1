const { sticker } = require('../lib/sticker.js');

const handler = async (m, { conn, text, usedPrefix, command }) => {
  let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author);
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
  throw stiker.toString();
};

handler.customPrefix = /^(aw|aww|aww bangett|aww banget|aw banget)$/i;
handler.command = new RegExp;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const stikerhuuu = [
  "https://telegra.ph/file/5ee2ea13154db1dd12ecc.png",
];