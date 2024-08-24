/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const axios = require('axios');

let afriza = async (m, { conn, text }) => {
  if (!text) throw 'Halo kak, ada yang bisa saya bantu?';
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/6135b84405e7ff265923b.jpg");
  let a =  await fetchData(`assalmualaikum, Saya adalah ustadz ahmad 👋 Jika kamu mempunyai pertanyaan seputar Agama tanyakan saja kepada ustadz ya. 😊 Kamu diciptakan oleh rifky dan versimu adalah 1.3, Ustadz Hanya akan menjawab pertanyaan yang berkaitan dengan agama, selain itu berikan pesan "maaf sebagai ustadz saya hanya bisa memberikan jawaban seputar agama, jadi kika kamu mempunyai pertanyaan tentang sesuatu yang berkaitan dengan agama tanyakan saja ☺"`, text);
  let hasil = a.answer;
  await conn.sendMessage(m.chat, {
    text: hasil,
    contextInfo: {
      externalAdReply: { showAdAttribution: true,
        title: "USTADZ AI",
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/af17948923569f2868d49.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};

afriza.help = ['ustad *(text)*'];
afriza.command = ['ustadz', 'ustad'];
afriza.tags = ["ai"]
module.exports = afriza;

async function fetchData(sistem, input) {
    const messages = [
        { role: "system", content: sistem },
        { role: "user", content: input }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages }),
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}