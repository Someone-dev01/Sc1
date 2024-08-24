/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

function afriza(m, { conn, text, groupMetadata }) {
    if (!text) throw `Contoh:
${usedPrefix + command} Alay`;
    let em = ['🥶', '🤨', '🗿', '🤔', '😫', '🤫', '🥴', '🤣', '😊', '😍'];

    let toM = a => '@' + a.split('@')[0];
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps.getRandom();
    let am = em.getRandom();
    conn.reply(m.chat, `Sii Paling *${text}* Adalah ${toM(a)} ${am}`, m, { mentions: [a] });
}

afriza.help = ['sipaling'].map(v => v + ' <teks>');
afriza.command = ['sipaling'];
afriza.tags = ['fun'];
afriza.group = true;

module.exports = afriza;

Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
};