/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, text }) => {
    if (!text && m.isGroup) {
        if (!m.mentionedJid) throw 'Contoh: .ban @user'
        let who = m.mentionedJid[0]
        if (!who) throw 'Tag yang ingin dibanned'
        let users = global.db.data.users
        users[who].banned = true
        conn.reply(m.chat, 'Berhasil dibanned', m)
    } else if (!text && !m.isGroup) {
        throw 'Untuk memban pengguna di luar grup, Anda perlu memberikan nomor mereka sebagai argumen.'
    } else {
        let number = text.replace(/\D/g, '')
        let users = global.db.data.users
        let who = Object.values(users).find(user => user.jid === `${number}@s.whatsapp.net`)
        if (!who) throw 'Pengguna tidak ditemukan'
        who.banned = true
        conn.reply(m.chat, 'Berhasil dibanned', m)
    }
}
afriza.help = ['ban @user | <nomor>']
afriza.tags = ['owner']
afriza.command = /^ban$/i
afriza.mods = true

module.exports = afriza