/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let afriza = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'casino <jumlah>\n ' + usedPrefix + 'casino 1000', m)
        if (global.db.data.users[m.sender].money >= count * 1) {
            global.db.data.users[m.sender].money -= count * 1
            //await m.reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
              conn.sendMessage(m.chat, {
text: `*Kamu:*\n┗┅⭑${Kamu} Point\n*Computer:*\n┗┅⭑ ${Aku} Point\n\n*SERI*\nYou get ${count * 1} money`,
contextInfo: {
externalAdReply: {
thumbnailUrl: 'https://telegra.ph/file/3167c90ac0dad76dd325b.jpg',
title: 'CASINO',
body: 'Awas rungkad_-',
mediaType: 1,
renderLargerThumbnail: false
}}})
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].money += count * 2
                conn.sendMessage(m.chat, {
 text: `*Kamu:*\n┗┅⭑${Kamu} Point\n*Computer:*\n┗┅⭑ ${Aku} Point\n\n*SERI*\nYou get ${count * 1} money`,
contextInfo: {
externalAdReply: {
thumbnailUrl: 'https://telegra.ph/file/3167c90ac0dad76dd325b.jpg',
title: 'CASINO',
body: 'Awas rungkad_-',
mediaType: 1,
renderLargerThumbnail: false
}}})
            } else {
                global.db.data.users[m.sender].money += count * 1
                
conn.sendMessage(m.chat, {
text: `*Kamu:*\n┗┅⭑${Kamu} Point\n*Computer:*\n┗┅⭑ ${Aku} Point\n\n*SERI*\nYou get ${count * 1} money`,
contextInfo: {
externalAdReply: {
thumbnailUrl: 'https://telegra.ph/file/3167c90ac0dad76dd325b.jpg',
title: 'CASINO',
body: 'Awas rungkad_-',
mediaType: 1,
renderLargerThumbnail: false
}}})
            }
        } else conn.reply(m.chat, `money kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.casino[m.chat]
    }
}
afriza.help = ['casino <jumlah>']
afriza.tags = ['game']
afriza.command = /^(casino)$/i

afriza.fail = null

afriza.limit = 1

module.exports = afriza

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}