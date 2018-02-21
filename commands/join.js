module.exports = {
  main: (bot, msg, settings) => {
	msg.reply("Plz tell everyone! Here is the link:");
  msg.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=413185996654510080&permissions=2146954486&scope=bot");
  },
  args: 'no args',
  help: 'Sends a invite link to invite bot to other servers.',
  hide: false
}
