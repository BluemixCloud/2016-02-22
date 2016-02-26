var expect = require('chai').expect;
var game = require('../lib/game');

describe('rollDie()', function () {
  it('should roll a number between 1 and 6', function () {
    var n = game.rollDie();
    expect(n).to.be.within(1,6);
  });
});

describe('rollDice()', function () {
  it('should roll many dice', function () {
    var rolls = game.rollDice(5);
    expect(rolls).to.have.length(5);
  });
});

describe('score()', function () {
  it('should score roll from a user - get 1', function () {
    var rnd = Math.random;
    Math.random = function(){return 0;};
    var rolls = game.rollDice(5); // rolls 1
    expect(game.score(rolls)).to.equal(1);
    Math.random = function(){return 0.5;}; // rolls 4
    var rolls = game.rollDice(3);
    expect(game.score(rolls)).to.equal(12);
    Math.random = rnd;
  });
});
