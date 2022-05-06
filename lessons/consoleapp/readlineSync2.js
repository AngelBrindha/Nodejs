var readlineSync = require('readline-sync');
// wait for user's response
var userName = readlineSync.question('May I have your name?');
console.log(' Hi ' + userName + ' ! ');

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food?', {
  hiddenEchoBack: true,
});
console.log(' oh,' + userName + ' loves ' + favFood + ' ! ');

console.log('After');
// node 3_usingReadlinesync.js
