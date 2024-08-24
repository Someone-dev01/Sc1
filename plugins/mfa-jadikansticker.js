/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let afriza = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
      let img = await q.download()
      if (!img) throw `Balas gambar/video/stiker dengan perintah ${usedPrefix + command}`
      let out
      try {
        if (/webp/g.test(mime)) out = await webp2png(img)
        else if (/image/g.test(mime)) out = await uploadImage(img)
        else if (/video/g.test(mime)) out = await uploadFile(img)
        if (!isUrl(out)) out = await uploadImage(img)
        stiker = await sticker(false, out, global.packname, global.author)
      } catch (e) {
        console.error(e)
        if (!stiker) stiker = await sticker(img, false, global.packname, global.author)
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL tidak valid!')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    conn.sendPresenceUpdate("composing", m.chat)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw '🚩 reply image/video'
  }
}
afriza.help = ['sticker']
afriza.tags = ['sticker']
afriza.customPrefix = /^(Jadikan sticker|jadikan sticker|jadikan stiker|Jadikan stiker)$/i;
afriza.command = new RegExp;

afriza.limit = true

module.exports = afriza

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}