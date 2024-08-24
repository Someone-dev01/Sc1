let afriza = async (m, { conn, text }) => {
    let chat = global.db.data.chats[m.chat];
    if (chat.autoReact) {
        conn.sendMessage(m.chat, {
            react: {
                text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎','😪','🤔','🤯','🤢','🤮','😛','🤫','🥶','🙈','🙉','🙊','❤️','🧡','💛','💚','💙','💜'])}`,
            key: m.key,
            }
        });
    }
}

afriza.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i;
afriza.command = new RegExp;
afriza.mods = false;

module.exports = afriza;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}