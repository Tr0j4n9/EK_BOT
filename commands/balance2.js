
  module.exports = {
  main: (bot, msg, settings) => {
    
    var economy = require('discord-eco');
    var daily = require('./daily');
    
    economy.updateBalance('userID', 'value').then((i) => {
      console.log(i) // Returns the updated result.
      console.log(i) // Returns the updated result.
    });
    
    economy.fetchBalance('userID').then((i) => {
    	console.log(i) // { userID: '144645791145918464', money: 998, lastDaily: 'Not Collected' }
      console.log(i.money) // 998
      msg.channel.send(i.money);
    });
    
    

  },
  args: 'no args',
  help: 'See the balance of you account',
  hide: false
}
