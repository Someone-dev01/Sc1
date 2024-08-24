let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Kalau sudah melakukan deposit silahkan ketik\n\ncontoh: \n*${usedPrefix + command}* <Id transaksi> ketika sudah melakukan deposit`
    if (text.length < 5) throw `Harap masukan ID 5 Digit!`
    if (text.length > 1000) throw `ID Maksimal Hanya 5 Digit!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Bukti tranfser terkirim kepada owner bot, jika *${command.toLowerCase()} transfer* hanya main-main tidak akan ditanggapi, Dan kamu akan segera di banned dari database bot kami.._`)
}
handler.help = ['Bukti-deposit'].map(v => v + '')
handler.tags = ['info']
handler.command = /^(bukti-deposit|buktideposit)$/i
module.exports = handler