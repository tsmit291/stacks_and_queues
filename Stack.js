// var stacked = [];
// stacked.push(3);
// stacked.push(5);
// var i = stacked.pop();
// console.log (i);

function Stack () {
  this.data = [];
}

Stack.prototype.push = function (el) {
  this.data[this.data.length] = el;
}

module.exports = Stack;
