const cheerio = require('cheerio');
const fetch = require('node-fetch');

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "s",
        "dl"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("*Example:*\n.apkmirror search|vpn\n\n*Choose an available type*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "s") {
            if (!inputs) return m.reply("Input query link\nExample: .apkmirror search|vpn")
            await m.reply(wait)
            try {
                let res = await searchApkmirror(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ RESULT ${index + 1} ]*

🖼️ *Image:* ${decodeURIComponent(item.image) || 'Unknown'}
🔗 *Link:* ${item.link || 'Unknown'}
📝 *Title:* ${item.title || 'Unknown'}
👨‍💻 *Developer:* ${item.developer || 'Unknown'}
📅 *Upload Date:* ${item.uploadDate || 'Unknown'}
🆕 *Version:* ${item.version || 'Unknown'}
💾 *File Size:* ${item.fileSize || 'Unknown'}
⬇️ *Downloads:* ${item.downloads || 'Unknown'}
`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(error)
            }
        }

        if (feature == "dl") {
            if (!inputs) return m.reply("Input query link\nExample: .apkmirror app|link")
            await m.reply(wait)
            try {
                let item = await getApkmirror(inputs)

                let cap = `🔍 *[ RESULT ]*

📝 *Title:* ${item.title || 'Unknown'}
📷 *Image:* ${decodeURIComponent(item.image) || 'Unknown'}
🔗 *Link:* ${item.link || 'Unknown'}
⬇️ *Download Link:* ${item.linkdl || 'Unknown'}
✍️ *Download Text:* ${item.downloadText || 'Unknown'}
ℹ️ *Author:* ${item.author || 'Unknown'}
📝 *Info:* ${item.info || 'Unknown'}
📏 *Description:* ${item.description || 'Unknown'}
📏 *Size:* ${item.size || 'Unknown'}
📅 *Date:* ${item.date || 'Unknown'}
`
                await conn.sendFile(m.chat, item.image, "", cap, m)
                await conn.sendFile(m.chat, item.linkdl, item.title || 'Unknown', null, m, true, {
                    quoted: m,
                    mimetype: "application/vnd.android.package-archive"
                })
            } catch (e) {
                await m.reply(error)
            }
        }
    }
}
handler.help = ["apm"]
handler.tags = ["internet"]
handler.command = /^(apm)$/i
module.exports = handler

/* New Line */
async function searchApkmirror(query) {
    const url = `https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const body = await response.text();
        const $ = cheerio.load(body);

        return $('.appRow')
            .map((_, element) => ({
                image: "https://www.apkmirror.com" + $(element).find('.ellipsisText').attr('src'),
                link: "https://www.apkmirror.com" + $(element).find('.appRowTitle a').attr('href'),
                title: $(element).find('.appRowTitle a').text().trim(),
                developer: $(element).find('.byDeveloper').text().trim(),
                uploadDate: $(element).find('.dateyear_utc').text().trim(),
                version: $(element).next('.infoSlide').find('.infoSlide-value').eq(0).text().trim(),
                fileSize: $(element).next('.infoSlide').find('.infoSlide-value').eq(2).text().trim(),
                downloads: $(element).next('.infoSlide').find('.infoSlide-value').eq(3).text().trim()
            }))
            .get()
            .filter(obj => Object.values(obj).every(value => value !== ''))
    } catch (error) {
        throw error;
    }
}


async function getApkmirror(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const link = 'https://www.apkmirror.com' + $('.downloadButton').attr('href')

        if (link.includes('#downloads')) {

            const link2 = $('meta[property="og:url"]').attr('content') + "#downloads"
            const responses2 = await fetch(link2);
            const htmls2 = await responses2.text();
            const $s = cheerio.load(htmls2);
            const result = [];

            $s('.table-row.headerFont').each((index, row) => {
                const rowData = {
                    version: $s(row).find('a.accent_color').text().trim(),
                    bundle: $s(row).find('.apkm-badge.success').eq(0).text().trim(),
                    splits: $s(row).find('.apkm-badge.success').eq(1).text().trim(),
                    apkUrl: 'https://www.apkmirror.com' + $s(row).find('a.accent_color').attr('href'),
                    downloadDate: $s(row).find('.dateyear_utc').data('utcdate')
                };

                // Memeriksa apakah setidaknya salah satu properti memiliki nilai
                const hasOutput = Object.values(rowData).some(value => value !== undefined && value !== '');
                if (hasOutput) {
                    result.push(rowData);
                }
            });
            const response3 = await fetch(result[1].apkUrl);
            const html3 = await response3.text();
            const $t = cheerio.load(html3);

            const link3 = 'https://www.apkmirror.com' + $t('.downloadButton').attr('href')

            const response2 = await fetch(link3);
            const html2 = await response2.text();
            const $$ = cheerio.load(html2);

            const formElement2 = $$('#filedownload');
            const id2 = formElement2.find('input[name="id"]').attr('value');
            const key2 = formElement2.find('input[name="key"]').attr('value');

            const linkdl = `https://www.apkmirror.com/wp-content/themes/APKMirror/download.php?id=${id2}&key=${key2}`;

            return {
                title: $('meta[property="og:title"]').attr('content'),
                gambar: $('meta[property="og:image"]').attr('content'),
                link: link,
                linkdl: linkdl,
                downloadText: $('.downloadButton').text().trim(),
                author: url.split('/')[4].toUpperCase(),
                info: $('.infoSlide').text().trim(),
                description: $('#description .notes').text().trim()
            };
        } else {
            const response2 = await fetch(link);
            const html2 = await response2.text();
            const $$ = cheerio.load(html2);

            const formElement = $$('#filedownload');
            const id = formElement.find('input[name="id"]').attr('value');
            const key = formElement.find('input[name="key"]').attr('value');
            const forcebaseapk = formElement.find('input[name="forcebaseapk"]').attr('value');
            const linkdl = `https://www.apkmirror.com/wp-content/themes/APKMirror/download.php?id=${id}&key=${key}&forcebaseapk=${forcebaseapk}`;

            return {
                title: $('meta[property="og:title"]').attr('content'),
                gambar: $('meta[property="og:image"]').attr('content'),
                link: link,
                linkdl: linkdl,
                downloadText: $('.downloadButton').text().trim(),
                author: url.split('/')[4].toUpperCase(),
                info: $('.appspec-value').text().trim(),
                description: $('#description .notes').text().trim(),
                size: $('.appspec-row:nth-child(2) .appspec-value').text().trim(),
                tanggal: $('.appspec-row:last-child .appspec-value .datetime_utc').attr('data-utcdate')
            }
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}