import React from 'react';

const Button = ({ onClick, children }) => {
	return (
		<button className='btn btn-outline-primary text-center' onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
