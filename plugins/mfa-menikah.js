/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const fetch = require('node-fetch');

const toM = (a) => '@' + a.split('@')[0];

const afriza = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    args,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);

    if (command == 'menikah') {
        let ps = groupMetadata.participants.map(v => v.id);
        let a = ps[Math.floor(Math.random() * ps.length)];
        let b;
        do b = ps[Math.floor(Math.random() * ps.length)];
        while (b === a);
        conn.reply(m.chat, `*\`${toM(a)}, KAU HARUS MENIKAHI ${toM(b)}, KAMU PASTI AKAN MENJADI PASANGAN YANG BAIK 💓\`*`, null, {
            mentions: [a, b]
        });
    }

    if (command == 'metercinta') {
        if (!text) throw `Contoh pemakaian: ${usedPrefix}${command} terserah`;
        conn.reply(m.chat, `
*\`❤️❤️ METER CINTA ❤️❤️*
*Cinta dari ${text} itu untuk kamu* *${Math.floor(Math.random() * 100)}%* *dari 100%*
*kamu harus memintanya untuk menjadi pacar kamu?\`*
`.trim(), m, m.mentionedJid ? {
            contextInfo: {
                mentionedJid: m.mentionedJid
            }
        } : {});
    }

    if (command == 'bertanya') {
        if (!text) throw `Contoh pemakaian: ${usedPrefix}${command} haruskah saya makan?`;
        conn.reply(m.chat, `
*⁉️ PERTANYAAN ⁉️*
 
*PERTANYAAN:* ${text}
*TANGGAPAN:* ${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'][Math.floor(Math.random() * 6)]}
`.trim(), null, m.mentionedJid ? {
            mentions: m.mentionedJid
        } : {});
    }
};

afriza.command = afriza.help = ['menikah', 'metercinta', 'bertanya'];
afriza.tags = ['fun'];
afriza.group = true 

module.exports = afriza;