const fs = require('fs')
const Jimp = require('jimp') 
let afriza = async (m, { conn }) => {
var image = m.quoted ? m.quoted : m
var mime = (image.msg || image).mimetype || ''
var media = await image.download()
            const group = m.chat
            var { img } = await generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: group, 
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Changed the group profile\n> Status: Success ✅`)
}
afriza.help = ['setppgc']
afriza.tags = ['group']
afriza.command = /^(setppgc|setppgrup|setppgroup)$/i

afriza.group = true
afriza.admin = true
afriza.botAdmin = true
module.exports = afriza

async function generateProfilePicture(buffer) {
	const jimp_1 = await Jimp.read(buffer);
	const minz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(720, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 720)
	const jimp_2 = await Jimp.read(await minz.getBufferAsync(Jimp.MIME_JPEG));
	return {
	  img: await minz.getBufferAsync(Jimp.MIME_JPEG)
	}
}