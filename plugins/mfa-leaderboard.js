/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

// Variabel global untuk menyimpan waktu terakhir kali data diperbarui
let lastUpdateTime = 0;

let afriza = async (m, { conn, args, participants }) => {
  // Periksa apakah sudah waktunya untuk memperbarui data
  let now = Date.now();
  if (now - lastUpdateTime < 5 * 60 * 1000) { // Periksa apakah sudah lebih dari 10 menit
    conn.reply(m.chat, 'Data leaderboard akan diperbarui setiap 5 menit.', m)
    return;
  }
  
  // Jika sudah waktunya, update waktu terakhir kali data diperbarui
  lastUpdateTime = now;

  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let sortedBalance = users.map(toNumber('balance')).sort(sort('balance'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersBalance = sortedBalance.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
  
*──「 Top${len} Leaderboard Limit 」──*
Kamu peringkat: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}* user

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n      • Limit: ${limit}\n`).join('\n')}

*──「 Top${len} Leaderboard Level 」──*
Kamu peringkat: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}* user

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n      • Level : ${level}\n`).join('\n')}

*──「 Top${len} Leaderboard Money 」──*
Kamu peringkat: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}* user

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n      • Money: ${money}\n`).join('\n')}

*──「 Top${len} Leaderboard XP 」──*
Kamu peringkat: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}* user

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n      • XP: ${exp}\n`).join('\n')}

*──「 Top${len} Leaderboard Balance 」──*
Kamu peringkat: *${usersBalance.indexOf(m.sender) + 1}* dari *${usersBalance.length}* user

${sortedBalance.slice(0, len).map(({ jid, balance }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n      • Balance: ${balance}\n`).join('\n')}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersMoney.slice(0, len), ...usersBalance.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
afriza.help = ['leaderboard']
afriza.tags = ['rpg']
afriza.command = /^(leaderboard|lb)$/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = false
afriza.private = false
afriza.admin = false
afriza.botAdmin = false

afriza.fail = null
afriza.exp = 0

module.exports = afriza

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}