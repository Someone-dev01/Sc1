let afriza = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`
    delete conn.absen[id]
    m.reply(`Done!`)
}
afriza.help = ['hapusabsen']
afriza.tags = ['absen']
afriza.command = /^(delete|hapus)absen$/i
afriza.group = true
afriza.admin = true
module.exports = afriza