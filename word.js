class Word {
  constructor(data, next) {
    this.data = {
      word: data.word,
      definition: data.definition
    };
    this.next = next;
  }
}

module.exports = Word;
