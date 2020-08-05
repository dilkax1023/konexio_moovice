import React, { useEffect, useState } from 'react';
import Card from '../movie/Card';
import Button from '../core/Button';
import Row from '../layout/Row';

const PopularBattle = () => {
	const [movies, setMovies] = useState([]);
	const [currPage, setCurrPage] = useState(1);
	const [moviePerPage] = useState(2);
	const [movieIds, setMovieIds] = useState([]);

	const url =
		'https://api.themoviedb.org/3/discover/movie?api_key=675b735d00b407cce8f30e0c25b8565d&&page=1';

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = () => {
		fetch(url)
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				setMovies(data.results);
			});
	};

	const paginate = (id) => {
		const idList = movieIds;
		if (!idList.includes(id)) {
			idList.push(id);
		}
		setMovieIds(idList);
		localStorage.setItem('my-list', JSON.stringify(movieIds));
		setCurrPage(currPage + 1);
	};

	const indexOfLastMovie = currPage * moviePerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
	const currMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

	const movieDisplayed = currMovies.map((movie) => {
		return (
			<div key={movie.id} className='col-md-6 text-center'>
				<Button onClick={() => paginate(movie.id)}>
					<Card movie={movie} />
				</Button>
			</div>
		);
	});
	return <Row movieDisplayed={movieDisplayed} />;
};

export default PopularBattle;
