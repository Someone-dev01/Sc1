/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const afriza = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `✳️ Mohon balas pesan yang ingin ditag`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users })
}

afriza.help = ['totag2']
afriza.tags = ['owner']
afriza.command = /^(totag2|tag2)$/i

afriza.admin = false
afriza.group = true
afriza.owner = true

module.exports = afriza