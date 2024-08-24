const afriza = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : '';
    if (!who || who.includes(conn.user.jid)) throw `*Tag Yang Mau Di Jadiin Admin`;
    try {
        await conn.groupParticipantsUpdate(m.chat, [who], 'promote');
        m.reply(`Success promote ${who}`);
    } catch (afriza) {
        console.log(afriza);
    }
};

afriza.help = ['promote'];
afriza.tags = ['group'];
afriza.command = /^(promote)$/i;

afriza.admin = true;
afriza.botAdmin = true;
afriza.group = true;

module.exports = afriza;