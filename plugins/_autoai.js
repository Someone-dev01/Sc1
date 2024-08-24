/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const axios = require("axios");
const fetch = require("node-fetch");

// Menyimpan riwayat pesan sebelumnya
let previousMessages = [];

// Array of thumbnail URLs
const thumbnails = [
  'https://telegra.ph/file/17dfc39ad49eb14c0c494.jpg', //oldngh
    'https://telegra.ph/file/5b6490deb832948e98b5e.jpg', //suced
  //  'https://telegra.ph/file/f92f0a7aa4fcc6baa96bc.jpg', //woah
    'https://telegra.ph/file/a87ba53a417551a3fb4cc.jpg', //kiriijo
    'https://telegra.ph/file/f5afc83db6f2a2dd21013.jpg', //mfkpl
  // Add thumbnail in here ☺️
];

async function before(m) {
  if (m.isBaileys && m.fromMe) return;
  let chat = global.db.data.chats[m.chat];
  if (
    m.text.startsWith(".") ||
    m.text.startsWith("#") ||
    m.text.startsWith("!") ||
    m.text.startsWith("/") ||
    m.text.startsWith("\\/")
  )
    return;
  if (chat.ai && !chat.isBanned && m.text) {
    try {
      await conn.sendMessage(m.chat, { react: { text: `🖐️`, key: m.key } });
      let tio = await fetch(
        `https://api.lolhuman.xyz/api/pinterest2?apikey=Akiraa&query=hutao`,
      );
      let p = await tio.json();
      let url = p.result[Math.floor(Math.random() * p.result.length)];
      let messages = [
        ...previousMessages,
        {
          role: "system",
          content: `Kamu berperan seolah-olah  lagi pacaran,ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang Imut ceria, Namamu adalah Mfa Bot, dan kamu adalah Junior. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat periang, kamu memiliki Instagram dengan Username https://instagram.com/afriza_16f`,
        },
        { role: "user", content: m.text },
      ];
      let ini = (
        await axios.post(`https://skizo.tech/api/openai?apikey=Akiraa`, {
          messages,
        })
      ).data;

      await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });

      let hasil = `*[ CHARACTER AI ]*\n\n${ini.result}`;
      
      const randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
      
      await conn.sendMessage(
        m.chat,
        {
          text: hasil,
          contextInfo: {
            externalAdReply: {
              title: namebot,
              body: 'Character Ai',
              thumbnailUrl: randomThumbnail,
              sourceUrl: null,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m },
      );

      // Menyimpan pesan dalam riwayat sebelumnya
      previousMessages = messages;
    } catch (e) {
      throw "Sorry gw ga paham:v";
    }
  }
  return;
}

module.exports = { before };