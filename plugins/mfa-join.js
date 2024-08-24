let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link yang anda berikan tidak valid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Gw udah masuk gc nih nyet ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join|nyet$/i

handler.premium = false
handler.owner = true

module.exports = handler