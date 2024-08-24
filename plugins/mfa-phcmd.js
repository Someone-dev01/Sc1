let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} text1|text2`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/phcomment?apikey=${global.lolkey}&img=https://telegra.ph/file/2f1a7fba4535e2ea2d12d.jpg&text=${response[0]}&username=${response[1]}`
  conn.sendFile(m.chat, res, 'phcomments.jpg', `Done`, m, false)
}
handler.help = ['phcmd'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(phcmd)$/i
handler.register = true
handler.limit = true

module.exports = handler