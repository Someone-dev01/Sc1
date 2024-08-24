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

const fetch = require('node-fetch');

const afriza = async function (m, { conn }) {
    const args = m.text.split(' ');
    try {
        if (args.length > 0) {
            m.reply('*[ Auto Download Link Detected! ]*');
            const url = args[0];
            let res = await (await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=GataDios&url=${url}`)).json(); 
  
            if (!res.result || res.result.length === 0) throw "Tidak dapat menemukan media di link tersebut";

            for (let imgs of res.result) {   
                let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
    
                if (ban) {
                    conn.sendFile(m.chat, imgs, '', '*[ Instagram Downloader ]*', m);
                }
            }
        }
    } catch (error) {
        console.log(error);
        m.reply('An error occurred while processing your request.');
    }
};

afriza.customPrefix = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/ig;
afriza.command = new RegExp();

module.exports = afriza;