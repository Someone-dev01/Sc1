let afriza = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
    conn.sendMessage(m.chat, {
      text: 'Kamu di-banned 😕',
      key: m.key,
  
  });    
   user.warning += 1
 if (user.warning >= 1) {
            user.warning = 0
            global.db.data.users[m.sender].banned = true
        }
}

afriza.customPrefix = /^(botkontol|bot kontol|botasu|bot asu|botsters|bot gila|botnyagoblok|bot nya goblok|bot goblok|bot sters|bot kentang|gilabotnya|hadeh bot kontol|bot ngentod|botngentod)$/i 
afriza.command = new RegExp

module.exports = afriza