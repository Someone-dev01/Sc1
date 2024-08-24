/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const { sticker } = require("../lib/sticker.js");

const afriza = async (m, { conn, args }) => {
    if (args.length === 0 || args[0].toLowerCase() === 'list') {
        // Menampilkan List Warna
        const colorData = [
              { code: "#FFFFFF", name: "White" },
            { code: "#FF5733", name: "Orange" },
            { code: "#33FF57", name: "Green" },
      { code: "#5733FF", name: "Purple" },
      { code: "#33FFC1", name: "Turquoise" },
      { code: "#FF33C1", name: "Magenta" },
      { code: "#C133FF", name: "Violet" },
      { code: "#FF3333", name: "Red" },
      { code: "#3333FF", name: "Blue" },
      { code: "#33FFEC", name: "Light Blue" },
      { code: "#FFC233", name: "Yellow" },
      { code: "#33C1FF", name: "Sky Blue" },
      { code: "#33FF33", name: "Lime Green" },
      { code: "#FF33FF", name: "Pink" },
      { code: "#C1FF33", name: "Lemon" },
      { code: "#FF8C00", name: "Dark Orange" },
      { code: "#00FF7F", name: "Spring Green" },
      { code: "#9400D3", name: "Dark Violet" },
      { code: "#00CED1", name: "Dark Turquoise" },
      { code: "#FF1493", name: "Deep Pink" },
      { code: "#32CD32", name: "Lime" },
      { code: "#8A2BE2", name: "Blue Violet" },
      { code: "#FF4500", name: "Orange Red" },
      { code: "#ADFF2F", name: "Green Yellow" },
      { code: "#9370DB", name: "Medium Purple" },
      // ... tambahkan warna tambahan di sini
      { code: "#FFD700", name: "Gold" },
      { code: "#40E0D0", name: "Turquoise" },
      { code: "#7FFFD4", name: "Aquamarine" },
      { code: "#B0E0E6", name: "Powder Blue" },
      { code: "#8B4513", name: "Saddle Brown" },
      { code: "#4682B4", name: "Steel Blue" },
      { code: "#87CEEB", name: "Sky Blue" },
      { code: "#2E8B57", name: "Sea Green" },
      { code: "#D2691E", name: "Chocolate" },
      { code: "#A52A2A", name: "Brown" },
      { code: "#2F4F4F", name: "Dark Slate Gray" },
      { code: "#778899", name: "Light Slate Gray" },
      { code: "#DC143C", name: "Crimson" },
      { code: "#F0E68C", name: "Khaki" },
      { code: "#FF6347", name: "Tomato" },
      { code: "#FA8072", name: "Salmon" },
      { code: "#FFDAB9", name: "Peachpuff" },
      { code: "#F5F5DC", name: "Beige" },
      { code: "#808000", name: "Olive" },
      { code: "#556B2F", name: "Dark Olive Green" },
      { code: "#FF8C00", name: "Dark Orange" },
      { code: "#00FF7F", name: "Spring Green" },
      { code: "#9400D3", name: "Dark Violet" },
      { code: "#00CED1", name: "Dark Turquoise" },
      { code: "#FF1493", name: "Deep Pink" },
      { code: "#32CD32", name: "Lime" },
      { code: "#8A2BE2", name: "Blue Violet" },
      { code: "#FF4500", name: "Orange Red" },
      { code: "#ADFF2F", name: "Green Yellow" },
      { code: "#9370DB", name: "Medium Purple" },
{ code: "#FFD700", name: "Gold" },
{ code: "#40E0D0", name: "Turquoise" },
{ code: "#7FFFD4", name: "Aquamarine" },
{ code: "#B0E0E6", name: "Powder Blue" },
{ code: "#8B4513", name: "Saddle Brown" },
{ code: "#4682B4", name: "Steel Blue" },
{ code: "#87CEEB", name: "Sky Blue" },
{ code: "#2E8B57", name: "Sea Green" },
{ code: "#D2691E", name: "Chocolate" },
{ code: "#A52A2A", name: "Brown" },
{ code: "#2F4F4F", name: "Dark Slate Gray" },
{ code: "#778899", name: "Light Slate Gray" },
{ code: "#DC143C", name: "Crimson" },
{ code: "#F0E68C", name: "Khaki" },
{ code: "#FF6347", name: "Tomato" },
{ code: "#FA8072", name: "Salmon" },
{ code: "#FFDAB9", name: "Peachpuff" },
{ code: "#F5F5DC", name: "Beige" },
{ code: "#808000", name: "Olive" },
{ code: "#556B2F", name: "Dark Olive Green" },
{ code: "#FF8C00", name: "Dark Orange" },
{ code: "#00FF7F", name: "Spring Green" },
{ code: "#9400D3", name: "Dark Violet" },
{ code: "#00CED1", name: "Dark Turquoise" },
{ code: "#FF1493", name: "Deep Pink" },
{ code: "#32CD32", name: "Lime" },
{ code: "#8A2BE2", name: "Blue Violet" },
{ code: "#FF4500", name: "Orange Red" },
{ code: "#ADFF2F", name: "Green Yellow" },
{ code: "#9370DB", name: "Medium Purple" },
{ code: "#1E90FF", name: "Dodger Blue" },
{ code: "#87CEEB", name: "Sky Blue" },
{ code: "#00BFFF", name: "Deep Sky Blue" },
{ code: "#4682B4", name: "Steel Blue" },
{ code: "#5F9EA0", name: "Cadet Blue" },
{ code: "#B0C4DE", name: "Light Steel Blue" },
{ code: "#ADD8E6", name: "Light Blue" },
{ code: "#87CEFA", name: "Light Sky Blue" },
{ code: "#191970", name: "Midnight Blue" },
{ code: "#000080", name: "Navy" },
{ code: "#4169E1", name: "Royal Blue" },
{ code: "#6495ED", name: "Cornflower Blue" },
{ code: "#6A5ACD", name: "Slate Blue" },
{ code: "#7B68EE", name: "Medium Slate Blue" },
{ code: "#9370DB", name: "Medium Purple" },
{ code: "#4B0082", name: "Indigo" },
{ code: "#8B008B", name: "Dark Magenta" },
{ code: "#9932CC", name: "Dark Orchid" },
{ code: "#8A2BE2", name: "Blue Violet" },
{ code: "#9400D3", name: "Dark Violet" },
{ code: "#A020F0", name: "Purple" },
{ code: "#DDA0DD", name: "Plum" },
{ code: "#DA70D6", name: "Orchid" },
{ code: "#FF00FF", name: "Magenta" },
{ code: "#FF00FF", name: "Fuchsia" },
{ code: "#8B4513", name: "Saddle Brown" },
{ code: "#A52A2A", name: "Brown" },
{ code: "#D2691E", name: "Chocolate" },
{ code: "#CD853F", name: "Peru" },
{ code: "#4F42B5", name: "Blue Moon" },
{ code: "#AF9B60", name: "Turquoise Gold" },
        ];

        let colorList = colorData.map((color, index) => `${index + 1}. ${color.name} (${color.code})`).join("\n");
        m.reply(`List Warna:\n${colorList}\n\nContoh Penggunaan: .qy 1 helo`);
        return;
    }

    let text;
    let bgColorIndex;

    if (args.length >= 2) {
        text = args.slice(1).join(" ");
        bgColorIndex = parseInt(args[0]) - 1; // Ambil nilai angka dan kurangkan 1 untuk mendapatkan indeks warna
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
        bgColorIndex = Math.floor(Math.random() * 100); // Jika tidak ada argumen numerik, pilih warna acak
    } else {
        throw "*Example*: .qc 1 hello";
    }

    if (!text) return m.reply('enter text');
    if (text.length > 10000) return m.reply('Max 50 Texts!');

    // List Warna Background dan Informasi Warna
    const colorData = [
      { code: "#FFFFFF", name: "White" },
      { code: "#FF5733", name: "Orange" },
      { code: "#33FF57", name: "Green" },
      { code: "#5733FF", name: "Purple" },
      { code: "#33FFC1", name: "Turquoise" },
      { code: "#FF33C1", name: "Magenta" },
      { code: "#C133FF", name: "Violet" },
      { code: "#FF3333", name: "Red" },
      { code: "#3333FF", name: "Blue" },
      { code: "#33FFEC", name: "Light Blue" },
      { code: "#FFC233", name: "Yellow" },
      { code: "#33C1FF", name: "Sky Blue" },
      { code: "#33FF33", name: "Lime Green" },
      { code: "#FF33FF", name: "Pink" },
      { code: "#C1FF33", name: "Lemon" },
      { code: "#FF8C00", name: "Dark Orange" },
      { code: "#00FF7F", name: "Spring Green" },
      { code: "#9400D3", name: "Dark Violet" },
      { code: "#00CED1", name: "Dark Turquoise" },
      { code: "#FF1493", name: "Deep Pink" },
      { code: "#32CD32", name: "Lime" },
      { code: "#8A2BE2", name: "Blue Violet" },
      { code: "#FF4500", name: "Orange Red" },
      { code: "#ADFF2F", name: "Green Yellow" },
      { code: "#9370DB", name: "Medium Purple" },
      // ... tambahkan warna tambahan di sini
      { code: "#FFD700", name: "Gold" },
      { code: "#40E0D0", name: "Turquoise" },
      { code: "#7FFFD4", name: "Aquamarine" },
      { code: "#B0E0E6", name: "Powder Blue" },
      { code: "#8B4513", name: "Saddle Brown" },
      { code: "#4682B4", name: "Steel Blue" },
      { code: "#87CEEB", name: "Sky Blue" },
      { code: "#2E8B57", name: "Sea Green" },
      { code: "#D2691E", name: "Chocolate" },
      { code: "#A52A2A", name: "Brown" },
      { code: "#2F4F4F", name: "Dark Slate Gray" },
      { code: "#778899", name: "Light Slate Gray" },
      { code: "#DC143C", name: "Crimson" },
      { code: "#F0E68C", name: "Khaki" },
      { code: "#FF6347", name: "Tomato" },
      { code: "#FA8072", name: "Salmon" },
      { code: "#FFDAB9", name: "Peachpuff" },
      { code: "#F5F5DC", name: "Beige" },
      { code: "#808000", name: "Olive" },
      { code: "#556B2F", name: "Dark Olive Green" },
      { code: "#FF8C00", name: "Dark Orange" },
      { code: "#00FF7F", name: "Spring Green" },
      { code: "#9400D3", name: "Dark Violet" },
      { code: "#00CED1", name: "Dark Turquoise" },
      { code: "#FF1493", name: "Deep Pink" },
      { code: "#32CD32", name: "Lime" },
      { code: "#8A2BE2", name: "Blue Violet" },
      { code: "#FF4500", name: "Orange Red" },
      { code: "#ADFF2F", name: "Green Yellow" },
      { code: "#9370DB", name: "Medium Purple" },
{ code: "#FFD700", name: "Gold" },
{ code: "#40E0D0", name: "Turquoise" },
{ code: "#7FFFD4", name: "Aquamarine" },
{ code: "#B0E0E6", name: "Powder Blue" },
{ code: "#8B4513", name: "Saddle Brown" },
{ code: "#4682B4", name: "Steel Blue" },
{ code: "#87CEEB", name: "Sky Blue" },
{ code: "#2E8B57", name: "Sea Green" },
{ code: "#D2691E", name: "Chocolate" },
{ code: "#A52A2A", name: "Brown" },
{ code: "#2F4F4F", name: "Dark Slate Gray" },
{ code: "#778899", name: "Light Slate Gray" },
{ code: "#DC143C", name: "Crimson" },
{ code: "#F0E68C", name: "Khaki" },
{ code: "#FF6347", name: "Tomato" },
{ code: "#FA8072", name: "Salmon" },
{ code: "#FFDAB9", name: "Peachpuff" },
{ code: "#F5F5DC", name: "Beige" },
{ code: "#808000", name: "Olive" },
{ code: "#556B2F", name: "Dark Olive Green" },
{ code: "#FF8C00", name: "Dark Orange" },
{ code: "#00FF7F", name: "Spring Green" },
{ code: "#9400D3", name: "Dark Violet" },
{ code: "#00CED1", name: "Dark Turquoise" },
{ code: "#FF1493", name: "Deep Pink" },
{ code: "#32CD32", name: "Lime" },
{ code: "#8A2BE2", name: "Blue Violet" },
{ code: "#FF4500", name: "Orange Red" },
{ code: "#ADFF2F", name: "Green Yellow" },
{ code: "#9370DB", name: "Medium Purple" },
{ code: "#1E90FF", name: "Dodger Blue" },
{ code: "#87CEEB", name: "Sky Blue" },
{ code: "#00BFFF", name: "Deep Sky Blue" },
{ code: "#4682B4", name: "Steel Blue" },
{ code: "#5F9EA0", name: "Cadet Blue" },
{ code: "#B0C4DE", name: "Light Steel Blue" },
{ code: "#ADD8E6", name: "Light Blue" },
{ code: "#87CEFA", name: "Light Sky Blue" },
{ code: "#191970", name: "Midnight Blue" },
{ code: "#000080", name: "Navy" },
{ code: "#4169E1", name: "Royal Blue" },
{ code: "#6495ED", name: "Cornflower Blue" },
{ code: "#6A5ACD", name: "Slate Blue" },
{ code: "#7B68EE", name: "Medium Slate Blue" },
{ code: "#9370DB", name: "Medium Purple" },
{ code: "#4B0082", name: "Indigo" },
{ code: "#8B008B", name: "Dark Magenta" },
{ code: "#9932CC", name: "Dark Orchid" },
{ code: "#8A2BE2", name: "Blue Violet" },
{ code: "#9400D3", name: "Dark Violet" },
{ code: "#A020F0", name: "Purple" },
{ code: "#DDA0DD", name: "Plum" },
{ code: "#DA70D6", name: "Orchid" },
{ code: "#FF00FF", name: "Magenta" },
{ code: "#FF00FF", name: "Fuchsia" },
{ code: "#8B4513", name: "Saddle Brown" },
{ code: "#A52A2A", name: "Brown" },
{ code: "#D2691E", name: "Chocolate" },
{ code: "#CD853F", name: "Peru" },
{ code: "#4F42B5", name: "Blue Moon" },
{ code: "#AF9B60", name: "Turquoise Gold" },
    ];

    let bgColor = colorData[bgColorIndex];

    let pp = await conn
        .profilePictureUrl(m.sender, "image")
        .catch((_) => "https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg");

    let name = conn.getName(m.sender);

    let res = `https://raiden-api.up.railway.app/api/ai/generate-quotely?text=${encodeURIComponent(text)}&name=${encodeURIComponent(name)}&ppUrl=${encodeURIComponent(pp)}&type=quote&format=png&backgroundColor=${encodeURIComponent(bgColor.code)}&width=512&height=768&scale=2&avatar=true&id=1`;

    let stiker = await sticker(null, res, global.packname, global.author)
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
};

afriza.help = ['qcc', 'qy'];
afriza.tags = ['tools'];
afriza.command = /^(qcc|quotelyy|qy)$/i;

module.exports = afriza;