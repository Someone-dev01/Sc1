let fetch = require("node-fetch")
let afriza = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/deidara.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendFile(m.chat, a, 'deidara.jpg', `${global.wm}`, m)
}
afriza.help = ['deidara']
afriza.tags = ['maker']
afriza.command = /^deidara$/i

module.exports = afriza