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

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});