var assert = require('assert');
var Task = require('../task.js');

describe("Task", function() {

  var eating;

  beforeEach(function() {
    eating = new Task(1, 3, 5);
  })

  it("should have a difficulty score", function() {
    assert.strictEqual(eating.difficulty, 1);
  })

  it("should have an urgency score", function() {
    assert.strictEqual(eating.urgency, 3);
  })

  it("should have a reward", function() {
    assert.strictEqual(eating.reward, 5);
  })

  it("should not be complete at start", function() {
    assert.strictEqual(eating.isComplete, false);
  })

  it("can be marked as compled", function() {
    assert.strictEqual(eating.taskComplete(), true);
  })

})
//
//   A task has a difficulty level out of 5
// A task has an urgency level out of 5
// A task has a reward- money back
// A task should be able to be marked as completed - true or false
