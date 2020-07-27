import React, {Component} from 'react';
import Header from './header/Header';
import Tasks from './task/Tasks';
import Courses from './course/Courses';
import Add from './add/Add';
import Axios from '../Http/Axios';
import Loader from './loader/Loader';
export class App extends React.PureComponent {
	constructor() {
		super();
		// bind in ES2015
		// this.componentHandler = this.componentHandler.bind(this);
		this.state = {
			items: [],
			is_loading: false,
			type: 'list',
		};
		this.axios = new Axios();
	}

	addItem = (item) => {
		this.setState((prev) => {
			return {
				...prev,
				is_loading: true,
			};
		});
		this.axios
			.post('http://localhost:3200/users', item)
			.then((res) => {
				this.setState((prev) => {
					return {
						...prev,
						items: [...prev.items, res.data.item],
					};
				});
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				this.setState((prev) => {
					return {
						...prev,
						is_loading: false,
					};
				});
			});
		// this.setState((prev) => {
		// 	return {
		// 		...prev,
		// 		items: [...prev.items, item],
		// 	};
		// });
	};

	componentHandler = (type) => {
		// const components = {
		// 	add: <Add tasksItem={this.addItem} />,
		// 	list: <Tasks tasks={this.state.items} />,
		// 	course: <Courses />,
		// };
		// if (type in components) {
		// this.setState({currenComponent: components[type]});
		// }
		this.setState({type});
	};
	//dar vc tozih dadam
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.items.length < this.state.items.length) {
	// 		console.log('is less');
	// 	}
	// }
	componentDidMount() {
		this.axios
			.get('http://localhost:3200/users')
			.then((res) => {
				this.setState({
					items: res.data.items,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		const loading = this.state.is_loading ? <Loader /> : null;
		const components = this.state.type === 'add' ? <Add tasksItem={this.addItem} /> : <Tasks tasks={this.state.items} />;
		return (
			<div id="wrapper" className="rtl">
				<div id="container">
					<Header render={this.componentHandler} />
					{loading}
					{components}
				</div>
			</div>
		);
	}
}

export default App;
