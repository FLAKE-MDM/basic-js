const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return "Unable to determine the time of year!"
  }


  let current = new Date(date)



  if(!(date instanceof Date) || isNaN(current)){
    throw new Error("Invalid date!")
  }

  let month = current.getMonth();
  let seasons = ['spring', 'summer', 'autumn', 'winter'];
  let message = "";
  switch(month){
    case 2:
    case 3:
    case 4:
      message = seasons[0];
      break;
    case 5:
    case 6:
    case 7:
      message = seasons[1];
      break;
    case 8:
    case 9:
    case 10:
      message = seasons[2];
      break;
    case 11:
    case 0:
    case 1:
      message = seasons[3];
      break;
  }


  return message
}

// console.log(getSeason(new Date(1950, 02, 31)),  ' => spring');
// console.log(getSeason(),  ' => spring');
// console.log(getSeason('foo'),  ' ');

// const [
//   winter,
//   spring,
//   summer,
//   autumn,
// ] = [
//       new Date(1900, 0, 22, 23, 45, 11, 500),
//       new Date(1354, 4, 17, 11, 27, 4, 321),
//       new Date(1, 6, 13, 23, 45, 11, 500),
//       new Date(22, 8, 22, 3, 0, 11, 500),
//   ];
// console.log(getSeason(winter), 'winter');
// console.log(getSeason(spring), 'spring');
// console.log(getSeason(summer), 'summer');
// console.log(getSeason(new Date(481, 1, 5, 21, 58, 37, 272)), 'winter')


// console.log(getSeason(new Date(2020, 01, 31)),  ' => spring')
// console.log(getSeason(new Date(2020, 01, 30)),  ' => цштеук ')
// console.log(getSeason(new Date(2020, 01, 30)),  ' => spring')
// console.log(getSeason(new Date(2020, 01, 29)),  ' => spring')
// console.log(getSeason(new Date(2020, 01, 28)),  ' => spring')

// let winter = new Date(2020, 01, 31);
// let spring = new Date(2020, 02, 02)
// console.log(winter > spring)
// console.log(winter < spring)
// console.log(winter === spring)

module.exports = {
  getSeason
};

