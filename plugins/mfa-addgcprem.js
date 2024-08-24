/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { MessageType } = require('@adiwajshing/baileys');

const addgcprem = async (m, { conn, participants, args }) => {
    if (args.length !== 1) {
        return conn.reply(m.chat, 'Format yang kamu masukkan salah. Contoh: .addgcprem 30d (untuk 30 hari), .addgcprem 30h (untuk 30 jam), .addgcprem 30m (untuk 30 menit)', m);
    }
    
    let duration = args[0];
    let timeUnit = duration.slice(-1);
    let timeValue = parseInt(duration.slice(0, -1));
    let jumlahHari = 0;

    switch (timeUnit) {
        case 'd':
            jumlahHari = timeValue * 24 * 60 * 60 * 1000;
            break;
        case 'h':
            jumlahHari = timeValue * 60 * 60 * 1000;
            break;
        case 'm':
            jumlahHari = timeValue * 60 * 1000;
            break;
        default:
            return conn.reply(m.chat, 'Format waktu yang dimasukkan salah. Contoh: .addgcprem 30d (untuk 30 hari), .addgcprem 30h (untuk 30 jam), .addgcprem 30m (untuk 30 menit)', m);
    }

    let successMessage = `Berhasil menambahkan premium ke seluruh anggota grup. Total anggota grup: ${participants.length}`;

    for (let member of participants) {
        let hl = no(member.id);
        if (!global.db.data.users[hl]) {
            global.db.data.users[hl] = {}; // Membuat objek jika belum ada
        }
        global.db.data.users[hl].premium = true;
        let now = new Date() * 1;
        
        if (now < global.db.data.users[hl].premiumDate) global.db.data.users[hl].premiumDate += jumlahHari;
        else global.db.data.users[hl].premiumDate = now + jumlahHari;
        
        let durationText = msToText(jumlahHari);
        conn.reply(hl, successMessage, m);
    }

    conn.reply(m.chat, successMessage, m);
};

addgcprem.help = ['addgcprem <durasi>'];
addgcprem.tags = ['group'];
addgcprem.command = /^(addgcprem)$/i;
addgcprem.owner = true;
addgcprem.group = true;

module.exports = addgcprem;

function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
}

function msToText(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    if (days > 0) return `${days} day(s)`;
    if (hours > 0) return `${hours} hour(s)`;
    if (minutes > 0) return `${minutes} minute(s)`;
    return '0 minute(s)';
}