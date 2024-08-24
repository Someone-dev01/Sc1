/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { sticker } = require('../lib/sticker.js');

const afriza = async (m, { conn, text, usedPrefix, command }) => {
  let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author);
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
  throw stiker.toString();
};

afriza.customPrefix = /^(bot|bott|bottt)$/i;
afriza.command = new RegExp;

module.exports = afriza;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const stikerhuuu = [
  "https://telegra.ph/file/5a6e54fbe1fe004866abc.png",
"https://telegra.ph/file/890803e79f18e9795b470.jpg",
];