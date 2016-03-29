var Queues = require('./Queues');

var number = new Queues();
// new Queues creates an object

number.enqueue(5);
number.enqueue(7);
number.front(55);

number.front();

console.log(number);
