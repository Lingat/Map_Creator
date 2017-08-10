// Options Bar Functions
var gridInt = 1,
	toggleMouse = false;
	
function toggleEraser() {
	gridInt = 0;
}

function toggleDraw() {
	gridInt = 1;
}

function squareDown(e) {
		var rect = canvas.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top,
		toggleMouse = true;


		// iterating through the pathWay that holds the objects, if click is within boundaries do something
		for(i = 0; i < gridSquares.length; i++) {
				rectWidth = gridSquares[i].width,
				rectHeight = gridSquares[i].height,
				rectX = gridSquares[i].x,
				rectY = gridSquares[i].y;
				placeX = gridSquares[i].placeX,
				placeY = gridSquares[i].placeY;

				if(e.x< (rectX + rectWidth) && e.y < (rectY + rectHeight) && e.x > rectX && e.y > rectY ) {
			
					map[placeY][placeX] = gridInt;
			
				}
		}		
}

/*
	easy explanation:
	if mouse is clicked, place square down and toggleMouse
	onmove, place more square if toggleMouse is true
	if mouseup then toggleMouse is false
	of course whatever square is put down is dependent on what tool is 
	toggled
*/
canvas.onmousedown= function rectClick(e) {
	toggleMouse = true;
	squareDown(e);
	}

canvas.onmouseup = function untoggle() {
	toggleMouse = false;
}

canvas.onmousemove = function rectMove(e) {
	if(toggleMouse){
	squareDown(e);
	}	
}
			