const handler = async (m, { conn, text }) => {
    if (!text) throw 'Yang Mau Di Banned Siapa?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'Berhasil target telah di banned', m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banusr|banuser?$/i
handler.rowner = true

module.exports = handler;