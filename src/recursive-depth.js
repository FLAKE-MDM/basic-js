const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array, counter = 0) {
    if(Array.isArray(array)){
      let deepMax = counter + 1;
      for(let i = 0; i < array.length; i++){
        let deepCounter = this.calculateDepth(array[i], counter + 1);
        if (deepCounter > deepMax) {
          deepMax = deepCounter;
        }
      }
      return deepMax;
    } else {
      return counter;
    }
  }
}

module.exports = {
  DepthCalculator
};

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), " => 31")
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]), 2)
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5)
// console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3)
// console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2)
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 25)
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4)
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 15)