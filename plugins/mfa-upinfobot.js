let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example*: .updateinfo sedang sibuk';
  await conn.updateProfileStatus(text);
  m.reply('Successfully Changed Info');
};

handler.help = ['updateinfo /query'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^updateinfo|upinfo|upbio/i;
handler.register = true;

module.exports = handler;