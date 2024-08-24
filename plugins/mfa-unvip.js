/*
 script by afriza
 ig : @afriza_16f
*/

let { MessageType } = require('@adiwajshing/baileys')
let afriza = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) return conn.reply(m.chat, `*Example:* ${usedPrefix}unvip @628xxx`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].vip = false
  global.db.data.users[text].vipDate = 0
  conn.reply(m.chat,`*Successfully removed premium access for @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
afriza.help = ['unvip']
afriza.tags = ['owner']
afriza.command = /^(unvip)$/i
afriza.mods = true
afriza.fail = null
module.exports = afriza