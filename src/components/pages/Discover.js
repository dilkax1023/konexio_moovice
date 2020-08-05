import React, { useEffect, useState } from 'react';
import Card from '../movie/Card';
import moment from 'moment';
import Row from '../layout/Row';

const Discover = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovieData();
	}, []);

	const fetchMovieData = () => {
		const today = moment().toISOString().slice(0, 10);
		const nextWeek = moment().add(7, 'days').toISOString().slice(0, 10);

		const API_KEY = '675b735d00b407cce8f30e0c25b8565d';
		const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${nextWeek}&api_key=${API_KEY}`;
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setMovies(data.results);
			});
	};
	const movieDisplayed = movies.map((movie) => {
		return (
			<div key={movie.id} className='col-lg-3 col-md-6'>
				<Card movie={movie} />
			</div>
		);
	});
	return <Row movieDisplayed={movieDisplayed} />;
};

export default Discover;
