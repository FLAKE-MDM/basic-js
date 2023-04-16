const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],


  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if(String(value)){
      this.chain.push(`( ${String(value)} )`)
    }
    else {
      this.chain.push(`( )`)
    }

    return this
  },

  removeLink(position) {
    if(position < 1 || position > this.chain.length  || isNaN(position)){
      this.chain = []
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
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

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain(), '=> ( 1 )~~( 2 )~~( 3 )')
// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain(), ' => ( 2 )~~( 3 )')
// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain(), '=> ( 2 )~~( 1 )~~( 3 )')
// console.log((chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), ' => ( 3rd )~~( function () { } )'));

//  console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//  console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
//  console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
//  console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), ' =>( 3rd )~~( function () { } )')
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')