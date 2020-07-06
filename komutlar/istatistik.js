const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:muzk:»  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(` » Yapımcım` ,`Forcex.js#0001`,true)
  .addField(` » Node.js`, `${process.version}`, true)
 .addField(` » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(` » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(` » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu]() | [Davet]()`, true)
  message.channel.send(istatistikler)
  //ben yazmadım üşendim .-.
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 