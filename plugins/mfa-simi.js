const axios = require('axios');
let fetch = require('node-fetch');

let handler = m => m;

handler.before = async (m) => {
    let chat = db.data.chats[m.chat];
    if (m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!') || m.text.startsWith('/') || m.text.startsWith('\/')) return;
    if (chat.simi && !chat.isBanned) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return;
        let simi = await getMessage(m.text, 'id');
        if (simi == "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.") return m.reply('simi nya gk tau bang');

        m.reply(simi);

        return !0;
    }

    return !0;
};

module.exports = handler;

async function getMessage(yourMessage, langCode) {
    const res = await axios.post('https://api.simsimi.vn/v2/simtalk',
        new URLSearchParams({
            'text': yourMessage,
            'lc': langCode
        })
    );

    if (res.status > 200)
        throw new Error(res.data.success);

    return res.data.message;
}