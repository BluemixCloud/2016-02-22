var express = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res) {
  res.send('home page!');
});

app.get('/quote/:symbol', function (req, res) {
  var sym = req.params.symbol.toUpperCase();
  var url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=" + sym;
  request(url, function(err, result, body){
    body = JSON.parse(body);
    res.send({amount: body.LastPrice});
  });
});

app.get('/purchase/:symbol/:amount', function (req, res) {
  var sym = req.params.symbol.toUpperCase();
  var url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=" + sym;
  request(url, function(err, result, body){
    body = JSON.parse(body);
    var total = body.LastPrice * req.params.amount;
    res.send({shares: req.params.amount, symbol: sym, total: total});
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log(process.env.PORT);
  console.log(process.env.IP);
  console.log('express is listening');
});
