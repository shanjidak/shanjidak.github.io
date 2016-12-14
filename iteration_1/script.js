$(document).ready(function(){

	//append new element
	for (i = 0; i < 100; i++) {
		$("body").append( "<div class='element' style='left:" + "vw; top:" + "vh;'></div>");
		console.log("element " + i + " added");
    	$("body").append( "<div class='element' style='background-color: hsl(" + i * 3.6 + ", 100%, 50%);'></div>" );
      	console.log("element " + i + " added");
	}


	//mouse interation
	$('.element').mouseover(function(){
		$(this).css('background-color','white');
	})
	$('.element').mouseout(function(){
		$(this).css('background-color','white');
	})
})