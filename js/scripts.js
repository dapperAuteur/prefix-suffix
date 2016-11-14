// JavaScript Document
function playerScore() {
	//show player score
	//increment player score
	//save score to leader board
}

function choose() {
	//checks if correct choice was made
	if(true) {
		//gives points and advances to next question if correct
		increasePoints();
	} else {
		//doesn't give points, advances to next prefix/suffix and takes away one life if incorrect
		wrongChoice();
	}
}

function nextQuestion() {
	request.open('GET', 'prefix_suffix_ver0002.json');
	//advances to next question
	//prefix
	
	//suffix
}

function increasePoints() {
	//increases players points when correct choice is made
	nextQuestion();
}

function wrongChoice() {
	//doesn't give points, advances to next prefix/suffix and takes away one life if incorrect
	nextQuestion();
}

function newGame() {
	//create new game
}

function saveGame() {
	//save game in localStorage
}

document.getElementById('choice1').addEventListener('click', choose);
// //listens for choice1 button to be clicked and then calls choose() function
document.getElementById('choice2').addEventListener('click', choose);
// //listens for choice2 button to be clicked and then calls choose() function
document.getElementById('choice3').addEventListener('click', choose);
// //listens for choice3 button to be clicked and then calls choose() function
document.getElementById('choice4').addEventListener('click', choose);
// //listens for choice4 button to be clicked and then calls choose() function
document.getElementById('newGame').addEventListener('click', newGame);
// //listens for newGame button to be clicked and then calls newGame() function
document.getElementById('saveGame').addEventListener('click', saveGame);
// //listens for saveGame button to be clicked and then calls saveGame() function