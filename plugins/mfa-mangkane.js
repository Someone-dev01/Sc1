const fetch = require('node-fetch');

let handler = async (m, { conn, command }) => {
  m.reply(wait)
  let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
  await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
    type: 'audioMessage', 
    ptt: false, 
    seconds: 0,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: 'www.instagram.com/afriza_16f',
        mediaType: 2, 
        description: 'www.instagram.com/afriza_16f',
        title: "playing music 🎶",
        body: `${command}`,
        thumbnail: await (await fetch('https://telegra.ph/file/9234ad9f9c0bc541977e0.jpg')).buffer(),
        sourceUrl: 'www.instagram.com/afriza_16f'
      }
    }
  })
}

handler.help = ['mangkane1 - mangkane24', 'mangkane2', 'mangkane3', 'mangkane4', 'mangkane5']
handler.tags = ['mangkane']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false
handler.limit = true

module.exports = handler;