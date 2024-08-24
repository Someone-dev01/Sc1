const { tmpdir } = require('os');
const path = require('path');
const fs = require('fs');
const { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, renameSync } = fs;

let handler = async (m, { args, text, usedPrefix, command }) => {
    let info = `${usedPrefix + command} <old name> | <new name>

*Example:*
${usedPrefix + command} inv | rpg-inv`;

    if (!args[0]) throw info;
    if (!args[1] === '|') throw `• contoh:
➞ ${usedPrefix + command} inv | rpg-inv`;
    if (!args[2]) throw `• contoh:
➞ ${usedPrefix + command} inv | rpg-inv`;

    let from = args[0];
    let to = args[2];

    let ar = Object.keys(plugins);
    let ar1 = ar.map(v => v.replace('.js', ''));
    if (!ar1.includes(args[0])) return m.reply(`*🗃️ TIDAK DITEMUKAN!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`);
    fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`);
    conn.reply(m.chat, `Berhasil mengubah "plugins/${from}.js" menjadi "plugins/${to}.js"`, m);
}

handler.help = ['rf', 'renamefile'].map(_ => _ + ' <old name> | <new name>');
handler.tags = ['owner'];
handler.command = /^(r(ename(file)?|f))$/i;
handler.owner = true;

module.exports = handler;