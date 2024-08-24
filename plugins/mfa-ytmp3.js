/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let { 
    youtubedl,
    youtubedlv2 
} = require('@bochilteam/scraper')
let regex = /^(^https:\/\/www\.instagram\.com|^https:\/\/vm\.tiktok\.com)$/i

let cooldownMap = new Map()

var afriza = async (m, { conn, args, command }) => {
  if (!args[0]) throw `*Example:* .${command} https://www.youtube.com/xxxxxxx`

  // Check if the user is on cooldown
  if (cooldownMap.has(m.sender) && Date.now() - cooldownMap.get(m.sender) < 9000) {
    let remaining = (9000 - (Date.now() - cooldownMap.get(m.sender))) / 1000
    throw `Please wait ${remaining.toFixed(1)} seconds before using this command again.`
  }
  
  // Set the cooldown for the user
  cooldownMap.set(m.sender, Date.now())

  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let q = '128kbps'
  let v = args[0]

  try {
    const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
    const dl_url = await yt.audio[q].download()
    const ttl = await yt.title
    const size = await yt.audio[q].fileSizeH

    conn.sendMessage(m.chat, {
      document: { url: dl_url },
      mimetype: 'audio/mpeg', 
      fileName: `${ttl}.mp3`,
    }, {quoted: m})
  } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}

afriza.tags = ['downloader']
afriza.help = ['ytmp3']
afriza.command = /^yta|ytmp3|youtubemp3$/i
module.exports = afriza