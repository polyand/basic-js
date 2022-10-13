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
  let sum = 0;
  matrix[0].forEach(element => { sum += element });
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = matrix.length - 1; j > 0; j--) {
      for (let k = j - 1; k >= 0;) {
        if (matrix[k][i] == 0) {
          break;
        }
        if (k == 0) {
          sum += matrix[j][i]; 
          break;
        } else {
          k--;
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
