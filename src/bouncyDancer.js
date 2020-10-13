var makeBouncyDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.attr("class", "bouncyDancer");

  this.step();
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  // this.$node.slideToggle();
};

makeBouncyDancer.prototype.lineUp = function() {

  this.$node.css({left: '', right: 100});
};