/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { tiktok2, tiktok } = require("api-dylux");
let fetch = require("node-fetch");

let afriza = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://tiktok.com/xxx`;
  if (
    text.match(
      "^(?:https?://)?(?:www.)?(?:tiktok.com/(?:v|@)?|vt.tiktok.com/)(?:[^s/]+/+)*(?:@[w.-]+/+)?([w.-]+)(?:/+)?$",
    )
  )
    throw `Masukkan URL Tiktok yang valid`;
  let thumb = "https://telegra.ph/file/e7e06f759a0549bff9a64.jpg";
  try {
    let json = await tiktok2(text);
    let dann = `Username: *${json.author.name}*\nDescription: *${json.title}*`;
    if (json.images) {
      let urls = json.images.map((item) => item.url);
      let array = urls;
      for (let b of array) {
        conn.sendMessage(
          m.chat,
          {
            image: {
              url: b,
            },
            caption: dann,
          },
          { quoted: m },
        );
      }
    }
    if (json.video) {
      await conn.sendFile(
        m.chat,
        json.video.noWatermark,
        "tiktok.mp4",
        dann,
        m,
      );
      await conn.sendFile(
        m.chat,
        json.music.play_url,
        "tiktok.mp3",
        null,
        m,
        true,
        {
          type: "audioMessage",
          ptt: false,
          seconds: 0,
          contextInfo: {
            forwardingScore: fsizedoc,
            externalAdReply: {
              body: null,
              containsAutoReply: true,
              mediaType: 1,
              mediaUrl: sig,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              sourceId: null,
              sourceType: "PDF",
              previewType: "PDF",
              sourceUrl: null,
              thumbnail: await (await fetch(json.author.avatar)).buffer(),
              thumbnailUrl: sgc,
              title: json.author.name,
            },
          },
        },
      );
    }
  } catch (err) {
    try {
      let json = await tiktok(text);
      let dann = `Description: *${json.description}*`;
      await conn.sendFile(m.chat, json.play, "tiktok.mp4", dann, m);
    } catch (err) {
      throw "Terjadi kesalahan saat memproses permintaan";
    }
  }
};

afriza.help = ["tiktok"].map((v) => v + " <url>");
afriza.tags = ["downloader"];
afriza.command = /^(tiktok|tt|ttdl|ttnowm)$/i;

module.exports = afriza;