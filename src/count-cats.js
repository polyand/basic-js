const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function cats(matrix, ears) {
  x = ears;
  matrix.forEach(elem => {
    if (elem == "^^") x++;
    if (Array.isArray(elem)) cats(elem, x);
  });
  return x;
}


function countCats(matrix) {
  let ears = 0;
  return cats(matrix, ears);
}









module.exports = {
  countCats
};

console.log (countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]))