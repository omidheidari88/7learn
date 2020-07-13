import React, {Component} from 'react';
import Loader from './Loader';

export class Room extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	updateValue = (id, save) => {
		const newValue = document.querySelector(`#room-${id}`).value;
		return save(id, newValue);
	};
	componentDidMount() {
		console.log(this.props.room);
	}
	componentWillUnmount() {
		console.log('deleted');
	}
	render() {
		const {name, id, edit} = this.props.room;
		const {deleteHandler, editHandler, save} = this.props;
		const inputShow = edit ? <input id={`room-${id}`} type="text" defaultValue={name}></input> : '';
		const editShow = edit ? <button onClick={(e) => this.updateValue(id, save)}>save</button> : <button onClick={(e) => editHandler(id)}>edit</button>;
		return (
			<div>
				{name}
				{inputShow}
				<button onClick={(e) => deleteHandler(id)}>delete</button>
				{editShow}
			</div>
		);
	}
}

export default Room;
