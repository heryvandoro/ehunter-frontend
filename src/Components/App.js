import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="page-main">
					<Routing/>
				</div>
			</Router>
		);
	}
}

export default App;