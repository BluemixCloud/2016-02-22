var expect = require('chai').expect;
var add = require('../lib/add');

describe('add()', function () {
  it('should add up two values', function () {
    expect(add(3,5)).to.equal(8);
  });
});
