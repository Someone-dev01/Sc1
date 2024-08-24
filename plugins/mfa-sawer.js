let handler = async (m, { conn, args, usedPrefix, owner }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan format ${usedPrefix}sawer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}sawer money 100 @tag*\n\n*List yang bisa di sawer*\nMoney\nExp\nLimit\nKayu\nBensin\nBerlian\nEmas\nDiamond\nKertas\nGelas\nPlastik\nGergaji\nObat`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil mensawer money sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mensawer Money sebesar ${count}`.trim(), m)
                break 
             case 'exp':
                if (global.db.data.users[m.sender].exp >= count * 1) {
                    try {
                        global.db.data.users[m.sender].exp -= count * 1
                        global.db.data.users[who].exp += count * 1
                        conn.reply(m.chat, `Berhasil mensawer exp sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].exp += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Exp kamu tidak mencukupi untuk mensawer Exp sebesar ${count}`.trim(), m)
                break
             case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil mensawer limit sebesar ${count}`.trim(), m)
                       // conn.reply(who, `Selamat mendapatkan limit sebesar ${count}\nFrom: *Owner*`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk mensawer Limit sebesar ${count}`.trim(), m)
                break
                case 'kayu':
                if (global.db.data.users[m.sender].kayu >= count * 1) {
                    try {
                        global.db.data.users[m.sender].kayu -= count * 1
                        global.db.data.users[who].kayu += count * 1
                        conn.reply(m.chat, `Berhasil mensawer kayu sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].kayu += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Kayu kamu tidak mencukupi untuk mensawer Kayu sebesar ${count}`.trim(), m)
                break
                case 'gelas':
                if (global.db.data.users[m.sender].kayu >= count * 1) {
                    try {
                        global.db.data.users[m.sender].gelas -= count * 1
                        global.db.data.users[who].gelas += count * 1
                        conn.reply(m.chat, `Berhasil mensawer gelas sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].gelas += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Gelas kamu tidak mencukupi untuk mensawer Gelas sebesar ${count}`.trim(), m)
                break
                case 'plastik':
                if (global.db.data.users[m.sender].plastik >= count * 1) {
                    try {
                        global.db.data.users[m.sender].plastik -= count * 1
                        global.db.data.users[who].plastik += count * 1
                        conn.reply(m.chat, `Berhasil mensawer plastik sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].plastik += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Plastik kamu tidak mencukupi untuk mensawer Plastik sebesar ${count}`.trim(), m)
                break
                case 'bensin':
                if (global.db.data.users[m.sender].bensin >= count * 1) {
                    try {
                        global.db.data.users[m.sender].bensin -= count * 1
                        global.db.data.users[who].bensin += count * 1
                        conn.reply(m.chat, `Berhasil mensawer bensin sebesar ${count}L`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].bensin += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Bensin kamu tidak mencukupi untuk mensawer Bensin sebesar ${count}L`.trim(), m)
                break
                case 'obat':
                if (global.db.data.users[m.sender].obat >= count * 1) {
                    try {
                        global.db.data.users[m.sender].obat -= count * 1
                        global.db.data.users[who].kayu += count * 1
                        conn.reply(m.chat, `Berhasil mensawer obat sebesar ${count} kapsul`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].obat += count * 1
                        m.reply('Gagal Menssawer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Obat kamu tidak mencukupi untuk mensawer Obat sebesar ${count} kapsul`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}sawer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}sawer money 100 @tag*\n\n*List yang bisa di sawer*\nMoney\nExp\nLimit\nKayu\nBensin\nBerlian\nEmas\nDiamond\nKertas\nGelas\nPlastik\nGergaji\nObat`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}sawer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}sawer money 100 @tag*`.trim(), m)
        console.log(e)
        if (owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'sawer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['sawer']
handler.tags = ['rpg']
handler.command = /^(sawer)$/i
handler.owner = false
handler.mods = false
handler.limit = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler