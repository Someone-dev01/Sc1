/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

premium yang ditambahkan ke dalam grup:const removegcprem = async (m, { conn, participants, args }) => {
    if (args.length !== 1) {
        return conn.reply(m.chat, 'Format yang kamu masukkan salah. Contoh: .removegcprem @user', m);
    }
    
    let target = args[0];
    let hl = no(target) + "@s.whatsapp.net";

    if (!global.db.data.users[hl]) {
        return conn.reply(m.chat, 'Pengguna tidak ditemukan dalam database.', m);
    }

    if (!global.db.data.users[hl].premium) {
        return conn.reply(m.chat, 'Pengguna tidak memiliki akses premium di awal.', m);
    }

    global.db.data.users[hl].premium = false;
    global.db.data.users[hl].premiumDate = 0;

    conn.reply(m.chat, `Daftar premium untuk *@${hl.split('@')[0]}* telah dihapus dari grup.`, m, { contextInfo: { mentionedJid: [hl] } });
};

removegcprem.help = ['removegcprem <@user>'];
removegcprem.tags = ['group'];
removegcprem.command = /^(removegcprem)$/i;
removegcprem.owner = true;
removegcprem.admin = false;

module.exports = removegcprem;