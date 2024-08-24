/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { MessageType } = require('@adiwajshing/baileys');

const delgcprem = async (m, { conn, participants, args }) => {
    let successMessage = `Berhasil menghapus premium dari seluruh anggota grup. Total anggota grup: ${participants.length}`;

    for (let member of participants) {
        let hl = no(member.id);
        if (!global.db.data.users[hl]) {
            global.db.data.users[hl] = {}; // Membuat objek jika belum ada
        }
        global.db.data.users[hl].premium = false;
        global.db.data.users[hl].premiumDate = 0; // Menghapus tanggal premium
        conn.reply(hl, successMessage, m);
    }

    conn.reply(m.chat, successMessage, m);
};

delgcprem.help = ['delgcprem'];
delgcprem.tags = ['group'];
delgcprem.command = /^(delgcprem)$/i;
delgcprem.owner = true;
delgcprem.group = true;

module.exports = delgcprem;

function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
}