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

  it("should have a favourit food", function() {
    assert.strictEqual(hero.favFood, "cheeseburger");
  });

})
