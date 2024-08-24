const da = [
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
];
let afriza = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'dado.webp', '', m)
}
afriza.help = ['dadu']
afriza.tags = ['sticker']
afriza.command = ['dadu'] 
afriza.register = true

module.exports = afriza

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}