module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
    
    
    var randomValue = patGifs[Math.floor(Math.random() * patGifs.length)];
    
    var patGifs = ['https://cdn.discordapp.com/attachments/287305378314846208/415429776069623809/pat-SyFmqkFwW.gif', 'https://cdn.discordapp.com/attachments/287305378314846208/415430123454464010/pat-BkJBQlckz.gif',
                  'https://cdn.discordapp.com/attachments/287305378314846208/415430143411224577/pat-SJva1kFv-.gif', 'https://cdn.discordapp.com/attachments/287305378314846208/415430166735618058/pat-HJGQlJYwb.gif',
                  'https://cdn.discordapp.com/attachments/287305378314846208/415430618940178454/pat-Sk2FyQHpZ.gif'];
    
    var show = patGifs[Math.floor(Math.random() * patGifs.length)];
    
    
  	msg.channel.send("Hey " + (msg) + ", you got patted!");
    msg.channel.send(patGifs);
    console.log((msg) + " got patted.")
  },
  args: '<@mention>',
  help: 'Pat another person in your server',
  hide: false
}
