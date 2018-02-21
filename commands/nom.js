module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
    msg.channel.send("Hey " + (msg) + ", " + (msg.author) + ", nomed you! :patato:");
    console.log((msg) + " got nomed.")
  },
  args: '<@mention>',
  help: 'nom another person in the server',
  hide: false
}
