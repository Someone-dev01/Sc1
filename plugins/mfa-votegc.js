let afriza = async (m, { conn, command }) => {
let name = await conn.getName(m.sender)

conn.sendMessage(m.chat, {
  poll: {
    name: `Mau Open Atau Close?`,
    selectableCount: 1,
    values: [
      `${command}Open✅`,
      `${command}Close❌`
    
    ]
  }
})
}
afriza.customPrefix = /^(vote)$/i
afriza.command = new RegExp
afriza.admin = true

module.exports = afriza