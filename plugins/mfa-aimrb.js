/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const fetch = require('node-fetch');
const axios = require('axios');

// Fungsi untuk melakukan pengambilan data
const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

let afriza = async (m, { text }) => {
  if (!text) return m.reply("Uhmm");

  try {
    //gpt4RestApiRaiden
    const apiUrl = `https://raiden-api.up.railway.app/api/ai/Multi-Gpt?q=${text}&model=gpt-4`;
    const cai = await fetchData(apiUrl);
    const gpt4Response = cai.data.gpt;
    //TtsMrBeast
    const audioBuffer = await getVoiceBeastAudio(gpt4Response);
    
    if (audioBuffer) {
      await conn.sendFile(m.chat, audioBuffer, 'haya.mp3', '', m);
    } else {
      m.reply("Gagal mengirim audio, terjadi kesalahan dalam proses.");
    }
  } catch (error) {
    console.error(error);
    m.reply("Terjadi kesalahan dalam memproses permintaan.");
  }
};

afriza.help = ["aimrb *(text)*"];
afriza.tags = ["ai"];
afriza.command = ["aimrbeast", "aimrb", "aiv"];
afriza.limit = true;
afriza.premium = false;

module.exports = afriza;

//funcationmek
async function getVoiceBeastAudio(text) {
  try {
    const response = await axios.get(`https://raiden-api.up.railway.app/api/ai/voice-mrbeast?text=${encodeURIComponent(text)}`, {
      responseType: 'arraybuffer',
    });

    if (response.status === 200) {
      return Buffer.from(response.data);
    } else {
      console.error('Gagal mengambil audio:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    return null;
  }
}