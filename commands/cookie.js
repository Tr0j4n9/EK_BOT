module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.send("Hey " + (msg) + (user.username) + ", you got cookied! :cookie:");
    console.log((msg) + " got cookied.")
  },
  args: '<@mention>',
  help: 'Cookie another person in the server',
  hide: false
}
