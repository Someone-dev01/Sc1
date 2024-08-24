const afriza = async (m) => {
  const caraorder = `*\`[ TAHAPAN ORDER ]\`*

> 1️⃣ Tanyakan Stok Produk Kepada Admin
> 2️⃣ Jika \`READY\` langsung transfer sesuai harga produk
> 3️⃣ Kirim bukti TRANSFER Ke Admin / Owner
> 4️⃣ Admin Konfirmasi
> 5️⃣ Proses Oreder
> 6️⃣ Bukti Pesanan Akan Di Kirim Lewat Private Chat
> 7️⃣ Done ✅

⚠️ *CARA CEK HARGA KETIK :* \`#list\` ⚠️

> \`wa.me/6283174059236\` (Admin Store)

> *Punya Pertanyaan?* Chat admin
> *Order ?* Chat admin`;

  m.reply(caraorder);
};

afriza.tags = ['store'];
afriza.help = ['caraorder']
afriza.limit = false;
afriza.command = /^(caraorder)$/i;

module.exports = afriza;