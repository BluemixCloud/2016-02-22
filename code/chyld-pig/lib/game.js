function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice(n){
  var rolls = [];

  for(var i = 0; i < n; i++){
    rolls.push(rollDie());
  }

  return rolls;
}

function score(rolls){
  var total = 0;

  for(var i = 0; i < rolls.length; i++){
    var roll = rolls[i];
    if(roll === 1) return 1;
    total += roll;
  }

  return total;
}

exports.rollDie = rollDie;
exports.rollDice = rollDice;
exports.score = score;
