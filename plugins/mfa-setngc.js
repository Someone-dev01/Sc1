const handler = async (m, { conn, args, text }) => {
    if (!text) throw `*[Info] Masukkan teks*`;
    try {
        let text = args.join` `;
        if (!args || !args[0]) {
            // Handle case when no arguments are provided
        } else {
            conn.groupUpdateSubject(m.chat, text);
        }
    } catch (e) {
        throw '*[Info] Error*';
    }
};

handler.help = ['setnamegc'].map(v => v + ' <text>');
handler.tags = ['group'];
handler.command = /^(setnamegc|setngc)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

module.exports = handler;