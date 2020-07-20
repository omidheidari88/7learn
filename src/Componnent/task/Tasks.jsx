import React, {Component} from 'react';
import Item from './task';
import NoItem from './NoItem';

class Tasks extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	check = (tasks) => {
		if (tasks.length > 0) {
			return tasks.map((task) => <Item {...task} />);
		}
		return <NoItem />;
	};
	render() {
		const {tasks} = this.props;
		const renderTask = this.check(tasks);
		return (
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-header">لیست وظایف</div>
						<div className="card-body">
							<table className="table table-bordered table-hover table-striped">
								<thead>
									<tr>
										<th>عنوان</th>
										<th>دسته بندی</th>
										<th>انجام دهنده</th>
										<th>وضعیت</th>
										<th>عملیات</th>
									</tr>
								</thead>
								<tbody>{renderTask}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Tasks;
