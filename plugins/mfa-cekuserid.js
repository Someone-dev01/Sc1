/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, args, mentionedJidList }) => {
    let userId = '';
    
    
    if (args.length > 0) {
        userId = args[0];
    } 
   
    else if (m.quotedMsg) {
        const quotedMsg = m.quotedMsg;
        if (quotedMsg && quotedMsg.sender) {
            userId = quotedMsg.sender.split('@')[0];
        } else {
            return conn.reply(m.chat, 'Unable to extract user ID from the replied message.', m);
        }
    }
 
    else {
        return conn.reply(m.chat, 'Please provide a user number or reply to a user message.', m);
    }
   
    userId += '@s.whatsapp.net';
    
    // Kirim ID pengguna kembali ke pengguna
    conn.reply(m.chat, `User ID: ${userId}`, m);
}

afriza.help = ['cekuserid <user_number>', 'cekuserid (reply to a message)'];
afriza.tags = ['group'];
afriza.command = /^(cekuserid|iduser|userid)$/i;

module.exports = afriza;