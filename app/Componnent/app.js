import React from 'react';
import Utton from './Button';
const App = () => {
	const saveHanndler = (x) => {
		return alert(x);
	};
	return (
		<div>
			<h1>App</h1>
			<Utton title="Save" saveData={saveHanndler} />
		</div>
	);
};
export default App;
