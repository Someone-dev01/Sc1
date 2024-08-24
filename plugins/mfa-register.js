/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const register = async (m, { conn, text, command }) => {
  // Periksa apakah pengguna sudah terdaftar
  let user = global.db.data.users[m.sender];
  if (user.registered === true) {
    return m.reply('Anda sudah terdaftar.');
  }

  if (!text || !/^[\w\s]+\.\d+$/.test(text)) {
    return m.reply(`Format yang benar:\n${command} [nama].[umur]\nContoh: ${command} MFA BOT.19`)
  }

  // Pisahkan nama dan umur dari teks yang diberikan
  const [nama, umur] = text.split('.')

  // Periksa jika umur adalah angka dan kurang dari atau sama dengan 333
  const age = parseInt(umur)
  if (isNaN(age) || age > 333) {
    return m.reply('Umur tidak valid atau melebihi batas maksimum (333 tahun).')
  }

  // Update data pengguna dalam database
  user.name = nama.trim()
  user.age = age
  user.registered = true; // Menandai pengguna sebagai terdaftar

  // Membuat pesan respon dengan format yang lebih baik
  const responseMsg = `
*[ Register ]*
• *Status:* Sukses
• *Nama:* ${nama}
• *Umur:* ${umur} Tahun
`

  // Mengirimkan pesan respon
  conn.reply(m.chat, responseMsg, m)
}

register.command = register.help = ["register"]
register.tags = ["start"]

module.exports = register