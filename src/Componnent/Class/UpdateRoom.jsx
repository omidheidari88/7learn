import React from 'react';
import Rooms from './Rooms';

class UpdateRoom extends Rooms {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label htmlFor="num">Room Number</label>
				<input type="text" id="num" />
				<label htmlFor="title">Room Title</label>
				<input type="text" id="title" />
				<button
					onClick={() => {
						this.props.saveData({
							num: document.querySelector('#num').value,
							title: document.querySelector('#title').value,
						});
					}}>
					update
				</button>
			</div>
		);
	}
}

export default UpdateRoom;
