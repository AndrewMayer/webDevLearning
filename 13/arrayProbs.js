let numNum = [1,2,3,5,6,7,8,9];
let letLet = ["a","b","c","d","e","f"];
let uniUni = [1,1,1,1,1,1];
let comp = [1,5,-100,20];

function printReverse(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}	
}

function isUniform(array) {
	let samey = true;
	let i=1
	while (samey && (i<array.length)) {
		if (array[0]!==array[i]) {
			samey = false;
		};
		i = ++i;
	}
	return (samey);
}

function isIs(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[0]!==array[i]) {
			return false;
		}
	}
	return true;
}

function sumArray(array) {
	let sum = 0
	array.forEach(element => {
		sum += element;
	});
	return sum;
}

function maxMax(array) {
	let maxi = array[1];
	array.forEach(element => {
		if (element>maxi) {
			maxi = element;
		}
	});
	return (maxi);
}