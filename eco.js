var Discord = require("discord.js");
var fs = require('fs');
var economy = require('discord-eco');
// ^^ Calling all packages! ^^


commands.balance = {};
commands.balance.args = '';
commands.balance.help = '';
commands.balance.hide = false;
commands.balance.main = function(bot, msg) {
	
	economy.fetchBalance(msg.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
        msg.channel.send(`**Balance:** ${i.money}`);
		
	})
	
	
	
}


commands.daily = {};
commands.daily.args = '';
commands.daily.help = '';
commands.daily.hide = false;
commands.daily.main = function(bot, msg) {
	
	
	economy.updateBalance(msg.author.id, 200).then((i) => { // economy.updateBalance grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
        msg.channel.send(`**You got $200!**\n**New Balance:** ${i.money}`);
	
	
	})
	
	
}
