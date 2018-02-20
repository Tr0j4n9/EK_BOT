module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.send("Hey " + (msg) + ", you got killed! :gun:");
    console.log((msg) + " got killed.")
  },
  args: '<@mention>',
  help: 'Kill another person in your server',
  hide: false
}
