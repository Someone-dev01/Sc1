// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 110000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (3300000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 3300000){
  if (10000 > users[who].limit) throw 'Target gaada limit bodoh, Kismin dia'
  users[who].limit -= dapat * 1
  users[m.sender].limit += dapat * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `Berhasil Mencuri Limit Target Sebesar ${dapat}`, m)

}else conn.reply(m.chat, `Anda sudah mencuri limit, tunggu ${timers} untuk mencuri limit lagi`, m)
}
handler.help = ['curilimit <@tag>']
handler.tags = ['rpg']
handler.command = /^curilimit$/
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3300000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}