import React, {Component} from 'react';

class UpdateRoom extends Component {
	render() {
		const {saveData, children} = this.props;
		const doTheMagic = (e) => {
			saveData({
				num: document.querySelector('#num').value,
				title: document.querySelector('#title').value,
			});
		};
		return (
			<div>
				<label htmlFor="num">Number</label>
				<input type="text" id="num" />
				<label htmlFor="title">Title</label>
				<input type="text" id="title" />
				<button
					onClick={(e) => {
						doTheMagic(e);
					}}>
					{children}
				</button>
			</div>
		);
	}
}

export default UpdateRoom;
