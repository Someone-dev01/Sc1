var afriza = async (m, {
 conn,
 text,
 usedPrefix,
 command
}) => {
 if (!text) {
 return m.reply(`Masukkan Umur!\n\nContoh: *${usedPrefix + command} 1*`)
 }
 var user = global.db.data.users[m.sender]
 var age = parseInt(text)

 if (age <= 333) {
 user.age = age
 m.reply(`Succeed change age to *${age}*`)
 } else {
 m.reply(`Maximum age *333 years*`)
 }
}

afriza.command = afriza.help = ["setumur", "setage"]
afriza.tags = ["database"]

module.exports = afriza

//follow Instagram https://instagram.com/afriza_16f