const { readdirSync, rmSync } = require("fs");

let handler = async (m, { conn, text }) => {
  const dir = "./tmp";
  const deletedFiles = [];

  readdirSync(dir).forEach((f) => {
    rmSync(`${dir}/${f}`);
    deletedFiles.push(f);
  });

  let pesan = `The \`tmp folder\` has been cleaned. Deleted files:\n${deletedFiles.join("\n")}`;
  await m.reply(pesan);
};

handler.help = ["cleartmp"];
handler.tags = ["owner"];
handler.owner = false;
handler.command = /^(c(lear)?tmp)$/i;

module.exports = handler;