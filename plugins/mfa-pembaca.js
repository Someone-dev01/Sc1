var fetch = require('node-fetch');
var handler = async (m, {
  args
}) => {
  if (!args[0]) {
    return m.reply('Silakan masukkan kata yang ingin dibaca hurufnya');
  }
  var kata = args[0].toLowerCase();
  var hasil = '';
  for (var i = 0; i < kata.length; i++) {
    hasil += kata[i] + ', ';
  }
  hasil = hasil.slice(0, -2); // Menghapus tanda koma dan spasi terakhir
  m.reply('Huruf-huruf dalam kata "' + kata + '": ' + hasil);
}

handler.command = ['pembaca'];
handler.tags = ['info'];
handler.premium = false;
module.exports = handler;