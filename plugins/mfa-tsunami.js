/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const api = require('@bochilteam/scraper');

async function afriza(m, { conn }) {
  api.tsunami()
    .then(res => {
      var dann = res.map(data => `*\`INFORMATION TSUNAMI\`*\n\n• Location: *${data.location}*\n• Info: *${data.info}*\n• Date: *${data.date}*\n• Time: *${data.time}*\n• Latitude: *${data.latitude}*\n• Longitude: *${data.longitude}*\n• Magnitude: *${data.magnitude}*\n• Depth: *${data.depth}*\n`).join('\n');
      conn.reply(m.chat, dann, m);
    })
    .catch(err => {
      console.error(err);
      conn.reply(m.chat, 'Terjadi kesalahan saat memuat data tsunami.', m);
    });
}

afriza.command = afriza.help = ['tsunami'];
afriza.tags = ['internet'];

module.exports = afriza;