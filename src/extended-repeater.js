const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = Boolean(options.separator) == true ? options.separator : "+";
  let separatorAdd = Boolean(options.additionSeparator) == true ? options.additionSeparator : "|";
  let addition = "";
  if(String(options.addition) && String(options.addition) !== "undefined"){
    addition = Array(options.additionRepeatTimes).fill(String(options.addition)).join(`${separatorAdd}`);
  }
  let repeatStr = Array(options.repeatTimes).fill(String(str) + addition).join(`${separator}`)

  return repeatStr
}

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }), ' => STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS');
// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }), ' => nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }), ' => REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');

module.exports = {
  repeater
};
