const moment = require('moment');

function getHoliday(year) {
  const holidays = [
    '01-01', // Tahun Baru
    '03-22', // Hari Isra' Mi'raj
    '05-01', // Hari Buruh Internasional
    '05-07', // Hari Raya Waisak
    '06-01', // Hari Pancasila
    '07-20', // Hari Raya Idul Fitri
    '07-21', // Hari Raya Idul Fitri
    '08-17', // Hari Kemerdekaan
    '12-24', // Hari Raya Natal
    '12-25', // Hari Raya Natal
    '12-31'  // Malam Tahun Baru
  ];

  let holidaysArray = [];

  for (let i = 0; i < holidays.length; i++) {
    holidaysArray.push(moment(year + '-' + holidays[i], 'YYYY-MM-DD').format('DD MMMM'));
  }

  return holidaysArray.join(', ');
}

let danz = async (m, { conn }) => {
  const year = new Date().getFullYear();
  const holidays = getHoliday(year);

  conn.reply(m.chat, `Kalender Hari Libur Indonesia Tahun ${year}:\n${holidays}`, m);
};

danz.command = danz.help = ["harilibur"];
danz.tags = ["tools"];

module.exports = danz;