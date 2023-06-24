// Return the ceil value of the number, check if the number is < or = zero, then throw an Error
const computeCeil = (number, cb) => {
    try {
      if(number<=0){
        throw new Error('ERROR::Number is less than or equal to zero..!')
      }else{
        return Math.ceil(number)
      }
      
    } catch (error) {
      throw new Error('ERROR::Number is less than or equal to zero..!')
    }


}
// Return the floor value of the number, check if the number is < or = zero, then throw an Error
const computeFloor = (number) => {
  try {
    if(number<=0){
      throw new Error('ERROR::Number is less than or equal to zero..!')
    }else{
      return Math.floor(number)
    }
    
  } catch (error) {
    throw new Error('ERROR::Number is less than or equal to zero..!')
  }

  
}
// Return the square root of the number, check if the number is < or = zero, then throw an Error
const computeSquareRoot = (number) => {
  try {
    if(number<=0){
      throw new Error('ERROR::Number is less than or equal to zero..!')
    }else{
      return Math.sqrt(number)
    }
    
  } catch (error) {
    throw new Error('ERROR::Number is less than or equal to zero..!')
  }

}
// Return the exponent value of the number, check if the number is < or = zero, then throw an Error
const computePower = (number, powerOf) => {
  try {
    if(number<=0 || powerOf <=0){
      throw new Error('ERROR::Number or power is less than or equal to zero')
    }else{
      return Math.pow(number, powerOf)
    }
    
  } catch (error) {
    throw new Error('ERROR::Number or power is less than or equal to zero')
  }

  
}

module.exports = {
  computeCeil, computeFloor, computeSquareRoot, computePower
}
