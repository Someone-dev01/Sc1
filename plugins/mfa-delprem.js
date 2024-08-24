/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let { MessageType } = require('@adiwajshing/baileys')

let afriza = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var numbers = text.split(',').map(no)
  let removedUsers = [] // Array to store removed users' Jids
  
  if (!text) return conn.reply(m.chat, `*[ GET NUMBER ]*\n\n ${usedPrefix}delprem number1,number2,number3\n\`Example:\`\n ${usedPrefix}delprem 6285922143966,628123456789,628987654321`, m)
  
  numbers.forEach(number => {
    number = no(number) + "@s.whatsapp.net"
    if (typeof db.data.users[number] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    global.db.data.users[number].premium = false
    global.db.data.users[number].premiumDate = 0
    removedUsers.push(number) // Add the user's Jid to the array
    conn.reply(m.chat,`*[ Remove Premium ]*\nRemoved Premium Access From *@${number.split('@')[0]}*`,m,{ contextInfo: { mentionedJid: [number] } })
    conn.reply(number,`*[ Remove Premium ]*\nYour Premium Access has been removed by *@${m.sender.split('@')[0]}*`,m,{ contextInfo: { mentionedJid: [m.sender] } }) 
  });
  
  // Send a message mentioning all removed users
  conn.reply(m.chat, `Removed premium access from:\n${removedUsers.join('\n')}`, m, { contextInfo: { mentionedJid: removedUsers } })
}
afriza.help = ['delprem <number>']
afriza.tags = ['owner']
afriza.command = /^(delprem)$/i
afriza.owner = true
afriza.mods = false
afriza.fail = null
module.exports = afriza