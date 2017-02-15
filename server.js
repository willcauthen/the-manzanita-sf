var express = require('express'),
    roster = require('./roster.js'),
    house = roster.getHouse(),
    app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send("Hello World!");
});

app.get('/coffee', function(rew, res) {

  res.json({dates: house.coffee()});
});

app.listen(app.get('port'));