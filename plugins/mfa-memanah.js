const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');

const cooldowns = {}; // Object to store cooldown timestamps

let afriza = async (m, { conn, usedPrefix, command, args }) => {
  const user = global.db.data.users[m.sender];
  let userData = user.minigame || { poin: 0, level: 1 };

  // Function to check cooldown
  const checkCooldown = (userId, command) => {
    if (!cooldowns[userId]) return false; // No cooldown for this user
    const now = Date.now();
    const cooldownTime = cooldowns[userId][command] || 0;
    return now < cooldownTime; // Returns true if still in cooldown
  };

  // Function to set cooldown
  const setCooldown = (userId, command) => {
    if (!cooldowns[userId]) cooldowns[userId] = {};
    const now = Date.now();
    cooldowns[userId][command] = now + 1 * 60 * 1000; // 5 minutes cooldown
  };

  if (command === 'memanah') {
    // Check cooldown before allowing the command
    if (checkCooldown(m.sender, 'memanah')) {
      const remainingTime = (cooldowns[m.sender]['memanah'] - Date.now()) / 1000;
      conn.reply(m.chat, `Mohon tunggu ${remainingTime.toFixed(0)} detik lagi sebelum menggunakan kembali perintah ini.`, m);
      return;
    }

    // Set cooldown after command usage
    setCooldown(m.sender, 'memanah');

    // URL gambar untuk target
    const targetImageUrl = 'https://telegra.ph/file/603c71cb0624d12dc050a.jpg'; // Gantilah URL dengan URL gambar yang diinginkan

    const replyText = `🏹 Minigame Memanah! 🏹\n\nKirim pesan *${usedPrefix}panah* dengan balasan berupa *caption* gambar ini saat kamu membidik target. Misalnya, kamu ingin mengincar sasaran tertentu, kirim *${usedPrefix}panah Sasaran*.`;
    conn.sendFile(m.chat, targetImageUrl, '', replyText, m);
  } else if (command === 'panah') {
    // Check cooldown before allowing the command
    if (checkCooldown(m.sender, 'panah')) {
      const remainingTime = (cooldowns[m.sender]['panah'] - Date.now()) / 1000;
      conn.reply(m.chat, `Mohon tunggu ${remainingTime.toFixed(0)} detik lagi sebelum menggunakan kembali perintah ini.`, m);
      return;
    }

    // Set cooldown after command usage
    setCooldown(m.sender, 'panah');

    if (!m.quoted) {
      conn.reply(m.chat, `Kirim pesan *${usedPrefix}panah* dengan balasan berupa *caption* gambar saat kamu membidik target. Misalnya, *${usedPrefix}panah Sasaran*.`, m);
      return;
    }

    if (!m.quoted.mimetype || !m.quoted.mimetype.startsWith('image')) {
      conn.reply(m.chat, 'Balasan pesan harus berupa gambar saat kamu membidik target.', m);
      return;
    }

    const caption = args[0] || '';
    if (caption.toLowerCase() === 'sasaran') {
      // Logika untuk menentukan apakah bidikan berhasil atau gagal
      const bidikanBerhasil = Math.random() < 0.5;

      if (bidikanBerhasil) {
        const hadiahPoin = Math.floor(Math.random() * 10) + 1; // Hadiah poin antara 1 hingga 10
        userData.poin += hadiahPoin;
        user.minigame = userData;

        // Tambahkan reward 1000 ke user.exp dan user.limit
        user.exp += 1000;
        user.limit += 1000;

        conn.reply(m.chat, `🎯 Bidikan berhasil! Anda mendapatkan ${hadiahPoin} poin. Total poin Anda: ${userData.poin}\n\nSelain itu, Anda juga mendapatkan reward 1000 ke *user.exp* dan *user.limit*!`, m);
      } else {
        conn.reply(m.chat, '🎯 Bidikan gagal! Coba lagi untuk mendapatkan poin lebih banyak.', m);
      }
    } else {
      conn.reply(m.chat, 'Hanya bidikan ke *Sasaran* yang akan dihitung. Coba lagi!', m);
    }
  }
};

afriza.help = ['memanah', 'panah'];
afriza.tags = ['game'];
afriza.command = /^(memanah|panah)$/i;
afriza.group = true;

module.exports = afriza;