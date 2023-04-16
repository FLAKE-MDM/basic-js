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
  constructor(unreversed = true){
    this.unreversed = unreversed;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.vigenereSquare = [];

    for(let i = 0; i < this.alphabet.length; i++){
      let row = (this.alphabet.slice(i) + this.alphabet.slice(0, i)).split('');
      this.vigenereSquare.push(row)
    }

  }


  encrypt(str, keyword) {
    if(!str || !keyword){
      throw new Error("Incorrect arguments!")
    }

    let strArr = str.split("").map(element => element.toUpperCase());
    let keyArr = keyword.split("").map(element => element.toUpperCase());
    let strArrModify = strArr.filter(item => this.alphabet.includes(item));
    let keyArrModify = [...keyArr];
    while(keyArrModify.length < strArrModify.length){
      keyArrModify = keyArrModify.concat(keyArr)
    }
    keyArrModify.splice(strArrModify.length)

    const getNum = (arr) =>{
      let arrNumbers = []
      for(let i = 0; i < arr.length; i++){
        let index = this.vigenereSquare[0].indexOf(arr[i]);
        arrNumbers.push(index)
      }

      return arrNumbers
    }

    let strNumbersArr = getNum(strArrModify);
    let keyNumbersArr = getNum(keyArrModify);

    let output = [];

    for(let i = 0; i < strArrModify.length; i++){
      let sumbol = this.vigenereSquare[strNumbersArr[i]][keyNumbersArr[i]];
      output.push(sumbol)
    }

    for(let i = 0; i < strArr.length; i++){
      if(!this.alphabet.includes(strArr[i])){
        output.splice(i, 0, strArr[i])
      }
    }




    if(!this.unreversed){
      return output.reverse().join("")
    } else{
      return output.join("")
    }
  }


  decrypt(str, keyword) {
    if(!str || !keyword){
      throw new Error("Incorrect arguments!")
    }


    let strArr = str.split("").map(element => element.toUpperCase());
    let keyArr = keyword.split("").map(element => element.toUpperCase());
    let strArrModify = strArr.filter(item => this.alphabet.includes(item));
    let keyArrModify = [...keyArr];
    while(keyArrModify.length < strArrModify.length){
      keyArrModify = keyArrModify.concat(keyArr)
    }
    keyArrModify.splice(strArrModify.length)

    const getNum = (arr) =>{
      let arrNumbers = []
      for(let i = 0; i < arr.length; i++){
        let index = this.vigenereSquare[0].indexOf(arr[i]);
        arrNumbers.push(index)
      }

      return arrNumbers
    }

    let keyNumbersArr = getNum(keyArrModify);

    let strNumbersArr = [];

    for(let i = 0; i < keyNumbersArr.length; i++){
      let index = this.vigenereSquare[keyNumbersArr[i]].indexOf(strArrModify[i]);
      strNumbersArr.push(index)
    }

    console.log(strNumbersArr, ' => strNumbersArr')
    console.log(keyNumbersArr, ' => keyNumbersArr')

    let output = [];

    for(let i = 0; i < strArrModify.length; i++){
      let sumbol = this.alphabet[strNumbersArr[i]];
      output.push(sumbol)
    }

    for(let i = 0; i < strArr.length; i++){
      if(!this.alphabet.includes(strArr[i])){
        output.splice(i, 0, strArr[i])
      }
    }


    if(!this.unreversed){
      return output.reverse().join("")
    } else{
      return output.join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};


// const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'), '  => AEIHQX SX DLLU!')
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), ' => ATTACK AT DAWN!')
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'), ' => !ULLD XS XQHIEA')

