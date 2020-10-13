var makeSpinningDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="spinningDancer"></span>');

  this.step();

};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);

makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();

};




