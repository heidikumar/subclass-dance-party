// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step; 
  this.stepCount = 0; 
  this.step(); //invoke oldStep here to get to the makeBlinkyDancer.step method (and invoke that method). 
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 

makeBlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  var context = this; //this is to set the context so that "this" is not bound to the window in setTimeout
  setTimeout(function(){
    // debugger; 
    context.oldStep(); }, this.timeBetweenSteps ); 

};