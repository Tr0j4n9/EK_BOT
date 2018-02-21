module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
    var username = test;
    msg.author = username;
  	msg.channel.send("Hey " + (msg) + (username) + ", you got cookied! :cookie:");
    console.log((msg) + " got cookied.")
  },
  args: '<@mention>',
  help: 'Cookie another person in the server',
  hide: false
}
