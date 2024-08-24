let afriza = m => m
afriza.before = async (m, { conn, isVip, owner }) => {
	if (isVip) {
    if (new Date() * 1 >= global.db.data.users[m.sender].vipDate) {
      conn.reply(m.chat, "_Maaf waktu Vip anda telah habis!_\n_Silahkan hubungi owner untuk perpanjang waktu Vip!_", m).then(() => {
        global.db.data.users[m.sender].vip = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
        this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
           })
        }
      }
   }
module.exports = afriza