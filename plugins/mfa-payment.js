let fs = require('fs')
let afriza = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/4bbb975f949570b27e158.jpg'
let dann =
`*//─────────────────────//*
*DANA* *: https://link.dana.id/qr/49nfbe8p*
*𝗔/𝗻* : 𝗣***𝗶 𝗠𝗮****𝗵 𝗗**𝗶

*GOPAY - OVO : 083174059236*
*A/n : MFA STORE*
*//─────────────────────//*
*Wajib mengirimkan bukti transfer*
*All trx no reffund, kecuali kesalahan owner*
@${creator.split("@")[0]}
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

afriza.help = ['payment', 'pembayaran']
afriza.tags = ['info', 'tools']
afriza.command = /^(payment|pembayaran|pay)$/i
module.exports = afriza