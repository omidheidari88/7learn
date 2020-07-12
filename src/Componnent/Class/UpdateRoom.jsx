import React, {Component} from 'react';

class UpdateRoom extends Component {
	render() {
		const {updateData, children} = this.props;
		const doTheMagic = (e) => {
			const id = document.querySelector('#id').value;
			document.querySelector('#id').value = '';
			const name = document.querySelector('#name').value;
			document.querySelector('#name').value = '';
			updateData({
				id,
				name,
			});
		};
		return (
			<div>
				<label htmlFor="id">Room ID</label>
				<input type="text" id="id" />
				<label htmlFor="name">name</label>
				<input type="text" id="name" />
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
