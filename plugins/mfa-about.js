let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/a11809633ea5f02629411.jpg'
let afriza = `Mfa-bot is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by Afriza, this bot uses the original source of Botcahx that is constantly updated by Afriza to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, Mfa-bot can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Mfa-bot can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by Afriza, Mfa-bot always receives the latest feature updates to provide better and more advanced services. With Mfa-bot, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Mfa-bot now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
conn.sendMessage(m.chat, {
text: afriza,
contextInfo: {
externalAdReply: { showAdAttribution: true,
title: "<About Us> Tentang Kami",
body: "Info selengkapnya klick pada thumbnail diatas",
thumbnailUrl: "https://telegra.ph/file/f1631f537ac0c412dbd49.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['about', 'aboutbot', 'infobot', 'tentangkami']
handler.tags = ['info']
handler.command = /^(about|detile|tentangkami|detail|infobot|info)$/i
handler.limit = true

module.exports = handler