import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import Routing from './Routing';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="page-main">
					<Header />
					<div className="my-3 my-md-5">
						<Routing/>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;