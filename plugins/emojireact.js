let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
    conn.sendMessage(m.chat, {
    react: {
      text: '🗿',
      key: m.key,
    }
  });    
   
}

handler.customPrefix = /^(🗿|😭|😂|🤣)$/i 
handler.command = new RegExp

module.exports = handler;