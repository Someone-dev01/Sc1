let handler = async function (m, { conn, args }) {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)

    await conn.sendContact(m.chat, [[`${who.split`@`[0]}@s.whatsapp.net`, `${username}`]], m)
}
handler.help = ['save *@tag*']
handler.tags = ['tools']
handler.command = ['sv', 'save']
module.exports = handler