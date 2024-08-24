let fs = require("fs");

let afriza = async (m, { text, usedPrefix, command }) => {
  if (!text)
    throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;

  if (command === "sp") {
    if (!m.quoted.text) throw `balas pesan nya!`;
    let path = `plugins/mfa-${text}.js`;
    await fs.writeFileSync(
      path,
      `/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/` +
        "\n\n" +
        m.quoted.text,
    );
    m.reply(`tersimpan di ${path}`);
  } else if (command === "dp") {
    let path = `plugins/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugin ${text}.js tidak ditemukan`;
    fs.unlinkSync(path);
    m.reply(`file plugin ${text}.js berhasil dihapus`);
  }
};
afriza.help = ["sp", "dp"].map((v) => v + " <teks>");
afriza.tags = ["owner"];
afriza.command = /^(sp|dp)$/i;
afriza.rowner = true;
module.exports = afriza;