//	okay this called "constants.js" but it's really not
//	everything is changing depending on what the user inputs
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height= 500;

//	to pick what color square you want
var colorPicker = document.getElementById("color-picker");
	squareColor = colorPicker.value;
	document.onclick = function() {
	squareColor = colorPicker.value;
	};



var frameRate = 1000/30;