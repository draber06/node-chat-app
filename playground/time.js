const moment = require('moment');
// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());
var createdAt = 1234;
var date = moment(createdAt);
// date.add(1, 'year').subtract(9, 'months');
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);