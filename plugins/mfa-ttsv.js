const axios = require("axios");

const afriza = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Gunakan contoh *${usedPrefix}ttsv* <judul lagu>`;
  await conn.reply(m.chat, "Mencari...", m);
  const result = await searchTikTok(text);
  let responseText = `*Hasil Pencarian TikTok:*\n\n`;
  result.forEach((video, index) => {
    responseText += `*${index + 1}.* ${video.title}\n`;
    responseText += `   *Author*: ${video.author}\n`;
    if (video.views) responseText += `   *Views*: ${video.views}\n`;
    responseText += `   *Deskripsi*: ${video.description || "Tidak ada deskripsi"}\n`; // Mengganti "Description" menjadi "Deskripsi"
    responseText += `\n`;
  });
  responseText += `\nBalas pesan ini dengan nomor untuk mendapatkan link video.`;
  const { key } = await conn.reply(m.chat, responseText, m);
  conn.ttpapPlay[m.sender] = { result, key };
};

afriza.before = async (m, { conn }) => {
  conn.ttpapPlay = conn.ttpapPlay ? conn.ttpapPlay : {};
  if (m.isBaileys || !(m.sender in conn.ttpapPlay)) return;
  const { result, key } = conn.ttpapPlay[m.sender];
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
  const choice = m.text.trim();
  const inputNumber = Number(choice);
  if (inputNumber >= 1 && inputNumber <= result.length) {
    const selectedVideo = result[inputNumber - 1];
    try {
      let captionvid = `*Description*: ${selectedVideo.title}\n`;
      captionvid += `*Author*: ${selectedVideo.author}\n`;

      // Mengirim caption dan video
      await conn.sendFile(m.chat, selectedVideo.url, "", captionvid, m);
      // Mengirim audio
      await conn.sendMessage(m.chat, {
        audio: { url: selectedVideo.url },
        mimetype: "audio/mpeg",
        quoted: m,
      });

      // Menghapus daftar nomor
      conn.sendMessage(m.chat, { delete: key });
      delete conn.ttpapPlay[m.sender];
    } catch (error) {
      // console.error('Error sending TikTok video:', error);
      // await conn.reply(m.chat, 'Terjadi kesalahan saat mengirim video TikTok.', m);
    }
  } else {
    await conn.reply(
      m.chat,
      "Nomor urutan tidak valid. Silakan pilih nomor yang sesuai dengan daftar di atas.",
      m,
    );
  }
};

afriza.help = ["ttsv <judul lagu>"];
afriza.tags = ["tools"];
afriza.command = /^ttsv$/i;
afriza.limit = false;
afriza.premium = true;
module.exports = afriza;

async function searchTikTok(query) {
  try {
    const response = await axios({
      method: "POST",
      url: "https://tikwm.com/api/feed/search",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie: "current_language=en",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
      },
      data: {
        keywords: query,
        count: 10,
        cursor: 0,
        HD: 1,
      },
    });
    const videos = response.data.data.videos;
    if (videos.length === 0) {
      throw "Tidak ada video ditemukan.";
    } else {
      const results = videos.map((video, index) => {
        return {
          title: video.title,
          author: video.author.nickname,
          description: video.text,
          views: video.stats ? video.stats.playCount : undefined,
          url: video.play,
          thumbnail: video.thumbnail,
        };
      });
      return results;
    }
  } catch (error) {
    throw error;
  }
}