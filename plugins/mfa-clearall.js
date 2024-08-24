const handler = async (m, { conn, args, usedPrefix, command }) => {
    const { key } = await conn.sendMessage(m.chat, { text: 'Sabar Lagi Hapus Semua Pesan' }); //Pengalih isu
    const chatIdsToDelete = Object.values(conn.chats).filter(item => /(@g\.us)$/.test(item.id)).map(item => item.id);
    const deletedGroupCount = chatIdsToDelete.length;
    
    for (const id of chatIdsToDelete) {
        await conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, id);
    }

    try {
        const chatIdsToDeletee = Object.values(conn.chats).filter(item => /(@[gs].whatsapp.net)$/.test(item.id)).map(item => item.id);
        const deletedChatCount = chatIdsToDeletee.length;

        for (const id of chatIdsToDeletee) {
            await conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, id);
        }

        await conn.sendMessage(m.chat, { text: `*Jumlah Group:* ${deletedGroupCount}\n*Jumlah Chat:* ${deletedChatCount}`, 'extendedTextMessage': { 'text': 'Jumlah Group dan Chat telah dihapus.' }, 'messageTimestamp': new Date().getTime(), 'quotedMessage': { 'extendedTextMessage': { 'text': 'Jumlah Group dan Chat telah dihapus.' } } });
    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, 'Terjadi kesalahan dalam menghapus Group & Chat.', m);
    }
};

handler.help = ['clearall'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(clearall)$/i;

module.exports = handler;