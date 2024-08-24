/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

async function before(m) {
    let conn = this.conn; // Pastikan Anda memiliki koneksi
    if (!conn) return; // Pastikan bahwa koneksi sudah tersedia

    let id = m.chat;

    // Tentukan ID grup yang ingin Anda atur secara otomatis
    const targetGroup = '120363144261636702@g.us';

    // Pastikan bahwa hanya grup target yang akan diatur secara otomatis
    if (id !== targetGroup) return;

    // Tentukan jam untuk membuka dan menutup grup secara otomatis
    const openTime = "08:00"; // Waktu untuk membuka grup
    const closeTime = "23:35"; // Waktu untuk menutup grup

    const date = new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    // Periksa apakah grup sudah dalam keadaan sesuai dengan waktu saat ini
    let isClose = timeNow < openTime || timeNow >= closeTime ? 'announcement' : 'not_announcement';

    try {
        // Periksa terlebih dahulu status grup sebelum mengubahnya
        let currentSettings = await conn.groupSetting(id);

        // Jika status grup tidak sama dengan yang diinginkan, maka perbarui pengaturan grup
        if (currentSettings.announcement !== isClose) {
            await conn.groupSettingUpdate(id, { announcement: isClose });

            // Kirim pesan sesuai dengan status grup yang diperbarui
            if (isClose === 'announcement') {
                let caption = `Grup telah ditutup secara otomatis.`;
                await this.reply(m.chat, caption, m);
            } else {
                let caption = `Grup telah dibuka secara otomatis.`;
                await this.reply(m.chat, caption, m);
            }
        }
    } catch (error) {
        console.error(error); // Tangani kesalahan jika terjadi
    }
}

module.exports = {
    before,
};