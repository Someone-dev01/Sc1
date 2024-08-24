let afriza = async (m, { conn }) => {
  setTimeout(() => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/40c03de50131b657eee73.jpg', null, 'Tap bagikan profile', m);
  }, 10);

  setTimeout(() => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/f35a9926425db14b01836.jpg', null, 'Lalu tap salin tautan', m);
  }, 2000);

  setTimeout(() => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/ca9b16e52784f5059de3c.jpg', null, 'Jika sudah kirimkan ke owner', m);
  }, 3000);
}

afriza.customPrefix = /^\.getlinkig|. getlinkig$/i
afriza.command = new RegExp

module.exports = afriza