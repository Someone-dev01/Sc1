let afriza = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {

    let a = text.split("|").slice(1)
    if (!a[1]) throw "Format\n" + usedPrefix + command + " halo |ya|gak"
    if (a[12]) throw "Kebanyakan pilihan, Format\n" + usedPrefix + command + " halo |ya|gak"
    if (checkDuplicate(a)) throw "Ada kesamaan isi dalam pesan!"
    let cap = "*Polling Request By* " + m.name + "\n*Pesan:* " + text.split("|")[0]

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })

}
afriza.help = ["poll pertanyaan|pilihan|pilihan"]
afriza.tags = ["group"]
afriza.command = /^po(l((l?ing|ls)|l)|ols?)$/i
afriza.admin = true

module.exports = afriza

function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}