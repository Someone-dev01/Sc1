/*
 Script by afriza 
 IG : @afriza_16f
 WhatsApp : 083174059236
*/

const axios = require("axios");

let afriza = async (m, { text }) => {
  if (!text) return m.reply("Uhmm");

  try {
    const audioBuffer = await getVoiceBeastAudio(text);
    
    if (audioBuffer) {
      await conn.sendFile(m.chat, audioBuffer, 'haya.mp3', '', m);
    } else {
      m.reply("Gagal mengirim audio, terjadi kesalahan dalam proses.");
    }
  } catch (error) {
    console.error(error);
    m.reply("Terjadi kesalahan dalam memproses permintaan.");
  }
}

afriza.help = ["ttsmrb *(text)*"];
afriza.tags = ["ai"];
afriza.command = ["ttsmrb", "ttsmrbeast"];
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