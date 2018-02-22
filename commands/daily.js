module.exports = {
  main: (bot, msg, settings) => {
	  
	  var economy = require('discord-eco');

	  
	  msg.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
	  
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
