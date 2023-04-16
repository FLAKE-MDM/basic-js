const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];

  for(let i = 0; i < String(n).length; i++){
    let num = String(n).split("");
    arr.push(num)
    arr[i].splice(i, 1)
  }

  


  return arr.map(item => +item.join("")).sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};


// console.log(deleteDigit(152), 52);
// console.log(deleteDigit(1001), 101);
// console.log(deleteDigit(10), 1);
// console.log(deleteDigit(222219), 22229);
// console.log(deleteDigit(109), 19);
// console.log(deleteDigit(342), 42);