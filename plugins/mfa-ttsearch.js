let { tiktoks } = require('../lib/scrape.js')

let afriza = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} jedag jedug`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  let te = `*[ Tiktok Search ]*\n\n`
  te +=`*Title :* ${kemii.title}\n\n`
  te +=`© TIKTOK - SEARCH`
  conn.sendFile(m.chat, kemii.no_watermark, 'tiktoks.mp4', te, m)
}
afriza.help = ['tiktoksearch'].map(v => v + ' *<text>*')
afriza.tags = ['downloader']

afriza.command = /^tiktoksearch|ttsearch$/i
afriza.premium = true

module.exports = afriza