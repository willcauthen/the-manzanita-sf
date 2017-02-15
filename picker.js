// 'esversion: 6';
var roster = require('./roster.js'),
    peeps = roster.getRoster(),
    lineup = [];

console.log(peeps);

function picker() {
  var target = Math.floor(Math.random() * peeps.length);
  var entry = peeps.splice(target, 1).toString();
  lineup.push(entry);
}

while (peeps.length > 0) {
  picker();
}


// loop to set up pairs
for (i = 0; i < lineup.length; i += 2 ) {
  if (lineup[i + 1]) {
    pair = lineup[i] + " and " + lineup[i + 1];
    // console.log(pair);
  } else {
    // console.log(lineup[i] + " is destined to be alone this round");
  }

}
console.log(lineup);
exports.getPicker = function() {
  return picker;
};