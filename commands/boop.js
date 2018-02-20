module.exports = {
  main: (bot, msg, settings) => {
    
    const Discord = require('discord.js')
    var sender = user.toString()
  	msg.channel.sendMessage("Hey" + (msg) + "," + (sender) + "Booped you." , msg);

  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}
