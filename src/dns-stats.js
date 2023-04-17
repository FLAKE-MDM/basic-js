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
function getDNSStats(arr) {
  let obj = {};
  let arrDomains = arr.map(item => item.split(".").reverse().sort());
  let arrDomainsModify = [];
  arr.map(item => item.split(".").map(item => arrDomainsModify.push(item)));
  arrDomainsModify.sort()
  // let setDomains = new Set(arrDomainsModify.sort((a, b) => a.length - b.length));

  // obj["."+arrDomains[0][0]] = 0;
  // for(let i = 0; i < arrDomains.length; i++){
  //   obj["."+arrDomains[i].join(".")] = 0;
  // }
  // let arrKeys = [];
  // for(let key of Object.keys(obj)){
  //   arrKeys.push(key)
  // }


    for(let i = 0; i < arrDomainsModify.length; i++){
      let keyName = "." + arrDomainsModify[i];

      // if(i > 0){
      //   keyName = "." + arrDomainsModify[i -1 ] + "." + arrDomainsModify[i]
      // }

      if(obj[keyName]){
        obj[keyName]++
      } else{
        obj[keyName] = 1
      }

      // if(arrKeys[i - 1]){
      //   // str = (arrKeys[i]).slice(1 + arrKeys[i - 1].length);
      
      // console.log(str)
      // // console.log(arrDomainsModify[j])
      // if(str == arrDomainsModify[j]){
      //   counter++;
      // }
      
    }
    // obj[arrKeys[i]] = counter;



  // console.log(arrKeys);

  // console.log(arrDomains, " => arrDomains");
  // console.log(arrDomainsModify, " => arrDomainsModify");
  // console.log(setDomains, " => setDomains");
  // console.log(obj.keys());
  return obj
}

module.exports = {
  getDNSStats
};

// let domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]

// console.log(getDNSStats(domains), " => '.ru': 3,\n '.ru.yandex': 3,\n'.ru.yandex.code': 1,\n'.ru.yandex.music': 1,")