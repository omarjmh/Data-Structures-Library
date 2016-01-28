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
    callback(this.value, this.children);
    this.children.forEach(function(child, i) {
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
      callback(currentNode.value, currentNode.children);
      currentNode = queue.shift();
    }
  }
  mapDF(callback) {
    let mapped = [];
    this.DFselect(a => mapped.push(callback(a)));
    return mapped;
  }
  mapBF(callback) {
    let mapped = [];
    this.BFselect(a => mapped.push(callback(a)));
    return mapped;
  }
  filter(callback) {
    let filtered = [];
    this.DFselect(a => {
      if (callback(a)) {
        filtered.push(callback(a));
      }
    });
    return filtered;
  }
  contains(value) {
    return this.filter(a => a === value).length > 0;
  }
  isDescendant(child) {
    let result = false;
    this.DFselect(a => {
      if (a === child) {
        result = true;
        return;
      }
    });
    return result;
  }
  remove(value) {
    var self = this;
    (function recurse(currentNode, parent) {
      currentNode.children.forEach((a, i) => {
        if (a.value === value) {
          self.children[i] = null;
          return;
        }
      })
    })(this);
  }
}




















