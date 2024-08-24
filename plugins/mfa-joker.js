/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')
let afriza = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} Kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'joker.jpg', '```Success...\nDont forget to donate```', m, false)
}
afriza.help = ['joker'].map(v => v + ' <text>')
afriza.tags = ['maker']
afriza.command = /^(joker)$/i
afriza.register = true
afriza.limit = true

module.exports = afriza