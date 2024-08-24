let { groupsSettingUpdate } = require('@adiwajshing/baileys')
let afriza = async (m, { isAdmin, isOwner, isBotAdmin, conn, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
	if (!isBotAdmin) {
		global.dfail('botAdmin', m, conn)
		throw false
	}
let prefix = usedPrefix
let bu = `> 「 Group Settings Change \n\nGroup telah di buka oleh @${m.sender.split`@`[0]} dan sekarang  semua member dapat mengirim pesan
`.trim()            
    
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
var text5 = `contoh:
${usedPrefix + command} close
${usedPrefix + command} open
	`
m.reply(text5)

		throw false
	} else if (isClose === 'announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	let teks = `> 「 Group Settings Change 」\n\nGroup telah di tutup oleh @${m.sender.split`@`[0]} dan sekarang hanya admin yang dapat mengirim pesan`.trim()
	await m.reply(teks)
	} else if (isClose === 'not_announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	await m.reply(bu)
	} else if (isClose === undefined) {

var te = `
contoh:
${usedPrefix + command} close
${usedPrefix + command} open`

m.reply(te)

	}
}

afriza.help = ['grup <open/close>']
afriza.tags = ['group']
afriza.command = /^(g(ro?up|c?)?)$/i
afriza.group = true
afriza.botAdmin = false

module.exports = afriza