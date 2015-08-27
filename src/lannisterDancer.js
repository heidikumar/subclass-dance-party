//lannisterDancer.js

var makeLannisterDancer = function(top, left, height, width, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, height, width, timeBetweenSteps);
  this.$node = $('<span class="lannisterDancer"><img src="../2015-08-subclass-dance-party/imgs/Tyrion.png"></span>'); 
  this.setPosition(this.top, this.left); 
  this.setPicture(this.height, this.width);
  //this.mouseOverGrow();
};

makeLannisterDancer.prototype = Object.create(Dancer.prototype);
makeLannisterDancer.prototype.constructor = makeLannisterDancer; 

makeLannisterDancer.prototype.step = function(){
  this.$node.toggle();
  Dancer.prototype.step.call(this); //this="lannisterDancer" and we are invoking the "setTimeout" function here
  // var context = this; //this is to set the context so that "this" is not bound to the window in setTimeout
  // setTimeout(function(){
  //   // debugger; 
  //   context.oldStep(); }, this.timeBetweenSteps );
};

