const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = String(matrix[i][j]);
    }
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i].slice(0))
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      console.log(`i=${i} j=${j}`)
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let m = j - 1; m <= j + 1; m++) {
          if (k >= 0 && k <= matrix.length - 1 && m >= 0 && m <= matrix[0].length - 1 && matrix[k][m] === 'true')
            count += 1;
        }
      }
      matrix[i][j] == 'true' ? arr[i][j] = count - 1 : arr[i][j] = count;
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};


