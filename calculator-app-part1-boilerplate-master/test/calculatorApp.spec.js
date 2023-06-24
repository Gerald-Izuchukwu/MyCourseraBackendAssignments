const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction, multiplication, division } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    expect(addition(2,3)).to.be.equal(5)
    expect(addition(355, 789)).to.be.equal(1144)
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(addition(-222, -567)).to.be.equal(-789)
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(addition(-1145, 563)).to.be.equal(-582)
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(subtraction(15, 9)).to.be.equal(6)
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(subtraction(15, -10)).to.be.equal(25)
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(758, 0)).to.be.equal(758)
  });
});

describe('Multiplication Functionality', ()=>{
  it('Checks for multiplying two positive number and return multiplication', ()=>{
    //Write Test Case Here
    expect(multiplication(123, 456)).to.be.equal(56088)
  });
  it('Check if number is postive and return negative number as product', ()=>{
    expect(multiplication(145, -2)).to.be.equal(-290)
  })
  it('check if any number is 0 and return 0', ()=>{
    expect(multiplication(0, 56)).to.be.equal(0)
  })
})

describe('Division Functionality', ()=>{
  it('Check for dividing two postive numbers to equal a postive number', ()=>{
    expect(division(55, 5)).to.be.equal(11)
  })  
  it('Check for dividing two negative numbers to equal a postive number', ()=>{
    expect(division(-60, -3)).to.be.equal(20)
  })
  it('Check for dividing one postive number and one negative number to equal a negative number', ()=>{
    expect(division(-90, 5)).to.be.equal(-18)
  })
  it('Check for dividing numerator =0 to equal 0', ()=>{
    expect(division(0, 500)).to.be.equal(0)
  })
  it('Check for dividing denominator = 0 to equal error', ()=>{
    expect(division(5545, 0)).to.be.equal('The denominator cannot be zero')
  })
})