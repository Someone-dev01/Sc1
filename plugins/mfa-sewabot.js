let afriza = async (m, { conn }) => {
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
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
        	isForwarded: false, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '@newsletter',
			newsletterName: '', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: 'MFA', 
                thumbnailUrl: '',
                sourceUrl: '',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\nSilahkan Lihat Produk Di Bawah!`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: 'SOMEONE BOT'
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `\`Untuk mengakses fitur premium, atau mengakses bot melalui private chat anda harus meng-upgrade premium terlebih dahulu\`

HARGA UP PREMIUM 

 -Rp 3.000 1 bulan
 -Rp 6.000 6 nomor 1b
 -Rp 10.000 1 permanen

Metode Pembayaran:
 \`gopay\``
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/90e2ad6557f1e22cbec48.jpg' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/60135461140","merchant_url":"https://wa.me/60135461140"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `\`Untuk mengundang bot kedalam group anda harus sewa terlebih dahulu\`

HARGA SEWA BOT

 -Rp 3.500 1 minggu
 -Rp 6.000 2 minggu
 -Rp 10.000 permanen
 -free premium 9d 
 \`-Untuk pembelian diatas sudah termasuk free premium\`

Metode Pembayaran:
 \`gopay\``
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/2f9b88fbf477f8dc94340.jpg' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/60135461140","merchant_url":"https://wa.me/60135461140"}`
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
afriza.help = ['sewabot', 'premium']
afriza.tags = ['main']
afriza.command = /^(sewa|sewabot|premium|buyprem|buysewa|buypremium|liststore)$/i
afriza.private = false

module.exports = afriza