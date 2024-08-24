const axios = require('axios');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let res = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/itzy.json')).data;
  let mystic = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, mystic, 'error.jpg', `_${command}_`, m);
};

handler.help = ['itzy', 'kpopitzy'];
handler.tags = ['internet'];
handler.command = /^(itzy|kpopitzy)$/i;

module.exports = handler;