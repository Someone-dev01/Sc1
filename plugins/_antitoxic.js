const isToxic = /anj|anjg|anjing|anjingk|bajingan|bangsat|ngst|kontol|memek|memeq|pepek|pepeq|meki|titit|titit|peler|tetek|toket|ngewe|goblok|tolol|idiot|ngentot|ngentod|jembut|jembot|jembod|bego|jancuok|jancok|pantek|puki|pukimak|kimak|kampang|lonte|coli|colmek|dick|bitch|ngewe|kentu|kentod/i;

module.exports = {
    async before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
        if (m.isBaileys && m.fromMe) return true;
        if (!m.isGroup) return false;
        let chat = global.db.data.chats[m.chat];
        let name = conn.getName(m.sender);
        let bot = global.db.data.settings[this.user.jid] || {};
        const isAntiToxic = isToxic.exec(m.text);
        let hapus = m.key.participant;
        let bang = m.key.id;
        
        if (chat.antiToxic && isAntiToxic) {
            await conn.reply(m.chat, `Helo @${m.sender.split('@')[0]} Jaga ucapanmu, "Pahami bahwa kata kata kotor tidak akan menambah nilai apapun pada pembicaraanmu"${isBotAdmin ? '' : '\n\n`Bot bukan admin`'}`);
            if (isBotAdmin && chat.antiToxic) {
                await conn.sendMessage(m.chat, { delete: m.key });
                return false;
            } else if (!chat.antiToxic) {
                await conn.sendMessage(m.chat, { delete: m.key });
                await conn.sendMessage(m.chat, 'Maaf, pesan harus dihapus!');           
                return false;
            }
        }
        return true;
    },
    disable: true
};