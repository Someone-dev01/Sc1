/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngroket)
    let _timers = (1000000 - __timers)
    let order = global.db.data.users[m.sender].roket
    let timers = clockString(_timers) 
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
    if (new Date - global.db.data.users[m.sender].lastngroket > 1000000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var mfabot = `🌕

▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
█████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`;

var mfabot2 = `🌕

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
█████████▀█████████████
🚀

➕ Dalam penerbangan...
`;

var mfabot3 = `🌕🚀

▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
█████████▀█████████████

➕ Sampai di lokasi tujuan...
`;

var mfabot4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`;

var hsl = `*—[ Hasil Ngeroket ${name} ]—*
➕ 💹 Uang = [ ${zero4} ]
➕ ✨ Exp = [ ${zero5} ] 		 
➕ 🚀 Penerbangan Selesai = +1
${rpgg}`;

var mfabot5 = `
*Waktunya ngeroket lagi kak😅...*
`;

global.db.data.users[m.sender].money += rbrb4;
global.db.data.users[m.sender].exp += rbrb5;
global.db.data.users[m.sender].roketk += 1;

setTimeout(() => {
    setTimeout(() => {
m.reply(`${mfabot5}`);
    }, 79200000);

    m.reply(`${hsl}`);
}, 27000);

setTimeout(() => {
    m.reply(`${mfabot4}`);
}, 25000);

setTimeout(() => {
    m.reply(`${mfabot3}`);
}, 20000);

setTimeout(() => {
    m.reply(`${mfabot2}`);
}, 15000);

setTimeout(() => {
    m.reply(`${mfabot}`);
}, 10000);

setTimeout(() => {
    m.reply('Mencari Lokasi Penerbangan...');
}, 0);

user.lastngroket = new Date * 1;
    } else m.reply(`Sepertinya anda sudah kecapekan silahkan istirahat dulu sekitar\n*${timers}*`);
}
afriza.help = ['roket'];
afriza.tags = ['rpg'];
afriza.command = /^(roket)$/i;
afriza.register = true;

module.exports = afriza;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    console.log({ms,h,m,s});
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}