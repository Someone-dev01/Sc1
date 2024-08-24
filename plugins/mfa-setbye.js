let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.db.data.chats.sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?\n\nContoh penggunaan:\n.setbye Goodbye @user'
}
handler.help = ['setbye <teks>']
handler.tags = ['group']
handler.command = /^setbye|setleave|setout$/i
handler.group = true
handler.admin = true

module.exports = handler