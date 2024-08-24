/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, text }) => {
    let users = global.db.data.users

    var fixedItems = []

    for (let jid in users) {
        if (users[jid].limit < 0) {
            users[jid].limit = 0
            fixedItems.push(`${jid}: limit`)
        }
        if (users[jid].joinlimit < 0) {
            users[jid].joinlimit = 0
            fixedItems.push(`${jid}: joinlimit`)
        }
        // ... (by Zakykun)

        users[jid].money = Math.floor(users[jid].money)
        users[jid].limit = Math.floor(users[jid].limit)
    }

    let response = `*Berhasil memperbaiki ${fixedItems.length} error di database*`

    if (fixedItems.length > 0) {
        response += `\n\nList items yang diperbaiki:\n${fixedItems.join('\n')}`
    }

    return conn.reply(m.chat, response, m)
}

afriza.help = ['fix'].map(v => v + ' <database>')
afriza.tags = ['owner']
afriza.command = /^(fix|update)$/i
afriza.owner = 1

module.exports = afriza