var total = 0;
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
                msg.reply("Total pats: " + total);
                break;

            default:
                total++;
                var obj_keys = Object.keys(pats);
                var rnd_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
                msg.reply(pats[rnd_key].spanreply);
        msg.channel.send("Hey " + (msg) + ", you got booped!");
            console.log((msg) + " got patted.")
    }

    console.log((msg) + " got patted.")
  },
  args: '<@mention>',
  help: 'Pat another person in your server',
  hide: false
}
