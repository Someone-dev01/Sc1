const fetch = require('node-fetch');
let timeout = 120000;
let poin = 4999;

async function afriza(m, { conn, command, usedPrefix }) { 
    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {};
    let id = m.chat;
    if (id in conn.tebakkalimat) { 
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini.', conn.tebakkalimat[id][0]);
        throw false;
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')).json();
    let json = src[Math.floor(Math.random() * src.length)];
    let caption = `*${command.toUpperCase()}*
 ${json.soal}

⌕ Timeout *${(timeout / 1000).toFixed(2)} detik*
◦ Ketik ${usedPrefix}hkal untuk bantuan
◦ Bonus: ${poin} XP
    `.trim();
    conn.tebakkalimat[id] = [
        await conn.reply(m.chat, caption, m),
        json,
        poin,
        setTimeout(() => { 
            if (conn.tebakkalimat[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkalimat[id][0]);
            delete conn.tebakkalimat[id];
        }, timeout)
    ];
} 

afriza.help = ['tebakkalimat'];
afriza.tags = ['game'];
afriza.command = /^tebakkalimat/i;

module.exports = afriza;