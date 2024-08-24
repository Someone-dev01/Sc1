const { googleImage } = require("@bochilteam/scraper");

let afriza = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let response = args.join(" ").split("--");
    let query = response[0];
    let jumlah = parseInt(response[1]);

    if (!query) throw `Gunakan contoh ${usedPrefix + command} Anime`;

    if (!jumlah) {
      const res = await googleImage(query);
      let image = res[Math.floor(Math.random() * res.length)];
      let caption = `*± G O O G L E   I M A G E*
🔎 *Hasil:* ${query}
🌎 *Sumber:* Google

🔗 *Tautan:* ${image}`;

      conn.sendFile(m.chat, image, "image.jpg", caption, m);
    } else {
      if (jumlah > 10) {
        throw "Kebanyakan bang 😭";
      }

      const res = await googleImage(query);
      let caption = `*± G O O G L E   I M A G E*
🔎 *Hasil:* ${query}
🌎 *Sumber:* Google`;

      let delay = 0; // variabel untuk menambahkan delay
      for (let i = 0; i < jumlah; i++) {
        setTimeout(async () => {
          let image = res[Math.floor(Math.random() * res.length)];
          let captionWithLink = caption + `\n\n🔗 *Tautan:* ${image}`;
          conn.sendFile(m.chat, image, "image.jpg", captionWithLink, m);
        }, delay);
        delay += 3000; // tambahkan delay 3 detik
      }
    }
  } catch (error) {
    console.log(error);
    m.reply("Gagal mengirim hasil gambar");
  }
};

afriza.help = ["gimage <query>", "image <query>"];
afriza.tags = ["image"];
afriza.command = /^(gimage|image|img)$/i;
afriza.limit = true;

module.exports = afriza;