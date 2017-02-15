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

app.get('/coffee', function(rew, res) {
  request.post(
    hook,
    { json:  house.coffee() }
  );
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/test', function(req, res) {
  res.json(house.coffee());
});