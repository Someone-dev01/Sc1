let afriza = async (m, { conn, text, usedPrefix }) => {
    function no(number){
        return number.replace(/\s/g,'').replace(/([@+-])/g,'')
    }

    if (!text) return conn.reply(m.chat, `Mana nomornya?`, m);
    
    text = no(text) + "@s.whatsapp.net";
    
    // Memeriksa apakah objek global.db.data.users[text] sudah ada
    if (!global.db.data.users[text]) {
        global.db.data.users[text] = {}; // Membuat objek jika belum ada
    }
    
    // Mengatur properti registered dari objek global.db.data.users[text] menjadi true
    global.db.data.users[text].registered = true;
    
    // Mengirim balasan
    conn.reply(m.chat, `*Berhasil mendaftarkan paksa @${text.split('@')[0]}.*`, m, { contextInfo: { mentionedJid: [text] } });
};
    

afriza.help = ['daftarp'];
afriza.tags = ['owner', 'info'];
afriza.command = /^daftarpaksa|daftarp|dfp$/i;
afriza.owner = true;
afriza.fail = null;

module.exports = afriza;