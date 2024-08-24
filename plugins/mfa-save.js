/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let afriza  = async (m, { conn, text }) => {
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = m.sender.split('@')[0]
	let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD`
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: name,
                contacts: [{ vcard }]
            }
        })

}
afriza.help = ['mycontact']
afriza.tags = ['tools']
afriza.command = /^(save|saveme|mycontact)$/i
afriza.group = true
afriza.limit = true
afriza.fail = null
module.exports = afriza