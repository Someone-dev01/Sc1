/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldown = 60000

let handler = async (m, { conn, args, usedPrefix, isPrems, isOwner, command }) => {
    if (m.chat.includes('120363041604217979') && !isOwner) return m.reply(`[ hehe ]`)
    if (!args[0]) return m.reply(`Format : ${usedPrefix + command} <timer>\n1 = 1 menit\n5 = 5 menit ... dst.\n\nContoh : *${usedPrefix + command} 10*`)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    let chat = global.db.data.chats[m.chat]
    chat.isBanned = true
    m.reply(`Bot senyap selama ${total} menit!`)
    setTimeout(() => {
        chat.isBanned = false
    }, cooldown * total)
    setTimeout(() => {
        chat.isBanned = false
        m.reply(`Bot dapat digunakan kembali.`)
    }, (cooldown * total) + 2000)
    chat.lastmute = new Date * 1 + (cooldown * total)
}

handler.help = ['mute']
handler.tags = ['group']
handler.command = /^(mute|senyap)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

handler.cooldown = cooldown

module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}