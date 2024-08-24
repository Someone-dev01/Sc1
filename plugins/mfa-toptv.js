let afriza = async (m, { command, text }) => {
try {
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})
 }
} catch (error) {
  console.error(error) 

 }
}

afriza.help = ['ptv']
afriza.tags = ['tools']
afriza.command = /^ptv$/i
afriza.register = true
afriza.limit = true

module.exports = afriza