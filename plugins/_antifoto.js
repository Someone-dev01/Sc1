module.exports.before = async function(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  let chat = global.db.data.chats[m.chat];
  let sender = global.db.data.chats[m.sender];
  let isFoto = m.mtype;
  let hapus = m.key.participant;
  let bang = m.key.id;
  if (chat.antiFoto && isFoto) {
    if (isFoto === "imageMessage") {
      if (isAdmin || !isBotAdmin) {		  
      } else {
        m.reply(`**Photo detected*\n\nSorry but I have to delete it, because the admin activates anti photo for this group`);
        return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
      }
      return true;
    }
  }
  return true;
};