"use strict"
class Node {
  constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
  }
}
class BinarySearchTree {
  constructor(value) {
      this._root = new Node(value);
  }
  add(value) {
    let node = new Node(value);
    if (this._root === null) {
        this._root = node;
    } else {
        let insertKey;
        let current = this._root;
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
  postOrder(current, callback) {
    if (!current) {
        return;
    }
    this.postOrder(current.left, callback);
    this.postOrder(current.right, callback);
    if (callback.constructor === Function) {
        callback(current);
    }
  }
}