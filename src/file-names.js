const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let arr = [...names];
    let counter = 0;
    
    for(let i = 0; i < arr.length; i++){
      counter = 0;
      rename(arr[i], i + 1)
    }

   
    function rename(item, index){
      let num = arr.indexOf(item, index);
      if(num !== -1){
        counter++;
        if(counter > 0){
          arr[num] += `(${counter})`;
        }
        rename(item, num + 1);
      }
    }


    return arr
}

module.exports = {
  renameFiles
};

// let input = ["file", "file", "image", "file(1)", "file"];
// console.log(renameFiles(input), ' => ["file", "file(1)", "image", "file(1)(1)", "file(2)"]');