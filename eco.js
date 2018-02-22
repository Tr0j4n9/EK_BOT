// Call Packages
    const Discord = require('discord.js');
    const economy = require('discord-eco');
 
    // Define client for Discord
    const client = new Discord.Client();
 
    // This runs when a message is recieved...
    client.on('message', message => {
 
        // There are multiple ways you can use discord-eco.
 
        // Example: Fetching Balance
        if (message.content.toUpperCase() === `${prefix}BALANCE`) {
 
            economy.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**Balance:** ${i.money}`);
            })
 
 
        }
 
        // Example: Adding Money To A User
        if (message.content.toUpperCase() === `${prefix}PAYDAY`) {
 
            economy.updateBalance(message.author.id, 500).then((i) => { // economy.updateBalance grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
 
        // Example: Removing Money From A User
        if (message.content.toUpperCase() === `${prefix}PAYFINE`) {
 
            economy.updateBalance(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the balance $500 lower.
                message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
 
 
    });
 
client.login('token')
