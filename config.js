let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

//======(( WIB ))======//
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

//=======(( Date And Time ))=======//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    //======(( Owner Number Here ))======//
    global.owner = [
    ['60135461140', 'Someone', true],
    ['6285727485224', 'Rafa', true],
    ['6283856068950', 'Khasya', true]
    ] 
    //======(( Put Your Number Here ))======//
    global.mods = ['60135461140', '6285727485224'] // Mods
    global.prems = ['60135461140', '6285727485224'] // Prems
    //======(( Put Your Apikey Here ))======//
    global.lann = 'afriza';
    global.btc = 'afriza';
    global.rose = 'mfa_';
    global.xyro = 'ClaraKeyOfficial';
    global.xzn = 'mfabot';
    global.yanz = 'mfaXsky';
    global.lolkey = 'GataDios';
    global.zein = 'zenzkey_c22460242f6e',
    global.APIs = {
    
    //======(( API Prefix ))======//
    // Contoh: name: 'https://website'
    lann: 'https://api.betabotz.eu.org',
    btc: 'https://api.betabotz.eu.org',
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    xfarr: 'https://api.xfarr.com',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
    }
    global.APIKeys = {
    //======(( APIKey Here ))======//
    // Contoh: 'https://website': 'apikey'
    'https://api.betabotz.eu.org': 'your_api',
    'https://api.botcahx.eu.org': 'your_api',
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': 'Rk-KayzAzzah',
    'https://skizo.tech' : 'konekocyz',
}
//======(( Syicker Wm ))======//
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Someone-Botz MD'
  var sticker_author = ''
} else {
  var sticker_name = 'Someone-Botz MD'
  var sticker_author = '@someonebotzmd'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

//======(( Document ))======//
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

//======(( Database ))======//
global.version = '2.3.4'
global.sessionName = 'MFAsessions'
global.gcbot = 'https://chat.whatsapp.com/FSVI0NbNIkZ4Ho2C4BpjyD'
global.instagram = 'https://instagram.com/afriza_16f'
global.namebot = 'Someone Botz v2.3.4 (Public Bot)'
global.thumb = 'https://telegra.ph/file/1a88e14899f498adffff9.jpg'
global.thumbnail = 'https://telegra.ph/file/1a88e14899f498adffff9.jpg'
global.bgWelcome = `https://telegra.ph/file/4ff1777cb95ee73ef122f.jpg`
global.bgLeave = `https://telegra.ph/file/a26e72d645f6052de875f.jpg`
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/c25701a4af69b05032f7b.jpg'
global.creator = "6283174059236@s.whatsapp.net"
global.nomorbot = "17075907327"
global.nomorown = '6283174059236'
global.mfa1 = `https://telegra.ph/file/09ad8321cde098a3745bd.mp4`
global.mfa2 = `https://telegra.ph/file/63c1352964c86c18305b6.mp4`
global.mfa3 = `https://telegra.ph/file/8d3809253e32a5eb455c6.jpg`
global.mfa4 = `https://telegra.ph/file/7983b17b268f506be23f6.jpg`
global.mfa5 = ``
global.pairingNumber = ''

// ======(( Sosial Media ))======//
global.sig = 'https://instagram.com/mfastore__456'
global.scg = 'https://wa.me/c/6285922143966'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/FSVI0NbNIkZ4Ho2C4BpjyD'
global.ch = 'https://whatsapp.com/channel/0029VaEQSIP4o7qRxqwqbT3b'
global.swa = 'https://wa.me/6285922143966'
global.swb = '-' 
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

//======(( Payment ))======//
global.pdana = '_'
global.povo = '_'
global.pgopay = '_'
global.pulsa = '_'
global.pulsa2 = '_'
global.psbuzz = 'https://sociabuzz.com/afrizaa'

//======(( Fake Size ))======
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

//======(( Watermark Wm ))======//
global.packname = ''
global.author = ''
global.wm = '© Someone Botz v2.3.4 (Public Bot)'
global.rpgg = '\n*(Rpg Game)*'
global.wm2 = 'Someone Botz v2.3.4 (Public Bot)'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.ucapan = `ucapan() + ' ' + name`
global.date = `week + ' ' + date`
global.danied = 'Your Access Is Denied'
global.done = '*Success*\n'
global.packname = 'By Someone Botz v2.3.4'
global.author = 'Owner: 60135461140',
global.nameown = 'Someone'
global.wait = '*`Loading | Please Wait.`*'

//======(( Email Register ))======//
global.email = 'kazumamyoc@gmail.com' // Emailmu
global.pass = 'ysoqnomiqxfcqorv' // Password Aplikasi
global.name = 'Someone Botz v2.3.4 (Public Bot)' // Nama Bot

//======(( Tampilan ))======//
global.htki =  '⬣───「' // Hiasan Kiri
global.htka = '」───⬣' // HIASAN KANAN
global.htjava = '❃' // HIASAN
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      bank: '🏦',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//