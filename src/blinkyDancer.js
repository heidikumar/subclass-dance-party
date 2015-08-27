

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"><img src="../2015-08-subclass-dance-party/imgs/Dragon.jpg" style="width:200px;height:150px"</span>'); 
  this.setPosition(this.top, this.left);  
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

//will call within function event in init file
makeBlinkyDancer.prototype.mouseFollow = function(){
  
}