/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const JavaScriptObfuscator = require('javascript-obfuscator')

let afriza = async (m, { conn, text }) => {
if (!text) throw `[!] Masukan Source Code`
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
afriza.help = ['encrypt']
afriza.tags = ['tools']
afriza.command = /^enc(rypt)?$/i

module.exports = afriza