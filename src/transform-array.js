const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let resArr = [];
  for (let i = 0; i < arr.length; ) {

    if (typeof arr[i] == 'number') {
      resArr.push(arr[i]);
      i++;
      continue;
    }
    if (arr[i] == '--double-prev' && arr[i - 1]) {
      resArr.push(arr[i - 1]);
      i++;
      continue;
    }
    if (arr[i] == '--discard-prev' && resArr.length > 0) {
      resArr.pop();
      i++;
      continue;
    }
    if (arr[i] == '--double-next') {
      resArr.push(arr[i + 1]);
      i++;
      continue;
    }
    if (arr[i] == '--discard-next' && arr[i + 1]) {
      i += 2;
      continue;
    }
    console.log(resArr)
  }
  return resArr;
}




module.exports = {
  transform
};
