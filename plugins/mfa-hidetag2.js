/*
 script by afriza
 ig : @afriza_16f
*/

const MessageType = require('@whiskeysockets/baileys').MessageType;
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');

const afriza = async (m, { conn, text, participants }) => {
  const users = participants.map(u => conn.decodeJid(u.id));
  const q = m.quoted ? m.quoted : m;
  const c = m.quoted ? m.quoted : m.msg;
  const msg = conn.cMod(
    m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text,
    conn.user.jid,
    { mentions: users }
  );
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
};

afriza.help = ['hidetag2'];
afriza.tags = ['group'];
afriza.command = ['hidetag2', 'ht2', 'h2'];
afriza.owner = true;
afriza.group = true;
afriza.admin = false;

module.exports = afriza;