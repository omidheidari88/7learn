import React, {Component} from 'react';
import NewRoom from '../Class/UpdateRoom';
import User from './Room';
export class Rooms extends Component {
	constructor() {
		super();
		this.state = {
			rooms: [
				{id: 1, name: 'Royal', edit: false},
				{id: 2, name: 'Residence', edit: false},
				{id: 3, name: 'Vip', edit: false},
			],
		};
	}
	updateHandler = (newRoom) => {
		this.setState((prev) => {
			return {
				rooms: [...prev.rooms, newRoom],
			};
		});
	};
	deleteHandler = (id) => {
		this.setState((prev) => {
			return {
				rooms: prev.rooms.filter((room) => room.id !== id),
			};
		});
	};
	editHandler = (id) => {
		const roomId = this.state.rooms.filter((room) => room.id === id);
		roomId[0].edit = true;
		this.setState((prev) => {
			return {
				rooms: [...prev.rooms.filter((room) => room.id !== id), ...roomId],
			};
		});
	};
	saveHandler = (id, newRoom) => {
		this.setState((prev) => {
			return {
				rooms: prev.rooms.map((room) => {
					if (room.id === id) {
						room.name = newRoom;
						room.edit = false;
					}
					return room;
				}),
			};
		});
	};

	render() {
		const renderRooms = this.state.rooms.map((room) => <User room={room} deleteHandler={this.deleteHandler} editHandler={this.editHandler} save={this.saveHandler} />);
		return (
			<div>
				<h1>Rooms</h1>
				<NewRoom updateData={this.updateHandler}>add room</NewRoom>
				<br />

				{renderRooms}
			</div>
		);
	}
}
export default Rooms;

//update state be raveshe khodemun
// this.setState({
// 	...this.state,
// 	rooms: [...this.state.rooms, newValue],
// });
