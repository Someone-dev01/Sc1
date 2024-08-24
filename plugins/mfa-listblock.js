/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, usedPrefix }) => {
	await conn.fetchBlocklist().then(async data => {
		let txt = `⬡──⬡─────────⬡──⬡\n\nList Block User | Total: ${data.length}\n\n\n`
		let count = 1;
		for (let i of data) {
			let blockedNumber = '+' + i.split("@")[0].replace(/[^0-9]/g, ''); // Ambil nomor telepon dari ID pengguna yang diblokir
			txt += `${count}. ${blockedNumber}\nhttps://wa.me/${blockedNumber}\n\n`
			count++;
		}
		txt += "⬡──⬡─────────⬡──⬡"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'Nothing is blocked!'
	})
}
afriza.tags = ["info"]
afriza.help = ["listblock"]
afriza.command = /^(listb(lo(ck|k)?)?)$/i

module.exports = afriza