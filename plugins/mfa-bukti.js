let fetch = require('node-fetch')
let fs = require('fs')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    
    if (!text) return conn.reply(m.chat, `• *Example :* .bukti id transaksi tadi`, m)
    let pler = JSON.parse(fs.readFileSync('./lib/deposit.json').toString())
    let jangan = pler.includes(text)
    if (!jangan) return conn.reply(m.chat, `ID DEPOSIT INVALID`, m)
  let qris = `${global.qris}` // Config.js
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let thm = 'https://telegra.ph/file/5e52b6e8ab1ed136705ad.jpg'
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
  let kata = `${pickRandom('86218', '65491', '54995', '1018', '81043', '37501', '98818')}`
  const prem = JSON.parse(fs.readFileSync("./lib/deposit.json"))
  let cpt = `*ADA TRANSAKSI MASUK*\n*DARI ${m.sender.split('@')[0]}*\n\nDENGAN ID DEPOSIT : \`${text}\``
  let capt = `_Deposit Sedang Di Proses Mohon Menunggu Sampai *System* Mengkonfirmasi Transaksi Tersebut_`
  //	global.db.data.users[m.sender].id -= `${text}`
  
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, 'Screenshot Bukti Transfer nya kak?', m)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    let out = `${link}`
     let unp = prem.indexOf(args)
     prem.splice(unp, 1)
fs.writeFileSync("./lib/deposit.json", JSON.stringify(prem))
        m.reply(capt)
   await conn.sendFile(nomorown + '@s.whatsapp.net', out, 'order.jpg', `${cpt}`, m)
   // return conn.sendFile('6283174059236@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
}
handler.help = ['bukti *<id>*']
handler.tags = ['store']

handler.command = /^(bukti)$/i
handler.premium = false
handler.register = false
handler.limit = false
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}