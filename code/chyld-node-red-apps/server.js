var express = require('express');
var request = require('request');

var app = express();
app.use(express.static('public'));

app.get('/tweets', function(req, res){
  var url = "https://ca-101-chyld-nodered.mybluemix.net/tweets";
  request(url, function(err, result, body){
    body = JSON.parse(body);
    res.send({results: body});
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});
