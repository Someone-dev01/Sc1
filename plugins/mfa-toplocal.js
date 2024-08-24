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

let afriza = async (m, { conn, participants }) => {
    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key,
        }
    })
let member = participants.map(u => u.id);
    let afriza = {};
    for (let i = 0; i < member.length; i++) {
        if (typeof global.db.data.users[member[i]] != 'undefined' && member[i] != conn.user.jid && member[i] != conn.user.jid.split('@')[0] + '@s.whatsapp.net') {
            afriza[member[i]] = {
                money: global.db.data.users[member[i]].money,
                level: global.db.data.users[member[i]].level,
                limit: global.db.data.users[member[i]].limit,
                exp: global.db.data.users[member[i]].exp,
                balance: global.db.data.users[member[i]].balance
            };
        }
    }
    let money = Object.entries(afriza).sort((a, b) => b[1].money - a[1].money);
    let limit = Object.entries(afriza).sort((a, b) => b[1].limit - a[1].limit);
    let level = Object.entries(afriza).sort((a, b) => b[1].level - a[1].level);
    let exp = Object.entries(afriza).sort((a, b) => b[1].exp - a[1].exp);
    let balance = Object.entries(afriza).sort((a, b) => b[1].balance - a[1].balance);
    let topMoney = money.map(v => v[0]);
    let topLimit = limit.map(v => v[0]);
    let topLevel = level.map(v => v[0]);
    let topExp = exp.map(v => v[0]);
    let topBalance = balance.map(v => v[0]);
    let isMoney = Math.min(10, money.length);
    let isLimit = Math.min(10, limit.length);
    let isLevel = Math.min(10, level.length);
    let isExp = Math.min(10, exp.length);
    let isBalance = Math.min(10, balance.length);
    let text = `*──「 Top Local Group 」──*\n`;
    text += `Local Group: *${await conn.getName(m.chat)}*\n\n`;
    text += `*──「 Top 10 Local Limit 」──*\n`;
    text += `Kamu peringkat: *${topLimit.indexOf(m.sender) + 1}* dari *${member.length}* user\n\n`;
    text += limit.slice(0, isLimit).map(([user, data], i) => `${i + 1}. @${user.split`@`[0]}\n      • Limit: ${formatNumber(data.limit)}\n`).join('\n');
    text += `${isLimit > 10 ? '\nDan masih banyak lagi...\n\n' : '\n'}`;
    text += `*──「 Top 10 Local Level 」──*\n`;
    text += `Kamu peringkat: *${topLevel.indexOf(m.sender) + 1}* dari *${member.length}* user\n\n`;
    text += level.slice(0, isLevel).map(([user, data], i) => `${i + 1}. @${user.split`@`[0]}\n      • Level: ${data.level}\n`).join('\n');
    text += `${isLevel > 10 ? '\nDan masih banyak lagi...\n\n' : '\n'}`;
    text += `*──「 Top 10 Local Money 」──*\n`;
    text += `Kamu peringkat: *${topMoney.indexOf(m.sender) + 1}* dari *${member.length}* user\n\n`;
    text += money.slice(0, isMoney).map(([user, data], i) => `${i + 1}. @${user.split`@`[0]}\n      • Money: ${formatNumber(data.money)}\n`).join('\n');
    text += `${isMoney > 10 ? '\nDan masih banyak lagi...\n\n' : '\n'}`;
    text += `*──「 Top 10 Local XP 」──*\n`;
    text += `Kamu peringkat: *${topExp.indexOf(m.sender) + 1}* dari *${member.length}* user\n\n`;
    text += exp.slice(0, isExp).map(([user, data], i) => `${i + 1}. @${user.split`@`[0]}\n      • XP: ${formatNumber(data.exp)}\n`).join('\n');
    text += `${isExp > 10 ? '\nDan masih banyak lagi...\n\n' : '\n'}`;
    text += `*──「 Top 10 Local Balance 」──*\n`;
    text += `Kamu peringkat: *${topBalance.indexOf(m.sender) + 1}* dari *${member.length}* user\n\n`;
    text += balance.slice(0, isBalance).map(([user, data], i) => `${i + 1}. @${user.split`@`[0]}\n      • Balance: ${formatNumber(data.balance)}\n`).join('\n');
    text += `${isBalance > 10 ? '\nDan masih banyak lagi...\n\n' : '\n'}`;
    m.reply(text);
};

afriza.command = /^toplokal|toplocal$/i
afriza.tags = ["xp", "main"];
afriza.help = ["toplocal"];
afriza.register = true;
afriza.group = true;

module.exports = afriza;

function formatNumber(num) {
    let formatted = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return formatted;
}