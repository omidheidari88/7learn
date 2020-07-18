import React from 'react';

const Item = ({task}) => {
	const {task_title, task_category, task_assignee, task_status} = task;
	return (
		<tr>
			<td>{task_title}</td>
			<td>{task_category}</td>
			<td>{task_assignee}</td>

			<td>
				<span className={`badge badge-${task_status === 0 ? 'primary' : ''}`}>ایجاد شده</span>
				<span className={`badge badge-${task_status === 1 ? 'secondary' : ''}`}>در حال انجام</span>
				<span className={`badge badge-${task_status === 2 ? 'warning' : ''}`}>انجام شده</span>
				<span className={`badge badge-${task_status === 3 ? 'danger' : ''}`}>لغو شده</span>
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
