let handler = m => m

handler.before = async function(m) {
if (!m.isGroup) return
if (m.isBaileys) return
try {
let body = m.text
if(!body.includes("@60135461140")) return //ganti dengan nomor mu
return conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/7c70771147f8e8943fa55.jpg', m, { packname: `Mau ngapain? 🗿☕`}) //ubah link  gambar stiker sesuka luwh
} catch(e) {}
	}
	
module.exports = handler