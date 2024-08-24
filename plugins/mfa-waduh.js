/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const { sticker } = require('../lib/sticker.js');

const afriza = async (m, { conn, text, usedPrefix, command }) => {
  let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author);
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
  throw stiker.toString();
};

afriza.customPrefix = /^(waduh)$/i;
afriza.command = new RegExp;

module.exports = afriza;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const stikerhuuu = [
  "https://telegra.ph/file/8974f7749676180035c21.png",
"https://telegra.ph/file/82b06ee45740d7213bebe.png",
"https://telegra.ph/file/6021e87d47db87d934be0.png",
"https://telegra.ph/file/aac11e707e742ccf1efc3.png",
"https://telegra.ph/file/9bca958a013b263ddc82f.jpg",
"https://telegra.ph/file/1126de90920fdbd1248b9.jpg",
"https://telegra.ph/file/772db2b46e9c209d47b1c.jpg",
];