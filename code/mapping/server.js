var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/locations', function(req, res){
  var url = 'http://ca-101-chyld-nodered.mybluemix.net/locations';
  request(url, function(err, response, body){
    body = JSON.parse(body);
    res.send(body);
  });
});

app.post('/location', function(req, res){
  var o = {
    url: 'http://ca-101-chyld-nodered.mybluemix.net/location',
    method: 'post',
    body: req.body,
    json: true
  };
  request(o, function(err, response, body){
    res.send({});
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});
