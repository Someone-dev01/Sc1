/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let runtime = clockString(_uptime)
    let timeNow = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let startTime = new Date(Date.now() - _uptime).toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false })

    m.reply(`Current time: ${timeNow}\nRuntime: ${runtime}\nStarted at: ${startTime}`)
}

afriza.help = ['runtime']
afriza.tags = ['info']
afriza.command = /^(uptime|runtime)$/i

module.exports = afriza

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Day " + hours + " Hour " + minutes + " Minute " + sec + " Second ";
}