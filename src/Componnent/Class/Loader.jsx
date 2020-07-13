import React, {Component} from 'react';
import loader from '../../images/loading.gif';
export class Loader extends Component {
	render() {
		return (
			<div>
				<img src={loader} alt="loader" />
				<h5>please wait...</h5>
			</div>
		);
	}
}

export default Loader;
