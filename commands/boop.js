module.exports = {
  main: (bot, msg, settings) => {


  	bot.sendNotification("test" + (msg), msg);

  },
  args: '<string>',
  help: 'Boop another person in your server',
  hide: false
}
