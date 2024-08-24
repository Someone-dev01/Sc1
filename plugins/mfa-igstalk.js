/*
 Script by afriza 
 IG : @mfastore__456
 WhatsApp : 083174059236
*/

const axios = require('axios');

const afriza = async (m, { text }) => {
  if (!text) {
    throw '*Example*: .igstalk afriza_16f';
  }

  const apiUrl = `https://api.lolhuman.xyz/api/stalkig/${encodeURIComponent(text)}?apikey=${global.lolkey}`;

  try {
	conn.chatRead(m.chat);
	conn.sendMessage(m.chat, {
	  react: {
		text: '🕒',
		key: m.key,
	  }
	});
    const { data } = await axios.get(apiUrl);
    const { photo_profile, username, fullname, posts, followers, following, bio } = data.result;
    const caption = `*Username:* ${username}\n*Full Name:* ${fullname}\n*Posts:* ${posts}\n*Followers:* ${followers}\n*Following:* ${following}\n*Bio:* ${bio}`;

    await conn.sendFile(m.chat, photo_profile, 'profile.jpg', caption, m);
  } catch (error) {
    console.error(error);
    throw 'Maaf terjadi kesalahan';
  }
};

afriza.help = ['igstalk /username'];
afriza.tags = ['internet'];
afriza.command = /^(igstalk)$/i;

module.exports = afriza;