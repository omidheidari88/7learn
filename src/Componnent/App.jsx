import React, {Component} from 'react';
import Header from './header/Header';
import Tasks from './task/Tasks';
import Courses from './course/Courses';
import Add from './add/Add';
import Axios from '../Http/Axios';
export class App extends Component {
	constructor() {
		super();
		// bind in ES2015
		// this.componentHandler = this.componentHandler.bind(this);
		this.state = {
			items: [],
			currenComponent: <Tasks tasks={[]} />,
		};
		this.axios = new Axios();
	}
	addItem = (item) => {
		this.axios
			.post('http://localhost:3200/users', item)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		// this.setState((prev) => {
		// 	return {
		// 		...prev,
		// 		items: [...prev.items, item],
		// 	};
		// });
	};
	componentHandler = (type) => {
		const components = {
			add: <Add tasksItem={this.addItem} />,
			list: <Tasks tasks={this.state.items} />,
			course: <Courses />,
		};
		if (type in components) {
			this.setState({currenComponent: components[type]});
		}
	};
	// async componentDidMount() {
	// 	const response = await this.axios.get('https://jsonplaceholder.ir/posts');
	// 	this.addItem(response.data);
	// }
	// componentDidMount() {
	// 	this.axios.get('/info.json').then((res) => {
	// 		console.log(res);
	// 	});
	// }
	render() {
		return (
			<div id="wrapper" className="rtl">
				<div id="container">
					<Header render={this.componentHandler} />
					{this.state.currenComponent}
				</div>
			</div>
		);
	}
}

export default App;
