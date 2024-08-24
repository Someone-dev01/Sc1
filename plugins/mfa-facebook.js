/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

var api = require('api-dylux');

var afriza = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example:* ${usedPrefix}fb https://www.facebook.com/xxxxxxx`;
  }

  try {
    var response = await api.fbdl(text);
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', `*[ Facebook Downloader ]*\n\n*Title:* \`${response.title}\``, m);
  } catch (error) {
    console.log(error);
    m.reply('Terdapat masalah saat mengunduh video.');
  }
};

afriza.help = ['facebook'].map((v) => v + ' <url>');
afriza.tags = ['downloader'];
afriza.command = /^(facebook|fb)(downloader|dl)?$/i;
module.exports = afriza;