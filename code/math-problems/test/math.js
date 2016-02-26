var expect = require('chai').expect;
var math = require('../lib/math');

describe('factorial()', function () {
  it('should find the factorial of a number', function () {
    expect(math.factorial(5)).to.equal(120);
  });
});

describe('volume()', function () {
  it('should compute the volume', function () {
    expect(math.volume(2,3,4)).to.equal(24);
  });
});

describe('largest()', function () {
  it('should find the largest number in an array', function () {
    expect(math.largest([2,6,1,9,4])).to.equal(9);
  });
});

describe('isPrime()', function () {
  it('should determine if a number is prime or not', function () {
    expect(math.isPrime(24)).to.be.false;
    expect(math.isPrime(19)).to.be.true;
  });
});
