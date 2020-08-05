import React, { useEffect, useState } from 'react';
import './DiscoverBattle.css';
import Card from '../movie/Card';
import Button from '../core/Button';
import Row from '../layout/Row';
import moment from 'moment';

const DiscoverBattle = () => {
	const [movies, setMovies] = useState([]);
	const [currPage, setCurrPage] = useState(1);
	const [moviePerPage] = useState(2);
	const [movieIds, setMovieIds] = useState([]);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = () => {
		const today = moment().toISOString().slice(0, 10);
		// console.log(today);
		const nextWeek = moment().add(7, 'days').toISOString().slice(0, 10);
		// console.log(nextWeek);

		const API_KEY = '675b735d00b407cce8f30e0c25b8565d';
		const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${nextWeek}&api_key=${API_KEY}`;
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
		saveToLocalStorage(id);
		setCurrPage(currPage + 1);
	};

	const saveToLocalStorage = (id) => {
		const idList = movieIds;
		if (!idList.includes(id)) {
			idList.push(id);
		}
		setMovieIds(idList);
		localStorage.setItem('my-list', JSON.stringify(movieIds));
	};

	const indexOfLastMovie = currPage * moviePerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
	const currMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

	const movieDisplayed = currMovies.map((movie) => {
		return (
			<div key={movie.id} className='custom col-md-6 text-center'>
				<Button onClick={() => paginate(movie.id)}>
					<Card movie={movie} />
				</Button>
			</div>
		);
	});
	return <Row movieDisplayed={movieDisplayed} />;
};

export default DiscoverBattle;
