let afriza = m => m

afriza.before = async (m, { conn, isPrems, owner }) => {
    if (isPrems) {
        if (new Date() >= new Date(global.db.data.users[m.sender].premiumDate)) {
            conn.reply(m.chat, "_Maaf, waktu Premium Anda telah habis!_\n_Silakan hubungi owner untuk memperpanjang waktu Premium!_", m).then(() => {
                global.db.data.users[m.sender].premium = false;
                global.db.data.users[m.sender].premiumDate = 0; // Atur tanggal kedaluwarsa premium ke 0 untuk menandakan bahwa premium sudah habis
                const data = global.owner.filter(([id, isCreator]) => id && isCreator);
                conn.sendContact(m.chat, data.map(([id, name]) => ({ id, name })), m);
            });
        }
    }
}

module.exports = afriza