/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')

let afriza = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, '• *Example :* .heroml balmond', m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let kemii = await fetch(`https://api.yanzbotz.my.id/api/cari/hero?query=${text}`)
    let res = await kemii.json()
    let capt = `[ HERO ML ]*\n\n`
    capt += `	◦	*Release* : ${res.result.release}\n`
    capt += `	◦	*Role* : ${res.result.role}\n`
    capt += `	◦	*Specialty* : ${res.result.specialty}\n`
    capt += `	◦	*Lane* : ${res.result.lane}\n`
    capt += `	◦	*Price* : ${res.result.price}\n`
    capt += `	◦	*Durability* : ${res.result.gameplay_info.durability}\n`
    capt += `	◦	*Offense* : ${res.result.gameplay_info.offense}\n`
    capt += `	◦	*Gender* : ${res.result.story_info_list.gender}\n\n`
    capt += `${wm}`

    conn.sendFile(m.chat, res.result.hero_img, 'heroml.jpg', `${capt}`, m)
}
afriza.help = ['heroml'].map(v => v + ' *<name>*')
afriza.tags = ['internet']
afriza.command = /^(heroml)$/i

module.exports = afriza