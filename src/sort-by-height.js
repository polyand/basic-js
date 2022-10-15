const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minusOneIndex = [];
  arr.forEach(function (item, index) {
    if (item == -1) minusOneIndex.push(index)
  });
  arr = arr.filter(item => item != -1);
  arr = arr.sort(sorting)
  minusOneIndex.forEach(item => {
    arr.splice(item, 0, -1)
  });
  return arr;
}

function sorting(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}



module.exports = {
  sortByHeight
};



console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))