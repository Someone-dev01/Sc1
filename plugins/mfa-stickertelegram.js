const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
let afriza = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `Example: ${usedPrefix + command} https://t.me/addstickers/namapack`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `url wrong`
    let packName = args[0].replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror

    let json = await gas.json()
    m.reply(`*Total stiker:* ${json.result.stickers.length}
*Delivery pause:* 7.5 detik /sticker
*Estimasi complete:* ${json.result.stickers.length * 7.5} detik`.trim())

    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()


        // conn.sendMessage(m.chat, { url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path }, MessageType.sticker)
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
        await conn.sendMessage(m.chat, {sticker: stiker })
        await delay(7500)
    }
    m.reply('_*Delivery Is Complete*_')
}

afriza.help = ['stickertelegram <url>']
afriza.tags = ['sticker']
afriza.command = /^(stickertele(gram)?)$/i

afriza.limit = true
afriza.premium = true

module.exports = afriza

const delay = time => new Promise(res => setTimeout(res, time))