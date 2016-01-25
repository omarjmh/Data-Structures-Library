var Node = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};
var BinarySearchTree = function(value) {
  this._root = new Node(value);
};
BinarySearchTree.prototype.add = function(value) {
  var node = new Node(value);
  if (this._root === null) {
    this._root = node;
  } else {
      var insertKey;
      var current = this._root;
      insertKey = current.value > value ? 'left' : 'right';
      while (current) {
       if (!current[insertKey]) {
         current[insertKey] = node;
         return;
       } else {
         current = current[insertKey];
       }
      }
    }
};
BinarySearchTree.prototype.postOrder = function(current, callback) {
  if (!current) {
    return;
  }
  this.postOrder(current.left, callback);
  this.postOrder(current.right, callback);
  if (callback.constructor === Function) {
    callback(current);
  }
};





