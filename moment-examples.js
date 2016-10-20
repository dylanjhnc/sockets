const moment = require('moment');
var now = moment();

console.log(now.format('MMM Do YYYY HH:mm'));

now.subtract(25, 'hour');

// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

var timestamp = 1476366289;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('hh:mm a'));