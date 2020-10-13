var makeSpinningDancer = function (top, left, timeBetweenSteps) {
  // this.$node = $('<span class="spinningDancer"></span>');
  console.log("top/left", top)
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.attr("class", "spinningDancer");


  this.step();

};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);

makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  // this.$node.toggle();

};

makeSpinningDancer.prototype.lineUp = function () {
  this.$node.css({left: 100});
}


