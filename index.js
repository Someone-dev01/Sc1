console.log('Starting...')
let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const { color } = require('./lib/color')
const { say } = CFonts
const rl = Readline.createInterface(process.stdin, process.stdout)

function _0x12e9(){var _0x406138=['Simple\x20Whatsapp\x20Bot\x20By\x20@Afriza','center','MFA\x0aMD','2518495ZURHzW','707185txIgnC','2210RrhcGi','530631Fgfmfk','6633IrimuF','3dqPCkr','789632giIVUp','8112YzUvmz','green','27340NmIERl','block','949798AayScG','88hLoXtk'];_0x12e9=function(){return _0x406138;};return _0x12e9();}function _0x5115(_0x46e733,_0x46b263){var _0x12e9fd=_0x12e9();return _0x5115=function(_0x511544,_0x40b7b3){_0x511544=_0x511544-0x131;var _0x125da8=_0x12e9fd[_0x511544];return _0x125da8;},_0x5115(_0x46e733,_0x46b263);}var _0x4ddc10=_0x5115;(function(_0x482775,_0x51d31a){var _0x335408=_0x5115,_0x3d549a=_0x482775();while(!![]){try{var _0x4eccbd=-parseInt(_0x335408(0x13f))/0x1+parseInt(_0x335408(0x139))/0x2*(-parseInt(_0x335408(0x133))/0x3)+parseInt(_0x335408(0x134))/0x4+parseInt(_0x335408(0x140))/0x5*(-parseInt(_0x335408(0x135))/0x6)+-parseInt(_0x335408(0x13e))/0x7+-parseInt(_0x335408(0x13a))/0x8*(-parseInt(_0x335408(0x131))/0x9)+-parseInt(_0x335408(0x137))/0xa*(-parseInt(_0x335408(0x132))/0xb);if(_0x4eccbd===_0x51d31a)break;else _0x3d549a['push'](_0x3d549a['shift']());}catch(_0x59ab7b){_0x3d549a['push'](_0x3d549a['shift']());}}}(_0x12e9,0x56b22),say(_0x4ddc10(0x13d),{'font':_0x4ddc10(0x138),'align':_0x4ddc10(0x13c),'colors':['blue']}),say(_0x4ddc10(0x13b),{'font':'console','align':'center','colors':[_0x4ddc10(0x136)]}));

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    colors: ['magenta']
  })
  say('🌎 MEMUAT SOURCE...', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  say('📑 MEMUAT PLUGINS...', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  say('✅ DONE !', {
    font: 'console',
    align: 'center',
    colors: ['green']
  })
  cluster.setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗] Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
     })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')