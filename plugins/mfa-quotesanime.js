const fetch = require('node-fetch');

let afriza = async (m, { conn, text }) => {
  let res = await fetch('https://katanime.vercel.app/api/getrandom?limit=1');
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.result[0]) throw json;
  let { indo, character, anime } = json.result[0];
  conn.reply(m.chat, `${indo}\n\n${character}\n${anime}`, m);
};

afriza.help = ['quotesanime'];
afriza.tags = ['quotes'];
afriza.command = /^(katanime|kataanime|quotesanime)$/i;
afriza.limit = true;

module.exports = afriza;