const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  let chainArr = [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if(value){
      this.chain.push(`(${value})`)
    }
    else {
      this.chain.push(`( )`)
    }

    return this
  },
  removeLink(position) {
    if(position < 0 || position > this.chain.length || isNaN(position)){
      throw new Error("You can't remove incorrect link!")
    }
    return this.chain.splice(position - 1, 1)


    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let finish = this.chain.join("~~");
    this.chain = []

    return finish
  }
};

module.exports = {
  chainMaker
};
