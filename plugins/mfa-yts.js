/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let yts = require('yt-search')
let afriza = async (m, { text }) => {
  if (!text) throw 'Mau cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
➛ *${v.title}* (${v.url})
➛ \`Duration:\` ${v.timestamp}
➛ \`Uploaded:\` ${v.ago}
➛ *${v.views} views*
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n⬡──⬡─────────⬡──⬡\n')
  m.reply(teks)
}
afriza.help = ['', 'earch'].map(v => 'yts' + v + ' *<search>*')
afriza.tags = ['tools']
afriza.command = /^yts(earch)?$/i
afriza.limit = true

module.exports = afriza