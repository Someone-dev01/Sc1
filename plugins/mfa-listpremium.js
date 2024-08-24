/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza  = async (m, { conn, text, usedPrefix }) => {
  function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  }

	let users = global.db.data.users
	let { registered, name } = global.db.data.users[m.sender]

  var text = ""
  var i = 1
  for (let jid in users){
    if (users[jid].premium){
      const expiryDate = formatDate(global.db.data.users[jid].premiumDate);
      text += `\n\n${i}. @${jid.replace(/@.+/, '')}\n    Tanggal Expired: ${expiryDate}\n    wa.me/${jid.split('@')[0]}\n    ${msToDate(global.db.data.users[jid].premiumDate - new Date() * 1)}`
      i += 1
    }
  }

  return conn.reply(m.chat,`\`\`\`Total Premium : ${i-1} user\`\`\`\n\`\`\`Upgrade Premium ketik ${usedPrefix}owner\`\`\`\n${text}`, false, { contextInfo: { mentionedJid: conn.parseMention(text) }})
}
afriza.help = ['listpremium']
afriza.tags = ['info']
afriza.command = /^(listpremium|premiumlist|listprem|premlist)$/i
afriza.limit = true
module.exports = afriza