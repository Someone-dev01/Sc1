const badwordRegex = /anj|anjg|anjing|anjingk|bajingan|bangsat|ngst|kontol|memek|memeq|pepek|pepeq|meki|titit|titit|peler|tetek|toket|ngewe|goblok|tolol|idiot|ngentot|ngentod|jembut|jembot|jembod|bego|jancuok|jancok|pantek|puki|pukimak|kimak|kampang|lonte|coli|colmek|dick|bitch/i;

async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return;
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    
    // Mengambil teks dari pesan
    let text = m.text;
    
    // Melakukan pengecekan apakah pesan mengandung kata-kata kotor
    let isBadword = badwordRegex.test(text);
    
    // Jika pesan mengandung kata-kata kotor dan berada di grup yang memiliki fitur anti badword
    if (isBadword && chat.antiBadword && m.isGroup) {
        // Menghapus pesan yang mengandung kata-kata kotor
        await this.deleteMessage(m.chat, [m.key.id]);
        
        // Memberikan peringatan kepada pengguna
        user.warning += 1;
        m.reply(`${user.warning >= 10 ? '*📮 Warning Kamu Sudah Mencapai 10 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

あ Warning: ${user.warning} / 10

[❗] Jika warning mencapai 10 Kamu akan dikeluarkan dari group

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`);
        
        // Mengeluarkan pengguna dari grup jika sudah mencapai batas peringatan
        if (user.warning >= 10) {
            user.warning = 0;
            await this.groupRemove(m.chat, [m.sender]);
        }
    }
    
    return true;
}

module.exports = { before };