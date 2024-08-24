/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender 
  let user = global.db.data.users[target]
  let name = user.name

  let exp = user.exp
  let limit = user.limit
  let balance = user.money
  let atm = user.bank
  let level = user.level
  let role = user.role
let pp = m.sender.startsWith('@@') ? 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg' : await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg');

  let caption = `*[ DOMPET USER ]*

◦  *Role:* ${role}
◦  *Limit:* ${limit}
◦  *Balance:* ${balance}
◦  *Bank:* ${atm}`
     let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: caption,
        },
        footer: {
          text: `MFA BOT`
        },
        header: {
          title: '',
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
          buttons: [{text: "test"}]
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

  //conn.sendFile(m.chat, 'https://telegra.ph/file/e5b106adbc869d4617f5d.jpg', 'balance.jpg', caption, m)
}

afriza.help = ['balance @tag']
afriza.tags = ['info']
afriza.command = /^balance|dompet|bank$/i

module.exports = afriza