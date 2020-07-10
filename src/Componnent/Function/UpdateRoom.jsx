import React from 'react';

const UpdateRoom = ({saveData}) => {
	return (
		<div>
			<label htmlFor="num">Room Number</label>
			<input type="text" id="num" />
			<label htmlFor="title">Room Title</label>
			<input type="text" id="title" />
			<button
				onClick={() => {
					saveData({
						num: document.querySelector('#num').value,
						title: document.querySelector('#title').value,
					});
				}}>
				update
			</button>
		</div>
	);
};

export default UpdateRoom;
