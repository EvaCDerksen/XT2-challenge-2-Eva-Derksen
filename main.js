// Clock
function hexClock() {
	var clock = document.getElementById('clock');
	var time = new Date();
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {hours = '0' + hours};
	if (minutes.length < 2){minutes = '0' + minutes};
	if (seconds.length < 2) {seconds = '0' + seconds};

	var clockStr = hours + ':' + minutes + ':' + seconds;
	var hexColorStr =  '#' + hours + minutes + seconds;

	clock.textContent = clockStr;
	//document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

// Changing background
function nextBackground(){
	var thisTime = new Date().getHours();


	// Hieronder link je de tijd aan een class uit je css document
	if (thisTime > 6 && thisTime < 7){
		// sunrise
		document.body.className = 'sunrise';
	} else if (thisTime >= 7 && thisTime < 19) {
		// day
		document.body.className = 'day';
	} else if (thisTime >= 19 && thisTime < 20) {
		// sundown
		document.body.className = 'sundown';
	} else {
		//night
		document.body.className = 'night';
	}
}

nextBackground();









	
