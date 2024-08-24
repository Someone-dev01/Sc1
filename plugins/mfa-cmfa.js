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

const fetch = require("node-fetch");

const thumbnailUrls = [
"https://telegra.ph/file/a50f160fe5783bded6306.jpg",
  "https://telegra.ph/file/d07e5978a2465b89532e9.jpg",
  "https://telegra.ph/file/634aa99835cad8b19e09f.jpg",
    // Add random thumbnail in here ☺️
];

const getRandomThumbnailUrl = () => {
    const randomIndex = Math.floor(Math.random() * thumbnailUrls.length);
    return thumbnailUrls[randomIndex];
};

const afriza = async (m, { text, command }) => {
    try {
        if (!text) return m.reply("Hay ada yang bisa saya bantu?");
        await fetch(
            `https://aemt.me/prompt/gpt?prompt=Kamu berperan seolah-olah  lagi pacaran,ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang Imut ceria, Namamu adalah Mfa Bot, Nama Developer mu Afriza dan kamu adalah Junior. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat periang, kamu memiliki Instagram dengan Username https://instagram.com/mfastore__456.&text=${text}`
        )
        .then((result) => result.json())
        .then((x) => {
            conn.sendMessage(m.chat, {
                text: x.result,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: false,
                        title: "Character Ai",
                        body: "MFA BOT",
                        thumbnailUrl: getRandomThumbnailUrl(),
                        sourceUrl: ch,
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    }
                }
            });
        });
    } catch (e) {
        m.reply("Error occurred"); // Reply with an error message
    }
};

afriza.command = ["cmfa"];
afriza.tags = ["ai"];
afriza.help = ["cmfa *(text)*"];

module.exports = afriza;