

// Calling all packages, REAPEAT calling all packages!

const Discord = require ("discord.js");
const bot = Discord.client();
const fs = require("fs");


let userData = JSON.parse(fs.readFileSync("eco.JSON", 'utf8'));

if(!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
if(!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;
fs.writeFile('eco.json', JSON.stringify(userData), (err) => {
    if(err) console.log(err);
})



    bot.on('message', message => {
    let sender = message.author; // The person that sent the msg
    let msg = message.content.toUpperCase();
    let prefix = '$';



})
