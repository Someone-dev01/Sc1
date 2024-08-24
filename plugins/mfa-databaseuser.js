let fs = require('fs')
let moment = require('moment-timezone')

let afriza = async (m, { usedPrefix, command, conn, text }) => {
let pp = m.sender.startsWith('@@') ? 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg' : await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg');
let mentionedJid = [m.sender]
let name = conn.getName(m.sender)

let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
   let afriza = `*Total terdaftar saat ini ${rtotalreg}*
*Total user bot saat ini ${totalreg}*`
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
          title: ucapan() + ' ' + name,
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: pp,
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

afriza.help = ['user']
afriza.tags = ['info']
afriza.command = /^(userbot|user|database|dbuser|totaluser)$/i

module.exports = afriza

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam 🌃"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ⛅"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat 🌃"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)