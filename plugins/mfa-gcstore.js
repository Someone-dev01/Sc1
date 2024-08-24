/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fs = require('fs')
let fetch = require('node-fetch')
 let afriza = async(m, { conn }) => { 

         let caption = `*[ Link Group Store ]*`
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: { showAdAttribution: true,
          title: '',
          body: "",
          thumbnailUrl: mfa3,
          sourceUrl: 'https://chat.whatsapp.com/LYWzU3NVW9g0uxFPMBjO1R',
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    });
 }
 afriza.help = ['gcstore']
afriza.tags = ['info']
afriza.command = /^gcstore$/i
module.exports = afriza