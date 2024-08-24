/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const similarity = require('similarity');
const threshold = 0.72; // semakin tinggi nilai, semakin mirip

async function before(m) {
    this.game = this.game ? this.game : {};
    let id = 'family100_' + m.chat;
    if (!(id in this.game))
        return true;
    let room = this.game[id];
    let text = m.text.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);
        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold)
                m.reply('Dikit lagi!');
            return true;
        }
        if (room.terjawab[index])
            return true;
        let users = global.db.data.users[m.sender];
        room.terjawab[index] = m.sender;
        users.exp += room.winScore;
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;
    let caption = `
\`\`\`Soal:\`\`\` ${room.soal}
Total jawaban: ${room.jawaban.length} ${room.jawaban.find(v => v.includes(' ')) ? `
` : ''}
${isWin ? `*Semua Jawaban Terjawab*` : isSurrender ? '\`\`\`MENYERAH\`\`\`' : ''}

${Array.from(room.jawaban, (jawaban, index) => {
        return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
    }).filter(v => v).join('\n')}
${isSurrender ? '' : `+${room.winScore} XP tiap jawaban benar`}
    `.trim();
    const msg = await this.reply(m.chat, caption, null, {
        mentions: this.parseMention(caption)
    });
    room.msg = msg;
    if (isWin || isSurrender)
        delete this.game[id];
    return true;
}

module.exports = { before };