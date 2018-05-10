import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import DetailVacancy from './Vacancy/Detail';

const Content = route => (
	<Route
		exact={true}
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

class Routing extends Component{
    routes = [
        { path: "/", component: Home },
        { path: "/vacancy/:id", component: DetailVacancy },
        { path: "/login", component: Login },
    ]
    render(){
        return(
            this.routes.map((route, i) => 
                <Content key={i} {...route} />
            )
        )
    }
} 

export default Routing;