"use strict"

class Stack  {
  constructor() {
    this.storage = [];
  }
  add(value) {
    this.storage.push(value);
  }
  remove() {
    let value = this.storage.pop();
    return value;
  }
  size() {
    return this.storage.length;
  }
  removeValue(value) {
    //TODO
  }
}