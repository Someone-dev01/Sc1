/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

var fetch = require('node-fetch');
var afriza = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  var apii = await fetch(`https://api.betabotz.eu.org/api/search/bard-ai?apikey=${lann}&text=${text}`)
  var res = await apii.json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
afriza.help = ['bard *(text)*'];
afriza.command =  ['bard'];
afriza.tags = ['ai'];
afriza.premium = true
module.exports = afriza;