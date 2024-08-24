let fetch = require('node-fetch')
let afriza = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'iluminated.jpg', 'Nih kak!', m, false)
}
afriza.help = ['iluminated'].map(v => v + ' <text>')
afriza.tags = ['maker']
afriza.command = /^(iluminated)$/i

module.exports = afriza