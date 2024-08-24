let afriza = (m) => m;
afriza.all = async function (m) {
  if (m.fromMe && m.isBaileys) return !0;
  let text;
  let setting = global.db.data.settings;
  if (!setting.anticall) return;
   if (m.mtype === "editedMessage") {
        let cap = `*[ EDIT MESSAGE DETECT ]*
> *• Name :* ${m.name}
> *• ID message :* ${m.id}
> • *Massage Before :* ${m.message.conversation}
`
       console.log(m.message)
       }
};

module.exports = afriza;