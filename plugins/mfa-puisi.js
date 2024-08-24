const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key,
        }
    })
    try {
        let res = await fetch(`https://api.lolhuman.xyz/api/random/puisi?apikey=${global.lolkey}`)
        let json = await res.json()
        if (json.status !== 200) {
            throw json
        }
        let { result } = json
        m.reply(result)
    } catch (e) {
        m.reply('🐱 Erorr')
        console.log(e)
    }
}

handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.register = true
handler.limit = true

module.exports = handler