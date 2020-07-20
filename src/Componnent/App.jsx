import React, {Component} from 'react';
import Header from './header/Header';
import Tasks from './task/Tasks';
import Courses from './course/Courses';
import Add from './add/Add';
export class App extends Component {
	constructor() {
		super();
		// bind in ES2015
		// this.componentHandler = this.componentHandler.bind(this);
		this.state = {
			items: [],
			currenComponent: <Tasks tasks={[]} />,
		};
	}
	addItem = (item) => {
		this.setState((prev) => {
			return {
				...prev,
				items: [...prev.items, item],
			};
		});
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
