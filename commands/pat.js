module.exports = {
  main: (bot, msg, settings) => {
    
    var Discord = require("discord.js");
    
    var pats = require("./pat.json");
    
            if (pats.length < 1)
            {
                pats[0] = "Ouch!";
            }
    
    switch (msg.content)
        {
            
            case "total":
                msg.reply("Total spanks: " + total);
                break;
            
            default:
                total++;
                var obj_keys = Object.keys(pats);
                var rnd_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
                msg.reply(pats[rnd_key].spanreply);
            console.log((msg) + " got patted.")
    }

    console.log((msg) + " got patted.")
  },
  args: '<@mention>',
  help: 'Pat another person in your server',
  hide: false
}
