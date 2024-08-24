let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes remove cheat!*`, m)
        global.db.data.users[m.sender].money = 1
        global.db.data.users[m.sender].limit = 1
        global.db.data.users[m.sender].level = 1
        global.db.data.users[m.sender].exp = 1
        global.db.data.users[m.sender].sampah = 1
        global.db.data.users[m.sender].potion = 1
        global.db.data.users[m.sender].common = 1
        global.db.data.users[m.sender].uncommon = 1
        global.db.data.users[m.sender].mythic = 1
        global.db.data.users[m.sender].legendary = 1
        global.db.data.users[m.sender].potion =  1

global.db.data.users[m.sender].diamond =  1

global.db.data.users[m.sender].poin =  1

global.db.data.users[m.sender].balance =  ¹

global.db.data.users[m.sender].bank =  1
}
handler.command = /^(delcheat)$/i
handler.premium = true
handler.mods = false

module.exports = handler