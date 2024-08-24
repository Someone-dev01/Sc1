/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const afriza = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  const type = (args[0] || '').toLowerCase()
  const _type = (args[0] || '').toLowerCase()
  const user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  
  //----------HARGA
  const hdog = 2
  const hcat = 2
  const hhorse = 4
  const hfox = 6
  const hrobo = 10
  
  const hlion = 10
  const hrhinoceros = 10
  const hdragon = 10
  const hcentaur = 10
  const hkyubi = 10
  const hgriffin = 10
  const hphonix = 10
  const hwolf = 10

  const logo = `— *P E T   S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
  const caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 *ABILITY*
Coming soon...`
  const sections = [
    {
      title: "Buy A Pet",
      rows: [
        { title: "Cat 🐈", rowId: ".petshop cat", description: "Adopt A Cat" },
        { title: "Dog 🐕", rowId: ".petshop dog", description: "Adopt A Dog" },
        { title: "Horse 🐎", rowId: ".petshop horse", description: "Adopt A Horse" },
        { title: "Fox 🦊", rowId: ".petshop fox", description: "Adopt A Fox" },
        { title: "Robo 🤖", rowId: ".petshop robo", description: "Buy A Robo" },
      ]
    },
  ]

  const listMessage = {
    text: caption,
    footer: wm,
    title: logo,
    buttonText: "ADOPT ME 🐾",
    sections
  }

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'cat':
          if (user.cat > 0) return m.reply('Kamu sudah memilik ini')
          if (user.pet < hcat) return m.reply(`Pet Token anda kurang`)
          global.db.data.users[m.sender].pet -= hcat
          global.db.data.users[m.sender].cat += 1
          m.reply("Selamat anda mempunyai pet Baru ! 🎉")
          break
          case 'dog':
          if (user.dog > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdog) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox':
          if (user.fox > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hfox) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse':
          if (user.horse > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hhorse) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'robo':
          if (user.robo > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrobo) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hrobo
            global.db.data.users[m.sender].robo += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'lion':
          if (user.lion > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hlion) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hlion
            global.db.data.users[m.sender].lion += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrhinoceros) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hrhinoceros
            global.db.data.users[m.sender].rhinoceros += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'dragon':
          if (user.dragon > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdragon) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hdragon
            global.db.data.users[m.sender].dragon += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hcentaur) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hcentaur
            global.db.data.users[m.sender].centaur += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hkyubi) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hkyubi
            global.db.data.users[m.sender].kyubi += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hgriffin) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hgriffin
            global.db.data.users[m.sender].griffin += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hphonix) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hphonix
            global.db.data.users[m.sender].phonix += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'wolf':
          if (user.wolf > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hwolf) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hwolf
            global.db.data.users[m.sender].wolf += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
        default:
          return await m.reply(`${logo}\n${caption}`)
          //return await conn.sendMessage(m.chat, listMessage)
      }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break
        default:
          return conn.sendButton(m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

afriza.help = ['petshop']
afriza.tags = ['rpg']
afriza.command = /^(petshop)/i
afriza.register = true
afriza.group = true
afriza.rpg = true

module.exports = afriza