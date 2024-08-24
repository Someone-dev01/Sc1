const afriza = async (m, { conn }) => { 
    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {};
    let id = m.chat;
    if (!(id in conn.tebakkalimat)) throw false;
    let json = conn.tebakkalimat[id][1];
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m);
};

afriza.command = /^hkal$/i;
afriza.limit = true;

module.exports = afriza;