var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/translate', function(req, res){
  var source = req.body.source;
  var url = "https://ca-101-chyld-nodered.mybluemix.net/translate/" + source;
  request(url, function(err, response, body){
    body = JSON.parse(body);
    res.send(body);
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});
