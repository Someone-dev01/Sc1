let afriza = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/elf?apikey=${global.lolkey}`, 'Kikuchanj.jpg', `${namebot}`, m)
}
afriza.help = ['elf']
afriza.tags = ['anime']

afriza.command = /^(elf)$/i
afriza.premium = false
afriza.register = true
afriza.limit = 5
module.exports = afriza