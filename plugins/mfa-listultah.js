/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let ultah = {};

let afriza = async (m, { conn }) => {
  let pesan = '\`\`\`LIST ULTAH:\`\`\`\n\n';
  let ada = false;
  let sekarang = new Date(); // Waktu saat ini
  let index = 1; // Nomor pengguna dalam daftar

  for (let pengguna in ultah) {
    // Memeriksa apakah pengguna memiliki data ulang tahun
    if (ultah[pengguna].tanggal && ultah[pengguna].bulan && ultah[pengguna].tahun) {
      let ultahTahunIni = new Date(sekarang.getFullYear(), ultah[pengguna].bulan - 1, ultah[pengguna].tanggal); // Ulang tahun tahun ini
      let waktuHinggaUltah = ultahTahunIni > sekarang ? ultahTahunIni - sekarang : ultahTahunIni.setFullYear(ultahTahunIni.getFullYear() + 1) - sekarang; // Waktu hingga ulang tahun berikutnya

      let hari = Math.ceil(waktuHinggaUltah / (1000 * 60 * 60 * 24)); // Menghitung jumlah hari hingga ulang tahun
      let tahun = sekarang.getFullYear() - ultah[pengguna].tahun; // Menghitung umur

      // Menambahkan pengingat jika hari ulang tahun
      if (hari === 0) {
        pesan += `🎉 *Selamat Ulang Tahun!* 🎉\n(@${pengguna.replace('@','').replace(/@.+/, '')})\n Hari ini adalah ulang tahunnya yang ke-${tahun}! 🥳🎂\n\n`;
      }

      pesan += `${index}. @${pengguna.replace('@','').replace(/@.+/, '')} :\n ${ultah[pengguna].tanggal} ${getBulan(ultah[pengguna].bulan)} ${ultah[pengguna].tahun} | ${tahun} tahun | ${hari} hari lagi\n\n`;
      index++;
      ada = true;
    }
  }

  if (!ada) pesan = 'Tidak ada yang menambahkan tanggal ulang tahun.';
  conn.reply(m.chat, pesan, m);
};

// Fungsi untuk mendapatkan nama bulan dari angka bulan
function getBulan(bulan) {
  const namaBulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return namaBulan[bulan - 1];
}

afriza.help = ['listultah'];
afriza.tags = ['tools'];
afriza.command = /^(listultah)$/i;

module.exports = afriza;

// Inisialisasi data ulang tahun dari database
if (global.db.data.users) {
  ultah = global.db.data.users;
} else {
  global.db.data.users = ultah;
}

// Fungsi untuk menyimpan data ke dalam database
async function save() {
  await global.db.write();
}