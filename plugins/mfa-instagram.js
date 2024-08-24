/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

async function igdl(url) {
  try {
    const resp = await axios.post("https://saveig.app/api/ajaxSearch", new URLSearchParams({ q: url, t: "media", lang: "id" }), {
      headers: {
        accept: "*/*",
        "user-agent": "PostmanRuntime/7.32.2"
      }
    });
    let result = { status: true, data: [] };
    const $ = cheerio.load(resp.data.data);
    $(".download-box > li > .download-items").each(function () {
      result.data.push($(this).find(".download-items__btn > a").attr("href"));
    });
    return result;
  } catch (error) {
    const result = {
      status: false,
      message: "Couldn't fetch data of url"
    };
    console.log(result);
    return result;
  }
}

const afriza = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Link Instagram';

  const url = text;
  const res = await igdl(url);

  if (!res.status || res.data.length === 0) throw 'Tidak dapat menemukan media di link tersebut';

  // Mengirim video pertama
  conn.sendFile(m.chat, res.data[0], '', 'Done (1/1)', m);
};

afriza.command = afriza.help = ['ig', 'igdl', 'instagram', 'igstory'];
afriza.tags = ['downloader'];
afriza.limit = true;

module.exports = afriza;