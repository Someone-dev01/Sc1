const delay = time => new Promise(res => setTimeout(res, time));

const handler = async (m, { conn, participants }) => {
    conn.level = global.db.data.users[m.sender];
    conn.fightnaga = conn.fightnaga ? conn.fightnaga : {};

    if (typeof conn.fightnaga[m.sender] !== "undefined" && conn.fightnaga[m.sender] === true) {
        return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`);
    }

    const users = participants.map(u => u.id);
    let lawan = users[Math.floor(users.length * Math.random())];

    while (typeof global.db.data.users[lawan] === "undefined" || lawan === m.sender) {
        lawan = users[Math.floor(users.length * Math.random())];
    }

    const lamaPertarungan = Acakin(8, 20);

    m.reply(`*Pet Kamu* (🦚griffin ${global.db.data.users[m.sender].griffin}) ⚔️menantang 🦚griffinnya *${conn.getName(lawan)}* (🦚griffin ${global.db.data.users[lawan].griffin}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`);

    conn.fightnaga[m.sender] = true;

    await delay(1000 * 60 * lamaPertarungan);

    const alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel'];
    const alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet'];

    let kesempatan = [];
    for (let i = 0; i < global.db.data.users[m.sender].griffin; i++) kesempatan.push(m.sender);
    for (let i = 0; i < global.db.data.users[lawan].griffin; i++) kesempatan.push(lawan);

    let pointPemain = 0;
    let pointLawan = 0;
    for (let i = 0; i < 10; i++) {
        const unggul = Acakin(0, kesempatan.length - 1);
        if (kesempatan[unggul] === m.sender) pointPemain += 1;
        else pointLawan += 1;
    }

    if (pointPemain > pointLawan) {
        const hadiah = (pointPemain - pointLawan) * 20000;
        global.db.data.users[m.sender].money += hadiah;
        global.db.data.users[m.sender].tiketcoin += 1;
        m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.data.users[m.sender].griffin}) MENANG melawan 🦚griffinnya *${conn.getName(lawan)}* (griffin ${global.db.data.users[lawan].griffin}) karena griffin🦚kamu ${alasanMenang[Acakin(0, alasanMenang.length - 1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`);
    } else if (pointPemain < pointLawan) {
        const denda = (pointLawan - pointPemain) * 100000;
        global.db.data.users[m.sender].money -= denda;
        global.db.data.users[m.sender].tiketcoin += 1;
        m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.data.users[m.sender].griffin}) KALAH melawan 🦚griffinnya *${conn.getName(lawan)}* (griffin ${global.db.data.users[lawan].griffin}) karena pet kamu ${alasanKalah[Acakin(0, alasanKalah.length - 1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`);
    } else {
        m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`);
    }

    delete conn.fightnaga[m.sender];
};

handler.help = ['fightgriffin'];
handler.tags = ['game'];
handler.command = /^(fightgriffin)$/i;
handler.limit = true;
handler.group = true;

module.exports = handler;

function Acakin(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}