const addition = (num1, num2) => {
  // Write the code here
  return num1 + num2
};

const subtraction = (num1, num2) => {
    // Write the code here
    return num1 - num2
};

const multiplication = (num1, num2)=>{
  return num1 * num2
}

const division = (num1, num2)=>{
  if(num2!== 0){
    return num1 / num2
  }else{
    return "The denominator cannot be zero"
  }
}

module.exports = { multiplication, division, addition, subtraction };
