/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let handler = async (m, {
    conn,
    command,
    text
}) => {
    conn.menubot = conn.menubot ? conn.menubot : {
        id: 1
    }
    let mennu = {
        1: 'Normal With Media',
        2: 'Biasa No Media',
        3: 'Normal Mini',
        4: 'Call',
        5: 'Payment',
        6: 'Gif With Media',
        7: 'Document',
        8: 'Lokasi Only Group',
        9: 'Big Fake Media',
       10: 'Big Media',
       11: 'Gif Mini Buttons',
       12: 'Normal Random Media',
       13: 'Normal Random Gif',
       14: 'Catalog wm',
    };

    if (text) {
        let mennuIndex = parseInt(text);
        if (isNaN(mennuIndex) || !mennu[mennuIndex]) {
            conn.reply(m.chat, '```Silakan pilih menu dari daftar berikut:\n\n```' + Object.entries(mennu).map(([id, theme]) => `${id}. Menu ${mennu}`).join('\n') + `\n\*©By_Someone*`, m);
            return;
        }
        conn.menubot = {
            id: mennuIndex
        };
        conn.reply(m.chat, `Changed the menu type *${mennu[mennuIndex]}*\n` + '> Status: `Success`', m);
    } else {
        conn.reply(m.chat, '```Silakan pilih menu dari daftar berikut:\n\n```' + Object.entries(mennu).map(([id, mennu]) => `${id}. Menu ${mennu}`).join('\n') + `\n\n*©By_Someone*`, m);
        return;
    }
};
handler.help = ['setmenu *<type>*']
handler.tags = ['owner']
handler.command = /^(setmenu)$/i
handler.owner = true

module.exports = handler