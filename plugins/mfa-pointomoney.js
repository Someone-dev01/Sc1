let afriza = async (m, { args }) => {
  if (args.length !== 1) {
    throw 'Silakan masukkan jumlah poin yang ingin dikonversi! Contoh: .pointomoney 1000'
  }
  let poin = parseInt(args[0])
  if (isNaN(poin) || poin < 1) {
    throw 'Jumlah poin yang ingin dikonversi harus lebih dari atau sama dengan 1!'
  }

  let fee = Math.round(poin * 0.05)
  let money = poin - fee

  let message = `Berikut adalah detail konversi poin ke uang:\n\n`
  message += `• Jumlah Poin: ${poin}\n`
  message += `• Fee (5%): ${fee}\n`
  message += `• Jumlah Uang: ${money}`

  let user = global.db.data.users[m.sender]
  if (poin > user.poin) {
    throw 'Maaf, kamu tidak memiliki cukup poin untuk dikonversi.'
  }
  user.poin -= poin
  user.uang += money
  global.db.data.users[m.sender] = user
  global.db.write()

  m.reply(message)
}

afriza.help = ['pointomoney <jumlah poin>']
afriza.tags = ['game']
afriza.command = /^pointomoney$/i
afriza.register = true
afriza.limit = true

module.exports = afriza