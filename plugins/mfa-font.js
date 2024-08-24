/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
let afriza = async (m, { conn, text }) => {
  conn.reply(m.chat, Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`, m)
}
afriza.help = ['font'].map(v => v + ' <text>')
afriza.tags = ['tools']
afriza.command = /^(font)$/i
afriza.owner = false
afriza.mods = false
afriza.premium = false
afriza.group = false
afriza.private = false

afriza.admin = false
afriza.botAdmin = false

afriza.fail = null
afriza.limit = true

module.exports = afriza

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}