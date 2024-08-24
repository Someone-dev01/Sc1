/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const cooldowns = {}

let afriza = async (m, { conn, text, usedPrefix, command }) => {
    if (cooldowns[m.sender] && cooldowns[m.sender] > Date.now()) {
        let remaining = (cooldowns[m.sender] - Date.now()) / 1000
        throw `Maaf, kamu tidak bisa order lagi sebelum ${remaining.toFixed(0)} detik`
    }

    if (!text) throw `Mau beli apa banh?\n\n• panel\n• kebsos_tt\n• kebsos_ig\n• sewabot\n• jadibot\n\n*Contoh:*\n${usedPrefix + command} kebsos_ig 100 followers\n${usedPrefix + command} panel 5gb`
    if (text.length < 5) throw `huh pendek bat kocag`
    if (text.length > 100000) throw `bet length`
    let teks = `*🔔[ System Notice ]🔔*\n\n• *Pesanan Dari:* @${m.sender.split`@`[0]}\n• *Barang Pesanan:* ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_*Orderan Berhasil Dibuat*_\n_Silahkan transfer agar pesanan dapat kami proses._`)
    
    setTimeout(() => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/4d1735267269a769c7d64.jpg', null, `*//─────────────────────//*
*DANA* *: https://link.dana.id/qr/49nfbe8p*
*𝗔/𝗻* : 𝗣***𝗶 𝗠𝗮****𝗵 𝗗**𝗶

*GOPAY - OVO : 083174059236*
*A/n : MFA STORE*
*//─────────────────────//*
*Wajib mengirimkan bukti transfer*
*All trx no reffund, kecuali kesalahan owner*
`, m);
  }, 1300);
    
    cooldowns[m.sender] = Date.now() + 300000 // 5 menit cooldown
}
afriza.help = ['order'].map(v => v + ' <teks>')
afriza.tags = ['info']
afriza.command = /^(order)$/i
module.exports = afriza