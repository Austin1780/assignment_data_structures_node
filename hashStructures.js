class Word {
  constructor(data, next) {
    this.data = {
      word: data.word,
      definition: data.definition
    };
    this.next = next;
  }
}

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

const Webster = new Dictionary();

let words = [
  { word: 'cat', definition: 'a feline pet with an attitude' },
  { word: 'dog', definition: "a canine pet that's loyal" },
  {
    word: 'couger',
    definition:
      'an old woman who hunts younger males of the same species aggressively'
  },
  {
    word: 'vulture',
    definition: 'a pretend friend who habitually siphons resources'
  },
  { word: 'dawg', definition: "gangsta's BFF" },
  { word: 'bird', definition: "it's for the birds" },
  { word: 'chicken', definition: 'a cowardly wuss' },
  { word: 'snake', definition: 'a double crossing, backstabbing person' }
];

const hydrate = arr => {
  arr.forEach(data => Webster.addNode(data));
};

Webster.initialize();
hydrate(words);
Webster.printList();

console.log('=========================');
console.log('Adding Fox');
console.log('=========================');

Webster.addNodeIndex({ word: 'fox', definition: 'sly crafty individual' }, 5);
Webster.printList();

console.log('=========================');
console.log('Removing Chicken');
console.log('=========================');

Webster.removeNode(7);
Webster.printList();

console.log('=========================');
console.log('Finding Cougar');
console.log('=========================');

Webster.findNode(2);

console.log('=========================');
console.log('Reversing List');
console.log('=========================');

Webster.reverse();
Webster.printList();
