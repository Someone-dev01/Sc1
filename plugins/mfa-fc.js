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

const afriza = async m => {
const fbug = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `by.afriza`
}}
}
conn.reply(m.chat, `\`Pasti FC😹\``, fbug)
};

afriza.tags = ['owner'];
afriza.help = ['fc']
afriza.limit = false;
afriza.owner = true;
afriza.command = /^(fc)$/i;

module.exports = afriza;