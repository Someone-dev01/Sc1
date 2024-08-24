let afriza = m => m

afriza.before = async function (m, { conn }) {
    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            await this.reply(m.chat, `Waktunya *${this.user.name}* untuk meninggalkan grup\nJangan lupa sewa lagi ya!`, null);
            await conn.delay(1000);
            await conn.groupLeave(m.chat);
            global.db.data.chats[m.chat].expired = 0;
        }
    }
}

module.exports = afriza