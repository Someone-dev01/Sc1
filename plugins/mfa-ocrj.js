const uploadFile = require('../lib/uploadFile.js');
const uploadImage = require('../lib/uploadImage.js');
const fetch = require('node-fetch');

let jarspy = async (m, {
    text,
    args,
    usedPrefix,
    command
}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) throw 'Tidak ada media yang ditemukan';
    let media = await q.download();
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link = await (isTele ? uploadImage : uploadFile)(media);
    let res = await (await fetch("https://api.ocr.space/parse/imageurl?apikey=helloworld&url=" + link + "&language=jpn")).json();
    await m.reply("*Hasil:*\n\n" + res.ParsedResults[0].ParsedText);
};
jarspy.help = ["ocrj"];
jarspy.tags = ["tools"];
jarspy.command = ["ocrj"];

module.exports = jarspy;