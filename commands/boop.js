module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.sendMessage("Hey" + (msg) + "," + (username) + "Booped you." , msg);

  },
  args: '<@mention>',
  help: 'Boop another person in your server',
  hide: false
}
