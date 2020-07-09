import React from 'react';
import Btn from './UpdateRoom';
const Rooms = () => {
	const rooms = [
		{num: 211, title: 'president'},
		{num: 221, title: 'royal'},
		{num: 231, title: 'single'},
	];

	const saveHanndler = (newRoom) => {
		rooms.push(newRoom);
		console.log(rooms);
	};
	const renderArray = rooms.map((room) => {
		const {num, title} = room;
		return (
			<div>
				<h1>{title}</h1>
				<h2>{num}</h2>
			</div>
		);
	});

	return (
		<div>
			<h1>Rooms</h1>
			<Btn saveData={saveHanndler} key="" />
			{renderArray}
		</div>
	);
};
export default Rooms;
