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
  str = str.split(/\B|/);
  let obj = str.reduce(function (acc, item, index) {
    if (!acc[item]) acc[item] = 1;
    else {
      if (item == str[index - 1] && `${Object.keys(acc)[Object.keys(acc).length - 1]}`[0] == item) {
        acc[Object.keys(acc)[Object.keys(acc).length - 1]] += 1;
      }
      else acc[`${item + index}`] = 1;
    }
    return acc;
  }, {});
  let res = []
  for (let key in obj) {
    if (obj[key] != 1) {
      res.push(obj[key]);
      res.push(`${key}`[0]);
    } else {
      res.push(`${key}`[0]);
    }
  }
  return res.join('');
}


module.exports = {
  encodeLine
};

