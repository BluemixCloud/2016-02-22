// Compute the distance between 2 points
// var p1 = {x: 3, y: 2};
// var p2 = {x: 9, y: 7};
// var d = distance(p1, p2);

function distance(p1, p2){
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx*dx + dy*dy);
}

module.exports = distance;
