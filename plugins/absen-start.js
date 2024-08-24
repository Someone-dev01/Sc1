let afriza = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*Masih ada absen di chat ini!*_\n\n*${usedPrefix}hapusabsen* - untuk menghapus absen`
    }
    conn.absen[id] = [
        m.reply(`Berhasil memulai absen!\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`),
        [],
        text
    ]
}
afriza.help = ['mulaiabsen <teks>']
afriza.tags = ['absen']
afriza.command = /^(start|mulai)absen$/i
afriza.group = true
afriza.admin = true
module.exports = afriza