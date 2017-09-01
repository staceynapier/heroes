var Hero = function( name, favFood ) {
  this.name = name;
  this.favFood = favFood;
  this.health = 0;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return("I am " + this.name);
}

Hero.prototype.add = function(task) {
  this.tasks.push(task);
  return this.tasks;
}

module.exports = Hero;
