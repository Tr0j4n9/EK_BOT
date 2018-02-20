module.exports = {
  main: (bot, msg, settings) => {
  	if (message.content === '@')
  		{
  				bot.sendNotification("test", msg);
  		};
  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}