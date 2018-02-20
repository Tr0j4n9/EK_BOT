module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	bot.sendNotification("Hey " + (msg) + ", you got killed! :gun:");
    console.log((msg) + " got killed.")
  },
  args: '<@mention>',
  help: 'Kill another person in your server',
  hide: false
}
