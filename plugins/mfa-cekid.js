/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, {conn, groupMetadata }) => {
conn.reply(m.chat, `${await groupMetadata.id}`, m)
}
afriza.help = ['cekid']
afriza.tags = ['group']
afriza.command = /^(cekid|idgc|gcid)$/i

afriza.group = true

module.exports = afriza