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
