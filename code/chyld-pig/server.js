console.log('ready...3');

var express = require('express');
var app = express();
var game = require("./lib/game");

app.get('/turn/:name/:num', function (req, res) {
  var rolls = game.rollDice(req.params.num);
  var score = game.score(rolls);
  res.send({name: req.params.name, rolls: rolls, score: score});
});

app.get('/die', function (req, res) {
  var roll = game.rollDie();
  res.send({roll: roll});
});

app.get('/dice/:rolls', function (req, res) {
  var rolls = game.rollDice(req.params.rolls);
  res.send({rolls: rolls});
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/chyld', function (req, res) {
  res.send('medford');
});

app.post('/dog', function (req, res) {
  res.send('wooof!');
});

app.delete('/trump', function (req, res) {
  res.send('waaaatt????');
});

app.post('/square/:num', function (req, res) {
  console.log('req.params:', req.params);
  var num = req.params.num * 1;
  var result = num * num;
  res.send({result: result});
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log(process.env.PORT);
  console.log(process.env.IP);
  console.log('express is listening');
});
