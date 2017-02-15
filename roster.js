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
      while (roster.length > 0) {
         newRoster.push(roster.splice(this.picker(), 1).toString());
      }
      this.roster = newRoster;
   },
   picker : function() {
      return Math.floor(Math.random() * this.roster.length);
   },
   coffee : function() {
      roster = this.roster;
      var res= {};
      res.first = [roster[0], roster[1]];
      res.second=[roster[2], roster[3]];
      res.third = [roster[4], roster[5]];
      res.fourth=[roster[6], roster[7]];
      res.fifth=[roster[8], roster[9], roster[10]];

      this.shuffle();
      return (res);
   }
};

exports.getHouse = function() {
  return house;
};
