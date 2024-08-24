let id = ["86218","65491","54995","10137","81043","37501","98818", "86368","73636","48473","84748","51647","02998","99336"]

let { promises, readFileSync } = require('fs')
async function afriza(m, { conn, args, text , usedPrefix, command }) {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(m.sender in conn.mission) return conn.reply(m.chat, "Kamu masih melakukan transaksi!", m)

  try {
    const cooldown = 5 * (1000 * 60) //coldown timer second
    let user = global.db.data.users[m.sender] //Get db user
    if(!(m.sender in conn.mission)) {
      //Caption
    let text =`\`[ RINCIAN BUY AKSES PREMIUM ]\`\n\n`
    text +=`\`.Yes\` Untuk Melanjutkan Proses Pembayaran\n`
    text +=`\`.No\` Untuk Membatalkan Proses Pembayaran\n\n`
    text +=`\`-User number:\` ${m.sender.split("@")[0]}\n`
    text +=`\`-User Name:\` @${m.sender.split("@")[0]}\n`
    text +=`\`-Harga Upgrade:\` Rp 5.000\n`
    text +=`\`-Durasi Premium:\` 30 Hari\n`
    text +=`\`-Nama Barang:\` Premium User`
    
    let { key } = await conn.reply(m.chat, text, m) //SendMessage
    conn.mission[m.sender] = {
        sender: m.sender,
        key,
        pesan: conn,
        timeout: setTimeout(() => {conn.reply(m.chat, 'timed out', m);delete conn.mission[m.sender]}, 60000)
      }
    }
  } catch (e) {
    console.error(e)
    if(m.sender in conn.mission) {
      let { timeout } = conn.mission[m.sender]
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      conn.reply(m.chat, 'Rejected', m)
    }
  }
}

afriza.before = async m => {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(!(m.sender in conn.mission)) return
  if(m.isBaileys) return
  let { timeout, key, pesan } = conn.mission[m.sender]
  let qris = `${global.qris}`
  const cooldown = 5 * (1000 * 60) //coldown timer second
  let user = global.db.data.users[m.sender] //Get db user

  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
  if(txt != ".yes" && txt != ".no" && txt != "gas") return

  //Gacha systemBeta
  try {
    if(/^.yes?$/i.test(txt)) {
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      let text =`*\`[ QRIS ALLPAYMENT ]\`*\n\n`
      text +=`"Silahkan Scan Di Atas Untuk Melakukan Pembayaran"\n\n`
      text +=`➠ *BUKTI ID* : ${pickRandom(id)}\n`
      text +=`➠ *Total* : 5.000\n\n`
      text +=`*Catatan* :\n`
      text +=`Setelah membayar mohon untuk menunggu 1-5 menit!\n`
      text +=`Setelah melakukan transaksi wajib mengirimkan bukti transfer, dengan cara *.bukti* <ID transaksi>\n`
      text +=`Apabila ada kendala lain silahkan hubungi *.owner*`
      let kemii = await conn.sendFile(m.chat, qris, 'order.jpg', `${text}`, m)
      setTimeout(() => { conn.sendMessage(m.chat, { delete: kemii }); }, 900000); 
      pesan.sendMessage(m.chat, { delete: key })
      return !0
    } else if (/^.no?$/i.test(txt)) {
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      conn.reply(m.chat, 'Kamu Membatalkan Untuk Menjadi User Premium!', m)
      pesan.sendMessage(m.chat, { delete: key })
      return !0
    }
  } catch (e) {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    //if (moneyDulu > (user.money * 1)) user.money = moneyDulu * 1
    conn.reply(m.chat, 'Error Wak Waduh', m)
    console.log("\n".repeat(3))
    console.log(e.stack)
    return !0
  } finally {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    return !0
  }
}

afriza.help = ['buypremium']
afriza.tags = ['main']
afriza.command = /^buyprem|buypremium$/i

module.exports = afriza;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Detect if thats number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}

/**
 * Random pick from Array
 * @param {Array} list
 * @returns Any
 */
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Convert milliseconds to clock string
 * @param {Number} ms
 * @returns String
 */
 function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}