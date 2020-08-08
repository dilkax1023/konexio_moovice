import React from 'react';

const Button = ({ onClick, children, style }) => {
	return (
		<button
			style={style}
			className='btn btn-outline-success text-center'
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
