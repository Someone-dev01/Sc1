let handler = async (m, { conn, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `🚩 *Tag target !*`, m)

  if (!text && !m.quoted){
    user = m.sender
    orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    orang = "Orang yang kamu tag"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return conn.reply(m.chat, "🚩 *Orang yang anda tag tidak terdaftar di Bot.*", m)
  }

  if (typeof global.db.data.users[global.db.data.users[user].sahabat] == "undefined" && global.db.data.users[user].sahabat != ""){
    return conn.reply(m.chat, "🚩 *sahabat/teman tidak terdaftar di databas Bot.*", m)
  }

  if (global.db.data.users[user].sahabat == "") {
    conn.reply(m.chat, `🚩 *${orang} tidak memiliki sahabat dan tidak sedang bersahabatan dengan siapapun*\n\n*Ketik /sahabat @user untuk bersahabat*`, m)
  }else if (global.db.data.users[global.db.data.users[user].sahabat].sahabat != user){
    conn.reply(m.chat, `🚩 *${orang} sedang digantung oleh @${global.db.data.users[user].sahabat.split('@')[0]} karena sedang tidak diterima atau di tolak menjadi sahabatnya*\n\n*Ketik .ikhlasin-s untuk menghapus sahabatmu yang jahat itu*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].sahabat]
    }})
  }else {
    conn.reply(m.chat, `🚩 *${orang} sedang bersahabatan dengan @${global.db.data.users[user].sahabat.split('@')[0]} 🥳🥳*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].sahabat]
    }})
  }
}
handler.help = ['ceksahabat *@user*']
handler.tags = ['jadian']
handler.command = /^(ceksahabat)$/i
handler.limit = true
handler.group = true
handler.fail = null
module.exports = handler