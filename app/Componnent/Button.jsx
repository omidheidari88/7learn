import React from 'react';
// import {Button} from 'react-bootstrap';

const Utton = ({title, saveData}) => {
	return (
		<div>
			<input type="text" id="inp" />

			<button
				onClick={() => {
					saveData(document.querySelector('#inp').value);
				}}>
				{title}
			</button>
		</div>
	);
};

export default Utton;
