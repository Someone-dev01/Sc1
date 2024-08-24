const handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {};
    const id = m.chat;
    if (!(id in conn.tebakkabupaten)) throw false;
    const json = conn.tebakkabupaten[id][1];
    conn.reply(m.chat, '```' + json.title.replace(/[AIUEOaiueo]/ig, '_') + '```', m);
};

handler.command = /^hkab$/i;
handler.limit = true;

module.exports = handler;