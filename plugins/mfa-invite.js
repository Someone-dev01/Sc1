let afriza = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `Masukkan nomor yang ingin Anda undang ke grup\n\n📌 Contoh :\n*${usedPrefix + command}* 628xxx`
if (text.includes('+')) throw  `Masukkan nomor bersama-sama tanpa *+*`
if (isNaN(text)) throw ' 📌 Masukkan hanya angka ditambah kode negara Anda tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Tautan undangan dikirim ke pengguna`) 

}
afriza.help = ['invite <628xxx>']
afriza.tags = ['group']
afriza.command = ['invite','invitar'] 
afriza.group = true
afriza.admin = true
afriza.botAdmin = true

module.exports = afriza