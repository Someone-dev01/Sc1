const fetch = require('node-fetch');

const toM = (a) => '@' + a.split('@')[0];

const jarspy = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    args,
    command
}) => {
    const ps = groupMetadata.participants.map(v => v.id);
    const a = ps[Math.floor(Math.random() * ps.length)];
    conn.reply(m.chat, `*${toM(a)} Adalah Orang Yang ${text.toUpperCase()} Di Sini!*`, null, {
        mentions: [a]
    });
};

jarspy.help = ['is *<text>*']
jarspy.tags = ['fun'];
jarspy.command = /^is/i
jarspy.group = true;
jarspy.owner = false;
jarspy.limit = true;

module.exports = jarspy;