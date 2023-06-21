
//import the lodash module
const lodash = require('lodash')


//Create a function to find a maximum value from number array.
function findMaxValue(array){
  return lodash.max(array)
}



//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(array, element) {
  return lodash.filter(array, (num)=>num>element)
  
}


//Create a function to return all values of employeeName array in capital letters.

function nameInCapital(names){
  return lodash.map(names, name => _.toUpper(name))
}


module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
