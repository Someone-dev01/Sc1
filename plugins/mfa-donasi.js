/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let qris = 'https://telegra.ph/file/9948c18f2fad0e127fa9d.jpg'
let text = '```Kuy, bisa donasi barapapun tanpa minimal transfer >//<```'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🐣',
      key: m.key,
    }
  });

conn.sendFile(m.chat, qris, '', text, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

handler.limit = false

module.exports = handler