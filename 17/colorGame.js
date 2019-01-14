var numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector("h1");
let resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//set mode button listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares() {
	//set up square listeners
	for (let i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
			//grab color clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color of pickedColor
			if (clickedColor ===  pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		})
	};
}

function setUpModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	};
}

function reset () {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	};
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	//change all colors to match given color.
}

function pickColor() {
	let random = Math.floor(Math.random() *  colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	// add num random colors to Array
	for (let i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor () {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return("rgb(" + r + ", " + g + ", " +b + ")");
}