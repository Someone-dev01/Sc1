/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let ytdl = require("ytdl-core");

let afriza = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `*Contoh:* .${command} https://www.youtube.com/xxxxxxx`, m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
        let obj = await ytmp3(text);
        let title = obj.meta.title;
        let channel = obj.meta.channel;
        let duration = obj.meta.seconds;
        let desk = obj.meta.description;
        let capt = `*[ Youtube Video ]*\n\n`
        capt += `*𝕿𝖎𝖙𝖑𝖊* : ${title}\n`
        capt += `*𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓* : ${desk}\n`
        capt += `*𝕮𝖍𝖆𝖓𝖓𝖊𝖑* : ${channel}\n`
        capt += `*𝕯𝖚𝖗𝖆𝖙𝖎𝖔𝖓* : ${duration}\n\n`
        capt += `*©Afriza*`

        // Check if file size exceeds 100 MB
        if (obj.size > 50 * 1024 * 1024) {
            return conn.reply(m.chat, '🚫 Maaf, video melebihi 50 MB.', m);
        }

        conn.sendFile(m.chat, obj.buffer, `${title}.mp4`, capt, m);
    } catch (e) {
        console.log(e);
        m.reply(`🚩 Error!`);
    }
};

afriza.help = ['ytmp4 *<url>*']
afriza.tags = ['downloader']
afriza.command = ['ytmp4', 'ytv']
module.exports = afriza

async function ytmp3(url) {
	try {
		const { videoDetails } = await ytdl.getInfo(url, {
			lang: "id",
		});
		const stream = ytdl(url, {
			filter: "videoandaudio",
		});
		const chunks = [];
		stream.on("data", (chunk) => {
			chunks.push(chunk);
		});
		await new Promise((resolve, reject) => {
			stream.on("end", resolve);
			stream.on("error", reject);
		});
		const buffer = Buffer.concat(chunks);
		return {
			meta: {
				title: videoDetails.title,
				channel: videoDetails.author.name,
				seconds: videoDetails.lengthSeconds,
				description: videoDetails.description,
				image: videoDetails.thumbnails.slice(-1)[0].url,
			},
			buffer: buffer,
			size: buffer.length,
		};
	} catch (error) {
		throw error;
	}
}