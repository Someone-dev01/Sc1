let handler = async (m, { conn, isROwner, text }) => {
  let { spawn } = require('child_process');
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sedang Merestart Bot...\nMohon tunggu sekitar 1 menit')
    process.send('kill')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['matikanbot']
handler.tags = ['owner']
handler.command = /^(matikanbot)$/i

handler.rowner = true

module.exports = handler