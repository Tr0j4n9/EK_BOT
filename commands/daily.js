module.exports = {
  main: (bot, msg, settings) => {
	  
	  var economy = require('discord-eco');
	  
            economy.updateBalance(msg.author.id, 100).then((i) => { // economy.updateBalance grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            msg.channel.send(`**You got $100!**\n**New Balance:** ${i.money}`);
            })
  },
  args: 'no args',
  help: 'Claim daily coins!',
  hide: false
}
