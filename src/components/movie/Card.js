import React from 'react';
import './Card.css';
import placeholder from './placeholder.png';
// import Button from '../core/Button';
import { NavLink } from 'react-router-dom';

const Card = ({ movie }) => {
	const src =
		movie.poster_path === null
			? placeholder
			: `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<div className='card'>
			<img className='card-img-top' src={src} alt={movie.title} />
			<div className='card-body text-center'>
				<h6 className='card-title'>{movie.title}</h6>
				<NavLink
					className='btn btn-outline-success'
					to={`/my-list/${movie.id}`}>
					more details
				</NavLink>
			</div>
		</div>
	);
};

export default Card;
