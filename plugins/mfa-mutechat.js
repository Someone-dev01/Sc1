/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
  // } else m.reply('There is a host number here...')
}
handler.help = ['mutechat']
handler.tags = ['owner']
handler.command = /^mutechat$/i
handler.owner = true

module.exports = handler