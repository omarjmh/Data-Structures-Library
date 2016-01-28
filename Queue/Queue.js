"use strict"

class Queue {
  constructor(args) {
    this._storage = [];
  }
  enqueue(value) {
    this._storage.push(value);
  }
  dequeue() {
    let value = this._storage.shift();
    return value;
  }
  size() {
    return this._storage.length;
  }
}