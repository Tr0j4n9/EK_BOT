module.exports = {
  main: (bot, msg, settings) => {
	  
	  var economy = require('discord-eco');
	  
	  economy.updateBalance(msg.author.id, 500).then((i) => {
	  
	  msg.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
	  }
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
