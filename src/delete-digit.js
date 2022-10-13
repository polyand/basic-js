const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = ('' + n).split('').map(Number);
  for (let i = 0; i < arr.length; i++) {
    let current = arr.slice();
    current.splice(i, 1);
    current = Number(current.join(''));
    max = Math.max(max, current)
  }
  return max;
}

module.exports = {
  deleteDigit
};

