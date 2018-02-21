module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
     msg.channel.send("Hey " + (msg) + ", " + (msg.author) + ", booped you! :speech_balloon:");
    console.log((msg) + " got booped.")
  },
  args: '<@mention>',
  help: 'Boop another person in your server',
  hide: false
}
