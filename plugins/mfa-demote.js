let afriza = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
let afriza = await conn.groupParticipantsUpdate(m.chat, [usr], "demote"); return;
if (afriza) m.reply(`sukses demote @${user.split('@')[0]}!`)
}
  if (!m.mentionedJid[0]) throw `tag yang mau diturunkan jabatannya`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupParticipantsUpdate(m.chat, [user], "demote");
};

afriza.help = ['demote @user']
afriza.tags = ['group']
afriza.command = /^(demo?te|member|\↓)$/i

afriza.group = true
afriza.botAdmin = true
afriza.admin = true
afriza.fail = null

module.exports = afriza