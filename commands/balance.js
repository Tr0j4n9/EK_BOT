
  module.exports = {
  main: (bot, msg, settings) => {
    
    var economy = require('discord-eco');
    economy.fetchBalance('userID').then((i) => {
    	console.log(i) // { userID: '144645791145918464', money: 998, lastDaily: 'Not Collected' }
        console.log(i.money) // 998
    });
    
    

  },
  args: 'no args',
  help: 'See the balance of you account',
  hide: false
}
