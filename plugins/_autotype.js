/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')

let afriza = m => m
afriza.before = async (m, { conn }) => {

    let chat = db.data.chats[m.chat]

    if (chat.autotype && !chat.isBanned) {

        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return

        if (!m.text) return
        conn.sendPresenceUpdate("composing", m.chat)

        return !0

    }

    return !0

}

module.exports = afriza