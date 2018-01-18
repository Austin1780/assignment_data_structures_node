const dictionaryJSON = require("./dictionary.json");

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

const Webster = new Dictionary();

let words = [
  { word: "cat1", definition: "a feline pet with an attitude" },
  { word: "dog1", definition: "a canine pet that's loyal" },
  {
    word: "cougar1",
    definition:
      "an old woman who hunts younger males of the same species aggressively"
  },
  {
    word: "vulture1",
    definition: "a pretend friend who habitually siphons resources"
  },
  { word: "dawg", definition: "gangsta's BFF" },
  { word: "bird1", definition: "it's for the birds" },
  { word: "chicken1", definition: "a cowardly wuss" },
  { word: "snake1", definition: "a double crossing, backstabbing person" }
];

// const hydrate = arr => {
//   arr.forEach(data => Webster.addNode(data));
// };
//
// Webster.initialize();
// hydrate(words);
// Webster.printList();
//
// console.log('=========================');
// console.log('Adding Fox');
// console.log('=========================');
//
// Webster.addNodeIndex({ word: 'fox', definition: 'sly crafty individual' }, 5);
// Webster.printList();
//
// console.log('=========================');
// console.log('Removing Chicken');
// console.log('=========================');
//
// Webster.removeNode(7);
// Webster.printList();
//
// console.log('=========================');
// console.log('Finding Cougar');
// console.log('=========================');
//
// Webster.findNode(2);
//
// console.log('=========================');
// console.log('Reversing List');
// console.log('=========================');
//
// Webster.reverse();
// Webster.printList();

class HashTable {
  constructor(dictionaryJSON) {
    this.buckets = [];

    this.indexes = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25
    };

    this.data = dictionaryJSON;
  }

  initialize() {
    for (let i = 0; i < 26; i++) {
      this.buckets[i] = new Dictionary();
      this.buckets[i].initialize();
    }
    console.log(this.data);
    for (let key in this.data) {
      HashBrowns.insert({ word: key, definition: this.data[key] });
    }
  }

  hash(word) {
    return this.indexes[word.word[0]];
  }

  insert(word) {
    const index = this.hash(word);
    const arrayIndex = this.buckets[index];
    if (!arrayIndex) {
      arrayIndex.addFirstNode(word);
    } else {
      arrayIndex.addNode(word);
    }
  }

  define(word) {
    let counter = 0;
    const index = this.indexes[word[0]];
    const arrayIndex = this.buckets[index];
    if (!arrayIndex) {
      counter++;
      return console.log("entry not found");
    } else {
      let currentNode = arrayIndex.headNode;
      while (currentNode !== null) {
        counter++;
        if (currentNode.data.word === word) {
          return console.log(
            `Word: ${currentNode.data.word} Definition: ${
              currentNode.data.definition
            } Counter: ${counter}`
          );
        }
        currentNode = currentNode.next;
      }
      return console.log(`entry not found. Counter: ${counter}`);
    }
  }

  renderList() {
    for (let i = 0; i < 26; i++) {
      this.buckets[i].printList();
      console.log("--------------------");
    }
  }
}

const HashBrowns = new HashTable(dictionaryJSON);

HashBrowns.initialize();
HashBrowns.insert({
  word: "weasel1",
  definition: "That uncle everyone avoids at Thanksgiving"
});

const hydrate = arr => {
  arr.forEach(data => HashBrowns.insert(data));
};
hydrate(words);

// const transform = () => {
// fs.readFile("./dictionary.json", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(`Successfully loaded!`);
//   data = JSON.parse(data);
//   for (let key in data) {
//     HashBrowns.insert({ word: key, definition: data[key] });
//   }
// });
// };

HashBrowns.renderList();
console.log("=========finding weasel==========");
HashBrowns.define("weasel1");
console.log("=========finding dawg==========");
HashBrowns.define("dawg");
console.log("=========finding cougar==========");
HashBrowns.define("cougar1");
console.log("=========finding chested==========");
HashBrowns.define("chested");
console.log("=========finding bagpipe==========");
HashBrowns.define("bagpipe");
