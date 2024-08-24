module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender];
    if (user.afk > -1) {
      let sinceAfk = clockString(new Date() - user.afk);
      let replyMessage = `Kamu berhenti AFK ${user.afkReason ? 'setelah ' + user.afkReason : ''}
Selama ${sinceAfk}`;
      if (user.afkSince) {
        let sinceAfkEnd = new Date(user.afkSince).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
        replyMessage += `\nTelah AFK sejak ${sinceAfkEnd}`;
      }
      m.reply(replyMessage.trim());
      user.afk = -1;
      user.afkReason = '';
      user.afkSince = null;
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
    for (let jid of jids) {
      let user = global.db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afk;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || '';
      let sinceAfk = clockString(new Date() - afkTime);
      let replyMessage = `Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${sinceAfk}`;
      if (user.afkSince) {
        let sinceAfkEnd = new Date(user.afkSince).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
        replyMessage += `\nTelah AFK sejak ${sinceAfkEnd}`;
      }
      if (!user.afkEnd) {
        user.afkEnd = new Date();
      }
      let sinceNotAfk = clockString(new Date() - user.afkEnd);
      
      m.reply(replyMessage.trim());
    }
    return true;
  }
};

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}