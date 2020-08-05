export function fetchMovieData(url) {
	fetch(url)
		.then((response) => {
			// console.log(response);
			return response.json();
		})
		.then((data) => {
			// console.log(data);
			return data.results;
		});
}
