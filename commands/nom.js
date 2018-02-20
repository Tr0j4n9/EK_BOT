module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.send("Hey " + (msg) + ", you got nomed! :patato:");
    console.log((msg) + " got cookied.")
  },
  args: '<@mention>',
  help: 'Cookie another person in your server',
  hide: false
}
