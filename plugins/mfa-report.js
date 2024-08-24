/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldowns = {}

let afriza = async (m, { conn, text, usedPrefix, command }) => {
    if (cooldowns[m.sender] && cooldowns[m.sender] > Date.now()) {
        let remaining = (cooldowns[m.sender] - Date.now()) / 1000
        throw `Maaf, kamu hanya bisa melaporkan satu kali dalam 1 jam. Silakan coba lagi setelah ${Math.ceil(remaining / 60)} menit`
    }

    if (!text) throw `Kamu belum memberikan pesan untuk dilaporkan. Gunakan perintah ini untuk melaporkan:\n\ncontoh:\n${usedPrefix + command} Selamat siang owner, saya menemukan error seperti berikut <copy/tag pesan error>`
    if (text.length < 10) throw `Pesan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Pesan terlalu panjang, maksimal 1000 karakter!`

    let teks = `*${command.toUpperCase()}!*\n\nDari: *@${m.sender.split`@`[0]}*\n\nPesan: ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`Pesan kamu telah terkirim ke pemilik bot. Jika ${command.toLowerCase()} hanya main-main, tidak akan ditanggapi.`)

    cooldowns[m.sender] = Date.now() + 3200000 // 1 jam cd
}

afriza.help = ['report'].map(v => v + ' <teks>')
afriza.tags = ['info']
afriza.command = /^(report|bug)$/i

module.exports = afriza