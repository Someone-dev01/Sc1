/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {

switch (command) {
          case 'closenotice': {
          if (args[1] == 's') {
          var timer = args[0] * `1000`
          } else if (args[1] == 'm') {
          var timer = args[0] * `60000`
          } else if (args[1] == 'h') {
          var timer = args[0] * `3600000`
          } else if (args[1] == 'd') {
          var timer = args[0] * `86400000`
          } else {
          return conn.reply(m.chat, '*Choose:*\nsecond -s\nminute -m\nhour -h\n\n• *Example :* .closenotice 10 s', m)
          }
          conn.reply(m.chat, `*[ System Notice ]* ${args[0]} ${args[1]} Starting from now`, m)
          setTimeout(() => {
          const close = `*[ System Notice ]* Tidur manis (ー_ー゛)`
          conn.groupSettingUpdate(m.chat, 'announcement')
          conn.reply(m.chat, close, m)
          }, timer)
          }
          break
          case 'opennotice': {
          if (args[1] == 's') {
          var timer = args[0] * `1000`
          } else if (args[1] == 'm') {
          var timer = args[0] * `60000`
          } else if (args[1] == 'h') {
          var timer = args[0] * `3600000`
          } else if (args[1] == 'd') {
          var timer = args[0] * `86400000`
          } else {
          return conn.reply(m.chat, '*Choose:*\nsecond -s\nminute -m\nhour -h\n\n• *Example :* .opennotice 10 s', m)
          }
          conn.reply(m.chat, `Open time ${args[0]} ${args[1]} Startting from now`, m)
          setTimeout(() => {
          const open = `Open` 
          conn.groupSettingUpdate(m.chat, 'not_announcement')
          conn.reply(m.chat, open, m)
          }, timer)
          }
          break
}
}
afriza.help = [
"closenotice *<text>*",
"opennotice *<text>*"
]
afriza.command = /^(opennotice|closenotice)$/i  
afriza.tags = ['group']
afriza.admin = true
afriza.botAdmin = true
afriza.group = true
module.exports = afriza