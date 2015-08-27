var Dancer = function(top, left, height, width, timeBetweenSteps){
  this.top = top;  
  this.left = left;
  this.width = width; 
  this.height = height; 
  this.$node = $('<span class="dancer"></span>');  
  this.timeBetweenSteps = timeBetweenSteps; 
  // debugger;
  this.setPosition(this.top, this.left);
  this.setPicture(this.height, this.width);
  this.step(); 
};

Dancer.prototype.step = function(callback){
  setTimeout(
    this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left, 
  }
  this.$node.css(styleSettings)
};

Dancer.prototype.setPicture = function(height, width){
  var styleSettings = {
    height: height, 
    width: width
  }
  this.$node.children().css(styleSettings);
}

