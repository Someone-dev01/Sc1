let fetch = require("node-fetch");

let afriza = async (m, { conn, command }) => {
  try {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;

    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[who];
    let username = user.name;
    let limit = user.premium ? '∞' : user.limit; // Mengubah limit user premium menjadi 'Infinity' jika pengguna adalah premium
    let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money; // Mengubah balance user yang lebih dari 999999999 menjadi 'Infinity'
    let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; // Mengubah level pengguna yang lebih dari 9999 menjadi 'Infinity'
    let role = user.role;
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'; // Menambahkan 'Not Found' jika rank tidak terdefinisi
    let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
    let age = user.age > 4000 ? 'Unknown' : user.age;
    let isPremium = user.premium ? "Yes" : "Free User";
    let isVip = user.vip ? "Yes" : "Free User";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";
    let pasangan = user.pasangan ? global.db.data.users[user.pasangan].name : 'Not Have'; // Mengambil nama pasangan dari database
    let banned = user.banned ? true : false;
    let sahabat = user.sahabat ? '' + global.db.data.users[user.sahabat].name : 'Not Have';

    let caption = `
*\`[ INFO USER  ]\`*

*Banned* : ${banned ? 'Yes' : 'No'}
*Level* : ${level}

       
    `.trim();
    
    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: namebot,
          thumbnailUrl: ppUrl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/90258adee19806142f261.jpg");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    let username = user.name;
    let limit = user.premium ? '∞ (Unlimited)' : user.limit; // Mengubah limit user premium menjadi 'Infinity' jika pengguna adalah premium
    let balance = user.money > 999999999999999999999999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money; // Mengubah balance user yang lebih dari 999999999999 menjadi 'Infinity'
    let level = user.level > 99999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; // Mengubah level pengguna yang lebih dari 99999999999 menjadi 'Infinity'
    let role = user.role;
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'; // Menambahkan 'Not Found' jika rank tidak terdefinisi
    let exp = user.exp > 9999999999999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
    let age = user.age > 4000 ? 'Unknown' : user.age;
    let isPremium = user.premium ? "Yes" : "Free User";
    let isVip = user.vip ? "Yes" : "Free User";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";
    let pasangan = user.pasangan ? global.db.data.users[user.pasangan].name : 'Not Have'; // Mengambil nama pasangan dari database
    let banned = user.banned ? true : false;
    let sahabat = user.sahabat ? '' + global.db.data.users[user.sahabat].name : 'Not Have';

    let caption = `
*\`[ INFO LEVEL ]\`*

*Banned* : ${banned ? 'Yes' : 'No'}
*Level* : ${level}
       
    `.trim();

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
showAdAttribution: true,
          title: namebot,
          thumbnailUrl: ppUrl,
sourceUrl: `https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
};

afriza.command = /^(ceklevel|ceklvl)$/i
afriza.help = ['ceklevel *@user*'];
afriza.tags = ['start'];
afriza.register = true;

module.exports = afriza;