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

const { toAudio } = require('../lib/converter.js');
const { apivisit } = require('./kanghit.js');

const afriza = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q || q.msg).mimetype || q.mediaType || '';
    if (!/video|audio/.test(mime)) throw `Reply video/voice note you want to convert to audio/mp3 with command *${usedPrefix + command}*`;
    let media = await q.download();
    if (!media) throw 'Can\'t download media';
    let audio = await toAudio(media, 'mp4');
    if (!audio.data) throw 'Can\'t convert media to audio';
    await conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m });
    await apivisit;
};

afriza.help = ['toaudio'];
afriza.tags = ['convert'];
afriza.command = /^toaudio|keaudio|tomp3$/i;

module.exports = afriza;