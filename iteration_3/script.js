$(document).ready(function(){ 


  /* -------------------------------------------
  Code to run sequentially
  ----------------------------------------------- */
 
  for (i = 0; i < 100; i++) {
        $("body").append( "<div class='element' src='transform:rotate(" + i * 100 + "deg);'></divv>");
        console.log("element " + i + " added");
        $("body").append( "<div class='element' style='background-color: hsl(" + i * 10 + ", 100%, 50%);'></div>" );
        console.log("element " + i + " added");
    }

  drawGridObjects();
  //drawRandomObject();
  var rx = Math.floor(Math.random()*100);
  var ry = Math.floor(Math.random()*100);
  console.log("rx: " + rx + " ry: " + ry);
  $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh;'></div>" );
  

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#546A7B');
  });


drawRandomObject();

  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */
  function drawGridObjects(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 0; j++){
      for (i = 0; i < 0; i++) { 
        $("body").append( "<div class='element' style='left:" + i* + "vw; top:" + j*5 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

    var now = new Date();
    var second = now.getSeconds ();
    console.log(second);

drawGridObjects();
rotateGridObjects(second);

  function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var rw = Math.floor(Math.random()*100); //random width
    var rh = Math.floor(Math.random()*100); //random height
    var color = "#000";
    if (ry < 50) {
      //ry is smaller than 50 = above the half
      color = "yellow";
    }
    else if (rx < 25){
      //square is on the left, below the half
      color = "red";
    }
    else if (rx < 75){
      //square is on the left, below the half
      color = "blue";
    }
    else {
      //square is on the right, below the half
      color = "white";
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + "; width:" + rw + "px; height:" + rh + "px;'></div>" );
  }
});

  function rotateGridObjects(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    $('.element').css('transform','rotate(' + second*6 + 'deg)');
    //the value of 's' is available to use in this function
  }

