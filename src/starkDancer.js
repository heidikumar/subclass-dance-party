//starkDancer.js

var makeStarkDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="starkDancer"></span>'); 
  this.setPosition(this.top, this.left); 
  this.oldStep = this.step; 
  this.stepCount = 0; 
  this.step(); //invoke oldStep here to get to the makeStarkDancer.step method (and invoke that method). 
};

makeStarkDancer.prototype = Object.create(Dancer.prototype);
makeStarkDancer.prototype.constructor = makeStarkDancer; 

makeStarkDancer.prototype.step = function(){
  this.$node.toggle();
  var context = this; //this is to set the context so that "this" is not bound to the window in setTimeout
  setTimeout(function(){
    // debugger; 
    context.oldStep(); }, this.timeBetweenSteps ); 

};