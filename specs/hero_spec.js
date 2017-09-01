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

})
