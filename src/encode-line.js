const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let output = [];
  
  for(let i = 0; i < str.length; i++){
    counter = 0;
    if(str[i] == str[i - 1]){
      continue
    }
    rename(str[i], i)
  }

  
  function rename(item, index){
    let num = str.indexOf(item, index);

    if(num !== -1 && num < index + 1){
      counter++;
      rename(item, num + 1);
    } else{
      counter > 1 ? output.push(`${counter}${item}`) : output.push(item)
    }
  }

  return output.join("")
}

// console.log(encodeLine('aabbbc'), "=> 2a3bc");

module.exports = {
  encodeLine
};



// console.log(encodeLine('aaaatttt'), '4a4t');
// console.log(encodeLine('aabbccc'), '2a2b3c');
// console.log(encodeLine('abbcca'), 'a2b2ca');
// console.log(encodeLine('xyz'), 'xyz');
// console.log(encodeLine(''), '');