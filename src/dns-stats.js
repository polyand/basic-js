const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach(function (item, index) {
    domains[index] = item.split('.').reverse()
  });
  for (let i = 0; i < domains.length; i++) {
    domains[i].forEach(function (item, index) {
      domains[i][index] = '.' + item;
    });
  }
  let maxLenght = []
  domains.forEach(element => {
    maxLenght.push(element.length)
  });
  maxLenght = Math.max(...maxLenght);
  for (let i = 0; i < maxLenght; i++) {
    for (let j = 0; j < domains.length; j++) {
      if (!res[domains[j][0]]) res[domains[j][0]] = 1;
      else res[domains[j][0]] += 1;
      if (domains[j][1]) {
        domains[j][0] = domains[j][0].concat(domains[j][1]);
        domains[j].splice(1, 1);
      } else {
        domains[j].splice(0, 1);
      }
    }
  }
  if (res.undefined) delete res.undefined
  return res;
}

module.exports = {
  getDNSStats
};
