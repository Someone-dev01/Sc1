async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
        Subuh: "04:22",
        Dzuhur: "11:54",
        Ashar: "15:20",
        Maghrib: "17:54",
        Isya: "19:07",
    };
    const date = new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `*[ Reminder message ]* Hai kak @${m.sender.split("@")[0]},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah sholat😇\n\n*Pukul: ${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`;
            this.autosholat[id] = [
                this.reply(m.chat, caption, m),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}

module.exports = {
    before,
};