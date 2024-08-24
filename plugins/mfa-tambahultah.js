/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let ultah = {};

let tambahHandler = async (m, { conn, args }) => {
  if (args.length !== 4) return conn.reply(m.chat, 'Format yang benar: *!tambahultah @username tanggal bulan tahun*', m);

  let [user, tanggal, bulan, tahun] = args;
  user = user.replace('@', '');

  if (!user || !tanggal || !bulan || !tahun) return conn.reply(m.chat, 'Format yang benar: *!tambahultah @username tanggal bulan tahun*', m);

  // Menambahkan data ulang tahun baru ke dalam listultah
  ultah[`@${user}`] = {
    tanggal: parseInt(tanggal),
    bulan: parseInt(bulan),
    tahun: parseInt(tahun)
  };

  // Menyimpan data ke dalam database
  global.db.data.users = ultah;
  await save();

  conn.reply(m.chat, `Ulang tahun untuk @${user} telah ditambahkan.`, m);
};

tambahHandler.help = ['tambahultah @username tanggal bulan tahun'];
tambahHandler.tags = ['tools'];
tambahHandler.command = /^(tambahultah)$/i;

module.exports = tambahHandler;

// Fungsi untuk menyimpan data ke dalam database
async function save() {
  await global.db.write();
}

if (global.db.data.users) {
  ultah = global.db.data.users;
} else {
  global.db.data.users = ultah;
}