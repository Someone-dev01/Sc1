const util = require("util");
const path = require("path");

const salam = [
  "./mp3/salam.mp3"
];

const getRandomSalam = () => {
  const randomIndex = Math.floor(Math.random() * salam.length);
  return salam[randomIndex];
};

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, getRandomSalam(), "salam.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
};

handler.customPrefix =
  /^(assalamualaikum|asalamualaikum|salam|assalamu'alaikum|asalamu'alaikum|sallam)$/i;
handler.command = new RegExp();

module.exports = handler;