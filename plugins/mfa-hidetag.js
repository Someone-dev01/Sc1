/*
 script by afriza
 ig : @afriza_16f
*/

let fs = require('fs')
let fetch = require('node-fetch')
let afriza = async(m, { conn, text, participants }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

    conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: fkontak })
    }
afriza.help = ['hidetag <pesan>']
afriza.tags = ['group']
afriza.command = /^(hidetag|h|ht|announcement|pengumuman)$/i

afriza.group = true
afriza.admin = true

module.exports = afriza