const fetch = require('node-fetch');

let afriza = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix}${command} https://pin.it/4CVodSq`;
  }
  try {
    m.reply(wait);
    const api = await fetch(`https://api.betabotz.eu.org/api/download/pinterest?url=${args[0]}&apikey=${lann}`);
    const res = await api.json();
    let { media_type, image, title } = res.result.data;
    if (media_type === 'video/mp4') {
      await conn.sendMessage(m.chat, { video: { url: image } });
    } else {
      conn.sendFile(m.chat, image, 'pindl.jpeg', `*Title:* ${title}\n*Mediatype:* ${media_type}\n*Source Url*: ${image}\n`, m);
    }
  } catch (e) {
    console.log(e);
    throw `Terjadi kesalahan pada server!`;
  }
};

afriza.help = ['pindl'];
afriza.command = /^(pindl)$/i;
afriza.tags = ['downloader'];
afriza.limit = true;
afriza.premium = false;

module.exports = afriza;