/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let axios = require("axios")



let afriza = async (m, { conn }) => {

   await m.reply('Tunggu bentar masi dicariin... ')

    let res = await axios("https://api.waifu.pics/nsfw/trap")

    let json = res.data

    let url = json.url

    conn.sendFile(m.chat, url, "trap.png", "*Ramdom ntrap*", m)

    }

afriza.help = ['ntrap']
afriza.tags = ['internet']
afriza.command = /^ntrap$/i
afriza.premium = true
afriza.register = true
afriza.private = true
module.exports = afriza