const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

let handler = async (m, { conn }) => {
  try {
    if (!m.quoted || !m.quoted.mimetype.includes('image')) {
      throw 'Please reply to an image with caption *.circle*';
    }
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let img = await m.quoted.download();
    let image = await loadImage(img);

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    let output = `circle_${m.sender}.png`;
    fs.writeFileSync(output, canvas.toBuffer());

    conn.sendImageAsSticker(m.chat, output, m, { packname: '@moe.sazumiviki', author: 'sazumi-bot' });

    fs.unlinkSync(output); 

  } catch (e) {
    m.reply(`🐱 An error occurred: ${e}`);
  }
};

handler.help = ['scircle'];
handler.tags = ['sticker'];
handler.command = /^(scircle|scc)$/i;

module.exports = handler;