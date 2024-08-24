const fetch = require('node-fetch');

let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) throw 'Masukkan Text!!';
  m.reply('⏳ W a i t i n g...');
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'gura.jpg', `Sudah kak >//<`, m, false);
};

handler.help = ['flaming1'].map((v) => v + ' <text>');
handler.tags = ['maker'];
handler.command = /^(flaming1)$/i;

module.exports = handler;