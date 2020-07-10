import React, {Component} from 'react';
// import Btn from './UpdateRoom';
import NewRoom from '../Function/UpdateRoom';
export class Rooms extends Component {
	constructor() {
		super();
		this.state = {
			rooms: [
				{num: 211, title: 'president'},
				{num: 221, title: 'royal'},
				{num: 231, title: 'single'},
			],
		};
	}
	saveHandler = (newRoom) => {
		// nemitunim injuri state o update konim
		// this.state.rooms.push(newRoom);
		//bayad az keyword setState estefade konim
		this.setState({
			...this.state,
			rooms: [...this.state.rooms, newRoom],
		});
	};

	// renderArray = this.state.rooms.map((room) => {
	// 	const {num, title} = room;
	// 	return (
	// 		<div>
	// 			<h1>{title}</h1>
	// 			<h2>{num}</h2>
	// 		</div>
	// 	);
	// })

	render() {
		return (
			<div>
				<h1>Rooms</h1>
				<NewRoom saveData={this.saveHandler} />
				{/* {this.renderArray} */}
				{this.state.rooms.map((room) => {
					const {num, title} = room;
					return (
						<div>
							<h1>{title}</h1>
							<h2>{num}</h2>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Rooms;
