//Create secret number
let secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess correct
if (guess === secretNumber) {
	alert ("YOU GOT IT!");
} else if (guess > secretNumber) {
	alert("Too high. Try again");
} else {
	alert("Too low. Try again");
}