/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')

const defaultLang = 'id'
let afriza = async (m, { conn, args }) => {
try {

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    res = await tts(text)
  } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
  } catch (error) {
    console.log(error)
    m.reply("Input Text")
  }
}
afriza.help = ['tts <lang> <teks>']
afriza.tags = ['tools']
afriza.command = /^g?tts$/i
afriza.limit = true
afriza.premium = false
module.exports = afriza

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}