/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const yts = require('yt-search');
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed');

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`;
    let res = await yts(text);
    let vid = res.videos[0];
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya';
    let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid;
    const url = 'https://www.youtube.com/watch?v=' + videoId;

    let vap = `*〔 YOUTUBE - PLAY 〕*

*𝕿𝖎𝖙𝖑𝖊:* ${title}
*𝖀𝖗𝖑:* ${url}
*𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓* ${description}

*_\`Harap tunggu sebentar, permintaan anda akan segera dikirim...\`_*`;

    conn.sendMessage(m.chat, {
        text: vap,
        contextInfo: {
            externalAdReply: {
            
                title: namebot,
                thumbnailUrl: thumbnail,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

    const yt = await youtubedl(url).catch(async () => await youtubedlv2(url));
    const link = await yt.audio['128kbps'].download();
    
    // Memeriksa ukuran file sebelum mengirimnya
    const fileSize = yt.audio['128kbps'].size;
    if (fileSize > 50 * 1024 * 1024) {
        throw 'Ukuran file melebihi batas maksimum (50MB).';
    }

    let doc = {
        audio: {
            url: link
        },
        mimetype: 'audio/mp4',
        fileName: `${title}`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaType: 2,
                mediaUrl: url,
                title: title,
                sourceUrl: url,
                thumbnail: await (await conn.getFile(thumbnail)).data
            }
        }
    };

    return conn.sendMessage(m.chat, doc, { quoted: m });
};

handler.help = ['play'].map(v => v + ' <pencarian>');
handler.tags = ['downloader'];
handler.command = /^play$/i;

handler.exp = 0;
handler.limit = 5;
module.exports = handler;