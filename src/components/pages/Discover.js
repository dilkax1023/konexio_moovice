import React, { useEffect, useState } from 'react';
import Card from '../movie/Card';
import moment from 'moment';

const Discover = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovieData();
	}, []);

	const fetchMovieData = () => {
		const today = moment().format('YYYY-MM-DD');
		const nextWeek = moment().add(7, 'days').format('YYYY-MM-DD');
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

	const gridStyle = {
		height: '30rem',
	};

	const movieDisplayed = movies.map((movie) => {
		return (
			<div style={gridStyle} key={movie.id} className='col-lg-3 col-md-6 mb-4'>
				<Card movie={movie} />
			</div>
		);
	});
	return <div className='row'>{movieDisplayed}</div>;
};

export default Discover;
