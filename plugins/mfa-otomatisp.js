let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `(Invite Group Terdeteksi)
    
*GROUP ASSISTANT :*
  
┌  ◦ Access 𝖠𝗇𝗍𝗂𝗅𝗂𝗇𝗄
│  ◦ Access 𝖦𝖺𝗆𝖾 𝖱𝗉𝗀
│  ◦ Access 𝖦𝖺𝗆𝖾 Lainnya
│  ◦ 𝖦𝖾𝗍 𝖺 𝖳𝖾𝗑𝗍 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 10.000/Month

*PREMIUM USER :*

┌  ◦ Access 𝖬𝖾𝗇𝗎 𝖯𝗋𝖾𝗆𝗂𝗎𝗆
│  ◦ Get Access Bug Menu
│  ◦ 𝖦𝖾𝗍 𝖴𝗇𝗅𝗂𝗆𝗂𝗍𝖾𝖽 𝖫𝗂𝗆𝗂𝗍
│  ◦ 𝖦𝖾𝗍 𝟣𝟢𝟢𝗄 𝖬𝗈𝗇𝖾𝗒 𝖱𝗉𝗀/day
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 4.𝟢𝟢𝟢/Month

• Info selengkapnya tanyakan owner
• nomor owner : ${global.owner[0]}
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler