let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let afriza = async (m, { conn, usedPrefix, text, args, command }) => {
let list = [{
      displayName: "Rizik",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Someone\nFN:Rizik\nitem1.TEL;waid=60135461140:60135461140\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: kazumamyoc@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:${sig}\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Malaysia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }, {
      displayName: "Rafa",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Anya Botz\nFN:Rafa\nitem1.TEL;waid=6285727485224:6285727485224\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: anyaforge@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:${sig}\nitem3.X-ABLabel:Internet\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      }];
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            }
        }, { quoted: m })
}
afriza.help = ['owner']
afriza.tags = ['info']

afriza.command = /^(owner|own)$/i

module.exports = afriza