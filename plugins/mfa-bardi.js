const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');

const searchBardImage = async (query, imageUrl) => {
    try {
        let apiUrl = `https://raiden-api.up.railway.app/api/ai/bard-image-searching?q=${encodeURIComponent(query)}&url=${encodeURIComponent(imageUrl)}`;
        let response = await axios.get(apiUrl);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to search Bard image. Please try again.');
    }
}

const handler = async (m, { conn, args, usedPrefix, text }) => {
    let quotedMessage = m.quoted ? m.quoted : m;
    let mime = (quotedMessage.msg || quotedMessage).mimetype || '';
    if (!mime) {
        return conn.reply(m.chat, 'Please send a reply image', m);
    }
    let image = await quotedMessage.download();
    let imageUrl = await uploadImage(image);
    if (!text) {
        return conn.reply(m.chat,  `• *Example :* ${usedPrefix}bardi What is this?`, m);
    }
    let searchingMsg = await conn.reply(m.chat, '```Searching for an answer...🔍```', m);
    const start = new Date(); // Waktu mulai pencarian
    try {
        let result = await searchBardImage(text, imageUrl);
        const end = new Date(); // Waktu selesai pencarian
        const timeTaken = (end - start) / 1000; // Perhitungan waktu dalam detik
        await conn.sendMessage(m.chat, { text: `Result: ${result}`, quoted: searchingMsg });
        await conn.sendMessage(m.chat, { text: `Time taken: ${timeTaken.toFixed(2)} seconds`, quoted: searchingMsg });
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Failed to search Bard image. Please try again', m);
    } finally {
        // Menambahkan pengeditan pesan "Waiting..." saat mencari hasil selesai
        await conn.sendMessage(m.chat, { text: '✅ Done!', delete: searchingMsg });
    }
}

handler.help = ['bardi *<text>*'];
handler.tags = ['ai'];
handler.command = /^(bardi)$/i;
handler.premium = false;

module.exports = handler;