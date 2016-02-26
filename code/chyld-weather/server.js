var express = require('express');
var request = require('request');
var app = express();
app.use(express.static('public'));

app.get('/forecast/:lat/:lng', function (req, res){
  var url = process.env.CHYLD_WEATHER + "/api/weather/v2/forecast/daily/10day?units=e&geocode="+req.params.lat+","+req.params.lng+"&language=en-US";
  request(url, function(err, result, body){
    body = JSON.parse(body);
    res.send({forecast: body});
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening');
});
