let afriza = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
  // } else m.reply('There is a host number here...')
}
afriza.help = ['banchat']
afriza.tags = ['owner']
afriza.command = /^banchat|bnc$/i
afriza.owner = true

module.exports = afriza