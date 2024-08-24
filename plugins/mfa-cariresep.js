/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { detailresep, cariresep } = require('../lib/scrape2.js');

const afriza = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, `\`Masukan Format Dengan Benar\`\n\nContoh: \n${usedPrefix + command} Ayam Geprek\n${usedPrefix + command} https://resepkoki.id/resep/resep-sambal-ijo/`)
    if (/https:\/\/resepkoki.id\/resep/i.test(text)) {
        let res = await detailresep(text)
        let cap = `
▧ *Judul:* ${res.data.judul}
▧ *Waktu Masak:* ${res.data.waktu_masak}
▧ *Hasil:* ${res.data.hasil}
▧ *Tingkat Kesulitan:* ${res.data.tingkat_kesulitan}

▧ *Bahan:* 
${res.data.bahan}

▧ *Langkah Langkah:*
${res.data.langkah_langkah}
`.trim()
        conn.sendFile(m.chat, res.data.thumb, res.data.judul + '.jpeg', cap, m, false)
    } else {
        let res = await cariresep(text)
        let cap = res.data.map((v) => {
            return `
❏ *Judul:* ${v.judul}
▧ *Link:* ${v.link}
`.trim()
        }).join('\n\n')
        conn.reply(m.chat, cap, m)
    }
}

afriza.help = ['cariresep <query>']
afriza.tags = ['search']
afriza.command = /^(cariresep|resep)$/i
afriza.limit = true
module.exports = afriza;