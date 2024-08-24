let fetch = require('node-fetch')
let afriza = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} Kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'logogaming.jpg', '```Success...\nDont forget to donate```', m, false)
}
afriza.help = ['logogaming'].map(v => v + ' <text>')
afriza.tags = ['maker']
afriza.command = /^(logogaming)$/i
afriza.register = true
afriza.limit = true

module.exports = afriza