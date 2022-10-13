const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (options.hasOwnProperty('addition')) {
    let add = [];
    let addRep = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    for (let i = 0; i < addRep; i++) add.push(String(options.addition));
    str = str + add.join(options.additionSeparator ? options.additionSeparator : '|');
  }
  let res = [];
  let repTim = options.repeatTimes ? options.repeatTimes : 1;
  for (let i = 0; i < repTim; i++) res.push(str);
  return res.join(options.separator ? options.separator : '+')

}

module.exports = {
  repeater
};

