$(document).ready(function(){ 



  for (i = 0; i < 100; i++) {
        $("body").append( "<div class='element' style='background-color: hsl(" + i * 10 + ", 100%, 50%);'></div>" );
        console.log("element " + i + " added");
        drawRandomObject();
        var rx = Math.floor(Math.random()*100);
        var ry = Math.floor(Math.random()*100);
        console.log("ry: " + ry + " ry: " + ry);
        $("body").append( "<div class='element random' style='left:" + "vw; top:" + "vh;'></div>" );
    }

    

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#546A7B');
  });


  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */

function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var rw = Math.floor(Math.random()*1500); //random width
    var rh = Math.floor(Math.random()*2); //random height
    if (ry < 100) {
      //ry is smaller than 50 = above the half
      color = "hsl(" + i * 10 + ", 100%, 50%)";
    }

   console.log("rx: " + ry + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + "; width:" + rw + "px; height:" + rh + "px;'></div>" );
  }
});