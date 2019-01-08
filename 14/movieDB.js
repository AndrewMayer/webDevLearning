
let movies = {
	objects: [
		{
			movie: "In Bruges",
			rating: 4.5,
			haveSeen: true
		},
		{
			movie: "Frozen",
			rating: 2.5,
			haveSeen: true
		},
		{
			movie: "Mad Max Fury Road",
			rating: 5,
			haveSeen: true
		},
		{
			movie: "Aquaman",
			rating: 2.5,
			haveSeen: false
		},
		{
			movie: "Rampage",
			rating: 2.2,
			haveSeen: false
		},],
		showAll: function () {
			this.objects.forEach(movie => {
				console.log (buildString(movie));
			})
		}
	}
	
	function buildString(element) {
		let result = ""
		if (element.haveSeen) {
			result += 'You have watched "';
		} else {
			result += 'You have not watched "';
		};
		result += element.movie;
		result += '" - ';
		result += element.rating;
		result += ' stars';
		return(result);
	}
	