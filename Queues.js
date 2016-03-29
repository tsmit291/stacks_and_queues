function Queues () {
  this.data = [];
}

Queues.prototype.enqueue = function (element) {
  this.data[this.data.length] = element;
}

Queues.prototype.front = function (fronting) {
  this.data[0];
}




module.exports = Queues;
