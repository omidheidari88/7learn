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
			currenComponent: <Tasks tasks={[]} />,
		};
	}
	componentHandler = (type) => {
		const components = {
			add: <Add />,
			list: <Tasks tasks={[]} />,
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
