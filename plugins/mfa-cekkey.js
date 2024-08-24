/*
 script by afriza
 ig : @afriza_16f
*/

const fetch = require('node-fetch');

let afriza = async (m, { text }) => {
  if (!text) throw 'Masukan apikey';

  let apikey = text.trim();
  let url = `https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`;
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let response = await fetch(url);
  let result = await response.json();

  if (result.status !== 200) throw '🐱 Terjadi kesalahan pada server.';
  if (result.message !== 'success') throw '🐱 API key tidak valid atau tidak ditemukan.';

  let { username, requests, today, account_type, expired } = result.result;

  let teks = `*[ STATUS APIKEY ]*\n\n`;
  teks += `┌  ◦  *Username* : ${username}\n`;
  teks += `│  ◦  *Jumlah requests* : ${requests}\n`;
  teks += `│  ◦  *Requests hari ini* : ${today}\n`;
  teks += `│  ◦  *Tipe akun* : ${account_type}\n`;
  teks += `└  ◦  *Masa berlaku* : ${expired}\n`;

  m.reply(teks);
};

afriza.help = ['cekkey'];
afriza.tags = ['tools'];
afriza.command = /^(cekkey)$/i;

module.exports = afriza;