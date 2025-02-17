let afriza = async (m, { conn, args }) => {
  let nonRegisteredUsers = Object.entries(global.db.data.users)
    .filter(([user, data]) => data.registered === false)
    .slice(0, args[0] ? Math.max(1, parseInt(args[0])) : 1000);

  let deletedUsersList = nonRegisteredUsers.map(([user, data]) => {
    delete global.db.data.users[user];
    return `${data.name} - ${user}`;
  });

  let replyMessage = `Berhasil menghapus ${nonRegisteredUsers.length} data pengguna dengan status registrasi false:\n${deletedUsersList.join('\n')}`;

  conn.reply(m.chat, replyMessage, m);
}

afriza.command = afriza.help = ['resetdata', 'resetdb'];
afriza.tags = ['owner'];
afriza.owner = true;

module.exports = afriza;