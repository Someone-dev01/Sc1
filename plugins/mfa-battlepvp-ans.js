/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let handler = m => m
handler.before = async function (m) {
    this.stealTheFlag = this.stealTheFlag ? this.stealTheFlag : {}

    if (db.data.users[m.sender].flag < 0) db.data.users[m.sender].flag = 0

    let room = Object.values(this.stealTheFlag).find(room => room.id && [room.p, room.p2].includes(m.sender))
    if (room) {
        let win = ''
        let tie = false
        let thumb = 'https://telegra.ph/file/8f4eee2e92c326deb0b0f.jpg'
        if (m.sender == room.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
            if (/^(tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text)) {
                this.reply(m.chat, `@${room.p2.split`@`[0]} menolak untuk mencuri bendera, pertempuran dibatalkan`, m)
                delete this.stealTheFlag[room.id]
                return !0
            }
            room.status = 'play'
            room.asal = m.chat
            clearTimeout(room.waktu)
            m.reply(`Bendera telah dikirimkan ke @${room.p.split`@`[0]} dan @${room.p2.split`@`[0]}. Silahkan mencuri bendera lawan dan kembali ke basis Anda!`, m.chat, {
                mentions: [room.p, room.p2]
            })

            room.waktu_mencuri = setTimeout(() => {
                this.reply(m.chat, `Waktu untuk mencuri bendera habis, pertempuran dibatalkan.`, m)
                delete this.stealTheFlag[room.id]
            }, room.timeout)
        }
        let jwb = m.sender == room.p
        let jwb2 = m.sender == room.p2
        let reg = /^(c)(uri)/i
        if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
            room.pilih = reg.exec(m.text.toLowerCase())[0]
            room.text = m.text
            m.reply(`@${m.sender.split`@`[0]} berhasil mencuri bendera lawan! Sekarang kembalilah ke basis Anda dengan selamat!`, m.chat)
        }
        if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
            room.pilih2 = reg.exec(m.text.toLowerCase())[0]
            room.text2 = m.text
            m.reply(`@${m.sender.split`@`[0]} berhasil mencuri bendera lawan! Sekarang kembalilah ke basis Anda dengan selamat!`, m.chat)
        }
        if (room.pilih && room.pilih2) {
            clearTimeout(room.waktu_mencuri)
            if (room.pilih == 'c' && room.pilih2 == 'c') {
                tie = true
            } else if (room.pilih == 'c' && room.pilih2 != 'c') {
                win = room.p
            } else if (room.pilih != 'c' && room.pilih2 == 'c') {
                win = room.p2
            }
            this.reply(room.asal, `
_*Hasil Pertempuran*_${tie ? '\nSERI' : ''}

@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` berhasil mencuri bendera dan memenangkan pertempuran!` : ` gagal mencuri bendera dan kalah dalam pertempuran.`}
@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` berhasil mencuri bendera dan memenangkan pertempuran!` : ` gagal mencuri bendera dan kalah dalam pertempuran.`}
`.trim(), m, { mentions: [room.p, room.p2] })
            if (!tie) {
                db.data.users[win].flag++
            }
            delete this.stealTheFlag[room.id]
        }
    }
    return !0
}
handler.exp = 0
module.exports = handler