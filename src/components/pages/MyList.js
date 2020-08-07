import React, { useState, useEffect } from 'react';
import Card from '../movie/Card';

const MyList = () => {
	const getFromLocalStorage = () => {
		let movieIds = localStorage.getItem('my-list');
		if (movieIds === null) {
			return false;
		} else {
			movieIds = JSON.parse(movieIds);
			return movieIds;
		}
	};

	const [movies, setMovies] = useState([]);
	const [movieIds] = useState(getFromLocalStorage() || []);

	useEffect(() => {
		const fetchData = (id) => {
			const API_KEY = '675b735d00b407cce8f30e0c25b8565d';
			const url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
			return fetch(url).then((response) => response.json());
		};
		const movieIdList = movieIds.map((movieId) => fetchData(movieId));
		Promise.all(movieIdList).then((movieData) => setMovies(movieData));
	}, [movieIds]);

	const movieDisplayed = movies.map((movie) => {
		return (
			<div key={movie.id} className='col-lg-3 col-md-6 mb-4'>
				<Card movie={movie} />
			</div>
		);
	});
	return (
		<div className='row'>
			{getFromLocalStorage() ? movieDisplayed : 'No items selected'}
		</div>
	);
};

export default MyList;
