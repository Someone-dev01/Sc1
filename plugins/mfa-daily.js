const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000

let afriza = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
       // global.db.data.users[m.sender].potion += 5
        conn.reply(m.chat, `*[ DAILY ]*\n\nSelamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money`, m)
        global.db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Daily sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
afriza.help = ['daily']
afriza.tags = ['rpgabsen']
afriza.command = /^(daily)$/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = false
afriza.private = false

afriza.admin = false
afriza.botAdmin = false

afriza.fail = null
afriza.money = 0
afriza.exp = 0
afriza.limit = true

module.exports = afriza

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}