let afriza = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

}
afriza.help = ['del', 'delete']
afriza.tags = ['tools']

afriza.command = /^del(ete)?$/i
afriza.limit = false

module.exports = afriza