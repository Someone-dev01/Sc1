/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

let afriza = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} Hello`, m)
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}}
conn.relayMessage(m.chat, call, {})
}
afriza.help = ['infobansos *<text>*']
afriza.tags = ['premium']
afriza.premium = false
afriza.owner = true
afriza.command = /^(infobansos|cal)$/i
afriza.register = true
afriza.limit = true

module.exports = afriza