import React from 'react';

const User = ({room, deleteHandler, editHandler, save}) => {
	const {name, id, edit} = room;
	const updateValue = () => {
		const newValue = document.querySelector(`#room-${id}`).value;
		return save(id, newValue);
	};

	//*conditional techniq 2
	const inputShow = edit ? <input id={`room-${id}`} type="text" defaultValue={name}></input> : '';
	const editShow = edit ? <button onClick={(e) => updateValue()}>save</button> : <button onClick={(e) => editHandler(id)}>edit</button>;

	return (
		<div>
			{name}

			{inputShow}
			<button onClick={(e) => deleteHandler(id)}>delete</button>
			{editShow}
		</div>
	);
};

export default User;

/*conditional techniq 1 */
/* {edit && <input type="text" defaultValue={name}></input>}
			{!edit && {name}} */
