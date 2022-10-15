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
  depth = 1;
  calculateDepth(arr, acc = 0) {
    if (acc == 0) this.depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let arr1 = arr.flat();
        this.depth += 1;
        acc += 1;
        this.calculateDepth(arr1, acc);
        break;
      }
    }
    return this.depth;
  }
}


module.exports = {
  DepthCalculator
};
