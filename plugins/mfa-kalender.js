/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, args }) => {
  let date = new Date();
  let dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  let dayOfWeek = dayNames[date.getDay()];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let clockString = `${dayOfWeek}, ${day} ${month} ${year} | Jam ${hour}:${minute}:${second}`;
  
  conn.reply(m.chat, clockString, m);
}

afriza.help = ['kalender'];
afriza.tags = ['info'];
afriza.command = /^(kalender|calender|tanggal|jam)$/i;

module.exports = afriza;