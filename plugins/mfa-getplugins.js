const { readFileSync } = require('fs')

let afriza = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `*Example*: ${usedPrefix + command} creator`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    let afriza = readFileSync('./plugins/' + text + '.js')
    conn.sendMessage(m.chat, {
text: afriza,
contextInfo: {
externalAdReply: {
title: "Get Plugins - Someone Botz",
thumbnailUrl: 'https://telegra.ph/file/5ceb9d992db7abb1ff3cc.jpg',
sourceUrl: 'https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
afriza.help = ['getplugin'].map(v => v + ' <teks>')
afriza.tags = ['owner']
afriza.command = /^(getplugin|gp)$/i

afriza.owner = true

module.exports = afriza