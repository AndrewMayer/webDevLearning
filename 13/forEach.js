let colors = ["red", "orange", "yellow"];

//Arrow Functions Version

let myForEach = (arr, func) => {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);		
	}
}
let conLogAll = arr => console.log(arr);


let conLogAll = arr => {
	for (let i = 0; i < arr.length; i++) {
		arr[i] => console.log;		
	}
}

// Creating an array prototype
Array.prototype.myForEach = function(func) {
	for (var i=0; i<this.length; i++) {
	func(this[i]);
		  }
	}


//Regular Function Version
function myForEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);		
	}
}

function conlogAll(arr, ) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] => console.log;		
	}
}


