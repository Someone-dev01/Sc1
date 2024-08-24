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

afriza.help = ['totag']
afriza.tags = ['group']
afriza.command = /^(totag|tag)$/i

afriza.admin = true
afriza.group = true
afriza.owner = false

module.exports = afriza