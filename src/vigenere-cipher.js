const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    else {
      message = message.toUpperCase().split(/\B|/);
      key = key.toUpperCase().split(/\B|/);
      while (message.length > key.length) key = key.concat(key);
      let cipher = [];
      for (let i = 0; i < message.length; i++) {
        if (!/[A-Z]/.test(message[i])) key.splice(i, 0, message[i])
        for (let j = 0; j < 26; j++) {
          if (message[i] === this.alphabet[j]) {
            message[i] = j;
            break;
          }
        }
        for (let j = 0; j < 26; j++) {
          if (key[i] === this.alphabet[j]) {
            key[i] = j;
            break;
          }
        }
        if (typeof message[i] === 'number') {
          message[i] + key[i] < 26 ? cipher.push(this.alphabet[message[i] + key[i]]) : cipher.push(this.alphabet[message[i] + key[i] - 26]);
        } else {
          cipher.push(message[i]);
        }
      }
      return this.direct == false ? cipher.reverse().join('') : cipher.join('');
    }
  }
  
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    else {
      message = message.toUpperCase().split(/\B|/);
      key = key.toUpperCase().split(/\B|/);
      while (message.length > key.length) key = key.concat(key);
      let decipher = [];
      for (let i = 0; i < message.length; i++) {
        if (!/[A-Z]/.test(message[i])) key.splice(i, 0, message[i])
        for (let j = 0; j < 26; j++) {
          if (message[i] === this.alphabet[j]) {
            message[i] = j;
            break;
          }
        }
        for (let j = 0; j < 26; j++) {
          if (key[i] === this.alphabet[j]) {
            key[i] = j;
            break;
          }
        }
        if (typeof message[i] === 'number') {
          message[i] - key[i] >= 0 ? decipher.push(this.alphabet[message[i] - key[i]]) : decipher.push(this.alphabet[message[i] - key[i] + 26]);
        } else {
          decipher.push(message[i]);
        }
      }
      return this.direct == false ? decipher.reverse().join('') : decipher.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
