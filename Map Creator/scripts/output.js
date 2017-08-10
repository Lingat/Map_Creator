// What is shown in the output
var outputText = document.getElementById("outputCode")
var pussy = 2,
	myPussy = pussy;
	myPussy = 100;

	console.log(pussy + " " + myPussy)
var fuck = createMap(map.length, map[0].length);

//	WARNING: Lazy code, pls fix you piece of shit
	


function output() {
		for(i=0; i<fuck.length; i++){
		for(j=0; j<fuck[0].length; j++) {

			if(j >= (fuck[0].length-1)) {
				fuck[i][j] = "], ["
			}
			else if(i >= (fuck.length-1) && j >= (fuck[0].length-1) ) {
				fuck[i][j] = "]";
			}
		
		}
	}
	outputText.innerHTML = "[" +fuck + "]";


}


