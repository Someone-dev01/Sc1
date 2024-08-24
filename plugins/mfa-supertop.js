/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const util = require('util');
const path = require('path');

const user = (a) => '@' + a.split('@')[0];

function afriza(m, { groupMetadata, command, conn, text, usedPrefix }) {
  if (!text) throw `Contoh penggunaan:\n.top *teks*`;

  const ps = groupMetadata.participants.map((v) => v.id);

  const participants = [];
  for (let i = 0; i < 10; i++) {
    participants.push(pickRandom(ps));
  }

  const x = pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚']);
  const vn = `https://kaxel-host.tech/sound/sound.mp3`;

  const top = `*${x} Top 10 ${text} ${x}*\n\n`;
  let message = top;
  participants.forEach((participant, index) => {
    message += `${index + 1}. ${user(participant)}\n`;
  });

  m.reply(message, null, { mentions: participants });
}

afriza.help = afriza.command = ['supertop'];
afriza.tags = ['fun'];
afriza.group = true;
afriza.limit = 5;

module.exports = afriza;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}