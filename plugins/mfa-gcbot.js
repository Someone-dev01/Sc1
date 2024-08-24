let fs = require('fs')
let fetch = require('node-fetch')
 let handler = async(m, { conn }) => { 

         let caption = `*GC Official*`
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "Masuk puh, support menu downloader dan lainya",
          body: "Masuk puh, support menu downloader dan lainya",
          thumbnailUrl: 'https://telegra.ph/file/cfb6291a5b51b11a4607d.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot|grupbot$/i
module.exports = handler