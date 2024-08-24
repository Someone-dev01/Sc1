const { tmpdir } = require('os')
const { join } = require('path')
const fs = require('fs');
const {readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch} = require('fs')
let handler = async (m, { args, text }) => {

m.reply('Berhasil menghapus sessions!')

function deleteFiles(sessions) {
  fs.readdir(Dann, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      if (file !== 'creds.json') {
        fs.unlink(path.join(Dann, file), err => {
          if (err) throw err;
        });
      }
    }
  });
}
}
handler.help = ['clearsession']
handler.tags = ['owner']
handler.command = /^c(sesi|sesion)$/i

handler.mods = true

module.exports = handler