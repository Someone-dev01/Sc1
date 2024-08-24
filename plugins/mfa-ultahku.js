/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let ultah = {};

let afriza = async (m, { conn, args, usedPrefix, command }) => {
  if (args.length !== 3) return conn.reply(m.chat, `Gunakan format yang benar: *${usedPrefix}${command} DD MM YYYY*\nContoh: *${usedPrefix}${command} 05 05 2005*`, m);

  let [tanggal, bulan, tahun] = args;

  if (!tanggal || !bulan || !tahun) return conn.reply(m.chat, `Gunakan format yang benar: *${usedPrefix}${command} DD MM YYYY*\nContoh: *${usedPrefix}${command} 05 05 2005*`, m);

  let pengguna = m.sender.split('@')[0]; // Mendapatkan ID pengguna

  // Menambahkan data ulang tahun baru ke dalam objek ultah
  ultah[pengguna] = {
    tanggal: parseInt(tanggal),
    bulan: parseInt(bulan),
    tahun: parseInt(tahun)
  };

  // Menyimpan data ke dalam database
  global.db.data.users = ultah;
  await save();

  conn.reply(m.chat, `Berhasil menambahkan ultah.`, m);
};

afriza.help = ['ultahku DD MM YYYY'];
afriza.tags = ['tools'];
afriza.command = /^(ultahku)$/i;

module.exports = afriza;

// Fungsi untuk menyimpan data ke dalam database
async function save() {
  await global.db.write();
}

// Inisialisasi data ulang tahun dari database
if (global.db.data.users) {
  ultah = global.db.data.users;
} else {
  global.db.data.users = ultah;
}