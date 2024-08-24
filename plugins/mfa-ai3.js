/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

var fetch = require('node-fetch');
var afriza = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) return conn.reply(m.chat, `• *Example :* .ai3 Siapa presiden Indonesia? `, m)
  let kemii = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
  var apii = await fetch(`https://aemt.me/openai?text=${text}`)
  var js = await apii.json()
  await conn.sendMessage(m.chat, { text: '```' + `${js.result}` + '```', edit: kemii })
}      
afriza.command = /^ai3$/i
afriza.help = ['ai3 *(text)*']
afriza.tags = ['ai'];
afriza.limit = true
afriza.premium = false
module.exports = afriza;