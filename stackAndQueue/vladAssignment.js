// const binaryMakerOrSomething = (n, param) => {
//   if(n === 1){
//     return ['0', '1']
//   }
//   return binaryMakerOrSomething(Math.floor(n/2)
// }
const binaryMaker = (n, param = 0, possibilityArray = []) => {
  let total = 1 / 2 * Math.pow(2, n);
  if (n === 0 && param === 0) {
    return null;
  } else if (n === 1 && param === 0) {
    return 1;
  } else if (n >= 2 && param === 0) {
    // console.log( binaryMaker(Math.floor(n/2), 1) binaryMaker(Math.floor(n/2), 0))
    for (let i = 0; i < total; i++) {
      possibilityArray.push("1");
    }
    return binaryMaker(n, param + 1, possibilityArray);
  } else if (param > 0) {
    for (let i = 0; i < total; i++) {
      // if (i > 0.5 * total) {
      //   possibilityArray[i] += '1';
      // } else {
      //   possibilityArray[i] += '0';
      // }

      possibilityArray[i] += (
        (Math.floor(total / (possibilityArray[i].length + 1)) % i) %
        2
      ).toString();
      // if(total / (possibilityArray[i].length + 1) === 1){
      //   possibilityArray[i] += '1';
      // }
      // else {
      //   possibilityArray[i] += '0';
      // }
    }
    if (n === param - 1) {
      return possibilityArray;
    }
    return binaryMaker(n, param + 1, possibilityArray);
  }
};

console.log(binaryMaker(5));
