$(document).ready(function() { //always do this first. A special event 
  //append new element 100 times
  for (j = 0; j <100; j++){
    for (i = 0; i < 200; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw;top:" + j*50 + "px;'></div>" );
    console.log("element " + i + " added");
    }
  }

  var rx = Math.floor(Math.random()*100);
  var ry = Math.floor(Math.random()*100);
  console.log("rx: " + rx + " ry: " + ry);
  $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh;'></div>" );


  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#ff3151');
  });
});