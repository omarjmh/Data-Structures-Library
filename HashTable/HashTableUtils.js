"use strict"

class LimitedArray {
  constructor(limit) {
    this._storage = [];
    this.limit = limit;
  }
  get(index){
    this.checkLimit(index);
    return this._storage[index];
  }
  set(index, value){
    this.checkLimit(index);
    this._storage[index] = value;
  }
  each(callback){
    for(let i = 0; i < this._storage.length; i++){
      callback(this._storage[i], i, this._storage);
    }
  }
  checkLimit(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(this.limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };
}

let getIndexBelowMaxForKey = function(str, max){
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

class HashTable {
  constructor(args) {
    this._limit = 8;
    this._storage = new LimitedArray(this._limit);
  }
  insert(k, v){
    let i = getIndexBelowMaxForKey(k, this._limit);
    let bucket = this._storage.get(i) || [];
    let found = false;
    bucket.forEach(tuple => {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    });
    if (!found) {
      bucket.push([k,v]);
    }
    this._storage.set(i, bucket);
  }

  retrieve(k){
    let i = getIndexBelowMaxForKey(k, this._limit);
    let bucket = this._storage.get(i);
    let value = null;
    bucket.forEach(tuple => {
      if (tuple[0] === k) {
        value = tuple[1];
      }
    });
    return value;
  }

  remove(k){
    let i = getIndexBelowMaxForKey(k, this._limit);

  }
}

let l = console.log;
let h = new HashTable();
h.insert('omar', 'sial');
l(h.retrieve('omar'));