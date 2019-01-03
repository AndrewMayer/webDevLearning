
let forever=true;
let myAge = 0;
do  {
	myAge = prompt("What is your age?");
	if (myAge < 0) {
		alert ("Please enter a valid age!");
	} else if (myAge < 18){
		alert ("Sorry! You cannot enter at this time");
	} else if (myAge < 21){
		alert ("Welcome and enjoy the show!");
	} else if (myAge == 21){
		alert ("Welcome and happy 21st birthday!");
	} else if (myAge % Math.sqrt(myAge) == 0){
		alert ("Welcome and happy root birthday!");
	} else if ((myAge % 2) != 0){
		alert ("Welcome and happy odd age!");
	} else {
		alert ("Welcome and have drink!");
		forever = false;
	}
	} while (forever==true);