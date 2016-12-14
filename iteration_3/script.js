$(document).ready(function(){ 

  for (i = 0; i < 100; i++) {
        $("body").append( "<div class='element' style='background-color: hsl(" + i * 10 + ", 100%, 50%);'></div>" );
        console.log("element " + i + " added");
        drawRandomObject();
        var rx = Math.floor(Math.random()*100);
        var ry = Math.floor(Math.random()*100);
        console.log("ry: " + rx + " ry: " + ry);
        $("body").append( "<div class='element random' style='left:" + "vw; top:" + "vh;'></div>" );
    }
    

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#546A7B');
  });


    var now = new Date();
    var second = now.getSeconds ();
    console.log(second);

rotateRandomObjects(second);

function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var rw = Math.floor(Math.random()*1500); //random width
    var rh = Math.floor(Math.random()*2); //random height
    if (ry > 0) {
      color = "random";
    }
  }

console.log("rx: " + rx + " ry: " + ry);
  $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );
});


function rotateRandomObjects(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    $('.element').css('transform','rotate(' + second*6 + 'deg)');
    //the value of 's' is available to use in this function
  }



