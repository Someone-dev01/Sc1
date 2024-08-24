/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let now = new Date() * 1
    
m.reply(`⬡──⬡─────────⬡──⬡

List Banned Users | Total: ${users.length} User
${users ? '\n' + users.map(([jid], i) => `
${i + 1}. ${conn.getName(jid) || 'Unknown'}
https://wa.me/+${jid.split('@')[0]}
${(global.db.data.users[jid].bannedDate - now) > 1 ? msToDate(global.db.data.users[jid].bannedDate - now) : ''}
`.trim()).join('\n\n') : ''}

⬡──⬡─────────⬡──⬡
⬡──⬡─────────⬡──⬡

List Banned Chat | Total: ${chats.length} Chat
${chats ? '\n' + chats.map(([jid], i) => `
${i + 1}. ${conn.getName(jid) || 'Unknown'}
${jid}
`.trim()).join('\n\n') : ''}

⬡──⬡─────────⬡──⬡
`.trim())
}

afriza.help = ['listbanned']
afriza.tags = ['info']
afriza.command = /^listbanned|listban|listbanuser$/i

module.exports = afriza

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24*60*60*1000));
    daysms = ms % (24*60*60*1000);
    hours = Math.floor((daysms)/(60*60*1000));
    hoursms = ms % (60*60*1000);
    minutes = Math.floor((hoursms)/(60*1000));
    minutesms = ms % (60*1000);
    sec = Math.floor((minutesms)/(1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
}