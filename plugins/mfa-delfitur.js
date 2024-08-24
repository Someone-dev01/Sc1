var path = require("path");
var fs = require("fs");

var afriza = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Enter Name File!!\n\nExample: ${usedPrefix + command} plugins/creator.js`
  let filePath = path.join(process.cwd(), text)
  if (!fs.existsSync(filePath)) {
  return m.reply('File/Folder Not Found!')
  }
  if (fs.statSync(filePath).isDirectory()) {
  fs.rmdirSync(filePath, { recursive: true })
  } else {
  fs.unlinkSync(filePath)
  }
  
  m.reply(`Sukses Delete ${text}!`)
}

afriza.command = ['delfitur', 'df']
afriza.tags = ['owner']
afriza.help = ['delfitur']
afriza.owner = true

module.exports = afriza