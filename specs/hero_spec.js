var assert = require('assert');
var Record = require('../hero.js')

describe("Hero", function() {

  var hero;

  beforeEach(function(){
    herp = new Hero("Superman", "cheeseburger")
  })

  it(should have a name, function()) {
    assert.strictEqual(hero.name(), "Superman");
  }
