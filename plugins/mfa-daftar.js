/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { createHash } = require('crypto');

async function handleVerification(m, { conn }) {
    let user = global.db.data.users[m.sender];
    if (user.registered !== false) {
        throw 'You are already registered, do you want to repeat it?';
    }

    user.registered = true;
    let sn = createHash('md5').update(m.sender).digest('hex');
    let umur = Math.floor(Math.random() * 80) + 1; // Umur random antara 1 dan 80 tahun
    let nama = conn.getName(m.sender); // Mendapatkan nama pengguna WhatsApp
    let p = ``;
    const responseMsg = `
*[ Auto Daftar ]*
• *Status:* Sukses
• *Nama:* ${nama}
• *Umur:* ${umur} Tahun
`;

    const arr = [
        { text: responseMsg, timeout: 5000 },
    ];

    const lll = await conn.sendMessage(m.chat, { text: '_Waiting!...._' }, { quoted: m });

    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: arr[i].text
                }
            }
        }, {});
    }
}

let afriza = async (m, { conn, text, usedPrefix }) => {
    try {
        await handleVerification(m, { conn });
    } catch (error) {
        conn.reply(m.chat, error, m);
    }
}

afriza.help = ['.daftar'];
afriza.tags = ['start'];
afriza.command = /^(daftar)$/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = false
afriza.private = false
afriza.admin = false
afriza.botAdmin = false
afriza.limit = false

module.exports = afriza