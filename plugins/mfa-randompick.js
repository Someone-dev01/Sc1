const fetch = require('node-fetch');

const toM = (a) => '@' + a.split('@')[0];

const afriza = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    args,
    command
}) => {
    const ps = groupMetadata.participants.map(v => v.id);
    const a = ps[Math.floor(Math.random() * ps.length)];
    conn.reply(m.chat, `🥳 *${toM(a)} just won the giveaway!*`, null, {
        mentions: [a]
    });
};

afriza.command = afriza.help = ['randompick'];
afriza.tags = ['owner'];
afriza.group = true;
afriza.owner = true;

module.exports = afriza;