/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { tiktok2 } = require('api-dylux');
let fetch = require('node-fetch')

let afriza = async (m, { conn, text, usedPrefix, command }) =>{
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://tiktok.com/xxx`
  if (text.match('^(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/(?:v|@)?|vt\.tiktok\.com\/)(?:[^\s/]+\/+)*(?:@[\w.-]+\/+)?([\w.-]+)(?:\/+)?$')) throw `Masukkan URL Tiktok yang valid`
  try {
    let json = await tiktok2(text)
    let dann = `Username: *${json.author.name}*\nDescription: *${json.title}*`
    await conn.sendFile(m.chat, json.music.play_url, 'tiktok.mp3', dann, m, true, {
      type: 'audioMessage',  
      ptt: false, 
      contextInfo: { 
        forwardingScore: fsizedoc, 
        externalAdReply: { 
          body: null, 
          containsAutoReply: true, 
          mediaType: 1, 
          mediaUrl: sig, 
          renderLargerThumbnail: true, 
          showAdAttribution: true, 
          sourceId: null, 
          sourceType: 'PDF', 
          previewType: 'PDF', 
          sourceUrl: null, 
          thumbnail: await (await fetch(json.author.avatar)).buffer(),
          thumbnailUrl: sgc,
          title: json.author.name 
        }
      }
    })
  } catch (err) {
    throw 'Terjadi kesalahan saat memproses permintaan'
  }
}

afriza.help = ['tiktokmp3'].map(v => v + ' <url>')
afriza.tags = ['downloader']
afriza.command = /^(tiktokmp3|ttmp3|ttaudio)$/i

module.exports = afriza