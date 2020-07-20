import React from 'react';

const Item = ({title, category, assignee, status}) => {
	return (
		<tr>
			<td>{title}</td>
			<td>{category}</td>
			<td>{assignee}</td>

			<td>
				<span className={`badge badge-${status > 1 ? 'success' : 'danger'}`}>{status > 1 ? 'درآمد' : 'هزینه'}</span>
			</td>
			<td>
				<a href="/#">
					<i className="material-icons">edit</i>
				</a>
				<a href="/#">
					<i className="material-icons">delete</i>
				</a>
			</td>
		</tr>
	);
};

export default Item;
