var express = require('express'),
    request = require('request'),
    roster = require('./roster.js'),
    house = roster.getHouse(),
    webhooks = require('./webhooks.js'),
    hook = webhooks.getHook(),
    app = express();


app.get('/', function (req, res) {
  res.json({msg: "Hello World!"});
});

app.get('/coffee', function(req, res) {
  request({
    url: hook || 'www.google.com', //<-- remove after debug
    method: "POST",
    json: true,
    body: house.coffee()
  });
  res.send({msg: "hello"});
});

app.get('/test', function(req, res) {
  res.json(house.coffee());
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
