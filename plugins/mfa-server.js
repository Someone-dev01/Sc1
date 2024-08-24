/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const axios = require('axios');
const os = require('os');

let afriza = async (m) => {
  try {
    const response = await axios.get('http://ip-api.com/json/');
    const serverInfo = response.data;

    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    })

    let serverMessage = "*[ Server Information ]*:\n\n";
    serverMessage += `OS: ${os.platform()}\n`;
    serverMessage += `RAM: ${Math.floor(os.freemem() / (1024 * 1024))} MB / ${Math.floor(os.totalmem() / (1024 * 1024))} MB\n`;
    serverMessage += `Country: ${serverInfo.country}\n`;
    serverMessage += `Region: ${serverInfo.region}\n`;
    serverMessage += `City: ${serverInfo.city}\n`;
    serverMessage += `Timezone: ${serverInfo.timezone}\n`;
    serverMessage += `ISP: ${serverInfo.isp}\n`;
    serverMessage += `Uptime: ${formatUptime(os.uptime())}\n`;
    serverMessage += `Processor: ${os.cpus()[0].model}\n`;

    serverMessage += "\n©MFA - Bot";

    await m.reply(serverMessage);
  } catch (e) {
    console.log(e);
  }
};

function formatUptime(uptime) {
  let hours = Math.floor(uptime / 3600);
  let minutes = Math.floor((uptime % 3600) / 60);
  let seconds = Math.floor(uptime % 60);

  return `${hours} jam ${minutes} menit ${seconds} detik`;
}

afriza.command = ['server'];
afriza.tags = ['info'];
afriza.help = ['server'];

module.exports = afriza;