const { WAProto } = require('@adiwajshing/baileys');

let afriza = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAProto.WebMessageInfo;
    let which = command.replace(/add/i, '');
    if (!m.quoted) throw `Balas Pesan Dengan Perintah *${usedPrefix + command}*`;
    if (!text) throw `Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`;
    let msgs = global.db.data.msgs;
    if (text in msgs) throw `${text} Telah Terdaftar!`;
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON();
    if (global.db.data.chats[m.chat].getmsg) return m.reply(`Berhasil Menambahkan Pesan ${text}\n\nAkses dengan mengetik namanya`.trim());
    else return m.reply(`Berhasil Menambahkan Pesan ${text}\n\nAkses Dengan ${usedPrefix}get${which} ${text}`);
};
afriza.help = ['addresvn', 'addresmsg', 'addresvideo', 'addresaudio', 'addresimg', 'addresstiker', 'addresgif'];
afriza.tags = ['tools'];
afriza.owner = true,
afriza.command = /^addrespon|addres(vn|msg|video|audio|img|stic?ker|gif)$/;

module.exports = afriza;