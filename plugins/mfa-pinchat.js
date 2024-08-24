let handler = async (m, { conn, command }) => {
	try {
		await conn.chatModify({ pin: command.includes('un') ? false : true }, m.chat)
		m.reply(`Chat berhasil di *${command.includes('un') ? 'unpin' : 'pin'}*.`)
	} catch (e) {
		console.oog(e)
		m.reply('Gagal, coba lagi nanti.')
	}
}

handler.menuowner = ['pinchat','unpinchat']
handler.tagsowner = ['owner']
handler.command = /^((un)?pin(chat?))$/i

handler.rowner = true

module.exports = handler