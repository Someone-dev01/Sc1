let lastCeacakCommandTime = {}; // Simpan waktu terakhir perintah ceacak dieksekusi untuk setiap pengguna
const cooldownDuration = 8000; // Cooldown dalam milidetik (8 detik)

const handler = async (m, { conn, text, command }) => {
    const now = Date.now();

    // Periksa waktu terakhir perintah ceacak dieksekusi oleh pengguna saat ini
    if (lastCeacakCommandTime[m.sender] && now - lastCeacakCommandTime[m.sender] < cooldownDuration) {
        const remainingTime = (cooldownDuration - (now - lastCeacakCommandTime[m.sender])) / 1000;
        conn.reply(m.chat, `Silakan tunggu ${remainingTime.toFixed(1)} detik sebelum menggunakan perintah ini lagi.`, m);
        return;
    }

    const ceacakImages = global.ceacak;
    const randomIndex = Math.floor(Math.random() * ceacakImages.length);
    const url = ceacakImages[randomIndex];

    conn.sendMessage(m.chat, {
        image: {
            url: url
        },
        caption: "Random ceacak >///<",
        quoted: m
    });

    // Perbarui waktu terakhir perintah dieksekusi
    lastCeacakCommandTime[m.sender] = now;
};

handler.command = /^(ceacak)$/i;
handler.tags = ['cecan'];
handler.help = ['ceacak'];
module.exports = handler;

