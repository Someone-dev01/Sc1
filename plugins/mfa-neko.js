/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')
let afriza = async(m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*Random neko*', m)
}
afriza.help = ['neko']
afriza.tags = ['internet']
afriza.command = /^neko$/i
afriza.limit = true

module.exports = afriza