/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngtaxy)
    let _timers = (600000 - __timers)
    let order = global.db.data.users[m.sender].taxy
    let timers = clockString(_timers) 
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
    if (new Date - global.db.data.users[m.sender].lastngtaxy > 600000) {
let randomgw1 = `${Math.floor(Math.random() * 10)}`
let randomgw2 = `${Math.floor(Math.random() * 10)}`
let randomgw4 = `${Math.floor(Math.random() * 5)}`
let randomgw3 = `${Math.floor(Math.random() * 10)}`
let randomgw5 = `${Math.floor(Math.random() * 10)}`

.trim()

let tyty1 = (randomgw1 * 2)
let tyty2 = (randomgw2 * 11) 
let tyty3 = (randomgw3 * 1)
let tyty4 = (randomgw4 * 15629)
let tyty5 = (randomgw5 * 120)

var mfa1 = `${tyty1}`
var mfa2 = `${tyty2}`
var mfa3 = `${tyty3}`
var mfa4 = `${tyty4}`
var mfa5 = `${tyty5}`

var mfabot = `

Mendapatkan Orderan...
`;

var mfabot2 = `

🚖🚘⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏢🏢🏢🏢🚦  🚦 🏢       

➕ Mengantar ke tujuan....
`;
var mfabot3 = `

⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⚠️⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🚘⬛⬛
🏢🏢🏢🏢🚦  🚦 🏢       

➕ Sampai di tujuan...
`;

var mfabot4 = `
➕ 💹Menerima gaji....     
`;

var hslty = `
*—[ Taxi Result for ${name} ]—*
➕ 💹 Money = [ ${mfa4} ]
➕ ✨ Exp = [ ${mfa5} ] 		 
➕ 🚖 Taxi Trip Completed = +1
 ${rpgg}
`;

var mfabot5 = `
Waktunya untuk perjalanan taxy lagi kak 😅...
`;

global.db.data.users[m.sender].money += tyty4;
global.db.data.users[m.sender].exp += tyty5;
global.db.data.users[m.sender].taxy += 1;

setTimeout(() => {
    setTimeout(() => {
m.reply(`${mfabot5}`);
    }, 79200000);

    m.reply(`${hslty}`);
}, 28000);

setTimeout(() => {
    m.reply(`${mfabot4}`);
}, 26000);

setTimeout(() => {
    m.reply(`${mfabot3}`);
}, 21000);

setTimeout(() => {
    m.reply(`${mfabot2}`);
}, 16000);

setTimeout(() => {
    m.reply(`${mfabot}`);
}, 11000);

setTimeout(() => {
    m.reply('Mencari Pelanggan...');
}, 0);

user.lastngtaxy = new Date * 1;
    } else m.reply(`Sepertinya Anda kecapekan silakan istirahat dulu sekitar \n*${timers}*`);
}
afriza.help = ['taxy'];
afriza.tags = ['rpg'];
afriza.command = /^(taxy)$/i;
afriza.register = true;

module.exports = afriza;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    console.log({ms,h,m,s});
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}