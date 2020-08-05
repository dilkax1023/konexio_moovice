import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
			} d-flex justify-content-betweem navbar navbar-expand-lg navbar-transparent p-4`}>
			<div>
				<Link className='navbar-brand' to='/'>
					Ghaniflix
				</Link>
				<button
					className='navbar-toggler'
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
					<li className='nav-item active'>
						<Link className='nav-link text-white' to='/'>
							This week
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/battle'>
							This week battle
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/popular/'>
							Popular
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/popular-battle/'>
							Popular Battle
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/my-list/'>
							My List
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
