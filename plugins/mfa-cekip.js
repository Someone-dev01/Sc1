/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const axios = require('axios')

let afriza = async (m, { conn }) => {
  try {
    const { data } = await axios.get('https://api.ipify.org')
    conn.reply(m.chat, `IP kamu adalah ${data}`, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

afriza.help = ['cekip']
afriza.tags = ['owner']
afriza.command = /^cekip$/i
afriza.owner = true;
afriza.register = false
afriza.limit = false

module.exports = afriza