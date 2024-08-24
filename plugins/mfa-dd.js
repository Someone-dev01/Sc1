let afriza = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

}
afriza.help = ['dd']
afriza.tags = ['owner']

afriza.command = /^dd$/i
afriza.admin = false
afriza.owner = true
afriza.limit = false

module.exports = afriza