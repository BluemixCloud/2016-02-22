var express = require('express');
var request = require('request');
var unirest = require('unirest');
var client = require('twilio')(process.env.TWSID, process.env.TWTOK);

var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/movie', function(req, res){
  unirest.get("https://community-netflix-roulette.p.mashape.com/api.php?actor=" + req.body.Body)
  .header("X-Mashape-Key", process.env.MASHAPE)
  .header("Accept", "application/json")
  .end(function (result) {
    var message = '';
    for(var i = 0; i < result.body.length; i++){
      var movie = result.body[i].show_title;
      message += movie + ', ';
    }

    client.sendMessage({
      to: req.body.From,
      from: process.env.PHONE,
      body: message
    }, function(err, responseData){
    });

    console.log('***', message);
    res.send({});
  });

});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});
