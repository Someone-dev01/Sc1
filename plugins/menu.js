const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let path = require('path')
let osu = require('node-os-utils')
let { performance } = require('perf_hooks')
let fetch = require('node-fetch')
let canvafy = require ('canvafy')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let tags = {
'start': 'START BOT',
  'main': 'MAIN MENU',
  'ai': 'AI ASSISTANT',
//  'jadibot': 'JADIBOT MENU',
  'downloader': 'DOWNLOAD MENU',
  'sticker': 'STICKER MENU',
  'xp': 'EXP MENU',
  'fun': 'FUN MENU',
  'game': 'GAMES MENU',
  'jadian': 'JADIAN MENU',
  'group': 'GROUP MENU',
  'vote': 'VOTE MENU',
  'catatan': 'CATATAN MENU',
  'absen': 'ABSEN MENU',
  'islami': 'ISLAM MENU',
  'maker': 'MAKER MENU',
  'convert': 'CONVERT MENU',
//  'diffusion': 'DIFFUSION MENU',
  'store': 'STORE MENU',
  'anonymous': 'ANONYMOUS MENU',
  'info': 'INFO MENU',
//  'jkt48': 'JKT 48',
  'internet': 'INTERNET MENU',
  'quotes': 'QUOTES MENU',
  'audio': 'SOUND MENU',
  'kerang': 'KERANG MENU',
  'database': 'DATABASE MENU',
  'anime': 'ANIME MENU',
  'premium': 'PREMIUM MENU',
  'bug': 'BUG MENU',
  'rpg': 'RPG GAMES MENU',
  'rpgabsen': 'RPG ABSEN MENU',
  'nsfw': 'NSFW MENU',
  'asupan': 'ASUPAN MENU',
  'tools': 'TOLS MENU',
  'owner': 'OWNER MENU',
  'advanced': 'ADVANCED MENU',
}
const defaultMenu = {
  before: `\n\n
  > Use The Best Bot Possible! 
\`┏━━━━━━━━━━━━━━━━━━\`
\`┣━━━━━━━━━━━\`
\`┣━━━━━━━━\`
\`┖━━━「 ALL MENU 」━━━━\`

┌ ◦ (Ⓟ) = Premium
│ ◦ (Ⓛ) = Limit
└ ◦ (亗) = Owner

┏━━━━ *「 MENU LIST 」*
┣❲ \`.menulist main\`
┣❲ \`.menulist info\`
┣❲ \`.menulist downloader\`
┣❲ \`.menulist internet\`
┣❲ \`.menulist convert\`
┣❲ \`.menulist game\`
┣❲ \`.menulist fun\`
┣❲ \`.menulist group\`
┣❲ \`.menulist panel\`
┣❲ \`.menulist store\`
┣❲ \`.menulist ai\`
┣❲ \`.menulist islamic\`
┣❲ \`.menulist textpro\`
┣❲ \`.menulist owner\`
┣❲ \`.menulist rpg\`
┣❲ \`.menulist sticker\`
┣❲ \`.menulist anonymous\`
┣❲ \`.menulist tools\`
┣❲ \`.menulist anime\`
┖━━━━━━━━٠
%readmore
`.trimStart(),

      header: '┏━━━━ *「 %category 」*',
    body: '┣❲ %cmd %islimit %isPremium %owner ',
    footer: `┖━━━━━━━━٠`,
    after: ``,
}
let afriza = async (m, { conn, usedPrefix: _p }) => {
var react = ["⚡"];

for (let i = 0; i < react.length; i++) {
await new Promise(resolve => setTimeout(resolve, 50));
await conn.sendMessage(m.chat, {
  react: {
    text: react[i],
    key: m.key
  }
})
}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let OS = osu.os.platform()
let os = `${OS}`
let name = await conn.getName(m.sender)
let ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(require('os').totalmem / 1024 / 1024)} MB`
let used = `${Object.entries(db.data.stats).length}`
let tag = `@${m.sender.split("@")[0]}`
let kata = [
'”Berhentilah untuk mencoba memperbaiki semuanya sendiri. Jangan lupa, kau tidaklah sendirian!”\n\n- *Ryuuji Suguro* -',
'”Jika satu kata tak cukup mengungkapkan perasaanmu, ungkapkanlah dengan semua kata-kata. Kalau kamu tidak bisa mempercayai kata-kata, ungkapkan dengan tindakan.”\n\n- *Shizuka Hiratsuka* -',
"”Kau harus mengambil semua tantangan jika itu dapat membuatmu berkembang.”\n\n- *Yukino Yukinoshita* -",
"”Orang-orang cerdas bersinar lebih terang dari orang biasa. Mereka tidak pernah menyesali atau tersiksa atas perbuatan mereka sendiri.”\n\n- *Archer* -",
"”Kalau kau terlalu bersinar, aku takkan bisa mendekatimu karena kau menyilaukan mataku.”\n\n- *Tanaka* -",
"”Cintaku seperti kilauan kembang api. Kilauan kecil yang perlahan meredup.Tapi, secercah cahaya kecil masih bersinar di hatiku.”\n\n- *Kazuko Hosogawa* -",
"”Kebaikan absolut itu lebih merepotkan daripada kejahatan.”\n\n- *Amatsuyu Kisaragi* -",
"”Dunia tidak akan menunggumu untuk mendapat keyakinan.”\n\n- *Hansung Yu* -",
"”Kesenangan takkan pernah bertahan lama. Begitulah Kehidupan”\n\n- *Rimuru Tempest* -",
"”Ketika kamu menyerah, saat itulah permainan berakhir”\n\n- *Mitsuyoshi Anzai* -",
'”Dunia tidak sempurna. Tapi itu ada untuk kita, lakukanlah yang terbaik... itulah yang membuatnya sangat indah.”\n\n- *Roy Mustang* -',
"“Sampai matipun aku akan mengejar cita-citaku.”.\n\n- *Uzumaki Naruto* -",
"“Aku pasti akan melakukan apa yang telah aku tetapkan.“\n\n- *Syaoran* -",
"“Dunia tidak sempurna. Tapi itu ada untuk kita, lakukanlah yang terbaik... itulah yang membuatnya sangat indah.“\n\n- *Roy Mustang* -",
"“Jika kamu tidak mengambil risiko, kamu tidak dapat menciptakan masa depan!“\n\n- *Monkey D.Luffy* -",
"”Apapun yang dapat kulakukan, akan kukerjakan!“\n\n- *Maihime Tenkawa* -",
"”Semua orang jika menginginkan sesuatu mereka terus bersabar, berusaha keras, belajar, dan menyemangati diri.“\n\n- *Satoru Fujinuma* -",
"”Mengikuti yang kuat adalah naluri makhluk lemah.“\n\n- *Demiurge* -",
"”Mungkin dunia kita terlalu sederhana sampai bisa diubah hanya dengan pernyataan cinta seseorang.“\n\n- *Rio Futaba* -",
"”Aku percaya padamu, Rem. Jadi aku ingin melakukan sesuatu agar kau bisa mempercayaiku.“\n\n- *Subaru Natsuki* -",
"”Tidak peduli apapun itu, kau tak boleh memperlakukan orang lain dengan buruk.“\n\n- *Keita Amano* -",
"”Prinsip kuhaku adalah menjadi nomor satu dalam permainan apapun.“\n\n- *Sora* -",
"”Kerinduan mencengkeram orang lebih kuat daripada racun, dan lebih dalam daripada penyakit.“\n\n- *Lyza* -",
"”Dunia ini mengagumkan. Orang-orang hidup dengan saling mencintai dan menghormati satu sama lain.“\n\n- *Photo* -",
"”Hal yang paling penting adalah melakukan apa yang ingin kau lakukan.“\n\n- *Rito Yuuki* -",
"”Mari kita bersaing secara sehat agar nantinya takkan ada penyesalan diantara kita.“\n\n- *Crusch Karsten* -",
"”Jika aku terlahir sepuluh tahun lebih awal, dan bertemu dengannya sepuluh tahun lebih awal, mungkin hatiku ini bisa dicuri olehnya.“\n\n- *Hachiman Hikigaya* -",
"”Sejarah adalah bukti bahwa manusia hidup. Bukti bahwa manusia hidup dengan batas kemampuan mereka.“\n\n- *Takahito Hida* -",
"”Lebih baik lakukan hal yang diinginkan daripada yang diharuskan!“\n\n- *Yuki Takeya* -",
"”Biarpun gagal..., bukankah lebih baik dari pada tidak melakukan apapun?“\n\n- *Enishi Shijima* -",
"”Jika kau memiliki kehormatan, (berarti) kau memiliki keberanian.“\n\n- *Meme Oshino* -",
"”Seseorang tidak akan berjuang sekeras itu jika dia tidak menyukainya.“\n\n- *Keiko Ayano* -",
"”Aku merasa kalau aku terus mengatakan (tentang impianku), itu benar-benar akan terwujud.“\n\n- *Airi Katagiri* -",
"”Persahabatan itu adalah tempat saling berbagi rasa sakit.“\n\n- *Megumin* -",
"”Meskipun cahaya kembang api akan menghilang, tapi kenangannya akan terus terjaga.“\n\n- *Chizuru Hishiro* -",
"”Sudah sejak lama aku selalu melihatmu. Ini bukan lelucon, aku serius. Tak ada hal lain yang kupikirkan selain dirimu.“\n\n- *Keima Katsuragi* -",
"”Tidak apa-apa kamu tak mencintaiku. Tapi biarkan aku mencintaimu.“\n\n- *Touko Nanami* -",
"”Menyumbunyikan semua usaha dari orang lain bukan sesuatu yang bisa dilakukan semua orang.“\n\n- *Oota* -",
"”Aku sendiri tahu apa yang ku lakukan ini bodoh (membantu orang yang sedang dikeroyok).Tapi itulah yang membedakan manusia dengan hewan.“\n\n- *Shinichi Izumi* -",
"”Hanya seseorang yang bisa memahami dirinya sendirilah yang dapat terus menerus membuat kemajuan.“\n\n- *Masachika Kouda* -",
"”Bagiku, senyum Emilia-tan adalah bintang yang bersinar paling terang di langit malam.“\n\n- *Subaru Natsuki* -",
"”Kunjunganmu merupakan obat terbaik yang dia miliki.“\n\n- *Ume Sawa* -",
"”Di dunia ini ada banyak hal yang takkan berubah meski kita memikirkannya.“\n\n- *Ichiko Rokujou* -",
"”Memakai alasan untuk lari akan membuatmu terlihat menyedihkan.“\n\n- *Hikari Takanashi* -",
"”Aku harus membuang segalanya kecuali tujuanku.“\n\n- *Togame* -",
"”Aku ingin menikmati hubungan asmara ini, bukan hasilnya.“\n\n- *Mari Shiina* -",
"”Setiap kali kau mendapatkan satu hal yang kau inginkan, kau (juga) akan kehilangan satu hal yang kau inginkan.“\n\n- *Francis Scott Key Fitzgerald* -",
"”Aku sangat menyukai kerendahan hatimu yang bahkan tak kausadari telah menjadi daya tarikmu.“\n\n- *Neko Fujinomiya* -",
"”Jangan asal ambil keputusan penting yang bisa mengubah arah hidupmu hanya karena dirimu mengantuk atau bosan.“\n\n- *Tomoya Aki* -",
"”Jangan terlalu memaksakan diri, istirahatlah dulu.Menjaga kesehatan itu juga bagian dari pekerjaan.“\n\n- *Ibu Mikage* -",
"”Deru ombak adalah lagu pengantar tidur terbaik.“\n\n- *Kaguya Shinomiya* -",
"”Aku iri pada orang-orang yang punya impian dan bersemangat mewujudkannya.“\n\n- *Yuugo Hachiken* -",
"”Orang-orang cerdas bersinar lebih terang dari orang biasa. Mereka tidak pernah menyesali atau tersiksa atas perbuatan mereka sendiri.“\n\n- *Archer* -",
"”Kalau kau tidak memperhatikan hal di sekitarmu, kau akan melewatkan hal-hal yang penting.“\n\n- *Haruta Kamijou* -",
]
let quotes = `${pickRandom(kata)}`
const fcon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`,}}}
conn.sendPresenceUpdate("composing", m.chat)
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let wibh = moment.tz('Asia/Jakarta').format('HH') 
      let wibm = moment.tz('Asia/Jakarta').format('mm') 
      let wibs = moment.tz('Asia/Jakarta').format('ss') 
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
    let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let hour_now = moment.tz('Asia/Jakarta').format('HH')
    let ucapanWaktu;
    if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Pagi'
    } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Siang'
    } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Sore'
    } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Petang'
    } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Malam'
    } else {
    ucapanWaktu = 'Malam'
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        owner: plugin.owner,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .replace(/%owner/g, menu.owner ? '(亗)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: package.name,
      npmdesc: package.description,
      module: package.module,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, tag, ram, quotes, os, used, uptime, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let caption = text.trim()
    conn.menubot = conn.menubot ? conn.menubot : {
    id: 1
    }
    if (conn.menubot.id === 1) {
        const fkontak = {
	"key": {
		"participants": "0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	}},
	"participant": "0@s.whatsapp.net"
};
await conn.sendMessage(m.chat, {
    text: caption, 
    contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
            showAdAttribution: true,
            title: namebot,
            body: 'Someone Bot',
            thumbnailUrl: 'https://telegra.ph/file/f71505d57c3f283b8cbbb.jpg',
            sourceUrl: sgc,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: fkontak });
    } else if (conn.menubot.id === 2) {
    await conn.reply(m.chat, 
    caption,
    m)           
    } else if (conn.menubot.id === 3) {
    await conn.sendMessage(m.chat, {
    text: Styles(caption), 
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: true,
    title: namebot,
    thumbnailUrl: pp,
    sourceUrl: sgc,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: m})
    } else if (conn.menubot.id === 4) {
    let call = {
    scheduledCallCreationMessage: {
    callType: 2,
    scheduledTimestampMs:  Date.now(),
    title: caption
    }}
    await conn.relayMessage(m.chat, call, {})
    } else if (conn.menubot.id === 5) {
    await conn.relayMessage(m.chat, {
    requestPaymentMessage: {
    currencyCodeIso4217: 'INR',
    amount1000: fsizedoc,
    requestFrom: '0@s.whatsapp.net',
    noteMessage: {
    extendedTextMessage: {
    text: caption,
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: true
    }}}}}}, {}); 
    } else if (conn.menubot.id === 6) {
    await conn.sendMessage(m.chat, {
    video: {url: "https://telegra.ph/file/6eeac690feaa775ed676c.mp4"},
    gifPlayback: true,
    caption: text,
    contextInfo: {
    externalAdReply: { showAdAttribution: true,
    title: namebot,
    body: ucapanWaktu,
    thumbnailUrl: "https://telegra.ph/file/7fcb4990a71bf325d7413.jpg",
    sourceUrl: instagram,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: m})
    } else if (conn.menubot.id === 7) {
    await conn.sendMessage(m.chat, {
    document: myfile, 
    mimetype: minety, 
    pageCount: 2024,
    fileName: author,
    fileLength: 100000000000000,
    caption: Styles(caption), 
    contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 2024, 
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid: '120363200593778573@newsletter',
    newsletterName: 'Someone Botz v2.3.4 (Public Bot)',
    serverMessageId: -1
    },
    externalAdReply: {
    title: namebot,
    body: ucapan() + ' ' + name,
    mediaType: 1,
    thumbnailUrl: 'https://telegra.ph/file/87f5d5c8a7d18c94f2970.jpg',
    sourceUrl: ch,
    containsAutoReply: true,
    renderLargerThumbnail: true,
    showAdAttribution: false,
    }}}, { quoted: m })
    } else if (conn.menubot.id === 8) {
    await conn.relayMessage(m.chat, 
    { liveLocationMessage: {
    degreesLatitude: 35.685506276233525,
    degreesLongitude: 139.75270667105852,
    accuracyInMeters: 0,
    degreesClockwiseFromMagneticNorth: 2,
    caption: text,
    sequenceNumber: 2,
    timeOffset: 3,
    }}, {})
    } else if (conn.menubot.id === 9) {
    const jimp = require('jimp');
    let fetch = require('node-fetch')
    let moment = require('moment-timezone')
    let levelling = require('../lib/levelling')
    const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
    };

    const thumbnailUrl = 'https://telegra.ph/file/1a88e14899f498adffff9.jpg'; //fake thumb 
    const imageUrl = 'https://telegra.ph/file/1d3160aafa2545c0837e1.jpg';

    const thumbnail = await resize(thumbnailUrl, 300, 200);
    const imageBuffer = await (await fetch(imageUrl)).buffer();

    const externalAdReply = {
    mediaType: 1,
    title: namebot,
    body: ucapan(),
    thumbnail: imageBuffer,
    renderLargerThumbnail: true,
    sourceUrl: sig,
    };
    conn.sendFile(
    m.chat,
    imageUrl,
    'out.png',
    text,
    m,
    true,
    {
    gifPlayback: false,
    jpegThumbnail: thumbnail,
    contextInfo: {
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply
    }}
    );
    } else if (conn.menubot.id === 10) {
    const fkontak = {
	"key": {
    "participants": "0@s.whatsapp.net",
	"remoteJid": "status@broadcast",
	"fromMe": false,
	"id": "Halo"
	},
	"message": {
	"contactMessage": {
	"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	}},
	"participant": "0@s.whatsapp.net"
};
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/055786a2b33aa38f6f1d6.jpg' }, caption: text.trim() }, { quoted: fkontak });
    } else if (conn.menubot.id === 11) {
    const { generateWAMessageFromContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const media = await prepareWAMessageMedia({ video: { url: "https://telegra.ph/file/f5efa7b122d9d94db0efa.mp4" } }, { upload: conn.waUploadToServer })

    const msg = generateWAMessageFromContent(  
    m.chat,
    {     
    interactiveMessage: {          
    body: {         
    text: text,
    },     
    footer: {
    text: '> All Menu - Someone Botz',
    },     
    header: {   
    title: '> WhatsApp Bot Made By wa.me/60135461140',
    hasMediaAttachment: true,
    ...media
    },    
    nativeFlowMessage: {
    buttons: []    
    }}},{})
    await conn.relayMessage(m.chat, msg.message, m)
    } else if (conn.menubot.id === 12) {
    let thumbnailUrls = [
    //'https://telegra.ph/file/81aeaf4e834aac079bbce.jpg', //redkir
    'https://telegra.ph/file/17dfc39ad49eb14c0c494.jpg', //oldngh
    // 'https://telegra.ph/file/f92f0a7aa4fcc6baa96bc.jpg', //woah
    'https://telegra.ph/file/f5afc83db6f2a2dd21013.jpg', //mfkpl
    // 'https://telegra.ph/file/d6d29bf7f837647bb5ff3.jpg', // snsor
    'https://telegra.ph/file/025abddfcc5fa566c1859.jpg', //bcknme
    ];
    let randomThumbnailUrl = thumbnailUrls[Math.floor(Math.random() * thumbnailUrls.length)];
    conn.relayMessage(m.chat, {
    extendedTextMessage: {
    text: text,
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: false,
    title: namebot,
    body: '',
    mediaType: 1,
    previewType: 0,  
    renderLargerThumbnail: true,
    thumbnailUrl: randomThumbnailUrl, 
    sourceUrl: gcbot,
    },
    mentionedJid: [m.sender],
    forwardingScore: 99999,     
    isForwarded: true,      
    businessMessageForwardInfo: { businessOwnerJid: '6285922143966@s.whatsapp.net' }, 
    forwardedNewsletterMessageInfo: {}
    },
    mentions: [m.sender]
    }
    }, {});
    
    } else if (conn.menubot.id === 13) {
    let moment = require('moment-timezone')
    var fkonn = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? { remoteJid: '6283174059236@s.whatsapp.net' } : {})
    },
    message: {
    contactMessage: {
    displayName: `${name}`,
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
    }
    };
   var thumbs = ['https://telegra.ph/file/b210a500a085eb399bf2c.mp4', 'https://telegra.ph/file/486b81462af68f1b10c51.mp4', 'https://telegra.ph/file/b8419bfadd021807ed38f.mp4', 'https://telegra.ph/file/09ad8321cde098a3745bd.mp4'];
   var thumb = 'https://telegra.ph/file/1a0a13d4e5b47810bd0e4.jpg';
   var nomor = '6283174059236';
   var nomorown = nomor + '6283174059236@whatsapp.net';

