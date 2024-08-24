/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const api = require('api-dylux');

let afriza = async (m, {
	conn,
	text
}) => {
	if (!text) {
		throw `*Example*: .ssweb https://sociabuzz.com/afrizaa`;
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	try {
		let response = await api.ssweb(text);
		if (response.includes('Error: ')) {
			throw response;
		}
		conn.sendFile(m.chat, response, 'screenshot.jpg', '', m);
	} catch (error) {
		console.log(error);
		m.reply(`Terjadi kesalahan ${error}`);
	}
};

afriza.help = ['ssweb'];
afriza.tags = ['tools'];
afriza.command = /^ssweb|ss$/i;

module.exports = afriza;