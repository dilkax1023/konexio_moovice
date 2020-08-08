import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<nav
			className={`${
				show && 'bg-black'
			} d-flex justify-content-between navbar navbar-expand-lg navbar-transparent p-4`}>
			<div>
				<Link className='navbar-brand' to='/'>
					Ghaniflix
				</Link>
				<button
					className='navbar-toggler text-white'
					type='button'
					data-toggle='collapse'
					data-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
			</div>

			<div className='collapse navbar-collapse' id='navbarColor01'>
				<ul className='navbar-nav ml-auto'>
					<NavLink
						exact
						activeClassName='btn btn-outline-success'
						className='nav-link'
						to='/'>
						<li className='nav-item'>This week</li>
					</NavLink>
					<NavLink
						activeClassName='btn btn-outline-success'
						className='nav-link'
						to='/battle'>
						<li className='nav-item '>This week battle</li>
					</NavLink>
					<NavLink
						activeClassName='btn btn-outline-success'
						className='nav-link'
						to='/popular'>
						<li className='nav-item'>Popular</li>
					</NavLink>
					<NavLink
						activeClassName='btn btn-outline-success'
						className='nav-link'
						to='/popular-battle'>
						<li className='nav-item'>Popular Battle</li>
					</NavLink>
					<NavLink
						exact
						activeClassName='btn btn-outline-success'
						className='nav-link'
						to='/my-list'>
						<li className='nav-item'>My List</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
