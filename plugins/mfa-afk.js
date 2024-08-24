/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = +new Date()
  user.afkReason = text
  user.afkSince = new Date().toString() // Menambahkan properti afkSince
  let since = new Date(user.afk).toLocaleString()
  conn.reply(m.chat, `• @${m.sender.split("@")[0]} *is now AFK*\n• *Reason:*${text ? ': ' + text : ''}\n• *Since:* ${since}`, m)
}
afriza.help = ['afk *<reason>*']
afriza.tags = ['tools']
afriza.command = /^afk$/i
afriza.limit = true

module.exports = afriza