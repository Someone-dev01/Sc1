let afriza = m => m

afriza.all = async function (m, { isBotAdmin }) {
    // Auto Clear Ketika Terdapat Pesan Yang Tidak Dapat Dilihat Di Wa Desktop
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

module.exports = afriza