const lll = await conn.sendMessage(m.chat, { text: `> Hello ${name + ' ' + ucapan()} 😊\n *\`Random Quotes:\`* ${pickRandom(kata)}`, }, { quoted: fkonn });

var randomThumb = thumbs[Math.floor(Math.random() * thumbs.length)];
conn.sendFile(m.chat, randomThumb, 'mfa.mp4', text, fkonn, false, {
    gifPlayback: true,
    gifAttribution: 2,
    mentions: conn.parseMention(text)
});
    } else if (conn.menubot.id === 14) {
    let Baileys = require("@whiskeysockets/baileys")
const msg = Baileys.generateWAMessageFromContent(
			m.chat,
    {
      interactiveMessage: {
        body: {
          text: text,
        },
        footer: {
          text: `${wm}`
        },
        header: {
          title: '`Use Bot As Best As Possible!`',
          hasMediaAttachment: true,
          ...(await require ('@whiskeysockets/baileys').prepareWAMessageMedia({
            image: {
              url: pp,
            }
          }, {
            upload: conn.waUploadToServer
          }))
        },
        nativeFlowMessage: {
          buttons: [{text: ""}]
					}
				}, 
			},
			{
				quoted: fkontak
			}, {contextInfo: {
mentionedJid: [m.sender]
              }}
		);
await conn.relayMessage(m.chat, msg.message, m)
    }
    } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
afriza.help = ['help']
afriza.tags = ['main']
afriza.command = /^(help|menu)$/i
afriza.register = true;
afriza.limit = true;
module.exports = afriza;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  var ucapanWaktu = 'Selamat Pagi '
  var emoji = ''
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Selamat Pagi'
    emoji = '🌄'
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Selamat Siang'
    emoji = '🌞'
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Selamat Sore'
    emoji = '🌅'
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Selamat Petang'
    emoji = '🌆'
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Selamat Malam'
    emoji = '🌌'
  } else {
    ucapanWaktu = 'Selamat Malam'
    emoji = '🌚'
  }
  return ucapanWaktu + ' ' + emoji
}