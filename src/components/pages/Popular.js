import React, { useEffect, useState } from 'react';
import Card from '../movie/Card';
import Row from '../layout/Row';

const Popular = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetchMovies();
	}, []);
	const fetchMovies = () => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=675b735d00b407cce8f30e0c25b8565d&&page=5'
		)
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				setMovies(data.results);
			});
	};
	const movieDisplayed = movies.map((movie) => {
		const style = {
			height: '30rem',
		};
		return (
			<div style={style} key={movie.id} className='col-lg-3 col-md-6 mb-4'>
				<Card movie={movie} />
			</div>
		);
	});
	return <Row movieDisplayed={movieDisplayed} />;
};

export default Popular;
