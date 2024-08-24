let afriza = async (m, { conn, usedPrefix, command }) => {
    let bot = conn.user.jid
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(bot, img)
        conn.reply(m.chat, 'Changed the bot profile\n> Status: `Success ✅`', m)
    } else throw `kirim/balas gambar dengan caption *${usedPrefix + command}*`
}
afriza.help = ['setppbot']
afriza.tags = ['owner']
afriza.command = /^setppbot|setbotpp$/i
afriza.owner = true
module.exports = afriza