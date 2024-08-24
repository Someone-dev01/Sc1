/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, '*Example*: .pesan 6285922143966|Hai', m)
    if (!pesan) return conn.reply(m.chat, '*Example*: .pesan 6285922143966|Hai', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 PENITIPAN PESAN 」*\n\nUntuk : wa.me/${korban}\nPesan : ${pesan}\n\n*${global.wm}*`

    conn.reply(`${korban}@s.whatsapp.net`, spam1, m)

    let logs = `[ ✔️ ] Berhasil mengirim pesan wa ke nomor wa.me/${korban}`
    conn.reply(m.chat, logs, m)
}
afriza.command = /^(pesan|chat)$/i
afriza.rowner = false
afriza.premium = false
afriza.group = false
afriza.private = false

afriza.admin = false
afriza.botAdmin = false

afriza.fail = null
afriza.register = true
afriza.limit = true

module.exports = afriza