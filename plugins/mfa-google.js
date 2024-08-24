/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')
let googleIt = require('google-it')
let afriza = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_\`${link}\`_\n_${snippet}_`
  }).join`\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
    if (ss.includes('html')) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
  } catch (e) {
    m.reply(msg)
  }
}
afriza.help = ['google'].map(v => v + ' <search>')
afriza.tags = ['internet']
afriza.command = /^google|ggs?$/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = false
afriza.limit = true

afriza.admin = false
afriza.botAdmin = false

afriza.fail = null

module.exports = afriza