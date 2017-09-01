var assert = require('assert');
var Hero = require('../hero.js');

describe("Hero", function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("Superman", "cheeseburger")
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Superman");
  });

  it("should have a favourite food", function() {
    assert.strictEqual(hero.favFood, "cheeseburger");
  });

  it("should have full health to start", function() {
    assert.strictEqual(hero.health, 0);
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
    assert.strictEqual(hero.eat("sandwich"), "Yum, I like a sandwich");
  })

})
