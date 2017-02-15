var house = {
   roster : [
            'Stefanos',
            'Sav',
            'Valerie',
            'Camile',
            'Bryan',
            'Ashley',
            'Kailey-Jean',
            'Adam',
            'Olive',
            'Reid',
            'Lurch'
         ],
   shuffle : function(){
      newRoster = [];
      while (this.roster.length > 0) {
         newRoster.push(this.roster.splice(this.picker(), 1).toString());
      }
      this.roster = newRoster;
   },
   picker : function() {
      return Math.floor(Math.random() * this.roster.length);
   },
   coffee : function() {
      roster = this.roster;
      var response = {
         text: "_COFFEE DATES_, @channel",
         attachments: [
           {text: roster[0] + " and " + roster[1]},
           {text: roster[2] + " and " + roster[3]},
           {text: roster[4] + " and " + roster[5]},
           {text: roster[6] + " and " + roster[7]},
           {text: roster[8] + ", " + roster[9] + ", and " + roster[10]}
         ]
      };

      this.shuffle();
      return response;
   }
};

exports.getHouse = function() {
  return house;
};

var output = {
};
