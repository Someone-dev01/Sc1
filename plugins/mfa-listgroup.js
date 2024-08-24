/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, participants }) => {

	let now = new Date() * 1
	let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let txt = ''
    // let tolgp = `${participants.lenght}`
    
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
    txt += `${await conn.getName(jid)}\n${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = {
      isBanned: false,
      welcome: false,
      antiLink: false,
      delete: true,
    } : db.data.chats[jid].expired ? msToDate(db.data.chats[jid].expired - now) : '*Tidak Diatur Expired Group*'}
${db.data.chats[jid].isBanned ? '✅' : '❌'} _Group Banned_
${db.data.chats[jid].welcome ? '✅' : '❌'} _Auto Welcome_
${db.data.chats[jid].antiLink ? '✅' : '❌'} _Anti Link_\n\n`
    m.reply(`List Groups:
Total Group: ${groups.length}

${txt}

`.trim())

}

afriza.help = ['grouplist']
afriza.tags = ['group']
afriza.rowner = true

afriza.command = /^(group(s|list)|(s|list)group|listgc|gclist)$/i


module.exports = afriza

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24 * 60 * 60 * 1000));
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor((daysms) / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor((hoursms) / (60 * 1000));
  minutesms = ms % (60 * 1000);
  sec = Math.floor((minutesms) / (1000));
  return days + " hari " + hours + " jam " + minutes + " menit";
  // +minutes+":"+sec;
}