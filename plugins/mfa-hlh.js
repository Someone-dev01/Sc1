/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { command, text }) => {
  let ter = command[1].toLowerCase()
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await m.reply(txt.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
afriza.help = [...'aiueo'].map(v => `h${v}l${v}h <teks>`)
afriza.tags = ['fun']
afriza.command = /^h([aiueo])l\1h/i
afriza.limit = true

module.exports = afriza