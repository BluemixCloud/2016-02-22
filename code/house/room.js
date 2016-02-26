var map = {wood: 1.25, carpet: 2.50, tile: 3.15};

function roomCost(room){
  return room.length * room.width * map[room.type];
}

module.exports = roomCost;
