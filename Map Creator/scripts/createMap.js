//	creating an array with a function
function createMap(mWidth, mHeight) {
	array = []

	for(i = 0; i < mWidth; i++) {
		//	pushes [] to the array
		array.push([])

		//	pushes 0 into each []
		for(j = 0; j < mHeight; j++) {
			array[i].push(0)
		}

		}
	
		return array

	}


//	input values for how many squares and canvas sizing
/* var colAmount = document.getElementById("col-amount"),
	colValue = parseInt(colAmount.value),
	sqAmount = document.getElementById("sq-amount"),
	sqValue = parseInt(sqAmount.value); */

var colValue = parseInt(prompt("Amount of Rows"));
var sqAmount = parseInt(prompt("Amount of squares in rows"));



//	this should be changed to createMap(inputX, inputY)
var map = createMap(colValue, sqAmount),
	mapWidth = map[1].length,
	mapHeight = map.length;


function getMap(array) {
	
	return array;
}



//	to push objects into that can later be used
var gridSquares = [];


// basically just pushes everything into gridSquares
// used for being able to click on the squares
for(i = 0; i < mapWidth; i++) {

			//	looping through the array to draw each individual rectangle
	for(j = 0; j < mapHeight; j++){
					gridSquares.push({
					x: (i * (canvas.width / mapWidth)),
					y: (j * (canvas.height / mapHeight)),
					width: (canvas.width / mapWidth),
					height: (canvas.width / mapWidth),
					placeX: i,
					placeY: j
				})

			}
		}

//	put all grid squares into an object
var pathWay = {
	width: (canvas.width / mapWidth),
	height: (canvas.height / mapHeight),
	x: 0,
	y: 0,
	color: squareColor,
	draw: function() {

		//	drawing the grid
		for(i = 0; i < mapWidth; i++) {

			//	looping through the array to draw each individual rectangle
			for(j = 0; j < mapHeight; j++){

				//	if any 0's, draw open square
				ctx.fill3Style = "black";
				ctx.strokeRect(((i * this.width)), ((j * this.height)), this.width, this.height);

				//	so we can click on them, be used for later with a gridSquares[i]
			//	any other number can be edited here to be replaced by any other numbers
				
				if(map[j][i] == 1 || map[j][i] == 3) {
					ctx.beginPath();

					ctx.fillStyle = squareColor;
					
					ctx.fillRect(((i * this.width)), ((j * this.height)), this.width, this.height);
					ctx.closePath();
					}

			}

	   	 }
		}

}
