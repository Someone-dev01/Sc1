/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require('node-fetch');

const afriza = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `Mau nanya apa?`, m);

  try {
    const web = await fetch(`https://aemt.me/gpt4?text=${encodeURIComponent(text)}`);
    const result = await web.json();
    conn.reply(m.chat, result.result, m);
  } catch (e) {
    conn.reply(m.chat, e.message, m);
  }
};

afriza.help = ['ai2 *(text)*'];
afriza.tags = ['ai'];
afriza.command = /^(ai2)$/i;
afriza.limit = true;

module.exports = afriza;