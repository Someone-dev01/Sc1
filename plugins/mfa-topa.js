/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, usedPrefix }) => {
    // Mendapatkan data pengguna dari database
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    
    // Mendapatkan urutan pengguna berdasarkan achievement tertinggi
    let userslevel = sortedlevel.map(v => v[0])
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    
    // Mendapatkan daftar pengguna beserta tag, jumlah data, dan jumlah yang dimiliki
    let topAchievement = [
        { category: 'Money', users: usersmoney },
        { category: 'Diamond', users: usersdiamond },
        { category: 'Potion', users: userspotion },
        { category: 'Sampah', users: userssampah },
        { category: 'Common', users: userscommon },
        { category: 'Uncommon', users: usersuncommon },
        { category: 'Mythic', users: usersmythic },
        { category: 'Legendary', users: userslegendary },
        { category: 'Level', users: userslevel }
    ]
    
    // Menyiapkan teks untuk ditampilkan
    let str = `
${topAchievement.map(({ category, users }) => `
*──「 Top ${users.length > 10 ? 10 : users.length} Achievement ${category} 」──*
Kamu peringkat: *${users.indexOf(m.sender) + 1}* dari *${users.length}* user${'\n'}
${users.length > 0 ? users.slice(0, 10).map((jid, i) => `${i + 1}. @${jid.split('@')[0]}\n      • ${category}: ${global.db.data.users[jid][category.toLowerCase()]}`).join('\n\n') : 'Tidak ada data'}
`).join('\n')}
`.trim()

    // Mengirim pesan
    await conn.reply(m.chat, str, m)
}

afriza.help = ['topa']
afriza.tags = ['owner']
afriza.command = /^(topa)$/i
afriza.limit = true
afriza.group = true

module.exports = afriza