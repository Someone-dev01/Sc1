/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Makassar'})
  let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
  let thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty']
  let isThanks = false
  thanksWords.forEach((thanksWord) => {
    if (m.text.toLowerCase().includes(thanksWord)) {
      isThanks = true
    }
  })
  if (isThanks) {
    let replyMessage = `Sama Sama Kak! *@${m.sender.split("@")[0]}*`
    conn.reply(m.chat, replyMessage, m, {
      contextInfo: {
       mentionedJid: [m.sender], 
        externalAdReply: {
          title: "Sama Sama Kak.",
          body: time,
          thumbnailUrl: 'https://telegra.ph/file/714d89624dae9f22c4e0b.jpg', //'https://telegra.ph/file/fbe50a27a6f31148fabe2.jpg',
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    });
  }
}

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i
handler.command = new RegExp
module.exports = handler