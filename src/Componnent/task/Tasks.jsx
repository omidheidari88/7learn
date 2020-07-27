import React, {Component} from 'react';
import Item from './task';
import NoItem from './NoItem';
import Filter from './Filter';

class Tasks extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			filter: 'all',
		};
	}
	check = (tasks) => {
		if (tasks.length > 0) {
			return tasks
				.filter((task) => {
					if (this.state.filter === 'all') return true;
					else {
						const filterType = this.state.filter === 'income' ? 2 : 1;
						return task.status === filterType;
					}
				})
				.map((task) => <Item {...task} />);
		}
		return <NoItem />;
	};
	filterHandler = (filter) => {
		this.setState((prev) => {
			return {
				...prev,
				filter,
			};
		});
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
									<Filter filtering={this.filterHandler} />
									<tr>
										<th>عنوان</th>
										<th>دسته بندی</th>
										<th>قیمت</th>
										<th>موبایل</th>
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
