/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const path = require("path");
const fs = require("fs");
const { readdirSync, statSync } = require("fs");

let afriza = async (m, { conn }) => {
    const sessionDir = path.resolve(__dirname, "../MFAsessions");
    const maxSessions = 200; // Jumlah sesi maksimum yang diizinkan
    const dayInMillis = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik

    try {
        const files = readdirSync(sessionDir).filter(file => file !== "creds.json");
        const credsFile = "creds.json";
        const credsFilePath = path.join(sessionDir, credsFile);
        
        let totalSize = 0;
        let lastModifiedTimeSum = 0; // Penjumlahan waktu modifikasi terakhir
        let latestFileName = ""; // Nama file terakhir
        let latestModifiedTime = 0; // Waktu modifikasi terakhir
        let totalSentMessages = 0; // Total pesan terkirim

        files.forEach((file) => {
            const filePath = path.join(sessionDir, file);
            const stats = statSync(filePath);
            const sessionData = JSON.parse(fs.readFileSync(filePath, "utf8"));
            totalSentMessages += sessionData.totalMessages || 0; // Pastikan totalMessages tidak undefined atau null

            totalSize += stats.size; // Total ukuran file dalam byte

            // Memeriksa apakah file ini adalah file terbaru
            if (stats.mtimeMs > latestModifiedTime) {
                latestModifiedTime = stats.mtimeMs;
                latestFileName = file;
            }

            lastModifiedTimeSum += stats.mtimeMs; // Menambahkan waktu modifikasi terakhir
        });

        const credsStats = statSync(credsFilePath);
        const credsSize = credsStats.size;

        const totalSizeKB = totalSize / 1024;
        const totalSizeMB = totalSizeKB / 1024;
        const totalSizeGB = totalSizeMB / 1024;
        const credsSizeKB = credsSize / 1024;
        const credsSizeMB = credsSizeKB / 1024;

        const totalSessions = files.length + 1; // Jumlah sesi termasuk creds.json
        const uniqueUsers = totalSessions; // Kita menggunakan jumlah file sebagai perkiraan jumlah pengguna unik
        const sessionPercentage = ((totalSessions / maxSessions) * 100).toFixed(2);

        let connectionLevel = "Stable"; // Tingkat koneksi default adalah stabil
        if (totalSessions >= 180 && totalSessions < 200) {
            connectionLevel = "Intermittent";
        } else if (totalSessions >= 200) {
            connectionLevel = "Unstable";
        }

        const storageUsagePercentage = ((totalSize / (1024 * 1024 * 1024)) / 5 * 100).toFixed(2); // Kami mengasumsikan batas maksimum penyimpanan adalah 5 GB

        // Perhitungan rata-rata waktu aktivitas dan frekuensi penggunaan sesi
        const avgActivityTimeInMillis = lastModifiedTimeSum / totalSessions; // Rata-rata waktu aktivitas dalam milidetik
        const avgActivityTimeDays = (Date.now() - avgActivityTimeInMillis) / dayInMillis; // Rata-rata waktu aktivitas dalam hari
        const usageFrequency = totalSessions / (avgActivityTimeDays > 0 ? avgActivityTimeDays : 1); // Frekuensi penggunaan sesi per hari

        // Informasi riwayat terakhir
        let lastHistory = "";
        if (files.length > 0) {
            const lastSession = files[files.length - 1]; // Ambil sesi terakhir dari daftar sesi
            lastHistory = `Recently deleted session: ${lastSession}`; // Gunakan sesi terakhir sebagai riwayat terakhir
        } else {
            lastHistory = "No recent history";
        }

        // Daftar top pengguna aktif
        let topUsers = "";
        if (files.length > 0) {
            // Misalnya, Anda ingin menampilkan 3 pengguna dengan sesi terbanyak
            const topUsersSessions = files.sort((a, b) => {
                const statsA = statSync(path.join(sessionDir, a));
                const statsB = statSync(path.join(sessionDir, b));
                return statsB.mtimeMs - statsA.mtimeMs; // Urutkan sesi berdasarkan waktu modifikasi terakhir secara descending
            }).slice(0, 3); // Ambil 3 sesi teratas

            // Ambil nama pengguna dari nama file sesi
            const topUsersNames = topUsersSessions.map(session => session.replace(".json", ""));
            topUsers = "Top Active Users:\n" + topUsersNames.join("\n");
        } else {
            topUsers = "No top active users";
        }

        // Daftar grup teratas dengan g.us
        const topGroups = files.filter(file => file.endsWith("g.us.json")).map(file => file.replace(".json", ""));

        // Informasi tambahan lainnya
        const additionalInfo = `
*Additional Information:*
- *History:* ${lastHistory}
- *Top Users:* ${topUsers}
- *Top Groups (g.us):*\n${topGroups.length > 0 ? topGroups.join("\n") : "No top groups"}
`;

        const info = `
*[ Info Session ]*

*Total Sessions:* ${totalSessions}
*Unique Users:* ${uniqueUsers}
*Total Size:* ${totalSize} bytes (${totalSizeKB.toFixed(2)} KB / ${totalSizeMB.toFixed(2)} MB / ${totalSizeGB.toFixed(2)} GB)
*Creds Size:* ${credsSize} bytes (${credsSizeKB.toFixed(2)} KB / ${credsSizeMB.toFixed(2)} MB)
*Connection Level:* ${connectionLevel}
*Storage Usage:* ${storageUsagePercentage}% of 5GB
*Latest Modified File:* ${latestFileName} (Modified: ${new Date(latestModifiedTime).toLocaleString()})
*Avg Activity Time:* ${Math.round(avgActivityTimeDays)} days
*Usage Frequency:* ${Math.round(usageFrequency)} times per day
*Percentage:* ${sessionPercentage}%
${additionalInfo}
`;

        conn.reply(m.chat, info, m);
    } catch (e) {
        console.error(e);
        conn.reply(m.chat, "Failed to check session list", m);
    }
};

afriza.help = ["sessioninfo"];
afriza.tags = ["owner"];
afriza.command = /^(sessionsinfo|infosessi)$/i;
afriza.rowner = true;

module.exports = afriza;