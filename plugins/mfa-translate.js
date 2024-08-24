let translate = require('@vitalets/google-translate-api')

let afriza = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0], text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0], text = m.quoted.text
	} else throw `Ex: ${usedPrefix + command} Contoh:
.tr <code> <your message>
.tr id Hello How Are You

> *Language Code*        |     *Country*
---------------------------|-------------------
af                                   |Afrikaans
sq                                   |Albanian
ar                                    |Arabic
hy                                  |Armenian
ca                                   |Catalan
zh                                    |Chinese
zh-cn                              |Chinese (Mandarin/China)
zh-tw                             |Chinese (Mandarin/Taiwan)
zh-yue                            |Chinese (Cantonese)
hr                                   |Croatian
cs                                  |Czech
da                                 |Danish
nl                                  |Dutch
en                                 |English
en-au                           |English (Australia)
en-uk                           |English (United Kingdom)
en-us                           |English (United States)
eo                                 |Esperanto
fi                                  |Finnish
fr                                  |French
de                                 |German
el                                  |Greek
ht                                 |Haitian Creole
hi                                  |Hindi
hu                                 |Hungarian
is                                   |Icelandic
id                                  |Indonesian
it                                    |Italian
ja                                   |Japanese
ko                                  |Korean
la                                   |Latin
lv                                  |Latvian
mk                                  |Macedonian
no                                  |Norwegian
pl                                   |Polish
pt                                    |Portuguese
pt-br                              |Portuguese (Brazil)
ro                                   |Romanian
ru                                   |Russian
sr                                   |Serbian
sk                                   |Slovak
es                                   |Spanish
es-es                            |Spanish (Spain)
es-us                           |Spanish (United States)
sw                                 |Swahili
sv                                  |Swedish
ta                                   |Tamil
th                                 |Thai
tr                                  |Turkish
vi                                   |Vietnamese
cy                                 |Welsh
`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error: The language "${lang}" is not supported`
	m.reply(`*Dari:* ${res.from.language.iso}\n*Ke:* ${lang}\n\n${res.text}`.trim())
}
afriza.help = ['translate']
afriza.tags = ['tools']
afriza.command = /^(tr(anslate)?)$/i

module.exports = afriza