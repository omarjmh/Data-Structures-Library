var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.values = [];
};
var Node = function(value) {
  this.value = value;
  this.next = null;

};
LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.values.push(value);
  }
  if (this.tail) {
    this.tail.next = node;
    this.values.push(value);
  }
  this.tail = node;
};
LinkedList.prototype.removeHead = function() {
  var value = this.head;
  this.head = this.head.next;
  return value;
};
LinkedList.prototype.size = function() {
  return this.values.length;
};
LinkedList.prototype.contains = function(target) {
  if (this.head.value === target || this.tail.value === target) {
    return true;
  }
  var currentNode = this.head.next;
  while (currentNode) {
    if (currentNode.value === target) {
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
  callback(this.head);
  var currentNode = this.head.next;
  while (currentNode) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
};
LinkedList.prototype.mapValues = function(callback) {
  return this.values.map(callback);
};
LinkedList.prototype.mapNodes = function(callback) {
  var results = [];
  this.eachNode(function(node) {
    results.push(callback(node));
  });
  return results;
};
LinkedList.prototype.deleteNode = function(value) {
  var currentNode = this.head;
  var deletedNodeValue = null;
  while(currentNode) {
    if (currentNode.value === value) {
      previous.next = currentNode.next;
      deletedNodeValue = currentNode.value;
      currentNode.next = null;
    }
    var previous = currentNode;
    currentNode = currentNode.next;
  }
  return deletedNodeValue;
};
LinkedList.prototype.hasCycle = function() {
  var map = {};
  var visited = [];
  this.eachNode(function(node) {
    if (visited.indexOf(node) < 0) {
      visited.push(node);
    }
    if (visited.indexOf(node.next) > -1) {
      return true;
    }
  });
  return false;
};