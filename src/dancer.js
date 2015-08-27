var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;  
  this.left = left;
  this.$node = $('<span class="dancer"></span>');  
  this.timeBetweenSteps = timeBetweenSteps; 
  // debugger;
  this.setPosition(this.top, this.left);
};

Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){
    context.step(); //test this 
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  }
  this.$node.css(styleSettings)
};

