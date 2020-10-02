import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './MovieDetails.module.css';
import placeholder from '../movie/placeholder.png';

const MovieDetails = ({ match }) => {
	const [movie, setMovie] = useState({});
	const baseUrl = 'https://image.tmdb.org/t/p/w500';
	const src =
		movie.poster_path === null ? placeholder : `${baseUrl}${movie.poster_path}`;

	useEffect(() => {
		const fetchMovieData = () => {
			const API_KEY = '675b735d00b407cce8f30e0c25b8565d';
			const url = `http://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`;
			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setMovie(data);
				});
		};
		fetchMovieData();
	}, [match.params.id]);

	///////
	return (
		<div className='container mt-4'>
			<div className={`well ${style.Well}`}>
				<div className='row'>
					<div className='col-md-4'>
						<img src={src} className='thumbnail' alt='thumbnail' />
					</div>
					<div className='col-md-8 mt-5'>
						<h2>{movie.title}</h2>
						<ul className='list-group'>
							<li className='list-group-item'>
								<strong>Tagline:</strong> {movie.tagline}
							</li>
							<li className='list-group-item'>
								<strong>Genre: </strong>
								{Array.isArray(movie.genres)
									? movie.genres.map((genre, index) => (
											<span key={index}>{` ${genre.name}, `}</span>
									  ))
									: '-'}
							</li>
							<li className='list-group-item'>
								<strong>Released:</strong> {movie.release_date}
							</li>
							<li className='list-group-item'>
								<strong>Budget:</strong> {movie.budget}
							</li>
							<li className='list-group-item'>
								<strong>vote_average:</strong> {movie.vote_average}
							</li>
							<li className='list-group-item'>
								<strong>Popularity:</strong> {movie.popularity}
							</li>
							<li className='list-group-item'>
								<strong>Spoken_Languages:</strong>
								{Array.isArray(movie.spoken_languages)
									? movie.spoken_languages.map((language, index) => (
											<span key={index}>{` ${language.name}, `}</span>
									  ))
									: '-'}
							</li>
							<li className='list-group-item'>
								<strong>Production_Companies:</strong>
								{Array.isArray(movie.production_companies)
									? movie.production_companies.map((company, index) => (
											<span key={index}>{` ${company.name}, `}</span>
									  ))
									: '-'}
							</li>
							<li className='list-group-item'>
								<strong>Production_Companies:</strong>
								{Array.isArray(movie.production_countries)
									? movie.production_countries.map((country, index) => (
											<span key={index}>{` ${country.name}, `}</span>
									  ))
									: '-'}
							</li>
						</ul>
					</div>
				</div>
				<div className='jumbotron mt-4'>
					<div className='row'>
						<div className='well'>
							<h3>Overview</h3>
							{movie.overview}
							<hr />
							<Link to='/popular' className='btn btn-outline-success'>
								View IMDB
							</Link>
							<Link to='/' className='btn btn-default'>
								Go To Popular
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
