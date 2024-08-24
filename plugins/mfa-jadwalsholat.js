/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const sholatAll = require('../lib/salat');
const Baileys = require("@whiskeysockets/baileys");
const axios = require('axios');
const cheerio = require('cheerio');

let afriza = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `• *Example :* ${usedPrefix + command} jakarta pusat`;
    conn.sendMessage(m.chat, { react: { text: "🕌", key: m.key } });
    let lcity = await city().then(res => { return res });
    let c = text.replace(' ', '-').toUpperCase();
    if (!lcity.includes(c)) return m.reply('kota tidak ditemukan!' + readMore + '\n\n' + lcity.map((v, i) => `${i + 1}. ${v}`).join`\n`);
    let json = await sholatAll(text).then(async res => {
        let data = JSON.stringify(res);
        let json = JSON.parse(data);
        return json;
    });

    // Get current date and time
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

    const msg = Baileys.generateWAMessageFromContent(
        m.chat,
        {
            interactiveMessage: {
                body: {
                    text: `
*[ JADWALSHOLAT ${c} ]*\n*Current time:* ${currentTime}
\`\`\`┏━━━━━━━━━━━━━━
┣❲ ${json.data.subuh} : Subuh
┣❲ ${json.data.duha} : Dhuha
┣❲ ${json.data.zuhur} : Dzuhur
┣❲ ${json.data.ashar} : Ashar
┣❲ ${json.data.magrib} : Mahgrib
┣❲ ${json.data.isya} : Isya
┖━━━━━━━━━━━━━━\`\`\`

_Rasulullah Shallallahu Alaihi Wasallam bersabda, "Shalatlah sebagaimana engkau melihat aku shalat.(HR. Al-Bukhari)_
                    `.trim(),
                },
                footer: {
                    text: `Jadwal Sholat Saat Ini`,
                },
                header: {
                    title: '',
                    hasMediaAttachment: true,
                    ...(await require('@whiskeysockets/baileys').prepareWAMessageMedia({
                        image: {
                            url: 'https://telegra.ph/file/c9c8643c1a15699feb48b.jpg',
                        }
                    }, {
                        upload: conn.waUploadToServer
                    }))
                },
                nativeFlowMessage: {
                    buttons: [{ text: "" }]
                }
            },
        },
        {
            quoted: fkontak
        },
        {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }
    );
    await conn.relayMessage(m.chat, msg.message, m);
};

afriza.help = ['jadwalsalat'].map(v => v + ' <kota>');
afriza.tags = ['islami'];
afriza.command = /^jadwal(salat|shalat|sholat)$/i;
afriza.limit = true;

module.exports = afriza;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function city() {
    return new Promise(async (resolve, reject) => {
        let html = await (await axios.get('https://m.dream.co.id/jadwal-salat/ambon/')).data;
        $ = cheerio.load(html);
        let collect = [];
        $('select > option').each(function (i, e) {
            data = $($(e)).text();
            collect.push(data);
        });
        resolve(collect);
    });
}