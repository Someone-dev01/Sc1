/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`, 'fanart.jpg', `${namebot}`, m)
}
afriza.help = ['fanart']
afriza.tags = ['anime']

afriza.command = /^(fanart)$/i
afriza.premium = true
afriza.register = true
afriza.limit = 5
module.exports = afriza