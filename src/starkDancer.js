//starkDancer.js

var makeStarkDancer = function(top, left, height, width, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, height, width, timeBetweenSteps);
  this.$node = $('<span class="starkDancer" ><img src="../2015-08-subclass-dance-party/imgs/jonsow.png"></span>'); //onmouseover="alert(\'hello\')"
  this.width = 100;
  this.setPosition(this.top, this.left);
  this.setPicture(this.height, this.width); 
  //this.step(); //invoke oldStep here to get to the makeStarkDancer.step method (and invoke that method). 
};

makeStarkDancer.prototype = Object.create(Dancer.prototype);
makeStarkDancer.prototype.constructor = makeStarkDancer; 

makeStarkDancer.prototype.step = function(){
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};