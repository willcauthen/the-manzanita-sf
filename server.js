var express = require('express'),
    roster = require('./roster.js'),
    house = roster.getHouse(),
    app = express();


app.get('/', function (req, res) {
  res.json({msg: "Hello World!"});
});

app.get('/coffee', function(rew, res) {

  res.json({text: "_COFFEE DATES_",
            attachments: [
              {text: "Date:" + house.roster[0] + " and " + house.roster[1]}
            ]
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});