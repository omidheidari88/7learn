import React, {Component} from 'react';
import NewRoom from '../Class/UpdateRoom';
export class Rooms extends Component {
	constructor() {
		super();
		this.state = {
			rooms: [],
		};
	}
	saveHandler = (newRoom) => {
		//update state be raveshe khodemun
		// this.setState({
		// 	...this.state,
		// 	rooms: [...this.state.rooms, newRoom],
		// });

		//update state be raveshe recommendation
		this.setState((prev) => {
			return {
				rooms: [...prev.rooms, newRoom],
			};
		});
	};

	render() {
		const renderRooms = this.state.rooms.map((room) => {
			const {num, title} = room;
			return (
				<div>
					<h1>{title}</h1>
					<h2>{num}</h2>
					<br />
				</div>
			);
		});
		return (
			<div>
				<h1>Rooms</h1>
				<NewRoom saveData={this.saveHandler}>add room</NewRoom>
				{renderRooms}
			</div>
		);
	}
}
export default Rooms;
