/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

let afriza = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    
    if (new Date - user.lastMonsterBattle > 300000) { // 5 menit
        let userAttack = Math.floor(Math.random() * 660) + 340; // Serangan pengguna
        let monsterHealth = Math.floor(Math.random() * 1000) + 1000; // Kesehatan monster
        let monsterAttack = Math.floor(Math.random() * 150) + 100; // Serangan monster

        let battleInfo = {
            monsterHealth: monsterHealth,
            userAttack: userAttack,
            monsterAttack: monsterAttack,
        };

        let response = `*—[ Monster Battle for ${conn.getName(m.sender)} ]—*\n`;
        response += `🐉 Monster Health: ${monsterHealth}\n`;
        response += `🗡️ Your Attack: ${userAttack}\n`;
        response += `👹 Monster Attack: ${monsterAttack}\n\n`;

        while (user.health > 0 && monsterHealth > 0) {
            let userDamage = Math.floor(Math.random() * userAttack) + 1;
            let monsterDamage = Math.floor(Math.random() * monsterAttack) + 1;

            monsterHealth -= userDamage;
            user.health -= monsterDamage;

            response += `💥 You dealt ${userDamage} damage to the monster!\n`;
            response += `💔 The monster dealt ${monsterDamage} damage to you!\n`;

            if (user.health <= 0) {
                response += "💀 You have been defeated by the monster!\n";
            } else if (monsterHealth <= 0) {
                response += "🎉 Congratulations! You defeated the monster!\n";
            }
        }

        let moneyEarned = Math.floor(Math.random() * 28000) + 300; // Hadiah
let expEarned = Math.floor((Math.random() * 30 + 20) * (userAttack / 100)); // Hadiah berdasarkan persentase dari serangan pengguna

        response += `\n*💰 Money Earned: Rp. ${moneyEarned}*\n`;
        response += `*✨ Experience Earned: ${expEarned}*\n`;

        user.money += moneyEarned;
        user.exp += expEarned;

        user.lastMonsterBattle = Date.now();

        conn.reply(m.chat, response, m);
    } else {
        conn.reply(m.chat, `Anda harus menunggu 5 menit sebelum dapat bertarung melawan monster lagi.`, m);
    }
}
afriza.help = ['monster'];
afriza.tags = ['rpg'];
afriza.command = /^(monster)$/i;
afriza.register = true;

module.exports = afriza;