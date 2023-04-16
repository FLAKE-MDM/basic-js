const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let arr = String(num).split("");
  let sum = 0;

  for(let i = 0; i < arr.length; i++ ){
    sum+= +arr[i]
  }

  if(sum > 9){
    sum = getSumOfDigits(sum)
  }

  // if(arr.length != 1){
  //   console.log(arr.length)
  //   num = String(arr)
  //   arrNew = num.split("").reduce((sum, item) => sum += item)
  //   // getSumOfDigits(arr)
  // }

  return sum
}
module.exports = {
  getSumOfDigits
};



