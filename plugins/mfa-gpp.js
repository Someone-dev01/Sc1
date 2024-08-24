/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const { readFileSync } = require('fs')

let afriza = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `*Example*: ${usedPrefix + command} creator`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    let afriza = readFileSync('./plugins/' + text + '.js', 'utf-8')
    
    let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: afriza,
        },
        footer: {
          text: `${wm}`
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: 'https://telegra.ph/file/5ceb9d992db7abb1ff3cc.jpg',
            }
          }, {
            upload: conn.waUploadToServer
          }))
        },
        nativeFlowMessage: {
          buttons: [{text: ""}]
					}
				}, 
			},
			{
				quoted: fkontak
			}, {contextInfo: {
mentionedJid: [m.sender]
              }}
		);
await conn.relayMessage(m.chat, msg.message, m)
    
}
afriza.help = ['gpp'].map(v => v + ' <teks>')
afriza.tags = ['owner']
afriza.command = /^(gpp)$/i

afriza.owner = true

module.exports = afriza