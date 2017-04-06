// console.log("hello world");

var myStudentDebt = 800;
myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [4, 7, 8, 16];
// console.log(myLuckyNumbers);

myLuckyNumbers[2] = 36; 
// console.log(myLuckyNumbers[2]);



//FUNCTIONS

//function addFive(x) {
//	return x + 5;
//}

//function add(x,y) {
//	console.log(x + y);
//}

//addFive(10);
//add(8,9);
//add("Bryant" + "Wells");


//var myAge = 19;

//if (myAge < 21) {
//	console.log("u cant party");
//} else {
//	console.log("party on garth");
//}


var hamburgers = 0;

//LOOPS
for (var i = 0; i < 10; i = i + 1) {
	//some code here
	hamburgers++;
	console.log(hamburgers);
}


// CONDITIONAL + LOOPS
//

console.log("How many licks does it take to get to the center of a tootsie pop??");

function askMrOwl (numOfLicks) {
	for (var licks = 1; licks <= numOfLicks; licks++) {
		if (licks < numOfLicks) {
			console.log("ahhh" + licks);
		} else {
			console.log("CRUNCH!!")
		}
	}
}

// askMrOwl(18);


//# # # #
// # # # #
//# # # #
// # # # #



function makeCheckerboard(width, height) {
	var checkerboard = "";

	for (j = 0; j < height; j++) {
		if (j % 2) {	
			for (i = 0; i < width; i++) {
				if ( i % 2 ) {
					checkerboard = checkerboard + "#";
				} else {
					checkerboard = checkerboard + " ";
				}
			}
		} else {
			for (i = 0; i < width; i++) {
				if ( i % 2 ) {
					checkerboard = checkerboard + " ";
				} else {
					checkerboard = checkerboard + "#";
				}
			}
		}
		checkerboard = checkerboard + "\n";
	}
	console.log(checkerboard);
}



// j = row i = column


var checkerboard = document.getElementById("checkerboard");
var html = document.documentElement;

bgButton.addEventListener("click", function(event) {
	if ( html.style.backgroundColor != "lightpink" ) {
		html.style.backgroundColor = "lightpink";
	} else {
		html.style.backgroundColor = "white";
	}
})


























