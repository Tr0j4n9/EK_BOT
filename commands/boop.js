module.exports = {
  main: (bot, msg, settings) => {
    
    const Discord = require('discord.js');

  	msg.channel.sendMessage("test" + (msg), msg);

  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}
