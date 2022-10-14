const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let pos = 0;
  while (true) {
    let foundPos = email.indexOf('@', pos);
    if (foundPos == -1) break;
    pos = foundPos + 1;
  }
  return email.slice(pos);
}

module.exports = {
  getEmailDomain
};

console.log(getEmailDomain('example-indeed@strange-example.com'))
