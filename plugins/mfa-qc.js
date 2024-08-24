/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { sticker } = require('../lib/sticker.js');
const axios = require('axios');

let afriza = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw `Contoh pemakaian: ${usedPrefix}${command} Done`;
    if (!text) return m.reply('enter text');
    if (text.length > 10000) return m.reply('Maksimal 50 kata!');
    try {
        let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png');

        const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.name,
                    "photo": {
                        "url": pp
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };
        const json = await axios.post('https://quote.btch.bz/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const buffer = Buffer.from(json.data.result.image, 'base64');
        let stiker = await sticker(buffer, false, global.packname, global.author);
        if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m);
    } catch (error) {
        console.log(error);
        m.reply("Sepertinya ada yang salah, coba lagi nanti");
    }
};

afriza.help = ['qc'];
afriza.tags = ['sticker'];
afriza.command = /^(qc|quotely)$/i;
afriza.premium = false;
afriza.limit = 3;

module.exports = afriza;

function from(data, encoding) {
    return new Buffer(data, encoding);
}