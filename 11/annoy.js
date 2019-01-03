let answer = prompt("Are we there yet?");

while (!(answer.indexOf("yes")) && !(answer.indexOf("yeah"))) {
	console.log(answer)
	answer = prompt("Are we there yet?");
}

alert("Yay! We made it!");