/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  if (!text || !text.includes('|')) return conn.reply(m.chat, `*[ Get Number ]*\n\n${usedPrefix}addprem @6285922143966|99\n${usedPrefix}addprem 6285922143966|99
  Gunakan *d* (hari), *h* (jam), *m* (menit), atau *s* (detik).`, m)

  var numbers = text.split('|')[0].split(',')
  hl[1] = text.split('|')[1] // hapus parseInt() di sini agar tetap string

  var timeFormat = hl[1].match(/\d+[dDhHmMsS]/) // Periksa apakah format waktu benar
  if (!timeFormat) return conn.reply(m.chat, 'Format tidak valid! Mohon masukkan format waktu yang benar.', m)

  numbers.forEach(number => {
    number = no(number) + "@s.whatsapp.net"
    if (typeof db.data.users[number] == 'undefined') throw 'Pengguna tidak ada dalam database'
    var jumlahWaktu = parseInt(hl[1]) * 1000 // default ke detik
    if (hl[1].toString().match(/\d+d/i)) jumlahWaktu *= 24 * 60 * 60 // jika hari
    else if (hl[1].toString().match(/\d+h/i)) jumlahWaktu *= 60 * 60 // jika jam
    else if (hl[1].toString().match(/\d+m/i)) jumlahWaktu *= 60 // jika menit
    else if (hl[1].toString().match(/\d+s/i)) jumlahWaktu *= 1 // jika detik
    else throw 'Format waktu tidak valid!Gunakan d (hari), h (jam), m (menit), atau s (detik).'

    var now = Date.now()
    global.db.data.users[number].premium = true
    if (now < global.db.data.users[number].premiumDate) global.db.data.users[number].premiumDate += jumlahWaktu
    else global.db.data.users[number].premiumDate = now + jumlahWaktu

    conn.reply(m.chat,`*[ Upgrade Premium ]*\nAkses Premium Telah Ditambahkan Ke *@${number.split('@')[0]}* Selama *${hl[1]}*\n *Selama :* ${msToDate(global.db.data.users[number].premiumDate - now)}`,m,{ contextInfo: { mentionedJid: [number] } })
    conn.reply(number,`*[ Upgrade Premium ]*\nAkses Premium Telah Ditambahkan Ke *@${number.split('@')[0]}* Selama *${hl[1]}*\n\n *Selama :* ${msToDate(global.db.data.users[number].premiumDate - now)}`,m,{ contextInfo: { mentionedJid: [number] } }) 
  });

}
afriza.help = ['addprem <nomor|hari>']
afriza.tags = ['owner']
afriza.command = /^(addprem|prem)$/i
afriza.owner = true
afriza.mods = false
afriza.fail = null
module.exports = afriza

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+":"+hours+":"+ minutes + "";
}