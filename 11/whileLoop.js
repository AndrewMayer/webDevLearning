console.log("Print -10 to 19");

let startNum = -10

while (startNum <=19) {
	console.log (startNum);
	startNum++;
}

console.log("Print all even 10 to 40");

startNum = 10

while (startNum <=40) {
	if ((startNum % 2) == 0) {
		console.log (startNum);
	}
	startNum++;
}
console.log("All Odd: 300 to 333");

startNum = 300

while (startNum <=333) {
	if ((startNum % 2) != 0) {
		console.log (startNum);
	}
	startNum++;
}

console.log("All div by 5 & 3 between 5 and 50");

startNum = 5

while (startNum <=50) {
	if (((startNum % 5) === 0) && ((startNum % 3) === 0))  {
		console.log (startNum);
	}
	startNum++;
}
