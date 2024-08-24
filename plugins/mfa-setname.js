/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

var afriza = async (m, {
 conn,
 text,
 usedPrefix,
 command
}) => {
 if (!text) {
 return m.reply(`Masukkan Nama!\n\nContoh: *${usedPrefix + command} Afriza*`)
 }
 var user = global.db.data.users[m.sender]
 user.name = text.trim()
 m.reply(`Successfully changed name to *${text.trim()}*`)
}

afriza.command = afriza.help = ["setname"]
afriza.tags = ["database"]

module.exports = afriza