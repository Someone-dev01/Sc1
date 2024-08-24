let afriza = async (m, { conn, text }) => {
   if (!text) throw `Masukan Text.`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `Changed the bio bot\n> Status: \`Success ✅\``, m)
} catch {
       throw 'Error'
     }
}
afriza.help = ['setbiobot <teks>']
afriza.tags = ['owner']
afriza.command = /^setbiobot$/i
afriza.owner = true

module.exports = afriza