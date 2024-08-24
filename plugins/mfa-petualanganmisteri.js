/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

var petualanganMisteri = async (m, { conn, args }) => {
  // Inisialisasi data permainan
  conn.mysteryAdventure = conn.mysteryAdventure || {};

  const chatId = m.chat;
  const gameData = conn.mysteryAdventure[chatId] || {
    players: {},
    board: [],
    currentPlayer: null,
    clues: [],
    finalGoal: null,
  };

  conn.mysteryAdventure[chatId] = gameData;

  // Fungsi untuk mengocok dadu
  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  // Fungsi untuk memindahkan pemain
  const movePlayer = (player, steps) => {
    const newPosition = player.position + steps;

    // Implementasi logika pemindahan pemain
    if (newPosition >= gameData.board.length) {
      player.position = gameData.board.length - 1;
      conn.reply(m.chat, `🎉 *${player.name}* menemukan tujuan akhir dan memenangkan permainan! Selamat! 🎉`, m);
      delete conn.mysteryAdventure[chatId];
      return;
    }

    // Implementasi logika penanganan petunjuk, rintangan, dan tujuan akhir
    const currentCell = gameData.board[newPosition];
    if (currentCell.type === 'clue') {
      const clue = gameData.clues[currentCell.clueIndex];
      conn.reply(m.chat, `🔍 *${player.name}* menemukan petunjuk: "${clue}" 🔍`, m);
    } else if (currentCell.type === 'obstacle') {
      conn.reply(m.chat, `❌ *${player.name}* terhalang oleh rintangan! Kembali beberapa langkah... ❌`, m);
      player.position = Math.max(0, newPosition - currentCell.obstacleStrength);
    } else {
      player.position = newPosition;
    }
  };

  // Fungsi untuk menghasilkan papan permainan secara dinamis
  const generateGameBoard = () => {
    const boardSize = 30; // Ukuran papan permainan
    let board = [];

    // Inisialisasi papan permainan dengan kotak kosong
    for (let i = 0; i < boardSize; i++) {
      board.push({ type: 'empty' });
    }

    // Penempatan petunjuk secara acak di papan permainan
    for (let i = 0; i < Math.min(gameData.clues.length, boardSize / 2); i++) {
      const randomIndex = Math.floor(Math.random() * boardSize);
      if (board[randomIndex].type === 'empty') {
        board[randomIndex] = { type: 'clue', clueIndex: i };
      }
    }

    // Penempatan rintangan secara acak di papan permainan
    for (let i = 0; i < Math.min(gameData.board.length / 4, boardSize / 2); i++) {
      const randomIndex = Math.floor(Math.random() * boardSize);
      if (board[randomIndex].type === 'empty') {
        const obstacleStrength = Math.floor(Math.random() * 3) + 1; // Kekuatan rintangan antara 1 hingga 3
        board[randomIndex] = { type: 'obstacle', obstacleStrength };
      }
    }

    return board;
  };

  // Logika untuk setiap perintah permainan
  if (args[0] === 'join') {
    // Logika untuk pemain bergabung ke dalam permainan
    if (!gameData.players[m.sender]) {
      gameData.players[m.sender] = {
        name: m.sender,
        position: 0,
      };
      conn.reply(m.chat, `🔎 Selamat datang, *@${m.sender.split('@')[0]}*! Berhasil bergabung dalam petualangan misteri! 🔍`, m);
    } else {
      conn.reply(m.chat, `*@${m.sender.split('@')[0]}*, kamu sudah bergabung sebelumnya.`, m);
    }
  } else if (args[0] === 'start') {
    // Logika untuk memulai permainan
    if (Object.keys(gameData.players).length < 2) {
      conn.reply(m.chat, '👥 Permainan membutuhkan setidaknya 2 pemain. 👥', m);
    } else if (gameData.currentPlayer) {
      conn.reply(m.chat, 'Permainan sudah dimulai. 🚀', m);
    } else {
      gameData.board = generateGameBoard(); // Membuat papan permainan secara dinamis
      gameData.currentPlayer = Object.keys(gameData.players)[0];
      conn.reply(m.chat, `Petualangan misteri dimulai. 🚀 Giliran pertama: *${gameData.currentPlayer}*`, m);
    }
  } else if (args[0] === 'roll') {
    // Logika untuk pemain menggulir dadu
    const player = gameData.players[m.sender];
    if (!player) {
      conn.reply(m.chat, `*@${m.sender.split('@')[0]}*, kamu belum bergabung dalam petualangan misteri ini. Ketik *petualanganmisteri join* untuk bergabung.`, m);
    } else if (gameData.currentPlayer !== m.sender) {
      conn.reply(m.chat, 'Sekarang bukan giliranmu. ⏳', m);
    } else {
      const steps = rollDice();
      movePlayer(player, steps);
      conn.reply(m.chat, `🎲 *${player.name}* menggulir dadu dan mendapatkan ${steps}! 🎲`, m);
    }
  } else if (args[0] === 'list') {
    // Logika untuk menampilkan daftar pemain yang telah bergabung
    const playerList = Object.keys(gameData.players).map(playerId => gameData.players[playerId].name).join(', ');
    conn.reply(m.chat, `👥 Daftar Detektif:\n${playerList}`, m);
  } else if (args[0] === 'delete') {
    // Logika untuk menghentikan permainan
    delete conn.mysteryAdventure[chatId];
    conn.reply(m.chat, '🔍 Petualangan misteri dihentikan', m);
  } else if (args[0] === 'help') {
    // Logika untuk menampilkan bantuan permainan
    conn.reply(m.chat, `
      *🔍 Petualangan Misteri 🔍*

      Bergabung dalam petualangan misteri dan temukan petunjuk untuk memecahkan misteri!

      *Commands:*
      - *petualanganmisteri join*: Bergabung dalam petualangan misteri.
      - *petualanganmisteri start*: Memulai petualangan misteri.
      - *petualanganmisteri roll*: Menggulir dadu untuk bergerak.
      - *petualanganmisteri list*: Melihat daftar detektif yang telah bergabung.
      - *petualanganmisteri delete*: Menghentikan petualangan misteri.

      *Contoh:*
      - Ketik *petualanganmisteri join* untuk bergabung dalam petualangan misteri.
      - Ketik *petualanganmisteri start* untuk memulai petualangan jika sudah ada detektif yang bergabung.
    `, m);
  } else {
    // Pesan selamat datang dan bantuan permainan
    conn.reply(m.chat, `
      *🔍 Selamat Datang di Petualangan Misteri 🔍*

      Bergabunglah dalam petualangan misteri dan temukan petunjuk untuk memecahkan misteri!

      Ketik *petualanganmisteri help* untuk melihat daftar perintah.
    `, m);
  }
};

petualanganMisteri.command = petualanganMisteri.help = ["petualanganmisteri"]
petualanganMisteri.tags = ["game"]
petualanganMisteri.group = true;
petualanganMisteri.register = true;

module.exports = petualanganMisteri;