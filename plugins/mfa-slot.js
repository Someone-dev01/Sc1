/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, args, usedPrefix, command }) => {

  let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) {
    conn.reply(m.chat, `*Contoh*: .slot 1000`, m);
    return;
  }

  let user = global.db.data.users[m.sender];
  if (user.balance < betAmount) {
    conn.reply(m.chat, `Sorry, your balance is not sufficient to make a big bet ${betAmount}.`, m);
    return;
  }

  let symbols = ['♣️', '♥️', '♠️', '♦️'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '♥️' && result[0] === '♣️' && result[2] === '♦️';

  let winAmount = win ? betAmount * 5 : 0;

  user.limit -= betAmount;
  user.limit += winAmount;

  conn.reply(
    m.chat,
    `[  🎰 | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  🎰 | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `You won a big bet ${winAmount}` : ''}
Your remaining limit: ${user.limit}`,
    m,
    {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "Your Slot Results",
          thumbnailUrl: "https://telegra.ph/file/bdfa15d6532a3c9a92bb5.jpg",
          sourceUrl: "https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }
  );
};

afriza.help = ['slot'];
afriza.tags = ['game'];
afriza.command = /^(slot)$/i;

module.exports = afriza;