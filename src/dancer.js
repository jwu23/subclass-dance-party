// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

// create a variable and set to function with parameters 'top, left, timeBetweenSteps'
// create a node property
// create a method step
// call setTimeout with 2 parameters
// call step method
// create a setPosition method that takes in 2 parameters
// create a new object to set styleSettings
// set top: top property
// set left: left property
// set styleSettings to $node
// call setPosition with defauls
// return the object

var makeDancer = function (top, left, timeBetweenSteps) {

  // console.log(timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  // console.log(this.$node);
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  // console.log(this.timeBetweenSteps);
  // setTimeout(this.step, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
// makeDancer.prototype.step();

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};
// console.log("///", );
// makeDancer.prototype.setPosition(this.top, this.left);
