module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.sendMessage("Hey" + (msg) + "," + (sender) + "Booped you." , msg);

  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}
