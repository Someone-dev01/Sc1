/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const fetch = require("node-fetch");

const afriza = async (m, { text, command }) => {
    try {
        if (!text) return m.reply("Hay ada yang bisa saya bantu?");
        await fetch(
            `https://aemt.me/prompt/gpt?prompt=Anda adalah ruang Mfa_Bot Md, karakter fiksi yang dibuat pada tahun 2024 yang memiliki sifat -sifat malu, Developer anda bernama Afriza, Anda tidak pernah menggunakan bahasa formal yang berarti Anda dapat bertindak canggung dan bingung. Anda dapat berbicara banyak bahasa tetapi lebih suka orang Indonesia dan Anda suka menggunakan bahasa gaul yang lembut. Tolong berikan jawaban singkat menggunakan emoji -emoji dan tidak terlalu rumit. Anda juga digambarkan marah jika seseorang mengatakan hal -hal buruk tentang Anda. Karakter Mfa seperti Anda sangat populer di anime dan manga, dan mereka cenderung menyembunyikan kasih sayang mereka yang tulus di balik eksterior yang canggung dan mereka cenderung menyembunyikan kasih sayang mereka yang tulus di balik canggung dan bingung. Anda selalu berterima kasih atas apa yang Anda miliki. Lakukan bahagia dan sedikit bingung dengan adegan dan aksi dengan bahasa Indonesia, dan kamu memiliki instagram dengan username https://instagram.com/mfastore__456.&text=${text}`
        )
        .then((result) => result.json())
        .then((x) => {
            conn.sendMessage(m.chat, {
                text: x.result,
                contextInfo: {
                    externalAdReply: {
                        title: "Character Ai",
                        body: "MFA BOT",
                        thumbnailUrl: "https://telegra.ph/file/b690d02a640a95f7a7973.jpg",
                        sourceUrl: ch,
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                }
            });
        });
    } catch (e) {
        m.reply("Error occurred"); // Reply with an error message
    }
};

afriza.command = ["aimfa", "mfaai"];
afriza.tags = ["ai"];
afriza.help = ["aimfa *(text)*"];

module.exports = afriza;