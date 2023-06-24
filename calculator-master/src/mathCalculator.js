// Return the sum of the two numbers
const addNumbers = (number1, number2) => {
  try {
    if (!number1 || !number2) {
      throw new Error('Number not valid')
    }
    const sum = number1 + number2
    return sum
  } catch (error) {
    console.log(error);
  }
  
}
// Return the difference of the two numbers
const subNumbers = (number1, number2) => {
  try {
    if (!number1 || !number2) {
      throw new Error('Number not valid')
    }
    const sub = number1 - number2
    return sub
  } catch (error) {
    console.log(error);
  }
  
}
// Return the product of the two numbers
const mulNumbers = (number1, number2) => {
  try {
    if (!number1 || !number2) {
      throw new Error('Number not valid')
    }
    const product = number1 * number2
    return product
  } catch (error) {
    console.log(error);
  }
  
}
// Return the quotient of the two numbers, check if the second number is zero, then throw an Error
const divNumbers = (number1, number2) => {
  try {
    if (number2===0) {
      throw new Error("ERROR::Divide by zero error..!")
    }else{
      const div = number1 / number2
      return div
    }

  } catch (error) {
    throw new Error("ERROR::Divide by zero error..!")
  }

  
}
// Return the mod of the two numbers, check if the second number is zero, then throw an Error
const moduloNumbers = (number1, number2) => {
  try {
    if (number2===0) {
      throw new Error("ERROR::Invalid number..!")
    }
    const modulo = number1 % number2
    return modulo
  } catch (error) {
    throw new Error("ERROR::Invalid number..!")

  }

  
}

module.exports = {
  addNumbers, subNumbers, mulNumbers, divNumbers, moduloNumbers
}
