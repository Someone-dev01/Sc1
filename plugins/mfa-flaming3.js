const fetch = require('node-fetch');
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|');
  if (!args[0]) throw 'Masukkan Text!!';
  m.reply('⏳ Loading...');
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'gura.jpg', `Sudah kak >//<`, m, false);
};
handler.help = ['flaming3'].map(v => v + ' <text>');
handler.tags = ['maker','logo'];
handler.command = /^(flaming3)$/i;

module.exports = handler;