const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let runtime = await fetch('https://tools.betabotz.eu.org/beta')
    .then(response => response.text());
  let message = `⚡ Runtime: ${runtime}`
m.reply(message)
};

handler.help = ['runbot']
handler.tags = ['restapi']
handler.customPrefix = /^(runbot)$/i 
handler.command = new RegExp

module.exports = handler;