let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let [number, pesan] = text.split `|`
if (!number) return conn.reply(m.chat, '*Example*: .callprem 62xxx|Hai', m)
if (!pesan) return conn.reply(m.chat, '*Example*: .callprem 62xxx|Hai', m)
if (number == nomorown) return m.reply('Tidak bisa spam ke nomor ini!')
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${pesan}`
}}
conn.relayMessage(`${number}@s.whatsapp.net`, call, {})
let logs = `[ ✔️ ] Berhasil Call Nomor wa.me/${number}`
conn.reply(m.chat, logs, m)
}
handler.help = ['callprem']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(callprem)$/i
handler.register = true
handler.limit = true

module.exports = handler