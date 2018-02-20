module.exports = {
  main: (bot, msg, settings) => {
    
    const Discord = require('discord.js')
    
  	msg.channel.sendMessage("Hey" + (msg) + "," + (user) + "Booped you." , msg);

  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}
