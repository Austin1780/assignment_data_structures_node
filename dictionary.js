const Word = require("./word");

class Dictionary {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  initialize(firstNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }

  addFirstNode(data) {
    this.headNode = new Word(data, null);
    this.lastNode = this.headNode;
  }

  //Big-O time = O(1), constant
  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    } else {
      const node = new Word(data, null);
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }

  addNodeIndex(data, index) {
    const node = new Word(data, null);
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    //Big-0 time = O(n), linear
    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    let nextNode = currentNode;
    //Big-O time = O(1), constant
    currentNode = node;
    currentNode.next = nextNode;
    prevNode.next = currentNode;
  }

  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    let nextNode = currentNode.next;
    currentNode.next = null;
    prevNode.next = nextNode;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.headNode;

    // Big-O time = O(n), linear time
    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }
    console.log(
      `Counter = ${counter} Current Node = ${currentNode.data.word} : ${
        currentNode.data.definition
      }`
    );
    return currentNode;
  }
  //Big O = O(n) linear time. has to iterate through each list item and manually alter
  //Modifies it in place. No new nodes created.
  reverse() {
    let counter = 0;
    let currentNode = this.headNode;
    let previousNode = null;
    let nextNode = currentNode.next;
    this.headNode = this.lastNode;
    this.lastNode = currentNode;
    this.lastNode.next = null;

    while (nextNode !== null) {
      previousNode = currentNode;
      currentNode = nextNode;
      nextNode = currentNode.next;
      currentNode.next = previousNode;
    }
  }

  printList() {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

module.exports = Dictionary;
