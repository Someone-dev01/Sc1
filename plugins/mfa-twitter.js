let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Contoh:* .twitter https://twitter.com/xxxxx'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://aemt.me/download/twtdl?url=${text}`)
  try {
    let res = await kemii.json()
    let start = new Date();
    await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
    conn.sendFile(m.chat, res.media, 'twiter.mp4', '```Berhasil...\nJangan lupa untuk berdonasi```', m)
  } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`Masukkan Tautan Lol_-`);
  }
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i
handler.limit = true
handler.group = true

module.exports = handler