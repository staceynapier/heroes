var Hero = function( name, favFood ) {
  this.name = name;
  this.favFood = favFood;
  this.health = 50;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return("I am " + this.name);
}

Hero.prototype.add = function(task) {
  this.tasks.push(task);
  return this.tasks;
}

Hero.prototype.eat = function(food, task) {
  if(food.name === this.favFood) {
    this.health += (food.replenishmentValue *1.5);
    return ("Yum, I like a " + food.name)
  } else {
    this.health += food.replenishmentValue;
    return ("Yum, I like a " + food.name)
  }
}

module.exports = Hero;
