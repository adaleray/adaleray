const Discord = require('discord.js')

exports.run = async(client, message ) => {

const ping = new Discord.MessageEmbed()
.setDescription(`Karşında Pingim! : ${client.ws.ping}`) 
return message.channel.send(ping)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ping'
}; 