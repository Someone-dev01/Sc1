/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let cp = require('child_process');
let { promisify } = require('util');
let exec = promisify(cp.exec).bind(cp);

let afriza = async (m, { conn }) => {
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    let o;
    try {
        o = await exec('ls -a'); // Perintah untuk menampilkan semua file di dalam direktori saat ini
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}

afriza.help = ['disk'];
afriza.tags = ['info'];
afriza.command = /^(disk)$/i;
afriza.premium = false;
afriza.owner = true;

module.exports = afriza;