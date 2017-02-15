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
    url: hook,
    method: "POST",
    json: true,
    body: house.coffee()
  });
  // request.post(
  //   hook,
  //   { json:  house.coffee() },
  //   function(error, response, body) {
  //   if (error) {
  //     console.log("Error: ", error);
  //   } else if (!error && response.status == 200) {
  //     console.log(body);
  //   }
  // }
  // );
  res.send({msg: "hello"});
});

app.get('/test', function(req, res) {
  res.json(house.coffee());
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
