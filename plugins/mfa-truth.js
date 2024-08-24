const { truth } = require('@bochilteam/scraper');

const handler = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, await truth(), m);
};

handler.help = ['truth'];
handler.tags = ['quotes', 'fun'];
handler.command = /^(truth)$/i;

module.exports = handler;