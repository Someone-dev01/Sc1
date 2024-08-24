let util = require ("util");
let path = require ("path");

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://bucin-livid.vercel.app/audio/lopyou.mp3', "lopyou.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|lup|luplup|loveyou|love|lope)$/i;
handler.command = new RegExp();

module.exports = handler;