module.exports.before = async (m, { conn, participants }) => {
  if (!conn.balxzz_join) {
    conn.balxzz_join = {
      join: false,
      time: 0,
    };
  }

  const currentTime = Math.floor(Date.now() / 1000);

  if (!m.isGroup || conn.balxzz_join.time > currentTime) {
    console.log("Not a group message or still in cooldown");
    return;
  }
  
    // cek user premium
    const isCek = global.db.data.users[m.sender];

  let messageText = "";
  let mentionedUsers = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
  switch (m.sender) {
    // cek apakah nonor sesuai?
    case "6285727485224@s.whatsapp.net":
      messageText = "Hallo Ownerku *Selamat Datang!*";
      break;
default:
      if (isCek.premium) {
      messageText = "Selamat datang, *user premium !*";
}
break;
}
  if (messageText) {
    await conn.sendMessage(
      m.chat,
      {
        text: messageText,
      },
      {
        quoted: fkon,
        mentions: mentionedUsers,
      }
    );
    conn.balxzz_join = {
      join: true,
      time: currentTime + 600,
    };
  } else {
    console.log("No message to send");
  }
};