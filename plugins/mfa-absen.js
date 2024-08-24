/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { usedPrefix, conn }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    m.reply(`Berhasil absen!`)
    let d = new Date
    let time = d.toLocaleTimeString('id', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
    let list = absen.map((v, i) => `٠━━━━ *ABSEN* ━━━━٠
${i + 1}. Nama: @${v.split`@`[0]}
  Pukul: ${time}
  ٠━━━━━━━━٠`).join('\n')
    conn.reply(m.chat, `${list}\nTotal Absen: ${absen.length}`, m, { contextInfo: { mentionedJid: absen } })
}

afriza.help = ['absen']
afriza.tags = ['absen']
afriza.command = /^(absen|hadir)$/i
afriza.group = true
module.exports = afriza