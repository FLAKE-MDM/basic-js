const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!arr || !Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let transformArray = [...arr];

  

  for(let i = 0; i < transformArray.length; i++){
    switch(transformArray[i]){
      case "--double-next":
        // if(!transformArray[i + 1]){
        //   throw new Error("'arr' parameter must be an instance of the Array!")
        // }
        transformArray [i] = transformArray [i + 1];
        break;
      case "--double-prev":
          // if(!transformArray[i - 1]){
          //   throw new Error("'arr' parameter must be an instance of the Array!")
          // }
          transformArray [i] = transformArray [i - 1];
          break;
      case "--discard-prev":
          // if(!transformArray[i - 1]){
          //   throw new Error("'arr' parameter must be an instance of the Array!")
          // }
          transformArray [i - 1] = 'delete';
          transformArray [i] = 'delete';
          break;
      case "--discard-next":
          // if(!transformArray[i + 1]){
          //   throw new Error("'arr' parameter must be an instance of the Array!")
          // }
          transformArray [i + 1] = 'delete';
          transformArray [i] = 'delete';
          break;
      default:
    }
  }


  return transformArray.filter(item => item !== 'delete' && item !== undefined)
}
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]), " => [1, 2, 3, 4, 5]")
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]), " => [1, 2, 3, 1337, 1337, 1337, 4, 5]")
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]), " => [1, 2, 3, 4, 5]")
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]), " => [1, 2, 3, 1337, 4, 5]")



module.exports = {
  transform
};
