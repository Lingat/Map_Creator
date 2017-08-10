// main stuff

function draw() {
	pathWay.draw();
}

function update() {

}

function tick() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	update();
	draw();
	output();
}

setInterval(tick, frameRate);