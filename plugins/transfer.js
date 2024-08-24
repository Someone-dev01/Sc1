/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'limit', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet',
];

let confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Kamu sedang melakukan transfer!');
    let user = global.db.data.users[m.sender];
    const item = items.filter(v => v in user && typeof user[v] == 'number');
    let lol = `Gunakan format ${usedPrefix}${command} [jenis] [jumlah] [@tag]
Contoh ${usedPrefix}${command} money 9999 @user

Item yang dapat ditransfer
${item.join('\n')}
`.trim();
    const type = (args[0] || '').toLowerCase();
    if (!item.includes(type)) return m.reply(lol);
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1;
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
    if (!who) return m.reply('Tag salah satu, atau ketik Nomernya!!');
    if (!(who in global.db.data.users)) return m.reply(`Pengguna ${who} tidak ada dalam database`);
    if (user[type] * 1 < count) return m.reply(`Jumlah ${type} Anda kurang ${count - user[type]}`);
    let txt = `\nApakah Anda yakin ingin melanjutkan?\n *(yes/no)*\n`;
    let confirm = `
*────「 TRANSFER 」────*
*Type:* ${type}
*Amount:* ${count} 
*To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}
*Current time:* ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
${txt}
Timeout: 60 detik
`.trim();
    let c = wm;
    let { key } = await conn.reply(m.chat, confirm, m, { mentions: [who] });
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        key,
        pesan: conn,
        timeout: setTimeout(() => (conn.sendMessage(m.chat, { delete: key }), delete confirmation[m.sender]), 60 * 1000)
    };
}

handler.before = async m => {
    if (m.isBaileys) return;
    if (!(m.sender in confirmation)) return;
    if (!m.text) return;
    let { timeout, sender, message, to, type, count, key, pesan } = confirmation[m.sender];
    if (m.id === message.id) return;
    let user = global.db.data.users[sender];
    let _user = global.db.data.users[to];
    if (/(✖️|n(o)?)/g.test(m.text.toLowerCase())) {
        pesan.sendMessage(m.chat, { delete: key });
        clearTimeout(timeout);
        delete confirmation[sender];
        return m.reply('Ditolak');
    }
    if (/(✔️|y(es)?)/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1;
        let _previous = _user[type] * 1;
        user[type] -= count * 1;
        _user[type] += count * 1;
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*────「 TRANSFER 」────*\n *Status:* Success\n *Type:* ${type}\n *Amount:* ${count}\n *To:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] });
        else {
            user[type] = previous;
            _user[type] = _previous;
            m.reply(`*────「 TRANSFER 」────*\n *Status:# Gagal\n *Item:* ${count} ${type}\n *Kepada:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] });
        }
        
        pesan.sendMessage(m.chat, { delete: key });
        clearTimeout(timeout);
        delete confirmation[sender];
    }
};

handler.help = ['transfer', 'tf'].map(v => v + ' [jenis] [jumlah] [@tag]');
handler.tags = ['rpg'];
handler.command = /^(transfer|tf)$/i;

handler.disabled = false;

module.exports = handler;

function isNumber(x) {
    return !isNaN(x);
}