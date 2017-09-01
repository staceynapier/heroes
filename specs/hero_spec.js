var assert = require('assert');
var _ = require('underscore');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');


describe("Hero", function() {

  var hero;
  var eating;
  var food1;
  var task;

  beforeEach(function() {
    hero = new Hero("Superman", "cheeseburger")
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Superman");
  });

  it("should have a favourite food", function() {
    assert.strictEqual(hero.favFood, "cheeseburger");
  });

  it("should have half health to start", function() {
    assert.strictEqual(hero.health, 50);
  });

  it("should have an empty array of tasks at start", function() {
    assert.strictEqual(hero.tasks.length, 0);
  });

  it("should be able to talk", function() {
    assert.strictEqual(hero.talk(), "I am Superman");
  });

  it("can add tasks", function() {
    hero.add("eating");
    assert.strictEqual(hero.tasks.length, 1);
  })

  it("should be able to eat", function() {
    food1 = new Food("sandwich", 10);
    eating = new Task(1, 3, 5);
    hero.add("eating");
    assert.strictEqual(hero.eat(food1), "Yum, I like a sandwich");
  })

  it("should change health after eating", function() {
    food1 = new Food("sandwich", 10);
    eating = new Task(1, 3, 5);
    hero.add("eating");
    hero.eat(food1);
    assert.strictEqual(hero.health, 60);
  })

  it("should increase health further if favFood eaten", function() {
    food1 = new Food("cheeseburger", 10);
    eating = new Task(1, 3, 5);
    hero.add("eating");
    hero.eat(food1);
    assert.strictEqual(hero.health, 65);
  })

  it("can sort tasks by difficulty - check first in array", function() {
    eating = new Task(2, 3, 5);
    sleeping = new Task(1, 2, 15);
    flying = new Task(5, 4, 0);
    hero.add(eating);
    hero.add(sleeping);
    hero.add(flying);
    newArray = hero.sortByDifficulty();
    assert.deepEqual(newArray.indexOf(sleeping), 0);
  })

  it("can sort tasks by difficulty - check first in array", function() {
    eating = new Task(2, 3, 5);
    sleeping = new Task(1, 2, 15);
    flying = new Task(5, 4, 0);
    hero.add(eating);
    hero.add(sleeping);
    hero.add(flying);
    newArray = hero.sortByDifficulty('difficulty');
    assert.deepEqual(newArray.indexOf(flying), 2);
  })

  it("can add and complete tasks", function() {
    food1 = new Food("sandwich", 10);
    eating = new Task(2, 3, 5);
    sleeping = new Task(1, 2, 15);
    flying = new Task(5, 4, 0);
    hero.eat(food1);
    hero.add(eating);
    hero.add(sleeping);
    hero.add(flying);
    eating.taskComplete()
    console.log(eating.taskComplete());
    var newArray = hero.sortifComplete();
    console.log(newArray);
    assert.deepEqual(newArray[0], eating);
  })

})
