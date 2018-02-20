module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
  	msg.channel.send("Hey " + (msg) + ", you got kissed! :kissing_heart:");
    console.log((msg) + " got kissed.")
  },
  args: '<@mention>',
  help: 'kiss another person in the server',
  hide: false
}
