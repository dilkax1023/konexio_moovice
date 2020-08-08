import React from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';
import logo from '../../Suicide_logo.png';

const Jumbotron = () => {
	const style = {
		width: '250px',
	};
	return (
		<div className='jumbotron bg-transparent'>
			<h1 className='display-3 d-flex flex-column'>
				<img style={style} src={logo} alt='suicide-logo' />
			</h1>
			<p className='lead'>
				<Link className='btn btn-primary btn-lg px-5 text-white' to='/'>
					Lecture
				</Link>
			</p>
		</div>
	);
};

export default Jumbotron;
