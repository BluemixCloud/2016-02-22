// wood = $1.25
// carpet = $2.50
// tile = $3.15

var compute = require("./compute");

var r1 = {length: 3, width: 5, type: 'wood'};
var r2 = {length: 5, width: 2, type: 'carpet'};
var r3 = {length: 7, width: 1, type: 'tile'};
var house = [r1, r2, r3, r2, r1, r1];

var cost = compute(house);
console.log('the cost of house', house, 'is', cost);
