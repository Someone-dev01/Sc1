const { createHash } = require("crypto");

let afriza = async (m, { text, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  if (user.registered !== false)
    throw "Anda sudah terdaftar!!\nIngin mendaftar kembali? Ketik unreg";
  user.registered = true;
  let sn = createHash("md5").update(m.sender).digest("hex");
  const arr = [
    { text: `*[ V ]*`, timeout: 500 },
    { text: `*[ V E ]*`, timeout: 500 },
    { text: `*[ V E R ]*`, timeout: 500 },
    { text: `*[ V E R I ]*`, timeout: 500 },
    { text: `*[ V E R I F ]*`, timeout: 500 },
    { text: `*[ V E R I F Y ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U C ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U C C ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U C C E ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U C C E S ]*`, timeout: 500 },
    { text: `*[ V E R I F Y - S U C C E S S ]*`, timeout: 500 },
  ];

  const lll = await conn.sendMessage(
    m.chat,
    { text: "Sedang memverifikasi..." },
    { quoted: m },
  );

  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(
      m.chat,
      {
        protocolMessage: {
          key: lll.key,
          type: 14,
          editedMessage: {
            conversation: arr[i].text,
          },
        },
      },
      {},
    );
  }
  
  let contact = m.sender.split("@")[0];
  let p = `*[ V E R I F Y - S U C C E S S ]*

*[ Auto Verify ]*
• *Status:* Sukses
• *Nama:* @${contact}
• *Umur:* -1 Year`;
  await new Promise((resolve) => setTimeout(resolve, 500));
  await conn.relayMessage(
    m.chat,
    {
      protocolMessage: {
        key: lll.key,
        type: 14,
        editedMessage: {
          conversation: p,
        },
      },
    },
    {},
  );
};

afriza.help = ["@verify"];
afriza.tags = ["start"];
afriza.customPrefix = /^(@verify)$/i;
afriza.command = new RegExp();

module.exports = afriza;