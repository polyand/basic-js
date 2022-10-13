const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value || value === null || isNaN(value) || value === 0 || value === false) this.chain.push(`( ${value} )`);
    else this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' &&
    Number.isInteger(position) &&
    this.chain.length >= position && position > 0) 
    this.chain.splice(position - 1, 1);
    else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this

  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    let simpleChain = this.chain.join("~~");
    this.chain = [];
    return simpleChain;
  }
};

module.exports = {
  chainMaker
};
