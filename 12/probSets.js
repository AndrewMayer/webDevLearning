// function isEven (params) {
// 	if (params % 2 === 0) {
// 		return (true);
// 	} else {
// 		return (false);
// 	}
// }

function isEven (params) {
	return (params % 2 === 0);
}

function factorial (numNum) {
	if (numNum === 0) {
		return (1);
	}
	let total = 1;
	for (let i = 2; i<=numNum; i--) {
		console.log("total is now " + total);
		total *= i;
	};
	return(total);
}

function kebabToSnake (stringo) {
	newstring = stringo.replace(/-/g,"_");
	return newstring;
}
