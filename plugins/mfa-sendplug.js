/*
 script by afriza
 ig : @afriza_16f
*/

let fs = require('fs')

let afriza = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    
let input = `• *Example :* ${usedPrefix + command} mfa-owner.js`
	if (!text) return m.reply(input)
	let who;
				try {
				if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender } catch (err) {
				if (m.isGroup) who = args[0] +  "@s.whatsapp.net"
				}
				if (!who) return m.reply(`tag/nomor nya banh`)
				if (!args[1]) return m.reply(`nama filenya apa banh?`)

                const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
             	if (isValid.length == 0) {
	        	return m.reply("Number not in whatsapp!");
              	}
				var user_bot = await fs.readFileSync(`./plugins/${args[1]}`)
				conn.sendMessage(who, {
					document: user_bot,
					caption: '```Kiriman Plugins:```' + ' `'+args[1]+'`',
					mimetype: 'document/application',
					fileName: `${args[1]}`
				})
m.reply('```Success sending file to : ```' + args[0])
}
afriza.help = ['sendplug']
afriza.tags = ['owner']
afriza.command = /^(sendplug)$/i
afriza.rowner = true

module.exports = afriza