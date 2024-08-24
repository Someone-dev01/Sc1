/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')
let afriza = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, '• *Example :* .ttlogo mfa|bot', m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'joker.jpg', '```Success...\nDont forget to donate```', m, false)
}
afriza.help = ['ttlogo'].map(v => v + ' *<text>|<text>*')
afriza.tags = ['maker']
afriza.command = /^(ttlogo)$/i
afriza.register = true
afriza.limit = true

module.exports = afriza