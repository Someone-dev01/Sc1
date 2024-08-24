/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, text }) => {
    if (!text && m.isGroup) {
        if (!m.mentionedJid) throw 'Contoh: .unban @user'
        let who = m.mentionedJid[0]
        if (!who) throw 'Tag yang ingin di-unban'
        let users = global.db.data.users
        if (!users[who]) throw 'Pengguna tidak ditemukan'
        users[who].banned = false
        conn.sendMessage(m.chat, 'Berhasil di-unban', 'conversation', { quoted: m })
    } else if (!text && !m.isGroup) {
        throw 'Untuk mem-unban pengguna di luar grup, Anda perlu memberikan nomor mereka sebagai argumen.'
    } else {
        let number = text.replace(/\D/g, '')
        let users = global.db.data.users
        let who = Object.values(users).find(user => user.jid === `${number}@s.whatsapp.net`)
        if (!who) throw 'Pengguna tidak ditemukan'
        who.banned = false
        conn.reply(m.chat, 'Berhasil di-unban', m)
    }
}
afriza.help = ['unban @user | <nomor>']
afriza.tags = ['owner']
afriza.command = /^unban$/i
afriza.owner = true

module.exports = afriza