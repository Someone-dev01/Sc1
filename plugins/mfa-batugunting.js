const handler = async (m, { conn }) => {
  conn.batu = conn.batu || {};

  if (conn.batu[m.chat]) return m.reply('Kamu sedang bermain game batu!');
  let playerPosition, criminalPosition;
  do {
    playerPosition = Math.floor(Math.random() * 6);
    criminalPosition = Math.floor(Math.random() * 6);
  } while (playerPosition === criminalPosition);

  let gameState = `🗿 Batu Mengejar gunting ✂️

Wilayah saya:
${"・".repeat(playerPosition)}🗿${"・".repeat(5 - playerPosition)}
Wilayah penjahat:
${"・".repeat(criminalPosition)}✂️${"・".repeat(5 - criminalPosition)}
Ketik *'kanan'* untuk bergerak ke kanan.
Ketik *'kiri'* untuk bergerak ke kiri.`;

  let { key } = await conn.reply(m.chat, gameState, m);

  conn.batu[m.chat] = {
    playerPosition,
    criminalPosition,
    key,
    oldkey: key,
    earnedExp: 10000,
    earnedMoney: 1000000,
    sender: m.sender,
    moveCount: 0,
    maxMoves: 5,
    roomId: m.chat,
    timeout: setTimeout(() => {
      if (conn.batu && conn.batu[m.chat] && conn.batu[m.chat].roomId === m.chat) {
        conn.sendMessage(m.chat, { delete: key });
        delete conn.batu[m.chat];
      }
    }, 60000 * 2),
  };
};

handler.before = async (m, { conn }) => {
  conn.batu = conn.batu || {};
  let user = global.db.data.users[m.sender];
  if (!conn.batu[m.chat] || conn.batu[m.chat].roomId !== m.chat || !['kiri', 'kanan'].includes(m.text.toLowerCase())) return;

  let gameData = conn.batu[m.chat];
  let { playerPosition, criminalPosition, key, oldkey, moveCount, maxMoves, timeout, earnedExp, earnedMoney, sender } = gameData;
  
  if (m.quoted || m.quoted.id == key) {
    if (m.text.toLowerCase() === 'kiri') {
      if (playerPosition > 0) {
        playerPosition--;
        moveCount++;
      } else {
        return m.reply('Anda sudah berada di batas kiri!');
      }
    } else if (m.text.toLowerCase() === 'kanan') {
      if (playerPosition < 5) {
        playerPosition++;
        moveCount++;
      } else {
        return m.reply('Anda sudah berada di batas kanan!');
      }
    }

    if (playerPosition === criminalPosition) {
    conn.sendMessage(m.chat, { delete: oldkey });
    let earnedMoneys = randomMoney(earnedMoney, 1);
    let earnedExps = randomMoney(earnedExp, 1);
    user.money = (user.money || 0) + earnedMoneys;
    user.exp = (user.exp || 0) + earnedExps;
      delete conn.batu[m.chat];
      return conn.reply(m.chat, `🎉 Selamat! @${sender.split('@')[0]} berhasil mengalahkan gunting! 🎉\n\n💰 Mendapatkan uang senilai *${formatRupiah(earnedMoneys)}*\n🔼 Dapatkan *${earnedExps}* EXP\n`, m, { mentions: [sender] });
    } else if (moveCount === maxMoves) {
    conn.sendMessage(m.chat, { delete: oldkey });
      delete conn.batu[m.chat];
      return conn.reply(m.chat, `😔 Kamu kalah! @${sender.split('@')[0]} sudah mencapai batas maksimum gerakan.`, m, { mentions: [sender] });
    }

    let gameState = `🗿 Batu Mengejar gunting ✂️
Wilayah saya:
${"・".repeat(playerPosition)}🗿${"・".repeat(5 - playerPosition)}
Wilayah penjahat:
${"・".repeat(criminalPosition)}✂️${"・".repeat(5 - criminalPosition)}
Ketik *'kanan'* untuk bergerak ke kanan.
Ketik *'kiri'* untuk bergerak ke kiri.`;

    let msg = await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: gameState
        }
      }
    }, {});

    let additionalData = {
      ...gameData,
      playerPosition,
      moveCount,
      key: { id: msg }
    };

    conn.batu[m.chat] = Object.assign({}, conn.batu[m.chat], additionalData);
  }
};

handler.help = ['batu'];
handler.tags = ['rpg'];
handler.command = /^(batu)$/i;
handler.disabled = false;
handler.private = false
handler.group = true

module.exports = handler;

function randomMoney(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}