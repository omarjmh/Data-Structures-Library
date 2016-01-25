"use strict"
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    let node = new Tree(value);
    this.children.push(node);
  }
  DFselect(callback) {
    callback(this.value);
    this.children.forEach(function(child) {
      // callback(child.value);
      child.DFselect(callback);
    });
  }
  BFselect(callback) {
    let queue = [];
    queue.push(this);
    let currentNode = queue.pop();
    while (currentNode) {
      currentNode.children.forEach(function(child) {
        queue.push(child);
      })
      callback(currentNode.value);
      currentNode = queue.shift();
    }
  }
}




















