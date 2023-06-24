const assert = require('chai').assert;
const packageFile = require('../package.json');
const calculator = require('../calculator');
const glob = require('glob');
const fs = require('fs');
const { expect } = require('chai');

// variable declairation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        // Write the testing logic here
        expect(calculator('A', {lhs:23, rhs:56})).to.be.equal(79)
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        // Write the testing logic here
        expect(calculator('a', {lhs:-215, rhs:-666})).to.be.equal(-881)

      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output'
        , function () {

          // Write the testing logic here
          expect(calculator('A', {lhs:23, rhs:-56})).to.be.equal(-33)


        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {

        // Write the testing logic here
        expect(calculator('a', {lhs:0, rhs:0})).to.be.equal(0)

      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('S', {lhs:56, rhs:23})).to.be.equal(33)

        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction',
        function () {
          // Write the testing logic here
          expect(calculator('s', {lhs:-56, rhs:-23})).to.be.equal(-33)

        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output'
        , function () {
          // Write the testing logic here
          expect(calculator('S', {lhs:-78, rhs:116})).to.be.equal(-194)

        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('s', {lhs:0, rhs:0})).to.be.equal(0)

      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('M', {lhs:15, rhs:769})).to.be.equal(11535)

      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', {lhs:-25, rhs:-25})).to.be.equal(625)

      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`,
        function () {
          // Write the testing logic here
          expect(calculator('M', {lhs:-225, rhs:625})).to.be.equal(-140625)

        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        // Write the testing logic here
      });
    });
    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('D', {lhs:150, rhs:5})).to.be.equal(30)

      });


      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', {lhs:-150, rhs:-30})).to.be.equal(5)

      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output',
        function () {
          // Write the testing logic here
          expect(calculator('D', {lhs:-22225, rhs:5})).to.be.equal(-4445)

        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        // Write the testing logic here
        expect(calculator('d', {lhs:456, rhs:0})).to.be.equal('Can not divide by zero')

      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          // Write the testing logic here
          expect(calculator((!'A' || !'a' || !'S' || !'s' || !'M' || !'m' || !'D' || !'d'), {lhs:556, rhs:45})).to.be.equal('Unknown operation')

        });
    });
  });
});

