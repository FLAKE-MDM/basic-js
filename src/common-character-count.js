const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let result = [];

  for(let i = 0; i < arr1.length; i++){
    let num = arr2.indexOf(arr1[i])
    if(num != -1){
      result.push(arr2.splice(num, 1))
    }
  }

  return result.length


}

// let s1 = "aabcc";
// let s2 = "adaca";

// console.log(getCommonCharacterCount(s1, s2));
// console.log(getCommonCharacterCount('aabcc', 'adcaa'), 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac'), 3);
// console.log(getCommonCharacterCount('', 'abc'), 0);
// console.log(getCommonCharacterCount('a', 'b'), 0);

module.exports = {
  getCommonCharacterCount
};
