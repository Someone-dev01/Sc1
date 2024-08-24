let xfar = require('xfarr-api');
let afriza = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) throw `*Contoh*: ${usedPrefix}${command} ayaka`;
  conn.sendMessage(m.chat, {
      react: {
          text: '🕒',
          key: m.key,
      }
  })
  let currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false });
  xfar.Pinterest(args[0]).then(async data => {
    let pincpt = `_*P I N T E R E S T*_\nHasil pencarian Dari: *${args[0]}*\n___________________\n${currentDate}`;
    conn.sendFile(m.chat, data.url, 'pin.jpg', pincpt, m);
  });
};
afriza.help = ['pinterest <kata kunci>'];
afriza.tags = ['internet', 'downloader'];
afriza.command = /^(pinterest|pin)$/i
module.exports = afriza;