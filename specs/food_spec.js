var assert = require('assert');
var Food = require('../food.js');

describe("Food", function() {

  var food1;

  beforeEach(function() {
    food1 = new Food("cheeseburger", 15);
  })

  it("should have a name", function() {
    assert.strictEqual(food1.name, "cheeseburger");
  })