global.ceacak = [
    // Daftar gambar ceacak

"https://i.postimg.cc/2Sc8Yv0Q/p-1932029i39.jpg",
"https://i.postimg.cc/VNvv04JZ/p-19320rf5h7.jpg",
"https://i.postimg.cc/wxmtkW0S/p-193222brl5.jpg",
"https://i.postimg.cc/pTQwWMPw/p-193222o602.jpg",
"https://i.postimg.cc/XqFsgwz9/p-19322f6ue0.jpg",
"https://i.postimg.cc/2yV1pGDB/p-19323jnd21.jpg",
"https://i.postimg.cc/xCH0LZn5/p-19324tqmd1.jpg",
"https://i.postimg.cc/NjYd1Cv4/p-19325oity2.jpg",
"https://i.postimg.cc/Pr54Jntm/p-19326ptiu4.jpg",
"https://i.postimg.cc/wMpmSPV4/p-19326t9w97.jpg",
"https://i.postimg.cc/FzQB8WcT/p-193277ss81.jpg",
"https://i.postimg.cc/HLB40SWq/p-19327mzvc0.jpg",
"https://i.postimg.cc/prnfHRQv/p-19328r6pt1.jpg",
"https://i.postimg.cc/Znt8J0Tc/p-19328xoqp3.jpg",
"https://i.postimg.cc/LXrThNVj/p-193295mpj0.jpg",
"https://i.postimg.cc/xdXj1CZW/p-1932auifw0.jpg",
"https://i.postimg.cc/rsFSD5L8/p-1932dq3rr5.jpg",
"https://i.postimg.cc/Gm7vHXL9/p-1932dy6cf5.jpg",
"https://i.postimg.cc/dtJC6bDL/p-1932e9d8a8.jpg",
"https://i.postimg.cc/bNPv9qGt/p-1932eytwf8.jpg",
"https://i.postimg.cc/yxZSgjbC/p-1932f2e4e6.jpg",
"https://i.postimg.cc/x8McTCX0/p-1932fh9044.jpg",
"https://i.postimg.cc/g2PTgk83/p-1932gec9f7.jpg",
"https://i.postimg.cc/TYxVSyN2/p-1932il8al4.jpg",
"https://i.postimg.cc/G2zDn9T6/p-1932k1rvv9.jpg",
"https://i.postimg.cc/0jwVCLNt/p-1932kbxy99.jpg",
"https://i.postimg.cc/0yq7mgvW/p-1932kz1r04.jpg",
"https://i.postimg.cc/1z2Tc5zh/p-1932m46290.jpg",
"https://i.postimg.cc/CKGDJchh/p-1932mzcx98.jpg",
"https://i.postimg.cc/3RDjM2HN/p-1932n22t12.jpg",
"https://i.postimg.cc/nLbBvytS/p-1932nfvpz7.jpg",
"https://i.postimg.cc/25gvx3BD/p-1932nix266.jpg",
"https://i.postimg.cc/Zn9c5rS1/p-1932o7e2f0.jpg",
"https://i.postimg.cc/zXCdbFWr/p-1932p9bcq1.jpg",
"https://i.postimg.cc/d3xTDXBB/p-1932rf9ic0.jpg",
"https://i.postimg.cc/Hs0VqrGz/p-1932roxp66.jpg",
"https://i.postimg.cc/C1dPRZpp/p-1932sui9g8.jpg",
"https://i.postimg.cc/J4ZF3WfS/p-1932sxt5c2.jpg",
"https://i.postimg.cc/Ssj9qkLs/p-1932w3r815.jpg",
"https://i.postimg.cc/7ZTSJxjT/p-1932wa40b6.jpg",
"https://i.postimg.cc/y8PvnhVz/p-1932wyo5x0.jpg",
"https://i.postimg.cc/52nS8x34/p-1932x3b4p1.jpg",
"https://i.postimg.cc/t4G59ZmM/p-1932x82vu1.jpg",
"https://i.postimg.cc/9MvDhTF8/p-1932ydeeq3.jpg",
"https://i.postimg.cc/C5F4bWbp/p-1932z4e293.jpg",
"https://i.postimg.cc/Y01vR9fv/p-19620eryq1.jpg",
"https://i.postimg.cc/DZxf5XRp/p-19620motq1.jpg",
"https://i.postimg.cc/0NFrqmV6/p-19620uhcl1.jpg",
"https://i.postimg.cc/65NbzmLS/p-19622gld51.jpg",
"https://i.postimg.cc/GhhGcPct/p-19623vybj1.jpg",
"https://i.postimg.cc/MKd0RPs1/p-19623z95r1.jpg",
"https://i.postimg.cc/6qQPL2N0/p-196242bxr1.jpg",
"https://i.postimg.cc/x1k2VZhR/p-19624ra1i1.jpg",
"https://i.postimg.cc/kMNvMXK1/p-19624y1on1.jpg",
"https://i.postimg.cc/nrL4wqrX/p-196252lk91.jpg",
"https://i.postimg.cc/1XYtRqHV/p-19625anrs1.jpg",
"https://i.postimg.cc/RF1mbnyx/p-19625de5c1.jpg",
"https://i.postimg.cc/bJg0TmyX/p-19625eppj1.jpg",
"https://i.postimg.cc/nrMFWLJF/p-19625lzea1.jpg",
"https://i.postimg.cc/hvMmLv0K/p-19626rftx1.jpg",
"https://i.postimg.cc/cHkgC21J/p-19627hhbn1.jpg",
"https://i.postimg.cc/wTyfqdx7/p-19627t5d41.jpg",
"https://i.postimg.cc/zBCKf0bb/p-196298pkr1.jpg",
"https://i.postimg.cc/634wVmLq/p-19629cg431.jpg",
"https://i.postimg.cc/R09MBdBb/p-19629eev81.jpg",
"https://i.postimg.cc/J7JHM6VR/p-19629nnrd1.jpg",
"https://i.postimg.cc/wTQts1jP/p-1962acmi41.jpg",
"https://i.postimg.cc/YC8mTvcg/p-1962ad5ta1.jpg",
"https://i.postimg.cc/R0fnPXTs/p-1962alh5c1.jpg",
"https://i.postimg.cc/HsRxfbnf/p-1962asjl31.jpg",
"https://i.postimg.cc/ZRmt35R7/p-1962b5dmv1.jpg",
"https://i.postimg.cc/zfBRNq5Q/p-1962bu9fo1.jpg",
"https://i.postimg.cc/rsbrnb7H/p-1962bzui01.jpg",
"https://i.postimg.cc/HLj6VDdJ/p-1962c7n2o1.jpg",
"https://i.postimg.cc/CKWs5Rct/p-1962caiz61.jpg",
"https://i.postimg.cc/bYFNt1xs/p-1962cau3w1.jpg",
"https://i.postimg.cc/L84Jkmqs/p-1962ch8kf1.jpg",
"https://i.postimg.cc/cHv19HZs/p-1962ck87p1.jpg",
"https://i.postimg.cc/q7ZZLBjX/p-1962csdwa1.jpg",
"https://i.postimg.cc/GmL7nTfx/p-1962d0xml1.jpg",
"https://i.postimg.cc/2yWJ3pdd/p-1962d4cuh1.jpg",
"https://i.postimg.cc/rsqWRxxh/p-1962enqpe1.jpg",
"https://i.postimg.cc/MpfDS0DR/p-1962fyik51.jpg",
"https://i.postimg.cc/gkQ782tV/p-1962ghw031.jpg",
"https://i.postimg.cc/C1SdcY55/p-1962gl6nf1.jpg",
"https://i.postimg.cc/0jrtKTpX/p-1962gmhco1.jpg",
"https://i.postimg.cc/fWS18X43/p-1962grit21.jpg",
"https://i.postimg.cc/CxKKBJtB/p-1962hkubw1.jpg",
"https://i.postimg.cc/1XZt8Shs/p-1962i4c901.jpg",
"https://i.postimg.cc/RZGMvfZS/p-1962i85aq1.jpg",
"https://i.postimg.cc/fTDyZMfv/p-1962ia36a1.jpg",
"https://i.postimg.cc/6QLbkLWc/p-1962ibxoe1.jpg",
"https://i.postimg.cc/bwqt6Q5p/p-1962isenn1.jpg",
"https://i.postimg.cc/wvqL7Dhw/p-1962jhb921.jpg",
"https://i.postimg.cc/gkWXJVm8/p-1962jpnks1.jpg",
"https://i.postimg.cc/V6QX136P/p-1962koqm41.jpg",
"https://i.postimg.cc/zfjptz7P/p-1962ks8m41.jpg",
"https://i.postimg.cc/0y7VSdwv/p-1962m7uwg1.jpg",
"https://i.postimg.cc/T1n7fVGC/p-1962mt0wq1.jpg",
"https://i.postimg.cc/7LCjjTCQ/p-1962nvj4g1.jpg",
"https://i.postimg.cc/8CVhg2sQ/p-1962nx4b11.jpg",
"https://i.postimg.cc/0NbqxB4n/p-1962o5sp41.jpg",
"https://i.postimg.cc/PrwpfSgt/p-1962p29ex1.jpg",
"https://i.postimg.cc/SQ9t6h8C/p-1962p3bmk1.jpg",
"https://i.postimg.cc/J0dNwtHP/p-1962p9nlk1.jpg",
"https://i.postimg.cc/FRLGVyfN/p-1962pac7k1.jpg",
"https://i.postimg.cc/7hmkqrqB/p-1962pp58e1.jpg",
"https://i.postimg.cc/8CBzJ34S/p-1962pvq221.jpg",
"https://i.postimg.cc/sDqYwQr2/p-1962pxls61.jpg",
"https://i.postimg.cc/PxTzYgkz/p-1962q7ura1.jpg",
"https://i.postimg.cc/s2NGDbgg/p-1962qbxvz1.jpg",
"https://i.postimg.cc/jqWCv8dz/p-1962qiubc1.jpg",
"https://i.postimg.cc/4x68rbwd/p-1962qpsvb1.jpg",
"https://i.postimg.cc/Kj7NdmrW/p-1962rcc7k1.jpg",
"https://i.postimg.cc/tTqCh5vV/p-1962spcdo1.jpg",
"https://i.postimg.cc/HnS2pBR0/p-1962tt38s1.jpg",
"https://i.postimg.cc/Cx2jrZp1/p-1962u3qhb1.jpg",
"https://i.postimg.cc/yxJJZjWy/p-1962u4xmj1.jpg",
"https://i.postimg.cc/PJtHG5np/p-1962u8w7s1.jpg",
"https://i.postimg.cc/HsqYSHPm/p-1962ufc7p1.jpg",
"https://i.postimg.cc/0jNjqfpq/p-1962umwai1.jpg",
"https://i.postimg.cc/cHrPytrb/p-1962va89q1.jpg",
"https://i.postimg.cc/L5Mdt68Q/p-1962vn5rc1.jpg",
"https://i.postimg.cc/J4nxTCHp/p-1962vpyp71.jpg",
"https://i.postimg.cc/MKMZbX5t/p-1962w2hyp1.jpg",
"https://i.postimg.cc/0yGzDb5F/p-1962wjwxm1.jpg",
"https://i.postimg.cc/j2kF8xxr/p-1962wrlrh1.jpg",
"https://i.postimg.cc/MH46J86y/p-1962y8lij1.jpg",
"https://i.postimg.cc/zBststmy/p-1962y8nl71.jpg",
"https://i.postimg.cc/Y07NNJKz/p-1962y8oif1.jpg",
"https://i.postimg.cc/g0P00dvs/p-1962yt9ph1.jpg",
"https://i.postimg.cc/DwxCvykk/p-1962yyuuh1.jpg",
"https://i.postimg.cc/8z4Y7mvY/p-1962zgkj21.jpg"
]