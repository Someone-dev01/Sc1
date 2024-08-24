let handler = async (m, { conn }) => {
  ayg = global.db.data.users[m.sender]

  if(ayg.sahabatdua == ""){
    return conn.reply(m.chat,`Anda tidak memiliki sahabat.`,m)
  }
  
  beb = global.db.data.users[global.db.data.users[m.sender].sahabatdua]

  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].sahabatdua.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabatdua]
    }})
    ayg.sahabatdua = ""
  }

  if (m.sender == beb.sahabatdua){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].sahabat.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabatdua]
    }})
    ayg.sahabatdua = ""
    beb.sahabatdua = ""
  }else {
    conn.reply(m.chat,`Anda tidak memiliki sahabat.`,m)
  }
}
handler.help = ['hapus-s2']
handler.tags = ['fun']
handler.command = /^(hapus-s2)$/i
handler.group = true
handler.limit = true
handler.fail = null
module.exports = handler