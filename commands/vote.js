module.exports = {
  main: (bot, msg, settings) => {
	msg.reply("Thanks! Click here to vote.);
  msg.channel.send("https://discordbots.org/bot/413185996654510080/vote");
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
