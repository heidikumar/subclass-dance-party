$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 10000 //changed to make blinking less intense.
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event){
    //use getElementsByClassName to find number of starks and lannisters
    var numStark = document.getElementsByClassName("starkDancer");
    var numLannister = document.getElementsByClassName("lannisterDancer");
    //var dancerBuffer = 10;
    var starkInterval = $("body").height()/numStark.length; 
    var lannisterInterval = $("body").height()/numLannister.length; 
    var position; 

    var fixedRightLine = Math.floor($("body").width()*0.75); 
    var fixedLeftLine = Math.floor($("body").width()*0.25);

    var danceMover; 
    var top;

/*
<span class="lannisterDancer" style="top: 419.063794110669px; left: 1618.0654039979px; display: inline;"><img src="http://25.media.tumblr.com/3d25d103e9811f69bd9f9aa022738fa3/tumblr_n0rf4uAHHL1qmz4rgo3_250.gif" style="width:125px;height:125px" <="" span=""></span>
*/
    for (var i =0; i<numStark.length; i++){
      //remove the node and get access to the dancer
      //danceMover = $(numStark[i]).detach();
        //reset top and left using object setPosition
        top = starkInterval*(i+1) + 10;
      //use setAttribute on a specific HTML tag to change elements within
      numStark[i].style.top = top;
      numStark[i].style.left = fixedLeftLine;
    }
    for (var j = 0; j<numLannister.length; j++){

    }

  });
});

