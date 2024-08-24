const similarity = require('similarity');
const db = require('../lib/lowdb/index.js');

const threshold = 0.72;

async function before(m) { 
    let id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkal/i.test(m.quoted.text) || /.*hkal/i.test(m.text)) 
        return true;
    this.tebakkalimat = this.tebakkalimat ? this.tebakkalimat : {};
    if (!(id in this.tebakkalimat)) 
        return this.reply(m.chat, 'Soal itu telah berakhir.', m);
    if (m.quoted.id == this.tebakkalimat[id][0].id) { 
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
        if (isSurrender) { 
            clearTimeout(this.tebakkalimat[id][3]);
            delete this.tebakkalimat[id];
            return this.reply(m.chat, '🏳️ Menyerah', m);
        }
        let json = JSON.parse(JSON.stringify(this.tebakkalimat[id][1]));
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) { 
            const user = await db.users.get(m.sender);
            await db.users.update(m.sender, (user) => {
                user.exp += this.tebakkalimat[id][2];
            });
            this.reply(m.chat, `Jawaban Benar!\n+${this.tebakkalimat[id][2]} XP`, m);
            clearTimeout(this.tebakkalimat[id][3]);
            delete this.tebakkalimat[id];
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) 
            m.reply('Sedikit lagi!');
        else 
            this.reply(m.chat, '❌ Salah!', m);
    }
    return true;
} 

module.exports = { before, exp: 0 };