import React from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

const Jumbotron = () => {
	return (
		<div className='jumbotron bg-transparent'>
			<h1 className='display-3'>Hello, Ghaniflix!</h1>
			<p className='lead'>
				<Link className='btn btn-primary btn-lg px-5 text-white' to='/'>
					Lecture
				</Link>
			</p>
		</div>
	);
};

export default Jumbotron;
