

var makeBlinkyDancer = function(top, left, height, width, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, height, width, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"><img src="../2015-08-subclass-dance-party/imgs/Dragon.jpg"</span>'); 
  this.setPosition(this.top, this.left);  
  this.setPicture(this.height, this.width);

  //this.step(); //invoke oldStep here to get to the makeBlinkyDancer.step method (and invoke that method). 
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 

makeBlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};

