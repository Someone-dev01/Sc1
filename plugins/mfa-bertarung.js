/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let opponent = m.mentionedJid[0]
  
  if (!user || !global.db.data.users[opponent]) {
    return m.reply('*Contoh*: .bertarung @user')
  }
    
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  
  let alasanKalah = `${pickRandom(['bodoh gitu doang aja kalah tolol lu di denda','lemah lu kontol mending lu di rumah aja dah lu di denda dek','Jangan beratem kalo cupu dek wkwkwk kamu di denda','Dasar tolol lawan itu doang aja ga bisa lu di denda','Hadehh sono lu mending di rumah aja deh lu di denda'])}`
  let alasanMenang = `${pickRandom(['kamu berhasil menggunakan kekuatan elemental untuk menghancurkan pertahanan lawan dan mendapatkan','kamu berhasil melancarkan serangan mematikan dengan gerakan akrobatik yang membingungkan lawan, dan mendapatkan','Kamu berhasil menang karena baru selesai coli dan mendapatkan','Kamu berhasil menang karena menyogok lawan dan mendapatkan','Kamu berhasil menang karena bot merasa kasihan sama kamu dan mendapatkan','Kamu berhasil menang karena kamu melawan orang cupu dan mendapatkan'])}`

  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (user.money < betAmount) {
    return m.reply('Uang Anda tidak mencukupi')
  }
  
  if (user.lastWar && (new Date - user.lastWar) < 30000) {
    let remainingTime = Math.ceil((30000 - (new Date() - user.lastWar)) / 1000)
    return m.reply(`Anda harus menunggu ${remainingTime} detik sebelum dapat bertarung lagi`)
  }
  
  m.reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    m.reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      m.reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        user.money += wonAmount
        global.db.data.users[opponent].money -= wonAmount
        
        let opponentName = conn.getName(opponent) 
        
        let caption = `❏  *F I G H T*\n\n`
        caption += `Lawan Anda Adalah: ${opponentName}\nLevel: [${global.db.data.users[m.sender].level}]\n\n`
        
        if (result) {
          caption += `*Menang!*, ${alasanMenang},+${betAmount} Money\n`
          caption += `Uang Anda saat ini: ${user.money}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/e14d02f7fe2227dd06d3a.jpg', 'You_Win.jpg', caption, m)
        } else {
          caption += `*kalah!*, ${alasanKalah},-${betAmount} Money\n`
          caption += `Uang Anda saat ini: ${user.money}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/e14d02f7fe2227dd06d3a.jpg', 'You_Lose.jpg', caption, m)
        }

        user.lastWar = new Date() 
        
        setTimeout(() => {
          m.reply(`Anda dapat bertarung lagi setelah 60 detik`) 
        }, 30000) // cooldown set to 60 seconds
      }, 2000)
    }, 2000) 
  }, 2000) 
}

afriza.help = ['bertarung @user', 'fight @user']
afriza.tags = ['rpg']
afriza.command = /^(fight|bertarung)$/i

module.exports = afriza

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}