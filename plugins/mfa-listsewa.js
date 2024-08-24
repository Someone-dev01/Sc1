/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn }) => { // Hapus participants karena tidak digunakan
    let now = new Date() * 1;
    let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]);
    let txt = '';

    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) {
        if (db.data.chats[jid] && db.data.chats[jid].expired) { // Check if expiration time is set
            let expirationDate = new Date(db.data.chats[jid].expired);
            let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            let formattedDate = `${expirationDate.getDate()} ${monthNames[expirationDate.getMonth()]} ${expirationDate.getFullYear()} | ${expirationDate.toLocaleTimeString()}`;
            let remainingTime = msToDate(db.data.chats[jid].expired - now);
            let groupName = await conn.getName(jid); // Get group name
            let groupId = jid.replace('@g.us', ''); // Get group ID without '@g.us' suffix
            let groupStatus = chat?.metadata?.read_only ? 'Left' : 'Joined';
            let groupBanned = db.data.chats[jid].isBanned ? '✅' : '❌';
            let autoWelcome = db.data.chats[jid].welcome ? '✅' : '❌'; // Fixed symbol
            let antiLink = db.data.chats[jid].antiLink ? '✅' : '❌'; // Fixed symbol
            
            // Get total members of the group
            let totalMembers = Object.keys(chat?.participants || {}).length;

            txt += `${groupName}\n${groupId} [${groupStatus}]\nMember: ${totalMembers}\nExpire Date: ${formattedDate}\n${remainingTime}\n${groupBanned} _Group Banned_\n${autoWelcome} _Auto Welcome_\n${antiLink} _Anti Link_\n\n`;
        }
    }
    
    m.reply(`\`\`\`LIST SEWA :\`\`\`
Total Group: ${groups.length}

${txt}
`.trim());
}

afriza.help = ['listsewa'];
afriza.tags = ['group'];
afriza.rowner = true;
afriza.command = /^(listsewa)$/i;

module.exports = afriza;

function msToDate(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return `${days} hari ${hours} jam ${minutes} menit`;
}