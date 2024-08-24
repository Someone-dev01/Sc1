/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { createHash } = require('crypto');
const PhoneNumber = require('awesome-phonenumber');
const { canLevelUp, xpRange } = require('../lib/levelling.js');
//const db = require('../lib/database.js');

let afriza = async (m, { conn, usedPrefix, command}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ Pengguna hilang dari database saya`;
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png');
    let user = global.db.data.users[who];
    let { name, exp, limit, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who];
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let balance = user.money > 999999999999999999999999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money; // Mengubah balance user yang lebih dari 999999999999 menjadi 'Infinity'
        let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
    let prem = global.prems.includes(who.split`@`[0]);
        let isPremium = user.premium ? "Premium 👑" : "Free User";
    let sn = createHash('md5').update(who).digest('hex');

    let str = `
 *[ USER PROFILE ]*
 
 *[ Your Info ]*
  • *Name :* ${name}
  • *Tagged :* @${who.replace(/@.+/, '')}
  • *Numbers :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
  • *Api :* wa.me/${who.split`@`[0]}${registered ?'\n  • *Age :* ' + age + ' Year' : ''}
  • *Balance :* Rp.${balance}
  • *Limit :* ${limit}
  
 *[ Leveling Info ]*
  • *Level :* ${level}
  • *XP :* whole ${exp}
  • *Role :* ${role}
  
 *[ Status Info ]*  
  • *Register :* ${registered ? '*Yes*': '*No*'}
  • *Since :* ${new Date(regTime).toLocaleDateString('id-ID')}
  • *Status :* ${isPremium}
  • *PremExpired* : ${premiumExpired}
  `;

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] });
    
    // Periksa apakah objek m memiliki metode react sebelum memanggilnya
    if (typeof m.react === 'function') {
        m.react('✅');
    } else {
        console.log('m.react is not a function');
    }

};
afriza.help = ['profile'];
afriza.tags = ['group'];
afriza.command = ['profile', 'me', 'profil'];

module.exports = afriza;