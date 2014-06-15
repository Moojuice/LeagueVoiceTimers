var baron, dragon, blue, red = false;

$(document).ready(function() {
	if (annyang) {
  	// Let's define a command.
  	var commands = {
   	 	'baron time': function() { if (!baron) {
   	 		startBaron();
   	 	} },
   	 	'dragon time': function() { if (!dragon) {
   	 		startDragon();
   	 	}},
   	 	'blue time': function() { if (!blue) {
   	 		startBlue();
   	 	}},
   	 	'red time': function() { if (!red) {
   	 		startRed();
   	 	}}
  	};

  	// Add our commands to annyang
  	annyang.addCommands(commands);

  	// Start listening.
  	annyang.start();
	}
});

function startBaron() {
	var timeStart = new SpeechSynthesisUtterance('Baron timer has started');
	window.speechSynthesis.speak(timeStart);
	baron = true;
	setTimeout(function() {oneMinuteWarning("baron")}, 360000); //7 minutes to spawn
	setTimeout(function() {spawned("baron")}, 420000);
}

function startDragon() {
	var timeStart = new SpeechSynthesisUtterance('Dragon timer has started');
	window.speechSynthesis.speak(timeStart);
	dragon = true;
	setTimeout(function() {oneMinuteWarning("dragon")}, 300000); //6 minutes to spawn
	setTimeout(function() {spawned("dragon")}, 360000);
}

function startBlue() {
	var timeStart = new SpeechSynthesisUtterance('Blue timer has started');
	window.speechSynthesis.speak(timeStart);
	blue = true;
	setTimeout(function() {oneMinuteWarning("blue buff")}, 240000); //5 minutes to spawn
	setTimeout(function() {spawned("blue buff")}, 300000);
}

function startRed() {
	var timeStart = new SpeechSynthesisUtterance('Red timer has started');
	window.speechSynthesis.speak(timeStart);
	red = true;
	setTimeout(function() {oneMinuteWarning("red buff")}, 240000); //5 minutes to spawn
	setTimeout(function() {spawned("red buff")}, 300000);
}

function oneMinuteWarning(monster) {
	var warning = new SpeechSynthesisUtterance(monster + 'will spawn in one minute');
	window.speechSynthesis.speak(warning);
}

function spawned(monster) {
	switch(monster) {
		case "baron":
			baron = false;
			break;
		case "dragon":
			dragon = false;
			break;
		case "blue buff":
			blue = false;
			break;
		case "red buff":
			red = false;
			break;
	}
	var spawn = new SpeechSynthesisUtterance(monster + 'has spawned');
	window.speechSynthesis.speak(spawn);
}

//VISUAL TIMER TO BE IMPLEMENTED LATER
var seconds = 60;
function secondPassed(monster) {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    $("#" + monster).html = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        $("#" + monster).html = "";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);