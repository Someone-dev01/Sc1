const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let res = await axios.get(`https://api.lolhuman.xyz/api/random2/neko?apikey=${global.lolkey}`, { responseType: 'arraybuffer' })
    let image = Buffer.from(res.data, 'binary')
    conn.sendFile(m.chat, image, 'neko.jpg', 'Neko', m)
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['neko']
handler.tags = ['internet']

handler.command = /^neko2$/i

module.exports = handler