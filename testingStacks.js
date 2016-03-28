var Stack = require('./Stack');

var numbers = new Stack();

numbers.push(1);
numbers.push(5);
numbers.push(7);
numbers.push(55);

numbers.pop();

console.log(numbers);
