/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

class TekaTekiSilangGame {
    constructor(id) {
        this.sessionId = id;
        this.crossword = [
            ["_", "_", "_", "_", "_", "_", "_"],
            ["_", "_", "h", "_", "_", "r", "_"],
            ["_", "_", "a", "n", "d", "o", "m"],
            ["_", "_", "t", "_", "_", "i", "_"],
            ["_", "_", "_", "_", "_", "_", "_"]
        ]; // Teka-teki silang yang harus diselesaikan
        this.currentWord = ""; // Kata yang sedang ditebak
        this.currentWordIndex = 0; // Indeks kata yang sedang ditebak
        this.words = ["horizontal", "vertikal"]; // Daftar kata yang harus ditebak
        this.currentAttempts = 0; // Jumlah percobaan saat ini
        this.maxAttempts = 3; // Jumlah maksimum percobaan
    }

    getRandomWord = () => {
        this.currentWordIndex = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[this.currentWordIndex];
        return this.currentWord;
    };

    checkAnswer = answer => {
        if (answer.toLowerCase() === this.currentWord.toLowerCase()) {
            return true; // Jawaban benar
        } else {
            this.currentAttempts++;
            return false; // Jawaban salah
        }
    };

    isGameOver = () => {
        return this.currentAttempts >= this.maxAttempts; // Permainan berakhir jika jumlah percobaan mencapai batas maksimum
    };

    // Fungsi untuk membuat representasi visual dari teka-teki silang
    displayCrossword = () => {
        let display = "```";
        for (let row of this.crossword) {
            display += row.join(" ") + "\n";
        }
        display += "```";
        return display;
    };
}

const tekaTekiSilang = async (m, { conn, usedPrefix, command, args }) => {
    conn.tekaTekiSilang = conn.tekaTekiSilang || {};
    let [action, answer] = args;

    try {
        switch (action) {
            case 'start':
                if (conn.tekaTekiSilang[m.chat]) {
                    await m.reply(`Sesi Teka-Teki Silang sudah berlangsung. Gunakan ${usedPrefix + command} *end* untuk mengakhiri sesi.`);
                } else {
                    conn.tekaTekiSilang[m.chat] = new TekaTekiSilangGame(m.sender);
                    const gameSession = conn.tekaTekiSilang[m.chat];
                    const word = gameSession.getRandomWord();
                    await m.reply(`Sesi Teka-Teki Silang dimulai. 🎉\n\n*Session ID:* ${gameSession.sessionId}\n\nSilakan selesaikan teka-teki silang dengan menemukan kata "${word}".\n\n${gameSession.displayCrossword()}`);
                }
                break;

            // Case-answer, case-end, dan case-help tetap sama seperti sebelumnya
        }
    } catch (error) {
        console.error('Error in tekaTekiSilang game:', error);
        await m.reply('Terjadi kesalahan dalam menangani permainan Teka-Teki Silang. Mohon coba lagi.');
    }
};

tekaTekiSilang.menu = ['tekatekisilang']; 
tekaTekiSilang.tags = ['game']; 
tekaTekiSilang.command = /^(tekatekisilang)$/i; 
tekaTekiSilang.group = true; 
tekaTekiSilang.limit = true;

module.exports = tekaTekiSilang;