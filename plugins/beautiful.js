let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let afriza = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Send/Reply Images with the caption .${command}`
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let media = await q.download()
let url = await uploadImage(media)
let hasil = await fetch(global.API(('lol','/api/creator1/beautiful', { img: url }, 'apikey'))
await conn.sendFile(m.chat, hasil, '', '```Success...\nDont forget to donate```', m)
}
afriza.help = ['beautiful']
afriza.tags = ['maker']
afriza.command = /^(beautiful)$/i
afriza.limit = true

module.exports = afriza
