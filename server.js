var express = require('express'),
    roster = require('./roster.js'),
    house = roster.getHouse(),
    app = express();

app.get('/', function (req, res) {
  res.send("Hello World!");
});

app.get('/coffee', function(rew, res) {

  res.json({dates: house.coffee()});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});