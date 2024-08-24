const { performance } = require('perf_hooks');
const { version: nodeVersion, npmVersion } = require('process');
const { version: packageVersion } = require('../package.json');

let afriza = async (m, { conn }) => {
  const start = performance.now();
    
	conn.sendMessage(m.chat, {
		react: {
			text: '📶',
			key: m.key,
		}
	})

  const chatServer = 's.whatsapp.net';
  const connServer = conn.baseURL?.split('//')[1]?.split(':')[0] || 'Not available';
  const messageDelay = Math.floor(performance.now() - start);

  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
  const cpuUsage = process.cpuUsage().user / 1000000;

  // Calculate runtime
  const runtimeMS = process.uptime();
  const runtimeString = clockString(runtimeMS);

  const npmVersionOutput = npmVersion ? `◦ Npm: ${npmVersion}` : '◦ Npm: Not available';

  const reply = `• *[ PING! ]*\n\n• *Network Specs:*\n◦ Chat Server: ${chatServer}\n◦ Connection Server: ${connServer}\n◦ Message Delay: ${messageDelay}ms\n\n• *System Specs:*\n◦ Memory Usage: ${memoryUsage.toFixed(2)}MB\n◦ CPU Usage: ${cpuUsage.toFixed(2)}s\n◦ Runtime: ${runtimeString}\n\n• *Bot Version:*\n◦ Node.js: ${nodeVersion}\n◦ Language: JavaScript\n${npmVersionOutput}\n◦ Version: ${version}\n◦ Owner: 60135461140`;

  let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: reply,
        },
        footer: {
          text: `SPEED TEST`
        },
        header: {
          title: '',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: 'https://telegra.ph/file/b5724c493dd616bf80c81.jpg',
            }
          }, {
            upload: conn.waUploadToServer
          }))
        },
        nativeFlowMessage: {
          buttons: [{text: ""}]
					}
				}, 
			},
			{
				quoted: fkontak
			}, {contextInfo: {
mentionedJid: [creator],
              }}
		);
await conn.relayMessage(m.chat, msg.message, m)
};

afriza.command = ['ping'];
afriza.tags = ['info'];
afriza.help = ['ping'];

module.exports = afriza;

function clockString(seconds) {
    const hours = Math.floor(seconds / 3600);
    return hours + ' hour';
}