/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const timeout = 1800000

let afriza = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
	let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	global.db.data.users[m.sender].botol += botolnye * 1
	global.db.data.users[m.sender].kaleng += kalengnye * 1
	global.db.data.users[m.sender].kardus += kardusnye * 1
	global.db.data.users[m.sender].lastmulung = new Date * 1
  m.reply(`*[ MULUNG ]*\n\nSelamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya mulung lagi 😅`, m)
					}, timeout)
}
afriza.help = ['mulung']
afriza.tags = ['rpg']
afriza.command = /^(mulung)/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = true
afriza.private = false

afriza.admin = false
afriza.botAdmin = false

afriza.fail = null
afriza.limit = true
afriza.exp = 0
afriza.money = 0

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