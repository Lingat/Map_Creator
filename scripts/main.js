function draw() {
	pathWay.draw();
}

function update() {

}

function tick() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	update();
	draw();
}

/*
	move this somewhere else
	this function is only a test 
	essentially what it needs to do is be able to click a square
	and replace that with a number
*/
canvas.onclick = function rectClick(e) {

	//	for the canvas boundaries so we get the right coordinates
	var rect = canvas.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top;


		// iterating through the pathWay that holds the objects, if click is within boundaries do something
		for(i = 0; i < gridSquares.length; i++) {
				rectWidth = gridSquares[i].width,
				rectHeight = gridSquares[i].height,
				rectX = gridSquares[i].x,
				rectY = gridSquares[i].y;
				placeX = gridSquares[i].placeX,
				placeY = gridSquares[i].placeY;

				if(e.x< (rectX + rectWidth) && e.y < (rectY + rectHeight) && e.x > rectX && e.y > rectY ) {
			
					map[placeY][placeX] = 1;
			
				}
		}
		
						
				}
			


setInterval(tick, frameRate);