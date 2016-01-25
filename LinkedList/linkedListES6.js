const Node = function(value) {
  this.value = value;
  this.next = null;
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.values = [];
  }

  addToTail(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.values.push(value);
    }
    if (this.tail) {
      this.tail.next = node;
      this.values.push(value);
    }
    this.tail = node;
  }

  removeHead() {
    let value = this.head;
    this.head = this.head.next;
    return value;
  }

  size() {
    return this.values.length;
  }

  contains(target) {
    if (this.head.value === target || this.tail.value === target) {
      return true;
    }
    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } 
      currentNode = currentNode.next;
    }
    return false;
  }

  eachValue(callback) {
    // callback on each value
    callback(this.head.value);
    let currentNode = this.head.next;
    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  eachNode(callback) {
    // callback on each value
    callback(this.head);
    let currentNode = this.head.next;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  mapValues(callback) {
    return this.values.map(callback);
  }

  mapNodes(callback) {
    const results = [];
    this.eachNode(node => {
      results.push(callback(node));
    });
    return results;
  }

  deleteNode(value) {
    let currentNode = this.head;
    let deletedNodeValue = null;
    while(currentNode) {
      if (currentNode.value === value) {
        previous.next = currentNode.next;
        deletedNodeValue = currentNode.value;
        currentNode.next = null;
      }
      const previous = currentNode;
      currentNode = currentNode.next;
    }
    return deletedNodeValue;
  }

  hasCycle() {
    const map = {};
    const visited = [];
    this.eachNode(node => {
      if (visited.indexOf(node) < 0) {
        visited.push(node);
      }
      if (visited.indexOf(node.next) > -1) {
        return true;
      }
    });
    return false;
  }
}

