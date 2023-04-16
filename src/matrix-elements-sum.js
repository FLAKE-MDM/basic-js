const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, item) => sum +=item)
}

module.exports = {
  getMatrixElementsSum
};


// assert.strictEqual(getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]), 9);

// assert.strictEqual(getMatrixElementsSum([
//   [1, 2, 3, 4],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]), 15);

// assert.strictEqual(getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]), 18);

// assert.strictEqual(getMatrixElementsSum([
//   [0],
// ]), 0);

// assert.strictEqual(getMatrixElementsSum([
//   [1],
//   [5],
//   [0],
//   [2],
// ]), 6);