/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const afriza = async (m) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    else who = m.sender;
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base';
    let user = global.db.data.users[who];
    let isPremium = user.premium ? "Premium 👑" : "Free User";
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit;
    m.reply(`*[ Limit Information ]*
    
❏ *Username:* ${user.registered ? user.name : conn.getName(who)}
▧ *Status:* ${isPremium}
▧ *Limit:* ${limit}
`.trim());
};

afriza.help = ['limit [@user]'];
afriza.tags = ['main'];
afriza.command = /^(limit)$/i;

module.exports = afriza;