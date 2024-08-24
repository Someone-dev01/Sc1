let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key }})
  const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
      contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363144038483540@newsletter',
			newsletterName: 'Powered By : Someone Botz', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: 'Someone Botz', 
                thumbnailUrl: 'https://telegra.ph/file/a6f3ef42e42efcf542950.jpg', 
                sourceUrl: 'https://youtube.com/shorts/eHM3CMiAQ9Y?si=sqJQ1gyRAnptIK0m',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\nSilahkan Lihat Produk Di Bawah!`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: 'Powered By _Someone Botz_'
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *7 Days : 5.000*\n> *30 Days : 10.000*\n> *Permanen : 20.000*\n\n`</> Benefit Premium Bot </>`\n\n> Get Unlimited Limit\n> Get Acces All Fitur\n> Get Profile Good'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '`</> Premium Bot </>`\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/45cb59b22ddb4bfc20da1.jpg' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6285727485224","merchant_url":"https://wa.me/6285866561981"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *7 Days : 7.000*\n> *30 Days : 10.000*\n> *Permanen : 25.000*\n\n`</> Sewa Bot </>`\n\n> Auto Welcome\n> Auto Kick\n> Auto Open/Close'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '`</> Sewa Bot </>`\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/488edfd66b1170c272ab4.jpg' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6285727485224","merchant_url":"https://wa.me/6285866561981"}`
                    }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *Panel Unli : 12.000*\n> *Reseller Panel : 20.000*\n> *Admin Panel : 30.000*\n\n`</> Benefit Panel </>`\n\n> Panel Bot:on 24jam,tetep on wlau di close web nya\n> Reseller Panel:create panel sepuasnya 1-unli,jual panel sepuasnya\n> Admin Panel:bisa open reseller panel,jual panel sepuasnya'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '`</> Store Panel </>`\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/d11ae8e574da1b13fc7d1.jpg' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/60135461140","merchant_url":"https://wa.me/6285866561981"}`
                  }
                  ]
              })
            }
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: m })
conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
handler.help = ['liststore']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|premium|liststore|store)$/i
handler.private = false

module.exports = handler