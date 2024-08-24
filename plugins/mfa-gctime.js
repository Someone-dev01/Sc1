let afriza = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {

switch (command) {
          case 'closetime': {
          if (args[1] == 's') {
          var timer = args[0] * `1000`
          } else if (args[1] == 'm') {
          var timer = args[0] * `60000`
          } else if (args[1] == 'h') {
          var timer = args[0] * `3600000`
          } else if (args[1] == 'd') {
          var timer = args[0] * `86400000`
          } else {
          return conn.reply(m.chat, '*Choose:*\nsecond -s\nminute -m\nhour -h\n\n• *Example :* .closetime 10 s', m)
          }
          conn.reply(m.chat, `Close Time ${args[0]} ${args[1]} Starting from now`, m)
          setTimeout(() => {
          const close = `> 「 Group Settings Change\n\n*On Time*, Group telah di tutup oleh @${m.sender.split`@`[0]}⁩ dan sekarang hanya admin yang dapat mengirim pesan`
          conn.groupSettingUpdate(m.chat, 'announcement')
          conn.reply(m.chat, close, m)
          }, timer)
          }
          break
          case 'opentime': {
          if (args[1] == 's') {
          var timer = args[0] * `1000`
          } else if (args[1] == 'm') {
          var timer = args[0] * `60000`
          } else if (args[1] == 'h') {
          var timer = args[0] * `3600000`
          } else if (args[1] == 'd') {
          var timer = args[0] * `86400000`
          } else {
          return conn.reply(m.chat, '*Choose:*\nsecond -s\nminute -m\nhour -h\n\n• *Example :* .opentime 10 s', m)
          }
          conn.reply(m.chat, `Open time ${args[0]} ${args[1]} Startting from now`, m)
          setTimeout(() => {
          const open = `> 「 Group Settings Change\n\n*On Time*, Group telah di buka oleh @${m.sender.split`@`[0]}⁩ dan sekarang  semua member dapat mengirim pesan` 
          conn.groupSettingUpdate(m.chat, 'not_announcement')
          conn.reply(m.chat, open, m)
          }, timer)
          }
          break
}
}
afriza.help = [
"closetime *<text>*",
"opentime *<text>*"
]
afriza.command = /^(opentime|closetime)$/i  
afriza.tags = ['group']
afriza.admin = true
afriza.botAdmin = true
afriza.group = true
module.exports = afriza