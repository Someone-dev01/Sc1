let axios = require('axios');

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "ab732313828957ac4dfa9dd05ecdbea4";
    let apitoken = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
    let tld = "jasa-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain2 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*DONE CREATE SUBDOMAIN✅*\n_Subdomain: ${e['name']}_`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); 
}

handler.help = ['domain2']
handler.tags = ['premium']
handler.command = ['domain2']
handler.premium = true

module.exports = handler