var roomCost = require("./room");

function compute(h){
  var total = 0;

  h.forEach(function(room){
    total += roomCost(room);
  });

  return total;
}

module.exports = compute;
