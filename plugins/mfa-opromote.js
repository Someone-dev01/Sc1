let {
    areJidsSameUser
} = require('@adiwajshing/baileys')
let handler = async (m, {
    conn,
    participants
}) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let promoteUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || {
                admin: true
            }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
            await delay(1 * 1000)
        }
    m.reply('Succes')

}
handler.help = ['opromote *@tag*']
handler.tags = ['owner']
handler.command = /^(opromote)$/i

handler.admin = false
handler.group = true
handler.owner = true
handler.botAdmin = true

module.exports = handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))