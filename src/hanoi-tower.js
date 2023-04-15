const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {}
  let countTurn = 2**disksNumber - 1;
  let turnsSpeedSecond = turnsSpeed / 60 / 60;
  obj.turns = countTurn;
  obj.seconds = Math.floor(countTurn / turnsSpeedSecond)

  return obj
}

// console.log(calculateHanoi(5, 4074), "{ turns: 31, seconds: 27 }");
module.exports = {
  calculateHanoi
};
