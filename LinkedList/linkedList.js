var LinkedList = function() {
  this.head = null;
  this.tail = null;
};
var Node = function(value) {
  this.value = value;
  this.next = null;
};
LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
  }
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
};
LinkedList.prototype.removeHead = function() {
  var value = this.head;
  this.head = this.head.next;
  return value;
};
LinkedList.prototype.contains = function(target) {
  if (this.head.value === target || this.tail.value === target) {
    return true;
  }
  var currentNode = this.head.next;
  while (currentNode) {
    if (currentNode.value === target) {
      l(currentNode.value)
      return true;
    } 
    currentNode = currentNode.next;
  }
  return false;
};
LinkedList.prototype.eachValue = function(callback) {
  // callback on each value
  callback(this.head.value);
  var currentNode = this.head.next;
  while (currentNode) {
    callback(currentNode.value);
    currentNode = currentNode.next;
  }
};
LinkedList.prototype.eachNode = function(callback) {
  // callback on each value
  callback(this.head.value);
  var currentNode = this.head.next;
  while (currentNode) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
};
LinkedList.prototype.map = function(callback) {
  var results = [];
  this.each(function(node) {
    results.push(callback(node));
  })
  return results;
};