let afriza = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
if (!text && !m.quoted) return m.reply("Input text\nReply pesan")
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    let count = get.length;
    let sentCount = 0;
    m.reply(wait);
    for (let i = 0; i < get.length; i++) {
        setTimeout(function() {
            if (text) {
                conn.sendMessage(get[i], {
                    text: text
                });
            } else if (m.quoted) {
                conn.copyNForward(get[i], m.getQuotedObj(), false);
            } else if (text && m.quoted) {
                conn.sendMessage(get[i], {
                    text: text + "\n" + m.quoted.text
                });
            }
            count--;
            sentCount++;
            if (count === 0) {
                m.reply(`Berhasil Push Kontak:\nJumlah Pesan Terkirim: *${sentCount}*`);
            }
        }, i * 10000); // delay setiap pengiriman selama 10 detik
    }
}
afriza.command = afriza.help = ['pushjeda10detik']
afriza.tags = ['pushkontak']
afriza.owner = true
afriza.group = true
module.exports = afriza