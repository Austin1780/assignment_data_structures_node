const HashTable = require("./hashTable");
const customWords = require("./customWords");
const Dictionary = require("./dictionary");
const dictionaryJSON = require("./dictionary.json");

const Webster = new Dictionary();
const HashBrowns = new HashTable(dictionaryJSON);

HashBrowns.initialize();
HashBrowns.insert({
  word: "weasel1",
  definition: "That uncle everyone avoids at Thanksgiving"
});

const hydrate = arr => {
  arr.forEach(data => HashBrowns.insert(data));
};
hydrate(customWords);

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
