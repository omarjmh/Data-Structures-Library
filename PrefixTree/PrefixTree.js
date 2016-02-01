"use strict"
class PrefixTree {
  constructor(value) {
    this.value = value || ' ';
    this.children = [];
  }
  add(string) {
    let runningString = ' ';
    var copy = string.split('');
    (function recurse(currentNode) {
      if (copy.length > 0) {
        runningString += copy.shift();
      } else {
        return;
      }
      let found = false;
      currentNode.children.forEach(child => {
        if (child.value === runningString) {
          found = true;
          recurse(child);
        } 
      })
        if (!found) {
          let value = new PrefixTree(runningString);
          recurse(value);
          currentNode.children.push(value);
        }
    })(this);
  }
  logger(callback) {
    var count = 0;
    (function recurse(currentNode) {
      callback(currentNode.value);
      count++;
      currentNode.children.forEach(child => recurse(child))
    })(this);
  return count;
  }
  contains(string) {

  }
  startsWith(string) {
    // returns everything that starts with the input string
    
  }
}
