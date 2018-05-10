import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Shared/Header'
import Footer from './Shared/Footer'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="page-main">
					<Header />
					<div className="my-3 my-md-5">
						<div className="container">
							<div className="page-header">
								<h1 className="page-title">
									Dashboard
								</h1>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;