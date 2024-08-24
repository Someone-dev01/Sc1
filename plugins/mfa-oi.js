let fetch = require ('node-fetch')
let afriza = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)
    let name = conn.getName(m.sender)
    let pp =  await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
    let mfa = `Hai *${name}*
STATUS BOT ONLINE✅
Uptime: _*${uptimex}*_

"${pickRandomMotivasi()}"
    `.trim()
let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: mfa,
        },
        footer: {
          text: `${wm}`
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
}

afriza.tags = ['main']
afriza.customPrefix = /^(tes|pe|oi)$/i 
afriza.command = new RegExp
afriza.limit = false
afriza.wip = true
module.exports = afriza

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}

function pickRandomMotivasi() {
    let motivasi = [
        "Jangan pernah menyerah!",
        "Setiap kegagalan adalah peluang untuk belajar.",
        "Pikirkan positif, dan hal positif akan terjadi.",
        "Tetaplah bersemangat dan terus berjuang!",
        "Kamu lebih kuat daripada yang kamu pikirkan.",
        "Tetaplah fokus pada tujuanmu.",
        "Jangan biarkan keraguan menghalangi impianmu."
    ];
    return motivasi[Math.floor(Math.random() * motivasi.length)];
}