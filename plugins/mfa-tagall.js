/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const afriza = async (m, { conn, text, participants }) => {
    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

   
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || '';
    let teks = `*Pesan Dari Admin Group:*\n${text ? text : m.quoted?.text ? m.quoted.text : m.quoted?.caption ? m.quoted.caption : m.quoted?.description ? m.quoted.description : 'Nothing'}\n\n`;
    teks += `*[ TAG ALL ]*\n`;

    for (let mem of participants) {
        teks += `• @${mem.id.split('@')[0]}\n`;
    }
    teks += `•`;

    if (/video|image|viewOnce/g.test(mime) && !/webp/g.test(mime)) {
        let media = await q.download?.();
        await conn.sendFile(m.chat, media, '', teks, null, false, { mentions: participants.map(a => a.id), quoted: m });
    } else await conn.reply(m.chat, teks, fkontak, { mentions: participants.map(a => a.id) });
};

afriza.help = ['tagall'];
afriza.tags = ['group'];
afriza.command = /^(tagall)$/i;
afriza.admin = true;
afriza.group = true;

module.exports = afriza;