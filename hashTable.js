const Dictionary = require("./dictionary");

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
      this.insert({ word: key, definition: this.data[key] });
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

module.exports = HashTable;
