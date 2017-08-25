function NBAPlayer(name, team, position){
  this.name = name;
  this.team = team;
  this.position = position;
}

const curry = new NBAPlayer('Steph', 'Warriors', 'forward');
const lebron = new NBAPlayer('Lebron', 'Cavs', 'forward');

NBAPlayer.prototype.dunk = function(){
  console.log(`${this.name} dunked the ball!`);
  // this is assigned to the NBAPlayer object
};

curry.name = "Steph";

curry.dunk();
lebron.dunk();

// console.log(curry.__proto__);
