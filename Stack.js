// var stacked = [];
// stacked.push(3);
// stacked.push(5);
// var i = stacked.pop();
// console.log (i);

function Stack () {
  this.data = [];
}

Stack.prototype.push = function (element) {
  this.data[this.data.length] = element;
}

Stack.prototype.pop = function (popping) {
  this.data.pop();
}

module.exports = Stack;
