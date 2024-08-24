/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

var danz = async (m, { conn, args }) => {
  conn.triviaQuiz = conn.triviaQuiz || {};

  const chatId = m.chat;
  const gameData = conn.triviaQuiz[chatId] || {
    players: {},
    questions: [],
    currentQuestion: 0,
    scores: {},
    running: false,
    cooldown: 0, // Menambahkan properti cooldown
  };

  conn.triviaQuiz[chatId] = gameData;

  // Fungsi untuk menampilkan pertanyaan berikutnya
  const nextQuestion = () => {
    const questionIndex = gameData.currentQuestion;
    const question = gameData.questions[questionIndex];
    
    // Memeriksa apakah indeks pertanyaan melebihi jumlah pertanyaan
    if (questionIndex >= gameData.questions.length) {
      endGame();
      return;
    }

    // Memeriksa apakah cooldown sudah berakhir sebelum menampilkan pertanyaan berikutnya
    if (gameData.cooldown && Date.now() < gameData.cooldown) {
      const remainingTime = Math.ceil((gameData.cooldown - Date.now()) / 1000);
      sendMessage(`Tunggu ${remainingTime} detik sebelum pertanyaan berikutnya.`);
      return;
    }

    // Menampilkan pertanyaan
    sendMessage(`Pertanyaan ke-${questionIndex + 1}:\n${question.question}\n\n${question.options.join('\n')}`);

    // Menetapkan cooldown untuk pertanyaan berikutnya
    gameData.cooldown = Date.now() + 30000; // 30 detik cooldown
  };

  // Fungsi untuk mengirim pesan ke dalam grup
  const sendMessage = (text) => {
    conn.reply(m.chat, text, m);
  };

  // Menambahkan pertanyaan-pertanyaan baru beserta opsi jawaban
  addQuestion("Siapakah penemu lampu listrik?", ["a) Thomas Edison", "b) Alexander Graham Bell", "c) Nikola Tesla", "d) Albert Einstein"], "a");
  addQuestion("Apa nama ibukota Jepang?", ["a) Tokyo", "b) Kyoto", "c) Osaka", "d) Hokkaido"], "a");
  addQuestion("Siapakah pelukis terkenal yang menciptakan lukisan Mona Lisa?", ["a) Vincent van Gogh", "b) Pablo Picasso", "c) Leonardo da Vinci", "d) Michelangelo"], "c");
  addQuestion("Apa nama planet terbesar di tata surya?", ["a) Bumi", "b) Mars", "c) Jupiter", "d) Saturnus"], "c");
  addQuestion("Siapakah penulis novel 'Harry Potter'?", ["a) J.K. Rowling", "b) Stephen King", "c) George R.R. Martin", "d) J.R.R. Tolkien"], "a");
  addQuestion("Apa nama sungai terpanjang di dunia?", ["a) Sungai Nil", "b) Sungai Amazon", "c) Sungai Yangtze", "d) Sungai Mississippi"], "b");

  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  // Fungsi untuk mengirim pesan ke dalam grup
  const sendMessage = (text) => {
    conn.reply(m.chat, text, m);
  };

  // Fungsi untuk menampilkan daftar pemain
  const showPlayerList = () => {
    const players = Object.keys(gameData.players).map(playerId => gameData.players[playerId]).map(player => `*${player.name}* (${player.score} poin)`).join('\n');
    sendMessage("👥 Daftar Pemain:\n" + players);
  };

  // Fungsi untuk memulai permainan
  const startGame = () => {
    if (gameData.running) {
      sendMessage("Permainan sudah berjalan.");
      return;
    }
    if (Object.keys(gameData.players).length < 2) {
      sendMessage("Permainan membutuhkan setidaknya 2 pemain.");
      return;
    }
    gameData.running = true;
    sendMessage("Permainan dimulai!");
    nextQuestion();
  };

  // Fungsi untuk menampilkan pertanyaan berikutnya
  const nextQuestion = () => {
    const question = gameData.questions[gameData.currentQuestion];
    sendMessage(`Pertanyaan ke-${gameData.currentQuestion + 1}:\n${question.question}\n\n${question.options.join('\n')}`);
  };

  // Fungsi untuk menjawab pertanyaan
  const answerQuestion = (playerId, answer) => {
    if (!gameData.running) {
      sendMessage("Permainan belum dimulai.");
      return;
    }
    const question = gameData.questions[gameData.currentQuestion];
    const player = gameData.players[playerId];
    if (!player) {
      sendMessage("Anda belum bergabung dalam permainan ini.");
      return;
    }
    if (player.answered) {
      sendMessage("Anda sudah menjawab pertanyaan ini.");
      return;
    }
    player.answered = true;
    if (answer.toLowerCase() === question.correctAnswer.toLowerCase()) {
      player.score++;
      sendMessage(`Jawaban Anda benar! 🎉\nSkor Anda sekarang: ${player.score} poin`);
    } else {
      sendMessage(`Jawaban Anda salah. 😔\nSkor Anda: ${player.score} poin`);
    }
    // Periksa apakah semua pemain telah menjawab
    const allAnswered = Object.keys(gameData.players).every(playerId => gameData.players[playerId].answered);
    if (allAnswered) {
      // Tampilkan skor sementara dan lanjutkan ke pertanyaan berikutnya
      showPlayerList();
      gameData.currentQuestion++;
      if (gameData.currentQuestion < gameData.questions.length) {
        nextQuestion();
      } else {
        endGame();
      }
    }
  };

  // Fungsi untuk mengakhiri permainan
  const endGame = () => {
    sendMessage("Permainan selesai! Ini adalah skor akhir:");
    showPlayerList();
    // Reset game data
    gameData.running = false;
    gameData.currentQuestion = 0;
    Object.values(gameData.players).forEach(player => {
      player.answered = false;
    });
  };

  if (args[0] === 'join') {
    if (!gameData.running) {
      if (!gameData.players[m.sender]) {
        gameData.players[m.sender] = {
          name: m.sender.split('@')[0],
          score: 0,
          answered: false,
        };
        sendMessage(`*@${m.sender.split('@')[0]}* telah bergabung dalam permainan.`);
      } else {
        sendMessage(`*@${m.sender.split('@')[0]}*, kamu sudah bergabung sebelumnya.`);
      }
    } else {
      sendMessage("Permainan sudah berjalan.");
    }
  } else if (args[0] === 'start') {
    startGame();
  } else if (args[0] === 'answer') {
    const answer = args[1];
    if (!answer) {
      sendMessage("Silakan masukkan jawaban Anda setelah perintah *answer*. Contoh: *trivia answer a*");
      return;
    }
    answerQuestion(m.sender, answer);
  } else if (args[0] === 'list') {
    showPlayerList();
  } else if (args[0] === 'help') {
    sendMessage(`🎮 *Permainan Trivia Quiz* 🧠\n\nCara Bermain:\n1. Ketik *trivia join* untuk bergabung dalam permainan.\n2. Ketik *trivia start* untuk memulai permainan setelah cukup pemain.\n3. Setiap pemain akan menjawab pertanyaan dengan memilih jawaban (a, b, c, atau d).\n\nPerintah lain:\n- *trivia list*: Melihat daftar pemain dan skor
    
 Perintah lain:
- *trivia list*: Melihat daftar pemain dan skor sementara.
- *trivia answer [jawaban]*: Menjawab pertanyaan dengan memilih jawaban (a, b, c, atau d).
- *trivia help*: Menampilkan petunjuk cara bermain permainan Trivia Quiz.

Selamat bermain! 🎉
`);

  } else {
    sendMessage(`
🎮 *Permainan Trivia Quiz* 🧠

*Perintah:*
- *trivia join*: Bergabung dalam permainan.
- *trivia start*: Memulai permainan setelah cukup pemain.
- *trivia answer [jawaban]*: Menjawab pertanyaan dengan memilih jawaban (a, b, c, atau d).
- *trivia list*: Melihat daftar pemain dan skor sementara.
- *trivia help*: Menampilkan petunjuk cara bermain permainan Trivia Quiz.

Selamat bermain! 🎉
`);
  }
};

danz.command = danz.help = ["trivia"]
danz.tags = ["game"]
danz.group = true;
danz.register = true;

module.exports = danz;