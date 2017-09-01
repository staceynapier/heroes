var Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isComplete = false;
}

Task.prototype.taskComplete = function() {
  this.isComplete = true;
  return this.isComplete;
}

module.exports = Task;
