/**
 * Counts the number and replies to users using the word "pet". 
 * @file Spank Module for KinkBot.
 * @author BDSMGeek <bdsmgeeke@gmail.com>
 * @version 0.1
 */
var total = 0;
module.exports = {
    main: (bot, msg) => {
        
    /**
    * Replies with response and count instance.
    *
    * @param {Object} bot - The bot object currently being utilized.
    * @param {Object} msg - The message sent along with the command.
    */
        var rplys = require("./pets.json");
        
        if (rplys.length < 1){
                rplys[0] = "Thx!";
        }
        
        switch (msg.content) {
            
            case "total":
                msg.reply("Total Pets: " + total);
                break;
            
            default:
                total++;
                var obj_keys = Object.keys(rplys);
                var rnd_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
                msg.reply(rplys[rnd_key].spanreply);
        } 
	    
    },
    args: '<total>',
    help: 'Pet the bot. use option count to display total so far.',
    hide: false
}
