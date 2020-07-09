import React, {Component} from 'react';
import {render} from 'react-dom';

class UpdateRoom extends Component {
	// constructor() {
	// 	super(this.props);
	// }
	render() {
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
	}
}

export default UpdateRoom;
