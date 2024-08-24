let fetch = require("node-fetch");

let afriza = async (m, { conn, command }) => {
  try {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;

    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[who];


    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Free User Ngapain Cek :v";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";
    let banned = user.banned ? true : false;

    let caption = `

*\`[ INFO USER ]\`*

  *Banned* : ${banned ? 'Yes' : 'No'}
  *Premium expired on* : ${premiumExpired}
       
    `.trim();
    
    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `Premium Expired On`,
          thumbnailUrl: ppUrl,
          sourceUrl: ch,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Free User Ngapain Cek :v";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";

    let banned = user.banned ? true : false;
   
    let caption = `*\`[ INFO PREMIUM ]\`*
    
  *Banned* : ${banned ? 'Yes' : 'No'}
  *PremExpired* : ${premiumExpired}
       
    `.trim();

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: namebot,
          thumbnailUrl: ppUrl,
          sourceUrl: ch,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
};

afriza.command = /^(cekprem)$/i
afriza.help = ['cekprem *@user*'];
afriza.tags = ['start'];
afriza.register = true;

module.exports = afriza;
 
function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}