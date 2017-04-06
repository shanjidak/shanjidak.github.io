// Number 1: Checkerboard Function

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



// Number 2: Triangle Function

function makeTriangle(width, height) {
	var triangle = "";

	for (j = 0; j < height; j++) {
		if (j + 1) {	
			for (i = 0; i < width; i++) {
				if ( i + 1 ) {
					triangle = triangle + "#";
				} else {
					triangle = triangle + " ";
				}
			}
		} else {
			for (i = 0; i < width; i++) {
				if ( i + 1 ) {
					triangle = triangle + " ";
				} else {
					triangle = triangle + "#";
				}
			}
		}
		triangle = triangle + "\n";
	}
	console.log(triangle);
}



// Number 3 : Checkerboard Button

var checkerboard = document.getElementById("checkerboard");
var html = document.documentElement;

checkerboard.addEventListener("click", function(event) {
	if (j = 5) {	
		for (i = 5) {
			if ( i = 5 ) {
				checkerboard = checkerboard + "#";
			} else {
				checkerboard = checkerboard + " ";
			}
		}
	} else {
		for (i = 5) {
			if ( i = 5 ) {
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

