let handler = async (m, { conn, usedPrefix }) => {
         let banteng = global.db.data.users[m.sender].banteng
         let harimau = global.db.data.users[m.sender].harimau
         let gajah = global.db.data.users[m.sender].gajah 
         let kambing = global.db.data.users[m.sender].kambing 
         let panda = global.db.data.users[m.sender].panda 
         let buaya = global.db.data.users[m.sender].buaya 
         let kerbau = global.db.data.users[m.sender].kerbau 
         let sapi = global.db.data.users[m.sender].sapi
         let monyet = global.db.data.users[m.sender].monyet 
         let babihutan = global.db.data.users[m.sender].babihutan
         let babi = global.db.data.users[m.sender].babi
         let ayam = global.db.data.users[m.sender].ayam
         let cap = `*━━━ ❨ Kandang Buruan ❩ ━━┄┈*

=> *Berikut Kandang :*  @${m.sender.split`@`[0]}

*🐂 = [ ${banteng} ] banteng*
*🐅 = [ ${harimau} ] harimau*
*🐘 = [ ${gajah} ] gajah*
*🐐 = [ ${kambing} ] kambing*
*🐼 = [ ${panda} ] panda*
*🐊 = [ ${buaya} ] buaya*
*🐃 = [ ${kerbau} ] kerbau*
*🐮 = [ ${sapi} ] sapi*
*🐒 = [ ${monyet} ] monyet*
*🐗 = [ ${babihutan} ] babihutan*
*🐖 = [ ${babi} ] babi*
*🐓 = [ ${ayam} ] ayam*

Gunakan *${usedPrefix}sell* untuk dijual atau *${usedPrefix}cook* untuk dijadikan bahan masakan.`

	conn.reply(m.chat, cap, m, { mentions: await conn.parseMention(cap) } )
}

handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i

module.exports = handler