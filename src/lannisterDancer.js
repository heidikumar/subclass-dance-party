//lannisterDancer.js

var makeLannisterDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="lannisterDancer"><img src="http://25.media.tumblr.com/3d25d103e9811f69bd9f9aa022738fa3/tumblr_n0rf4uAHHL1qmz4rgo3_250.gif" style="width:125px;height:125px"</span>'); 
  this.setPosition(this.top, this.left); 
  this.oldStep = this.step; 
  this.stepCount = 0; 
  this.step(); //invoke oldStep here to get to the makeLannisterDancer.step method (and invoke that method). 
};

makeLannisterDancer.prototype = Object.create(Dancer.prototype);
makeLannisterDancer.prototype.constructor = makeLannisterDancer; 

makeLannisterDancer.prototype.step = function(){
  this.$node.toggle();
  var context = this; //this is to set the context so that "this" is not bound to the window in setTimeout
  setTimeout(function(){
    // debugger; 
    context.oldStep(); }, this.timeBetweenSteps ); 

};