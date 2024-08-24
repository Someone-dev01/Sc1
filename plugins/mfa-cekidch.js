/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let cekIDChannel = async (m, { conn }) => {
    let isQuotedInvite = m.quoted && m.quoted.invite;
    if (!isQuotedInvite) return conn.reply(m.chat, 'Mohon balas pesan dengan undangan saluran.', m);

    let inviteLink = m.quoted.invite;
    let channelId = inviteLink.replace('https://chat.whatsapp.com/', '').replace('https://whatsapp.com/channel/', '');

    if (!channelId) return conn.reply(m.chat, 'Tidak dapat menemukan ID saluran.', m);
    
    conn.reply(m.chat, `ID Saluran: ${channelId}`, m);
}

cekIDChannel.help = ['cekidchannel'];
cekIDChannel.tags = ['tools'];
cekIDChannel.command = /^(cekidchannel)$/i;

module.exports = cekIDChannel;