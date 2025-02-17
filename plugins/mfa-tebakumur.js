const axios = require("axios");

let handler = async (m, { args }) => {
  if (!args[0]) {
    return m.reply("*Example*: .tebakumur Afriza");
  }

  let name = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/tebakumur?apikey=${global.lolkey}&name=${encodeURIComponent(name)}`;
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    let nameResult = result.name;
    let ageResult = result.age;
    let replyMsg = `Nama ${nameResult}, umur: ${ageResult} tahun`;
    m.reply(replyMsg);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['tebakumur'];
handler.tags = ['primbon'];
handler.command = /^tebakumur$/i;

module.exports = handler;