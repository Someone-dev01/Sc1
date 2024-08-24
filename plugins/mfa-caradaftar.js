let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  conn.sendMessage(m.chat, {
    text: '_Jika kurang jelas dengan contoh pada gambar dibawah. klik pada link berikut ini:_ *https://telegra.ph/file/291f97294af96d585b308.jpg*',
    key: m.key,
  });
  conn.sendFile(m.chat, 'https://telegra.ph/file/291f97294af96d585b308.jpg', m);
}
handler.customPrefix = /^(.cara daftar|.caradaftar)$/i
handler.command = new RegExp

module.exports = handler