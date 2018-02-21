module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
    var data = 0;
    msg.author = data.username;
  	msg.channel.send("Hey " + (msg) + (data.username) + ", you got cookied! :cookie:");
    console.log((msg) + " got cookied.")
  },
  args: '<@mention>',
  help: 'Cookie another person in the server',
  hide: false
}
